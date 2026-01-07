"use client";

import { useSession, signOut } from "next-auth/react";

export default function AdminDashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {session && (
        <div className="p-4 bg-slate-800 rounded">
          <p className="mb-2">Logged in as:</p>
          <p className="font-semibold">{session.user?.email}</p>
        </div>
      )}

      <button
        onClick={() => signOut({ callbackUrl: "/admin/login" })}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold"
      >
        Logout
      </button>
    </div>
  );
}
