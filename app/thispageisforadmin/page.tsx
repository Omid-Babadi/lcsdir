import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/admin-login-form";
import { AvailabilityPanel } from "@/components/admin/availability-panel";
import { ADMIN_SESSION_COOKIE, isValidAdminSessionToken } from "@/lib/admin-auth";

export const metadata = {
  title: "Admin Panel | London Climate Systems",
};

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

  return (
    <main className="min-h-screen bg-background px-6 py-12 text-foreground">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-[1400px] items-center justify-center">
        {isLoggedIn ? <AvailabilityPanel /> : <AdminLoginForm />}
      </div>
    </main>
  );
}
