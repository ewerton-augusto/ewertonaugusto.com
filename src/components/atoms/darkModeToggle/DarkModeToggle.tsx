'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { IconType } from '../Icons/types';
import { useTheme } from 'next-themes';

enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
}

const DarkModeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const label = useMemo(() => `${resolvedTheme} mode`, [resolvedTheme]);

  const toggleDarkMode = () => setTheme(resolvedTheme === Themes.DARK ? Themes.LIGHT : Themes.DARK);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={toggleDarkMode}
      className="bg-transparent border-none text-black dark:text-white hover:text-primary dark:hover:text-primary transition duration-400"
      aria-label={label}
      title={label}
    >
      <span className="text-[24px]">
        {resolvedTheme === Themes.DARK ? (
          <i className={IconType.SUN_SOLID} />
        ) : (
          <i className={IconType.MOON_SOLID_1} />
        )}
      </span>
    </button>
  );
};

export default DarkModeToggle;
