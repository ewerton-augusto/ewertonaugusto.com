import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MenuItem } from '@/@types';

const Menu: React.FC<{ menus: MenuItem[] }> = ({ menus }) => {
  const currentPath = usePathname();
  return (
    <nav className="w-full max-md:hidden">
      <ul className="flex w-2/3 mx-auto justify-around items-center gap-4">
        {menus.map(({ name, path, component: Component }) => (
          <li
            key={name}
            title={name}
            className={`
            text-lg capitalize
            ${currentPath === path ? 'text-primary font-medium hover:text-primary' : 'text-black/70 dark:text-white/70 hover:text-black  dark:hover:text-white'}
          `}
          >
            <Link href={path}>
              {Component ? (
                <Component />
              ) : (
                <div className="px-6 py-2 transition duration-500 rounded-md hover:bg-black/5 dark:hover:bg-white/20 ">
                  <span>{name}</span>
                  <div
                    className={
                      currentPath === path ? 'border-b-2 border-primary rounded-md w-1/3' : ''
                    }
                  />
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
