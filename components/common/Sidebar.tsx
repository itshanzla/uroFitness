"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
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
      name: "Notifications",
      path: "/notifications",
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
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
    },
  ];

  return (
    <aside className="w-64 bg-surface-sidebar border-r border-border h-[calc(100vh-73px)] sticky top-[73px] hidden md:block">
      <div className="p-4">
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-background-selected text-text-link"
                    : "text-text-secondary hover:bg-background-hover hover:text-text-primary"
                }`}
              >
                <span
                  className={`${
                    isActive ? "text-icon-active" : "text-icon-muted"
                  }`}
                >
                  {item.icon}
                </span>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="absolute bottom-0 w-full p-4 border-t border-border">
        <div className="bg-background-alt rounded-xl p-4">
          <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
            Upgrade to Pro
          </p>
          <p className="text-xs text-text-muted mb-3">
            Get access to all features and analytics.
          </p>
          <button className="w-full btn-primary py-2 text-xs">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
}
