import React from 'react';
import Menu from '../menu/Menu';
import DarkModeToggle from '../atoms/darkModeToggle/DarkModeToggle';

const Header: React.FC = () => {
  return (
    <header className="w-full mx-auto p-4">
      <div className="w-full max-w-[1728px]">
        <div className="w-full text-right">
          <DarkModeToggle />
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
