"use client";

import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-56 bg-gray-50 p-4">
      <nav>
        <ul className="flex flex-col gap-2">
          <li>
            <Link to="/" className="block p-2 rounded hover:bg-gray-100">Dashboard</Link>
          </li>
          <li>
            <Link to="/notifications" className="block p-2 rounded hover:bg-gray-100">Notifications</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
