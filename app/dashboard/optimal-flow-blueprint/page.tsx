"use client";

import React from "react";

export default function OptimalFlowBlueprintPage() {
  const sections = [
    {
      id: 1,
      title: "Foundation",
      description: [
        "Flow begins with a stable foundation. Without a strong base, consistency becomes difficult to sustain over time.",
        "The foundation includes the conditions that support reliable performance and mental clarity. When these elements are unstable or neglected, progress often feels fragmented or forced.",
      ],
      subpointsTitle: "Key considerations include",
      subpoints: [
        "Physical readiness",
        "Mental clarity",
        "Environmental stability",
      ],
    },
    {
      id: 2,
      title: "Direction",
      description: [
        "Clear direction reduces friction.",
        "When priorities are defined and intent is established, energy can be focused rather than dispersed. Direction provides a sense of orientation, helping decisions align with long-term objectives rather than short-term impulses.",
      ],
      subpointsTitle: "This clarity supports",
      subpoints: [
        "Intentional focus",
        "Defined priorities",
        "Reduced cognitive noise",
      ],
    },
    {
      id: 3,
      title: "Alignment",
      description: [
        "Alignment occurs when actions, values, and objectives reinforce one another.",
        "When internal alignment is present, effort feels more natural and sustainable. When it is absent, resistance increases and flow becomes difficult to maintain.",
      ],
      subpointsTitle: "This stage emphasizes",
      subpoints: [
        "Internal coherence",
        "Behavioral consistency",
        "Strategic simplicity",
      ],
    },
    {
      id: 4,
      title: "Execution Rhythm",
      description: [
        "Flow is sustained through rhythm, not intensity.",
        "Rather than relying on bursts of effort, consistent progress is built through repeatable patterns and sustainable pacing. Rhythm allows momentum to build while protecting long-term capacity.",
      ],
      subpointsTitle: "This includes awareness of",
      subpoints: [
        "Sustainable pacing",
        "Repeatable processes",
        "Recovery awareness",
      ],
    },
    {
      id: 5,
      title: "Feedback & Refinement",
      description: [
        "No system remains static.",
        "Feedback provides the information needed to refine and adjust over time. The purpose of feedback is not judgment, but calibration — ensuring the system evolves as conditions change.",
      ],
      subpointsTitle: "Central to this stage are",
      subpoints: [
        "Reflection",
        "Iterative improvement",
        "Long-term adaptability",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12 pt-4 px-2 md:px-4 space-y-16">
      {/* Page Header Section */}
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
          Optimal Flow Blueprint™
        </h1>
        <p className="text-xl text-text-secondary leading-relaxed max-w-2xl font-normal">
          A structured framework for achieving sustainable, high-performance
          flow.
        </p>
      </header>

      {/* Introduction Block */}
      <section className="space-y-6 max-w-3xl">
        <h2 className="text-xl font-bold text-text-primary">Introduction</h2>
        <div className="space-y-4">
          <p className="text-lg text-text-primary leading-relaxed font-normal">
            The Optimal Flow Blueprint™ is a foundational framework designed to
            help individuals understand and align the core elements that enable
            consistent, sustainable flow.
          </p>
          <p className="text-lg text-text-primary leading-relaxed font-normal">
            Rather than focusing on outcomes, metrics, or short-term
            performance, this blueprint emphasizes clarity, structure, and
            internal alignment as the basis for long-term effectiveness.
          </p>
          <p className="text-lg text-text-primary leading-relaxed font-normal">
            It is intended to be used as a reference framework — something to
            return to when refining systems, habits, and decision-making.
          </p>
        </div>
      </section>

      {/* Blueprint Sections - Reading Blocks */}
      <div className="space-y-8">
        {sections.map((item) => (
          <section
            key={item.id}
            className="bg-[#F2F4F7] dark:bg-surface-card border border-border/10 dark:border-white/5 rounded-[2rem] p-8 pl-2 md:p-10 space-y-8 shadow-sm"
          >
            <div className="space-y-4 text-left">
              <h2 className="text-2xl text-text-primary font-normal">
                {item.id}. {item.title}
              </h2>
              <div className="space-y-4 text-lg text-text-primary leading-relaxed max-w-3xl font-normal">
                {item.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-border/5 dark:border-white/[0.03] text-left">
              <p className="text-sm font-normal text-text-secondary">
                {item.subpointsTitle}:
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                {item.subpoints.map((point, index) => (
                  <span
                    key={index}
                    className="text-xs uppercase tracking-[0.2em] text-text-muted font-normal"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Closing Context Section */}
      <section className="pt-8 space-y-4">
        <p className="text-lg text-text-primary leading-relaxed font-normal max-w-3xl">
          The Optimal Flow Blueprint™ serves as a reference framework rather
          than a rigid system. Its value lies in understanding how the
          components interact and evolve over time.
        </p>
      </section>
    </div>
  );
}
