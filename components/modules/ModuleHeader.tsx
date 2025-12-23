"use client";

import React from "react";

export default function ModuleHeader({ title }: { title: string }) {
  return (
    <div className="p-4 border-b bg-gray-50">
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
}
