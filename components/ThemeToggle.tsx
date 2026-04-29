'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const storageKey = 'ftc-theme';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey);
    const nextTheme = savedTheme === 'light' ? 'light' : 'dark';
    document.documentElement.classList.toggle('light', nextTheme === 'light');
    setTheme(nextTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.toggle('light', nextTheme === 'light');
    localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  }

  const Icon = theme === 'light' ? Moon : Sun;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-200/10"
      aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      title={theme === 'light' ? 'Dark theme' : 'Light theme'}
    >
      <Icon size={18} />
    </button>
  );
}
