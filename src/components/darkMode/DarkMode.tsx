import React, { useEffect, useState } from 'react';
import { IconType } from '../Icons/types';

const DarkMode: React.FC = () => {
  const [darkMode, setDarkMode] = useState(typeof window !== 'undefined' && (localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)));

  const [modeLabel, setModeLabel] = useState('Dark mode');
  const [icon, setIcon] = useState(IconType.MOON_SOLID_1);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add('dark')
      setModeLabel('Light mode')
      setIcon(IconType.SUN_SOLID)
      return
    }
    document.documentElement.classList.remove('dark');
    setModeLabel('Dark mode')
    setIcon(IconType.MOON_SOLID_1)
  }, [darkMode]);

  return (
    <button onClick={toggleDarkMode} className="bg-transparent border-none text-black dark:text-white hover:text-primary dark:hover:text-primary" aria-label={modeLabel} title={modeLabel}>
      {
        darkMode
          ? <i className={`${icon} text-[24px]`} />
          : <i className={`${icon} text-[24px]`} />
      }
    </button>
  );
};

export default DarkMode;
