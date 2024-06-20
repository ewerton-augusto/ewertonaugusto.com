import { MenuItem } from '../@types';
import Logo from '../components/atoms/Logo/Logo';

export const menus: MenuItem[] = [
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'home',
    path: '/',
    component: Logo,
  },
  {
    name: 'projects',
    path: '/projects',
  },
  // {
  //   name: 'experiences',
  //   path: '/experiences',
  // },
  // {
  //   name: 'blog',
  //   path: '/blog',
  // },
];
