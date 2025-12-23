"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-header border-t border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-text-secondary">uroFitness</span>.
          All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs text-text-muted hover:text-text-link transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-xs text-text-muted hover:text-text-link transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-xs text-text-muted hover:text-text-link transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
