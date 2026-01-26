import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useDarkMode() {
  // Get initial theme from localStorage or default to 'system'
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    return savedTheme || 'system';
  });

  // Determine if dark mode should be active
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return theme === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;

    // Handle system theme preference
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        setIsDark(e.matches);
      };

      setIsDark(mediaQuery.matches);
      mediaQuery.addEventListener('change', handleChange);

      // Remove dark class and let CSS handle it
      root.classList.remove('dark', 'light');

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    } else {
      // Manual theme selection
      setIsDark(theme === 'dark');
      root.classList.remove('dark', 'light');
      root.classList.add(theme);
    }

    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => {
      if (current === 'system' || current === 'light') {
        return 'dark';
      }
      return 'light';
    });
  };

  const setSystemTheme = () => {
    setTheme('system');
  };

  return {
    theme,
    isDark,
    setTheme,
    toggleTheme,
    setSystemTheme,
  };
}
