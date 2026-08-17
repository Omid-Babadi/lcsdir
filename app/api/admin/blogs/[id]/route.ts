import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { canMutateAdminData } from "@/lib/admin-api";
import { blogInputSchema, slugifyBlogTitle } from "@/lib/blog-validation";
import connectDB from "@/lib/db/mongodb";
import Blog from "@/lib/models/Blog";

type Context = { params: Promise<{ id: string }> };

export async function PUT(request: NextRequest, { params }: Context) {
  if (!canMutateAdminData(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  if (!mongoose.isValidObjectId(id)) {
    return NextResponse.json({ error: "Invalid article." }, { status: 400 });
  }

  const parsed = blogInputSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid article data." },
      { status: 400 },
    );
  }

  try {
    await connectDB();
    const slug = slugifyBlogTitle(parsed.data.slug || parsed.data.title) || "article";
    const duplicate = await Blog.exists({ slug, _id: { $ne: id } });
    if (duplicate) {
      return NextResponse.json({ error: "That URL slug is already in use." }, { status: 409 });
    }

    const previous = await Blog.findById(id).select("slug").lean();
    const previousSlug = String((previous as { slug?: string } | null)?.slug ?? "");
    const blog = await Blog.findByIdAndUpdate(
      id,
      {
        ...parsed.data,
        slug,
        excerpt: parsed.data.excerpt || parsed.data.description.replace(/\s+/g, " ").slice(0, 220),
        coverImageAlt: parsed.data.coverImageAlt || parsed.data.title,
      },
      { new: true, runValidators: true },
    );

    if (!blog) {
      return NextResponse.json({ error: "Article not found." }, { status: 404 });
    }

    revalidatePath("/blog");
    revalidatePath(`/blog/${slug}`);
    if (previousSlug && previousSlug !== slug) revalidatePath(`/blog/${previousSlug}`);
    return NextResponse.json({ data: blog });
  } catch (error) {
    console.error("Admin blog update failed:", error);
    return NextResponse.json({ error: "Could not update the article." }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: Context) {
  if (!canMutateAdminData(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  if (!mongoose.isValidObjectId(id)) {
    return NextResponse.json({ error: "Invalid article." }, { status: 400 });
  }

  try {
    await connectDB();
    const blog = await Blog.findByIdAndDelete(id).lean();
    if (!blog) {
      return NextResponse.json({ error: "Article not found." }, { status: 404 });
    }

    revalidatePath("/blog");
    const deletedSlug = String((blog as { slug?: string }).slug ?? "");
    if (deletedSlug) revalidatePath(`/blog/${deletedSlug}`);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Admin blog deletion failed:", error);
    return NextResponse.json({ error: "Could not delete the article." }, { status: 500 });
  }
}
