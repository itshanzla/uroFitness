"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/contexts/SidebarContext";
import { FiLogOut } from "react-icons/fi";
import { PiBlueprint } from "react-icons/pi";
import { CiApple } from "react-icons/ci";
import { IoMdTrendingUp } from "react-icons/io";
import { TbCalendarPlus, TbHazeMoon } from "react-icons/tb";

import { authUtils } from "@/lib/auth";

export default function Sidebar() {
  const pathname = usePathname();
  const { isOpen, closeSidebar, isMobile } = useSidebar();
  const [email, setEmail] = React.useState<string | null>(null);

  React.useEffect(() => {
    const session = authUtils.getSession();
    if (session?.user?.email) {
      setEmail(session.user.email);
    }
  }, []);

  // Close sidebar on mobile when route changes
  React.useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      closeSidebar();
    }
  }, [pathname]);

  // Lock body scroll ONLY when sidebar is open on mobile
  React.useEffect(() => {
    const checkScrollLock = () => {
      if (isOpen && window.innerWidth < 768) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    };

    checkScrollLock();
    window.addEventListener("resize", checkScrollLock);
    return () => {
      window.removeEventListener("resize", checkScrollLock);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isMobile]);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: (
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: "Optimal Flow Blueprint™",
      path: "/dashboard/optimal-flow-blueprint",
      icon: <PiBlueprint className="w-5 h-5" />,
    },
    // {
    //   name: "PWNS™ — Nutrition",
    //   path: "/dashboard/pwns-nutrition-insight",
    //   icon: <CiApple className="w-5 h-5" />,
    // },
    // {
    //   name: "Peak Timing Protocol™",
    //   path: "/dashboard/peak-timing-protocol",
    //   icon: <IoMdTrendingUp className="w-5 h-5" />,
    // },
    // {
    //   name: "Daily Circulation™",
    //   path: "/dashboard/daily-circulation-activator",
    //   icon: <TbCalendarPlus className="w-5 h-5" />,
    // },
    // {
    //   name: "Nightly Insights™",
    //   path: "/dashboard/nightly-performance-insights",
    //   icon: <TbHazeMoon className="w-5 h-5" />,
    // },
  ];

  return (
    <>
      {/* Mobile Overlay - Visible only when sidebar is open and screen is small (md:hidden) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-[55] transition-opacity duration-300 md:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          bg-surface-sidebar flex flex-col z-[60]
          transition-[width,transform,opacity] duration-300 ease-in-out
          
          /* Mobile: Fixed, Off-canvas, Shadow */
          fixed inset-y-0 left-0 w-[75%] shadow-2xl
          ${isOpen ? "translate-x-0" : "-translate-x-full"}

          /* Desktop (md+): Sticky, Flow-layout, No Shadow */
          md:sticky md:top-0 md:h-screen md:shadow-none md:translate-x-0 md:z-20
          ${
            isOpen
              ? "md:w-64 md:opacity-100 md:border-r md:border-border"
              : "md:w-0 md:opacity-0 md:overflow-hidden md:border-none"
          }
        `}
      >
        <Link
          href="/dashboard"
          className="p-6 pb-5 flex items-center gap-3 h-[73px] min-w-[256px] transition-colors hover:no-underline"
        >
          <div className="w-10 h-10 bg-border text-button-primary flex items-center rounded-full p-2 justify-center text-white overflow-hidden shrink-0">
            <img
              src="/icons/logo.svg"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-tight text-text-primary whitespace-nowrap">
              UroFitness
            </span>
            <span className="text-xs text-text-secondary whitespace-nowrap">
              Health Dashboard
            </span>
          </div>
        </Link>

        <div className="p-4 pb-8 flex-1 overflow-y-auto min-w-[256px] mt-5 hover:no-underline">
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              const isDashboard = item.name === "Dashboard";
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap  hover:no-underline ${
                    isActive
                      ? "bg-[var(--sidebar-link-bg)] text-text-link"
                      : "text-text-secondary hover:bg-[var(--sidebar-link-bg)] hover:text-text-primary"
                  } ${isDashboard ? "mb-0" : ""}`}
                >
                  <span className="shrink-0">{item.icon}</span>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="w-full p-4 border-t border-border min-w-[256px]">
          {email && (
            <div className="w-full px-3 mb-2 overflow-hidden">
              <p
                className="text-sm font-semibold text-text-secondary truncate"
                title={email}
              >
                {email}
              </p>
            </div>
          )}
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                localStorage.removeItem("auth");
                window.location.href = "/auth/signin";
              }
            }}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-bold text-text-secondary hover:bg-text-disabled/10 transition-all whitespace-nowrap"
          >
            <span>
              <FiLogOut className="w-5 h-5" />
            </span>
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}