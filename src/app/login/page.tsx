"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
      setLoading(false);
    } else {
      router.push("/");
      router.refresh();
    }
  }

  return (
    <div className="pt-24 pb-16 px-4 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-black uppercase tracking-tight text-white mb-8 text-center">
          Sign In
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <p className="text-[#e63946] text-sm text-center bg-[#e63946]/10 py-2 rounded">
              {error}
            </p>
          )}

          <div>
            <label className="text-gray-400 text-xs uppercase tracking-widest block mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2.5 text-white focus:border-[#e63946] focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-400 text-xs uppercase tracking-widest block mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2.5 text-white focus:border-[#e63946] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#e63946] hover:bg-[#c5303c] text-white font-bold py-2.5 rounded transition-colors disabled:opacity-50 mt-2"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-gray-500 text-xs text-center mt-6">
          Creating an account is optional and lets you track purchases.
        </p>
      </div>
    </div>
  );
}
