"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleCredentialsLogin(e: any) {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/admin",
    });
  }

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-slate-900 rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-6 text-center">Admin Login</h1>

      {/* Email / Password Login */}
      <form onSubmit={handleCredentialsLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-slate-800 border border-slate-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded bg-slate-800 border border-slate-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-semibold"
        >
          Login
        </button>
      </form>

      <div className="my-6 text-center text-slate-400">or</div>

      {/* Google Login */}
      <button
        onClick={() => signIn("google", { callbackUrl: "/admin" })}
        className="w-full bg-red-600 hover:bg-red-700 p-2 rounded font-semibold"
      >
        Login with Google
      </button>
    </div>
  );
}
