"use client";

import Link from "next/link";

export default function Week1Page() {
  return (
    <div className="pb-12 relative z-10 w-full px-4 md:px-6">
      <div className="w-full max-w-2xl mx-auto">
        {/* Back Link */}
        <Link
          href="/dashboard/optimal-flow-blueprint"
          className="text-sm text-text-secondary hover:text-text-primary inline-block mb-10"
        >
          Back
        </Link>

        {/* Week Title */}
        <h1 className="text-2xl font-semibold text-text-primary mb-12">
          Week 1: What's Actually Happening
        </h1>

        {/* Structured Weekly Content */}
        <div className="space-y-10">
          {/* CONCEPT SECTION */}
          <section className="bg-surface-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Concept
              </span>
            </div>
            <p className="text-text-primary leading-relaxed">
              An erection is a vascular event — not a willpower test. It requires
              coordinated blood flow, nerve signaling, and hormonal balance.
              Episodic difficulty does not indicate permanent damage. Anxiety and
              vigilance tend to worsen the underlying physiology. Understanding
              this can reduce the emotional weight.
            </p>
          </section>

          {/* PRIMARY ACTION SECTION */}
          <section className="bg-surface-card border-2 border-text-primary/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                Primary Action
              </span>
              <span className="text-xs text-text-secondary px-2 py-0.5 bg-surface-elevated rounded-full">
                Only required action this week
              </span>
            </div>
            <p className="text-text-primary text-lg leading-relaxed">
              Take a 10-minute walk each day, at any pace, at any time.
            </p>
          </section>

          {/* REINFORCEMENT SECTION */}
          <section className="bg-surface-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Reinforcement
              </span>
              <span className="text-xs text-text-secondary/60 italic">
                Continuation, not a second task
              </span>
            </div>
            <p className="text-text-secondary leading-relaxed">
              If it feels natural, go to bed 15 minutes earlier. This supports
              the primary action — it is not an additional task.
            </p>
          </section>

          {/* OPTIONAL AMPLIFIER SECTION */}
          <section className="border border-dashed border-border/60 rounded-xl p-6 opacity-70">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold text-text-secondary/60 uppercase tracking-wider">
                Optional Amplifier
              </span>
              <span className="text-xs text-text-secondary/50 px-2 py-0.5 border border-border/50 rounded-full">
                Skip if it feels like too much
              </span>
            </div>
            <p className="text-sm text-text-secondary/60 leading-relaxed">
              Morning sunlight (2–5 minutes) can support circadian rhythm.
            </p>
          </section>

          {/* EXPLICIT CLOSE */}
          <section className="text-center py-6">
            <p className="text-text-primary font-medium text-lg">
              That's it this week.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
