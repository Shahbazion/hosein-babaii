"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("system");

  /* ============================================================
     Load theme on mount
  ============================================================ */
  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) {
      setTheme(saved);
      applyTheme(saved);
    } else {
      applyTheme("system");
    }
  }, []);

  /* ============================================================
     Apply theme to <html>
  ============================================================ */
  const applyTheme = (t: Theme) => {
    const root = document.documentElement;

    if (t === "system") {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", systemDark);
      return;
    }

    root.classList.toggle("dark", t === "dark");
  };

  /* ============================================================
     Change theme
  ============================================================ */
  const changeTheme = (t: Theme) => {
    setTheme(t);
    localStorage.setItem("theme", t);
    applyTheme(t);
  };

  if (!mounted) return null;

  return (
    <div
      className="
        flex items-center gap-3
        px-3 py-2 rounded-xl
        backdrop-blur-xl bg-[var(--bg-elevated)]/60
        border border-[var(--border)]
        shadow-sm
      "
    >
      {/* Light */}
      <button
        onClick={() => changeTheme("light")}
        className={`
          text-sm transition
          ${theme === "light" ? "text-yellow-500" : "text-[var(--text-muted)] hover:text-[var(--text)]"}
        `}
      >
        ☀️
      </button>

      {/* Dark */}
      <button
        onClick={() => changeTheme("dark")}
        className={`
          text-sm transition
          ${theme === "dark" ? "text-blue-400" : "text-[var(--text-muted)] hover:text-[var(--text)]"}
        `}
      >
        🌙
      </button>

      {/* System */}
      <button
        onClick={() => changeTheme("system")}
        className={`
          text-sm transition
          ${theme === "system" ? "text-green-500" : "text-[var(--text-muted)] hover:text-[var(--text)]"}
        `}
      >
        💻
      </button>
    </div>
  );
}
