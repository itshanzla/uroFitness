"use client";

import React from "react";

export default function DashboardCard({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="font-semibold">{title}</h3>
      <div className="mt-2">{children}</div>
    </div>
  );
}
