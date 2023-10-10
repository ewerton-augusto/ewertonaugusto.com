import React from 'react';

type SubTitleProps = {
  children: string;
  className?: string;
}

const SubTitle: React.FC<SubTitleProps> = ({
  children,
  className
}) => {
  return <h2 className={`font-bold text-2xl capitalize text-red text-opacity-80 ${className}`}>{children}</h2>
}

export default SubTitle;