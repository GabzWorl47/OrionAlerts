import type { Metadata } from "next";
import { AdminPanel } from "@/components/admin/AdminPanel";
import { isAdminAuthConfigured, isAdminAuthenticated } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPage() {
  const authConfigured = isAdminAuthConfigured();
  const authenticated = authConfigured ? await isAdminAuthenticated() : false;

  return (
    <div className="min-h-screen bg-bg px-4 py-10 md:px-6 md:py-14">
      <div className="mx-auto w-full max-w-5xl">
        <AdminPanel
          authConfigured={authConfigured}
          initiallyAuthenticated={authenticated}
        />
      </div>
    </div>
  );
}
