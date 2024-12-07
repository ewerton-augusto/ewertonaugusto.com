import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Menu, ThemeToggle } from '@/components';
import { menus } from '@/data/menus';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isLastScrollYSet = useMemo(() => lastScrollY > 0, [lastScrollY]);

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      setIsVisible(!Boolean(window.scrollY > lastScrollY));
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

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
        w-full fixed top-0 left-0 transition-transform duration-300 z-20 py-4 backdrop-blur-sm 
        ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}
        ${isLastScrollYSet ? 'shadow-md bg-white/80 dark:bg-black/80' : ''}
      `}
    >
      <div className="container">
        <div className="w-full text-right">
          <ThemeToggle />
        </div>
        <Menu menus={menus} />
      </div>
    </header>
  );
};

export default Header;
