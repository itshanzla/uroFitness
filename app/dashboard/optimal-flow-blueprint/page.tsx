"use client";

import React from "react";
import Link from "next/link";

export default function OptimalFlowBlueprintPage() {
  const weeks = [
    // Phase 1: Foundation
    { week: 1, title: "What's Actually Happening", phase: "Foundation", phaseNumber: 1 },
    { week: 2, title: "Circulation Is a Daily Input", phase: "Foundation", phaseNumber: 1 },
    { week: 3, title: "Sleep Is a Vascular Multiplier", phase: "Foundation", phaseNumber: 1 },
    
    // Phase 2: Nutrition & Metabolic Signals
    { week: 4, title: "Blood Sugar & Flow", phase: "Nutrition & Metabolic Signals", phaseNumber: 2 },
    { week: 5, title: "Nitric Oxide Basics", phase: "Nutrition & Metabolic Signals", phaseNumber: 2 },
    { week: 6, title: "Alcohol, Timing, Tradeoffs", phase: "Nutrition & Metabolic Signals", phaseNumber: 2 },
    
    // Phase 3: Stress & Confidence
    { week: 7, title: "Stress Is Not Just \"Mental\"", phase: "Stress & Confidence", phaseNumber: 3 },
    { week: 8, title: "Rebuilding Trust", phase: "Stress & Confidence", phaseNumber: 3 },
    { week: 9, title: "Morning Signals", phase: "Stress & Confidence", phaseNumber: 3 },
    
    // Phase 4: Optimization & Autonomy
    { week: 10, title: "Exercise Intensity", phase: "Optimization & Autonomy", phaseNumber: 4 },
    { week: 11, title: "Supplements: When & Why", phase: "Optimization & Autonomy", phaseNumber: 4 },
    { week: 12, title: "Making This Permanent", phase: "Optimization & Autonomy", phaseNumber: 4 },
  ];

  const phases = [
    { number: 1, name: "Foundation", description: "Reduce anxiety. Establish control. Create early wins." },
    { number: 2, name: "Nutrition & Metabolic Signals", description: "Swap inputs, not overhaul diet." },
    { number: 3, name: "Stress & Confidence", description: "Remove invisible brakes." },
    { number: 4, name: "Optimization & Autonomy", description: "Fine-tune and stabilize." },
  ];

  return (
    <div className="space-y-12 pb-12 relative z-10 max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="text-left space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          Optimal Flow Blueprint™
        </h1>
        <p className="text-lg text-text-secondary max-w-3xl leading-relaxed">
          A 12-week educational program. Progressive by design. Biology-aligned. Low cognitive load.
        </p>
      </div>

      {/* Phases */}
      {phases.map((phase) => (
        <div key={phase.number} className="space-y-4">
          {/* Phase Header */}
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-text-primary">
              Phase {phase.number} — {phase.name}
            </h2>
            <p className="text-sm text-text-secondary">
              {phase.description}
            </p>
          </div>

          {/* Week Cards for this Phase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {weeks
              .filter((w) => w.phaseNumber === phase.number)
              .map((week) => (
                <Link
                  key={week.week}
                  href={`/dashboard/optimal-flow-blueprint/week-${week.week}`}
                  className="group flex flex-col bg-surface-card border border-border rounded-xl p-6 hover:border-text-link/50 transition-all duration-300 hover:shadow-lg hover:shadow-text-link/5 hover:no-underline"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-semibold text-text-link uppercase tracking-wider">
                      Week {week.week}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {week.title}
                  </h3>
                  <div className="mt-auto pt-4">
                    <span className="text-sm text-text-secondary group-hover:text-text-link transition-colors">
                      View
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
