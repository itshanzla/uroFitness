"use client";

import { useState } from "react";
import Link from "next/link";

export default function Week1Page() {
  const [expandedSection, setExpandedSection] = useState<string | null>("concept");

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="pb-12 relative z-10 w-full px-2 md:px-6">
      {/* Page Width Container */}
      <div className="w-full md:max-w-[56rem] md:mx-0 md:ml-[15%]">
        {/* Header */}
        <div className="space-y-4 mb-8">
          <Link
            href="/dashboard/optimal-flow-blueprint"
            className="text-sm text-text-link hover:underline inline-flex items-center gap-2"
          >
            Back to All Weeks
          </Link>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-text-link uppercase tracking-wider">
              Week 1 • Phase 1: Foundation
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              What's Actually Happening
            </h1>

            <p className="text-lg text-text-secondary">
              Understanding &gt; panic
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {/* Concept */}
          <div className="bg-surface-card border border-border rounded-xl">
           <button
  onClick={() => toggleSection("concept")}
  className="w-full px-6 py-4 flex items-center text-left"
>
  <span className="flex-1 text-lg font-bold text-text-primary">
    Concept
  </span>
  <Chevron />
</button>


            {expandedSection === "concept" && (
              <div className="px-6 pb-6 space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Erection is a vascular event, not a willpower test. It requires
                  coordinated blood flow, nerve signaling, and hormonal balance.
                </p>
                <p>
                  Episodic failure does not equal permanent damage. Anxiety,
                  stress, and vigilance worsen the underlying physiology.
                </p>
                <p>
                  Understanding the mechanics reduces the emotional weight.
                  This week is about shifting from panic to clarity.
                </p>
              </div>
            )}
          </div>

          {/* Primary Action */}
          <div className="bg-surface-card border border-border rounded-xl">
            <button
              onClick={() => toggleSection("action")}
              className="w-full px-6 py-4 flex items-center justify-between text-left"
            >
              <span className="text-lg font-bold text-text-primary">
                Primary Action
              </span>
              <Chevron />
            </button>

            {expandedSection === "action" && (
              <div className="px-6 pb-6 space-y-4 text-text-secondary leading-relaxed">
                <p className="font-semibold text-text-primary">
                  10-minute daily walk, any pace, any time.
                </p>
                <p>
                  This is not about fitness. It's about creating a repeatable,
                  low-pressure behavior that supports circulation.
                </p>
                <p>
                  Walk at a comfortable pace. No tracking required.
                  The goal is consistency, not intensity.
                </p>
              </div>
            )}
          </div>

          {/* Reinforcement */}
          <div className="bg-surface-card border border-border rounded-xl">
            <button
              onClick={() => toggleSection("reinforcement")}
              className="w-full px-6 py-4 flex items-center justify-between text-left"
            >
              <span className="text-lg font-bold text-text-primary">
                Reinforcement
              </span>
              <Chevron />
            </button>

            {expandedSection === "reinforcement" && (
              <div className="px-6 pb-6 space-y-4 text-text-secondary leading-relaxed">
                <p>Go to bed 15 minutes earlier than usual.</p>
                <p>
                  This stacks with the walking habit without adding complexity.
                </p>
              </div>
            )}
          </div>

          {/* Optional Amplifier */}
          <div className="bg-surface-card border border-border rounded-xl opacity-90">
            <button
              onClick={() => toggleSection("optional")}
              className="w-full px-6 py-4 flex items-center justify-between text-left"
            >
              <span className="text-lg font-bold text-text-primary">
                Optional Amplifier
              </span>
              <Chevron />
            </button>

            {expandedSection === "optional" && (
              <div className="px-6 pb-6 space-y-4 text-text-secondary leading-relaxed">
                <p className="font-semibold text-text-primary">
                  Morning sunlight exposure (2–5 minutes).
                </p>
                <p>
                  Helps regulate circadian rhythm and hormonal balance.
                </p>
                <p className="text-sm italic">
                  Optional. Skip if it feels like too much.
                </p>
              </div>
            )}
          </div>

          {/* Closing */}
          <div className="bg-surface-card border border-border rounded-xl px-6 py-6">
            <p className="font-semibold text-text-primary">
              That's it this week.
            </p>
            <p className="text-text-secondary mt-2">
              You haven't changed your life — you've started.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-border">
          <Link
            href="/dashboard/optimal-flow-blueprint"
            className="text-sm text-text-secondary hover:text-text-link"
          >
            All Weeks
          </Link>
          <Link
            href="/dashboard/optimal-flow-blueprint/week-2"
            className="text-sm text-text-link hover:underline"
          >
            Next: Week 2
          </Link>
        </div>
      </div>
    </div>
  );
}

/* Chevron Icon */
function Chevron() {
  return (
    <svg
      className="w-5 h-5 text-text-secondary flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}
