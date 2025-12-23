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
    <header className="w-full bg-surface-header border-b border-border px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-button-primary rounded-lg flex items-center justify-center text-white">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <span className="font-bold text-xl tracking-tight text-text-primary">
          uroFitness
        </span>
      </div>

      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/notifications"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Notifications
          </Link>
        </nav>

        <div className="h-6 w-px bg-border mx-2 hidden md:block"></div>

        <button
          onClick={handleSignOut}
          className="btn-secondary py-1.5 px-4 text-sm"
        >
          Sign out
        </button>
      </div>
    </header>
  );
}
