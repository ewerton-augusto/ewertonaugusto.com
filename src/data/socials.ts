import { IconType } from '../components/atoms/Icons/types';

type Socials = {
  label: string;
  icon: IconType;
  url: string;
};

const socials: Socials[] = [
  {
    label: 'LinkedIn',
    icon: IconType.LINKEDIN,
    url: 'https://www.linkedin.com/in/ewerton-augusto/',
  },
  {
    label: 'GitHub',
    icon: IconType.GITHUB,
    url: 'https://github.com/ewerton-augusto',
  },
  {
    label: 'Instagram',
    icon: IconType.INSTAGRAM,
    url: 'https://www.instagram.com/_ewerton.augusto',
  },
  {
    label: 'ewerton.santos2210@gmail.com',
    icon: IconType.ENVELOPE,
    url: 'mailto:ewerton.santos2210@gmail.com',
  },
];

export { socials };
