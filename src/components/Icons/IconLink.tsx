import React from 'react';

type IconLinkProps = {
  url: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  icon: string;
  label: string;
}

const IconLink: React.FC<IconLinkProps> = ({
  url,
  target = "_blank",
  icon,
  label,
}) => {
  return (
    <a href={url} target={target} >
      <div className='flex gap-3 items-center justify-start text-primary hover:opacity-80 hover:underline'>
        <i className={icon}></i>
        {label}
      </div>
    </a>
  );
}

export default IconLink;
