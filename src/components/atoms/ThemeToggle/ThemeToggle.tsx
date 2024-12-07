import React, { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'next-themes';
import { Icons } from '@/components/atoms/Icons/IconList';

enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
}

const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const label = useMemo(() => `${resolvedTheme} mode`, [resolvedTheme]);

  const toggleTheme = () => setTheme(resolvedTheme === Themes.DARK ? Themes.LIGHT : Themes.DARK);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <button
      onClick={toggleTheme}
      className="bg-transparent border-none text-black dark:text-white hover:text-primary dark:hover:text-primary transition duration-400"
      aria-label={label}
      title={label}
    >
      <span className="text-[24px]">
        {resolvedTheme === Themes.DARK ? (
          <i className={Icons.SUN_SOLID} />
        ) : (
          <i className={Icons.MOON_SOLID_1} />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
