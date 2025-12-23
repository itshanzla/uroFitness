"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.setItem("auth", "true");
    }
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background-page">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-button-primary text-white mb-4 shadow-lg">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0112 3v8h8a10.003 10.003 0 01-4 8.24c-1.201.796-2.58 1.343-4.113 1.571"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-text-primary">Welcome Back</h1>
          <p className="text-text-secondary mt-2">
            Please enter your details to sign in
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1.5">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="name@company.com"
              required
              className="input-field"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-medium text-text-secondary">
                Password
              </label>
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              required
              className="input-field"
            />
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-border text-text-link focus:ring-text-link"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-text-secondary"
            >
              Remember me for 30 days
            </label>
          </div>

          <button type="submit" className="w-full btn-primary py-3">
            Sign In
          </button>

          <p className="text-center text-sm text-text-muted mt-4">
            Don't have an account?{" "}
            <Link
              href="/auth/signin"
              className="font-semibold text-text-link hover:underline"
            >
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
