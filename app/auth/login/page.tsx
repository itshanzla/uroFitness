"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mock auth
    if (typeof window !== "undefined") {
      localStorage.setItem("auth", "true");
    }
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded shadow">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <label className="block mb-2">Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="w-full mt-1 p-2 border rounded" />
        </label>
        <label className="block mb-4">Password
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="w-full mt-1 p-2 border rounded" />
        </label>
        <button className="w-full bg-green-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
}
