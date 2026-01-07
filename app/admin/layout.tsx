import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl py-10">
        <h1 className="mb-8 text-2xl font-bold">Admin Panel</h1>
        {children}
      </div>
    </div>
  );
}
