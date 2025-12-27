"use client";

import React from "react";
import Link from "next/link";
import { PiBlueprint } from "react-icons/pi";
import { CiApple } from "react-icons/ci";
import { IoMdTrendingUp } from "react-icons/io";
import { TbCalendarPlus, TbHazeMoon } from "react-icons/tb";

export default function DashboardHome() {
  const modules = [
    {
      title: "Optimal Flow Blueprint™",
      description:
        "A structured educational framework exploring circulation, energy systems, and daily patterns that support consistency over time.",
      cta: "View Framework",
      path: "/dashboard/optimal-flow-blueprint",
      icon: <PiBlueprint className="w-8 h-8" />,
    },
    {
      title: "PWNS™ — Nutrition Insight Tool",
      description:
        "An educational tool designed to help men explore how everyday food choices may relate to circulation-friendly and metabolic patterns.",
      cta: "Open Tool",
      path: "/dashboard/pwns-nutrition-insight",
      icon: <CiApple className="w-8 h-8" />,
    },
    {
      title: "Peak Timing Protocol™",
      description:
        "An educational framework exploring how timing of meals, movement, and recovery may influence how men feel across the day. The goal is awareness — not precision.",
      cta: "Learn More",
      path: "/dashboard/peak-timing-protocol",
      icon: <IoMdTrendingUp className="w-8 h-8" />,
    },
    {
      title: "Daily Circulation Activator™",
      description:
        "Simple, equipment-free movement guidance designed to support circulation and energy throughout the day.",
      cta: "View Guidance",
      path: "/dashboard/daily-circulation-activator",
      icon: <TbCalendarPlus className="w-8 h-8" />,
    },
    {
      title: "Nightly Performance Insights™",
      description:
        "Educational reflections that help connect evening habits and sleep patterns to next-day energy and consistency.",
      cta: "View Insights",
      path: "/dashboard/nightly-performance-insights",
      icon: <TbHazeMoon className="w-8 h-8" />,
    },
  ];

  return (
    <div className="space-y-12 pb-12">
      <div className="text-left space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          Welcome to UroFitness™
        </h1>
        <p className="text-lg text-text-secondary max-w-3xl leading-relaxed">
          An educational wellness platform designed to help men better
          understand circulation, energy, and daily patterns over time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {modules.map((module) => (
          <Link
            key={module.path}
            href={module.path}
            className="group flex flex-col items-center text-center bg-surface-card border border-border rounded-2xl p-8 hover:border-text-link/50 transition-all duration-300 hover:shadow-lg hover:shadow-text-link/5 hover:no-underline"
          >
            <div className="w-16 h-16 rounded-full bg-background-alt/80 text-text-link flex items-center justify-center mb-6 border border-border group-hover:bg-text-link/5 transition-colors">
              {module.icon}
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              {module.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-8 flex-1">
              {module.description}
            </p>
            <span className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold border border-border text-text-primary bg-surface-header transition-all group-hover:bg-background-hover group-hover:border-text-link/30 dark:group-hover:text-white dark:group-hover:bg-slate-800">
              {module.cta}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
