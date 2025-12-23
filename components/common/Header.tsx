"use client";

import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const handleSignOut = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth");
      window.location.href = "/auth/signin";
    }
  };

  return (
    <header className="w-full bg-gray-100 p-4 flex items-center justify-between">
      <div className="font-bold">uroFitness</div>
      <div className="flex items-center gap-4">
        <nav className="hidden md:flex gap-4">
          <Link to="/">Dashboard</Link>
          <Link to="/notifications">Notifications</Link>
        </nav>
        <button onClick={handleSignOut} className="px-3 py-1 bg-red-500 text-white rounded">
          Sign out
        </button>
      </div>
    </header>
  );
}
