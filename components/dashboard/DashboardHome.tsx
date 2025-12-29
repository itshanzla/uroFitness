"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function DashboardHome() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);
  const modules = [
    {
      title: "PWNS™",
      purpose: "Primary performance anchor representing the PWNS™ framework and overall system state.",
      useFor: ["PWNS™ dashboard entry", "System overview screens", "High-level performance summaries"],
      avoid: ["Individual metric views", "Detailed reports"],
      path: "/dashboard/pwns-nutrition-insight",
      iconLight: "/icons/PWNSlight.svg",
      iconDark: "/icons/PWNSdark.svg",
    },
    {
      title: "Peak Timing Protocol™",
      purpose: "Represents timing precision, optimization windows, and performance alignment.",
      useFor: ["Peak Timing Protocol™ module", "Timing recommendations", "Performance window info"],
      avoid: ["General tracking contexts", "Reporting summaries"],
      path: "/dashboard/peak-timing-protocol",
      iconLight: "/icons/peakdark.svg",
      iconDark: "/icons/peaklight.svg",
    },
    {
      title: "Daily Circulation Activator™",
      purpose: "Signals daily activation, flow, and physiological circulation patterns.",
      useFor: ["Daily Circulation Activator™ module", "Daily routines", "Activation or readiness states"],
      avoid: ["Long-term trend reporting"],
      path: "/dashboard/daily-circulation-activator",
      iconLight: "/icons/dailycirculationdark.svg",
      iconDark: "/icons/dailycirculationlight.svg",
    },
    {
      title: "Sleep / Nightly Performance Insights™",
      purpose: "Represents sleep quality, recovery cycles, and overnight recovery patterns.",
      useFor: ["Sleep dashboards", "Nightly Performance Insights™", "Recovery and readiness indicators"],
      avoid: ["Daytime performance metrics"],
      path: "/dashboard/nightly-performance-insights",
      iconLight: "/icons/nightyperformancelight.svg",
      iconDark: "/icons/nightyperformancedark.svg",
    },
    {
      title: "Tracking™",
      purpose: "Indicates ongoing measurement, progress monitoring, and live data capture.",
      useFor: ["Tracking views", "Active metrics", "Day-to-day performance monitoring"],
      avoid: ["Final summaries", "Reports"],
      path: "/dashboard/tracking",
      iconLight: "/icons/TrackingLight.svg",
      iconDark: "/icons/Trackingdark.svg",
    },
    {
      title: "Reporting Module",
      purpose: "Represents structured summaries, historical data, and formal performance reporting.",
      useFor: ["Reports", "Weekly or monthly summaries", "Exported insights"],
      avoid: ["Real-time tracking states"],
      path: "/dashboard/reports",
      iconLight: "/icons/ReportingModuleLight.svg",
      iconDark: "/icons/ReportingModuleDark.svg",
    },
  ];

  return (
    <div className="space-y-12 pb-12 relative z-10">
      <div className="text-left space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          Welcome to UroFitness™
        </h1>
        <p className="text-lg text-text-secondary max-w-3xl leading-relaxed">
          An educational wellness platform designed to help men better understand circulation, energy, and daily patterns over time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <Link
            key={module.path}
            href={module.path}
            className="group flex flex-col bg-surface-card border border-border rounded-2xl p-6 hover:border-text-link/50 transition-all duration-300 hover:shadow-lg hover:shadow-text-link/5 hover:no-underline"
          >
            <div className="mb-4">
              <h3 className="text-lg font-bold text-text-primary">
                {module.title}
              </h3>
            </div>

            <div className="space-y-4 text-left">
              <div>
                <p className="text-xs font-semibold text-[#1193D4] uppercase tracking-wider mb-1">
                  Purpose:
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {module.purpose}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-[#1193D4] uppercase tracking-wider mb-1">
                  Use for:
                </p>
                <ul className="text-sm text-text-secondary space-y-1">
                  {module.useFor.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Avoid section with icon on the right */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-xs font-semibold text-[#1193D4] uppercase tracking-wider mb-1">
                    Avoid:
                  </p>
                  <ul className="text-sm text-text-secondary space-y-1">
                    {module.avoid.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Icon positioned next to Avoid section */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center border-2 border-border rounded-lg group-hover:border-text-link/30 transition-colors">
                    {module.iconLight && module.iconDark ? (
                      <Image 
                        src={isDark ? module.iconDark : module.iconLight} 
                        alt={module.title} 
                        width={40} 
                        height={40} 
                        className="w-10 h-10"
                      />
                    ) : module.icon ? (
                      <Image 
                        src={module.icon} 
                        alt={module.title} 
                        width={40} 
                        height={40} 
                        className="w-10 h-10"
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
