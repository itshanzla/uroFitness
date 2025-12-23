"use client";

import React from "react";

export default function ModuleLayout({ children }: { children: React.ReactNode }) {
  return <div className="p-6">{children}</div>;
}
