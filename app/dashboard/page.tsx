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
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6">
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
          </main>
        </div>
        <Footer />
      </div>
    </Router.BrowserRouter>
  );
}
