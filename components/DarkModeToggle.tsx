"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const newMode = !dark;
    setDark(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="
        w-10 h-10 flex items-center justify-center rounded-full
        bg-[var(--bg-elevated)] border border-[var(--border)]
        hover:scale-105 transition-all duration-300
        shadow-sm
      "
    >
      {dark ? (
        <img
          src="https://cdn-icons-png.flaticon.com/512/481/481473.png"
          alt="Light Mode"
          className="w-5 h-5"
        />
      ) : (
        <img
          src="https://cdn-icons-png.flaticon.com/512/702/702471.png"
          alt="Dark Mode"
          className="w-5 h-5"
        />
      )}
    </button>
  );
}
