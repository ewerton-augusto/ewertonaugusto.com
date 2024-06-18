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

  const dynamicActiveClass = {};

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
      <ul className="flex w-2/3 mx-auto justify-around items-center gap-4 text-black dark:text-white">
        {menus.map(({ name, path, component: Component }) => (
          <li key={name} title={name} className="text-lg capitalize">
            <Link href={path}>
              {Component ? <Component /> : <span>{name}</span>}
              {/* {menu.component ? menu.component : <span>{menu.name}</span>} */}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
