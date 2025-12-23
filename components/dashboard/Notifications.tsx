"use client";

import React from "react";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "New User Registered",
      description: "A new user from New York has just joined the platform.",
      time: "5 minutes ago",
      type: "success",
      icon: (
        <div className="w-10 h-10 rounded-full bg-feedback-success flex items-center justify-center text-green-600">
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
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
        </div>
      ),
    },
    {
      id: 2,
      title: "System Maintenance",
      description:
        "We'll be performing scheduled maintenance tonight at 2 AM UTC.",
      time: "2 hours ago",
      type: "warning",
      icon: (
        <div className="w-10 h-10 rounded-full bg-feedback-warning flex items-center justify-center text-yellow-600">
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
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.268 17c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
      ),
    },
    {
      id: 3,
      title: "Password Changed",
      description: "Your account password was successfully updated.",
      time: "1 day ago",
      type: "info",
      icon: (
        <div className="w-10 h-10 rounded-full bg-background-alt flex items-center justify-center text-icon-default">
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
              d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
            />
          </svg>
        </div>
      ),
    },
    {
      id: 4,
      title: "Payment Error",
      description:
        "We couldn't process your last payment. Please update your billing info.",
      time: "2 days ago",
      type: "error",
      icon: (
        <div className="w-10 h-10 rounded-full bg-feedback-error flex items-center justify-center text-red-600">
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
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-text-primary">Notifications</h1>
        <p className="text-text-secondary mt-1">
          Stay updated with the latest activity on your account.
        </p>
      </div>

      <div className="card divide-y divide-border">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex gap-4 py-6 first:pt-0 last:pb-0"
          >
            {notification.icon}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-semibold text-text-primary">
                  {notification.title}
                </h3>
                <span className="text-xs text-text-muted">
                  {notification.time}
                </span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {notification.description}
              </p>
              <div className="mt-3 flex items-center gap-3">
                <button className="text-xs font-semibold text-text-link hover:underline">
                  Mark as read
                </button>
                <div className="w-1 h-1 rounded-full bg-border"></div>
                <button className="text-xs font-semibold text-feedback-error hover:underline">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="card text-center py-12">
          <div className="w-16 h-16 rounded-full bg-background-alt flex items-center justify-center mx-auto mb-4 text-icon-muted">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-text-primary">
            No new notifications
          </h3>
          <p className="text-text-secondary mt-1">
            We'll let you know when something important happens.
          </p>
        </div>
      )}
    </div>
  );
}
