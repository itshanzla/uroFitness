"use client";

import React from "react";
import * as Router from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Sidebar from "../../components/common/Sidebar";
import ProtectedRoute from "../../components/auth/ProtectedRoute";
import DashboardHome from "../../components/dashboard/DashboardHome";
import Notifications from "../../components/dashboard/Notifications";

export default function DashboardPage() {
  return (
    <Router.BrowserRouter>
      <div className="min-h-screen flex flex-col bg-background-page">
        <Header />
        <div className="flex flex-col md:flex-row flex-1">
          <Sidebar />
          <main className="flex-1 p-6 md:p-10">
            <div className="max-w-7xl mx-auto">
              <Router.Routes>
                <Router.Route
                  index
                  element={
                    <ProtectedRoute>
                      <DashboardHome />
                    </ProtectedRoute>
                  }
                />
                <Router.Route
                  path="notifications"
                  element={
                    <ProtectedRoute>
                      <Notifications />
                    </ProtectedRoute>
                  }
                />
              </Router.Routes>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </Router.BrowserRouter>
  );
}
