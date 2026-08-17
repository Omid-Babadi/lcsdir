import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import Blog from "@/lib/models/Blog";

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const requestedPage = Number.parseInt(request.nextUrl.searchParams.get("page") ?? "1", 10);
    const requestedLimit = Number.parseInt(request.nextUrl.searchParams.get("limit") ?? "10", 10);
    const page = Number.isFinite(requestedPage) ? Math.max(1, requestedPage) : 1;
    const limit = Number.isFinite(requestedLimit) ? Math.min(50, Math.max(1, requestedLimit)) : 10;
    const skip = (page - 1) * limit;

    const [blogs, total] = await Promise.all([
      Blog.find({ published: true }).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Blog.countDocuments({ published: true }),
    ]);

    return NextResponse.json({
      success: true,
      data: blogs,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalBlogs: total,
        limit,
      },
    }, {
      headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" },
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch blogs" }, { status: 500 });
  }
}
