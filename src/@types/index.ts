import { IconType } from '../components/atoms/Icons/types';

export type MenuItem = {
  name: string;
  path: string;
  component?: React.FC;
};

export type TimelineItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  side: 'left' | 'right';
};

export type Socials = {
  label: string;
  icon: IconType;
  url: string;
};
