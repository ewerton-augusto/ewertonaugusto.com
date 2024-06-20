import React from 'react';
import { IconType } from '../Icons/types';

const Logo: React.FC = () => {
  return (
    <div className="w-full text-center" title="Ewerton Augusto - Software Developer">
      <i className={`${IconType.LOGO} text-[50px]`} />
    </div>
  );
};

export default Logo;
