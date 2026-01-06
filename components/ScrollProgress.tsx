"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setProgress((current / total) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[4px] z-50"
      style={{
        background: "transparent",
      }}
    >
      <div
        className="h-full transition-all"
        style={{
          width: `${progress}%`,
          background: "var(--brand)",
        }}
      />
    </div>
  );
}
