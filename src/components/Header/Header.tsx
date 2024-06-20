import React from 'react';
import { Menu, DarkModeToggle } from '../';
import { menus } from '../../data/menus';

const Header: React.FC = () => {
  return (
    <header className="container">
      <div className="w-full text-right">
        <DarkModeToggle />
      </div>
      <Menu menus={menus} />
    </header>
  );
};

export default Header;
