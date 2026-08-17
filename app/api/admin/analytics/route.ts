import { NextRequest, NextResponse } from "next/server";
import { isAuthorizedAdminRequest } from "@/lib/admin-api";
import connectDB from "@/lib/db/mongodb";
import PageView from "@/lib/models/PageView";

export const dynamic = "force-dynamic";

function startOfUtcDay(date: Date) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

export async function GET(request: NextRequest) {
  if (!isAuthorizedAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const now = new Date();
    const today = startOfUtcDay(now);
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setUTCDate(thirtyDaysAgo.getUTCDate() - 29);
    const previousStart = new Date(thirtyDaysAgo);
    previousStart.setUTCDate(previousStart.getUTCDate() - 30);

    const [views30d, previousViews, viewsToday, visitors30d, visitorsToday, allTimeViews, dailyRaw, topPages] = await Promise.all([
      PageView.countDocuments({ createdAt: { $gte: thirtyDaysAgo } }),
      PageView.countDocuments({ createdAt: { $gte: previousStart, $lt: thirtyDaysAgo } }),
      PageView.countDocuments({ createdAt: { $gte: today } }),
      PageView.distinct("visitorId", { createdAt: { $gte: thirtyDaysAgo } }),
      PageView.distinct("visitorId", { createdAt: { $gte: today } }),
      PageView.countDocuments({}),
      PageView.aggregate([
        { $match: { createdAt: { $gte: thirtyDaysAgo } } },
        { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }, views: { $sum: 1 } } },
        { $sort: { _id: 1 } },
      ]),
      PageView.aggregate([
        { $match: { createdAt: { $gte: thirtyDaysAgo } } },
        { $group: { _id: "$path", views: { $sum: 1 }, visitors: { $addToSet: "$visitorId" } } },
        { $project: { path: "$_id", views: 1, visitors: { $size: "$visitors" }, _id: 0 } },
        { $sort: { views: -1 } },
        { $limit: 10 },
      ]),
    ]);

    const dailyMap = new Map(dailyRaw.map((entry) => [entry._id, entry.views]));
    const daily = Array.from({ length: 30 }, (_, index) => {
      const date = new Date(thirtyDaysAgo);
      date.setUTCDate(date.getUTCDate() + index);
      const key = date.toISOString().slice(0, 10);
      return { date: key, views: dailyMap.get(key) ?? 0 };
    });

    const change = previousViews === 0
      ? views30d > 0 ? 100 : 0
      : Math.round(((views30d - previousViews) / previousViews) * 100);

    return NextResponse.json({
      data: {
        views30d,
        viewsToday,
        visitors30d: visitors30d.length,
        visitorsToday: visitorsToday.length,
        allTimeViews,
        change,
        daily,
        topPages,
      },
    }, { headers: { "Cache-Control": "private, no-store" } });
  } catch (error) {
    console.error("Admin analytics failed:", error);
    return NextResponse.json({ error: "Could not load traffic analytics." }, { status: 500 });
  }
}
