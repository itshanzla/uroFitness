"use client";

import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Sidebar from "../../components/common/Sidebar";
import ProtectedRoute from "../../components/auth/ProtectedRoute";
import { SidebarProvider } from "@/contexts/SidebarContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <SidebarProvider>
        <div className="flex min-h-screen bg-background-page">
          <Sidebar />
          <div className="flex-1 flex flex-col min-h-screen relative transition-[margin] duration-300 ease-in-out">
            <Header />
            <main className="flex-1 p-6 md:p-10 overflow-y-auto">
              <div className="max-w-7xl mx-auto w-full">{children}</div>
            </main>
            <Footer />
          </div>
        </div>
      </SidebarProvider>
    </ProtectedRoute>
  );
}
