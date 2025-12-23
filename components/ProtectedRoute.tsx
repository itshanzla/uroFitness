"use client";

import React from "react";
import { Navigate } from "react-router-dom";
import { authUtils } from "@/lib/auth";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  if (typeof window === "undefined") return null;
  const isAuth = authUtils.isAuthenticated();
  if (!isAuth) {
    return <Navigate to="/auth/signin" replace />;
  }
  return <>{children}</>;
}
