import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { canMutateAdminData, isAuthorizedAdminRequest } from "@/lib/admin-api";
import { blogInputSchema, slugifyBlogTitle } from "@/lib/blog-validation";
import connectDB from "@/lib/db/mongodb";
import Blog from "@/lib/models/Blog";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  if (!isAuthorizedAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const blogs = await Blog.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ data: blogs }, {
      headers: { "Cache-Control": "private, no-store" },
    });
  } catch (error) {
    console.error("Admin blog list failed:", error);
    return NextResponse.json({ error: "Could not load articles." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!canMutateAdminData(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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
    const baseSlug = slugifyBlogTitle(parsed.data.slug || parsed.data.title) || "article";
    let slug = baseSlug;
    let suffix = 2;

    while (await Blog.exists({ slug })) {
      slug = `${baseSlug}-${suffix}`;
      suffix += 1;
    }

    const blog = await Blog.create({
      ...parsed.data,
      slug,
      excerpt: parsed.data.excerpt || parsed.data.description.replace(/\s+/g, " ").slice(0, 220),
      coverImageAlt: parsed.data.coverImageAlt || parsed.data.title,
    });

    revalidatePath("/blog");
    revalidatePath(`/blog/${slug}`);
    return NextResponse.json({ data: blog }, { status: 201 });
  } catch (error) {
    console.error("Admin blog creation failed:", error);
    return NextResponse.json({ error: "Could not create the article." }, { status: 500 });
  }
}
