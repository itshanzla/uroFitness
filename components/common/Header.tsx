"use client";

import React from "react";
import Link from "next/link";
import { FiSidebar } from "react-icons/fi";
import { useSidebar } from "@/contexts/SidebarContext";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { toggleSidebar } = useSidebar();

  const handleSignOut = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth");
      window.location.href = "/auth/signin";
    }
  };

  return (
    <header className="w-full bg-surface-header border-b border-border md:px-6 px-2 pt-4 pb-2 flex items-center justify-between sticky top-0 z-50 transition-all duration-300">
      <div id="close" className="flex items-center gap-2">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg text-text-secondary hover:text-button-primary hover:bg-background-hover/50 transition-colors focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          <FiSidebar className="w-5 h-5" />
        </button>
      </div>

      <ThemeToggle />
    </header>
  );
}
