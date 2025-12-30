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
        <div className="flex h-screen overflow-hidden bg-background-page">
          <Sidebar />
          <div className="flex-1 flex flex-col h-screen overflow-hidden relative transition-[margin] duration-300 ease-in-out z-10">
            <Header />
           <div
  className="flex-1 flex flex-col relative z-10"
  style={{ 
    overflowY: 'scroll',
    scrollbarGutter: 'stable',
    width: '100%'
  }}
>

              <main className="flex-1 p-6 pl-6 md:p-10 relative z-10">
                <div className="max-w-7xl mx-auto w-full">{children}</div>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </SidebarProvider>
    </ProtectedRoute>
  );
}
