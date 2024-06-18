import React, { ReactNode } from 'react';
import { IconType } from '../atoms/Icons/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Logo: React.FC = () => (
  <div className="w-full text-center" title="Ewerton Augusto - Software Developer">
    <i className={`${IconType.LOGO} text-[76px]`} />
  </div>
);

interface MenuItem {
  name: string;
  path: string;
  component?: React.FC;
}

const Menu: React.FC = () => {
  const currentPath = usePathname();

  const menus: MenuItem[] = [
    {
      name: 'about',
      path: '/about',
    },
    {
      name: 'projects',
      path: '/projects',
    },
    {
      name: 'home',
      path: '/',
      component: Logo,
    },
    {
      name: 'experiences',
      path: '/experiences',
    },
    {
      name: 'blog',
      path: '/blog',
    },
  ];

  return (
    <nav className="w-full">
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
                <div className="px-6 py-2 transition duration-500 rounded-md hover:backdrop-blur-sm hover:bg-black/5 dark:hover:bg-white/10 ">
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
