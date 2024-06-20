import React, { useEffect, useMemo, useState } from 'react';
import { Menu, DarkModeToggle } from '../';
import { menus } from '../../data/menus';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isLastScrollYSet = useMemo(() => lastScrollY > 0, [lastScrollY]);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY, controlNavbar]);

  return (
    <header
      className={`
        w-full fixed top-0 left-0 transition-transform duration-300 z-20 py-4
        backdrop-blur-sm bg-white/80 dark:bg-black/80
        ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}
        ${isLastScrollYSet ? 'shadow-md' : ''}
      `}
    >
      <div className="container">
        <div className="w-full text-right">
          <DarkModeToggle />
        </div>
        <Menu menus={menus} />
      </div>
    </header>
  );
};

export default Header;
