import React, { HTMLAttributeAnchorTarget } from 'react';
import { IconType } from './types';

type IconLinkProps = {
  url: string;
  icon: IconType;
  label: string;
  target?: HTMLAttributeAnchorTarget;
  textColor?: string;
  textSize?: string;
};

const IconLink: React.FC<IconLinkProps> = ({
  url,
  target = '_blank',
  icon,
  label,
  textColor = 'text-black',
  textSize = 'text-[16px]',
}) => {
  return (
    <a href={url} target={target} title={label} aria-label={label}>
      <i className={`${icon} ${textColor} ${textSize} hover:text-primary hover:opacity-80`} />
    </a>
  );
};

export default IconLink;
