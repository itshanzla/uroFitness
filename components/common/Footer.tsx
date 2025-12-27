"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-header border-t border-border px-6 py-4">
      <div className="max-w-9xl mx-auto">
        <div className="text-center md:text-center mx-auto">
          <p className="text-xs text-text-muted leading-relaxed max-w-full">
            <span className="font-semibold text-text-secondary">
              Disclaimer:
            </span>{" "}
            UroFitness™ is an educational wellness platform and does not provide
            medical advice, diagnosis, or treatment. Information is for general
            educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
