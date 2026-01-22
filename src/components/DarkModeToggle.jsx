// src/components/DarkModeToggle.jsx
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const saved = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialDark = saved === 'dark' || (!saved && systemPrefersDark);
    setIsDark(initialDark);
    if (initialDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 dark:bg-background-dark/50 backdrop-blur-sm hover:bg-background/70 dark:hover:bg-background-dark/70 transition-all"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <>
          <Sun size={16} />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <Moon size={16} />
          <span>Dark Mode</span>
        </>
      )}
    </button>
  );
};

export default DarkModeToggle;
