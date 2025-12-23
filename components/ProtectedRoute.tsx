"use client";

import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  if (typeof window === "undefined") return null;
  const isAuth = !!localStorage.getItem("auth");
  if (!isAuth) {
    // navigate to Next auth page
    return <Navigate to="/auth/signin" replace />;
  }
  return <>{children}</>;
}
