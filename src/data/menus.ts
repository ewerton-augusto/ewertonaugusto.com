import { MenuItem } from '@/@types';
import Logo from '@/components/atoms/Logo/Logo';

export const menus: MenuItem[] = [
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
    name: 'blog',
    path: '/blog',
  },
  {
    name: 'recommendations',
    path: '/recommendations',
  },
];
