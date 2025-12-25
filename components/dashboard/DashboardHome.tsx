"use client";

import React from "react";

export default function DashboardHome() {
  const stats = [
    {
      name: "Total Users",
      value: "2,543",
      change: "+12.5%",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      name: "Active Sessions",
      value: "482",
      change: "+4.1%",
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
    },
    {
      name: "Total Revenue",
      value: "$45,210",
      change: "+18.2%",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "Conversion Rate",
      value: "3.24%",
      change: "-2.5%",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zm10-10V7a2 2 0 00-2-2h-2a2 2 0 00-2 2v8a2 2 0 002 2h2a2 2 0 002-2zm0 0v6a2 2 0 002 2h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-text-primary">
          Dashboard Overview
        </h1>
        <p className="text-text-secondary mt-1">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="card hover:border-border-strong transition-all cursor-default"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-background-alt text-icon-default flex items-center justify-center">
                {stat.icon}
              </div>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  stat.change.startsWith("+")
                    ? "bg-feedback-success text-green-700"
                    : "bg-feedback-error text-red-700"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <h3 className="text-sm font-medium text-text-muted">{stat.name}</h3>
            <p className="text-2xl font-bold text-text-primary mt-1">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Recent Activity</h2>
            <button className="text-sm font-semibold text-text-link hover:underline">
              View all
            </button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-3 border-b border-border last:border-0"
              >
                <div className="w-10 h-10 rounded-full bg-background-page flex items-center justify-center text-icon-muted font-bold text-xs">
                  JD
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-primary">
                    John Doe updated his profile
                  </p>
                  <p className="text-xs text-text-muted">2 hours ago</p>
                </div>
                <div className="px-3 py-1 bg-background-alt rounded text-xs text-text-secondary font-medium">
                  Update
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-bold mb-6">Notifications</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-text-link mt-2 shrink-0"></div>
              <div>
                <p className="text-sm font-medium text-text-primary">
                  New subscription
                </p>
                <p className="text-xs text-text-muted mt-1">
                  A new user has subscribed to the Pro plan.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-text-link mt-2 shrink-0"></div>
              <div>
                <p className="text-sm font-medium text-text-primary">
                  System Update
                </p>
                <p className="text-xs text-text-muted mt-1">
                  The system will undergo maintenance at 2 AM UTC.
                </p>
              </div>
            </div>
            <button className="w-full btn-secondary py-2 text-sm">
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
