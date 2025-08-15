"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-6">Sign in</h1>
      <button
        onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
        className="bg-black text-white px-6 py-3 rounded"
      >
        Sign in with GitHub
      </button>
    </div>
  );
}
