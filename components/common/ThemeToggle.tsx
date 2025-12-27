"use client";

import React, { useState, useEffect } from "react";
import { RiMoonLine } from "react-icons/ri";
import { WiDaySunny } from "react-icons/wi";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    const isDarkMode =
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;

    // Disable transitions globally for a split second
    document.documentElement.classList.add("disable-transitions");

    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Re-enable transitions after the theme has been applied
    // setTimeout(..., 0) ensures this runs in the next event loop tick
    setTimeout(() => {
      document.documentElement.classList.remove("disable-transitions");
    }, 0);
  };

  if (!mounted) {
    return (
      <div className="p-2 w-10 h-10" /> // Placeholder to prevent layout shift
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:text-background-hover transition-colors focus:outline-none focus:ring-button-primary/20"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex items-center justify-center text-text-primary"
        >
          {isDark ? (
            <WiDaySunny className="w-6 h-6" />
          ) : (
            <RiMoonLine className="w-6 h-6" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
