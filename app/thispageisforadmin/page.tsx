import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { AdminLoginForm } from "@/components/admin/admin-login-form";
import { ADMIN_SESSION_COOKIE, isValidAdminSessionToken } from "@/lib/admin-auth";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Admin Panel",
  description: "Private London Climate Systems administration.",
  path: "/thispageisforadmin",
  noIndex: true,
});

export default async function AdminPage({
  searchParams,
}: {
  searchParams?: Promise<{ loggedOut?: string }>;
}) {
  const cookieStore = await cookies();
  const isLoggedIn = isValidAdminSessionToken(cookieStore.get(ADMIN_SESSION_COOKIE)?.value);
  const params = await searchParams;

  if (isLoggedIn && params?.loggedOut) {
    redirect("/thispageisforadmin");
  }

  if (isLoggedIn) return <AdminDashboard />;

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070b12] px-6 py-12 text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_34%)]" />
      <div className="relative w-full"><AdminLoginForm /></div>
    </main>
  );
}
