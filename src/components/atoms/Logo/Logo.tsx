import React from 'react';
import { Icons } from '@/components/atoms/Icons/IconList';

const Logo: React.FC = () => {
  return (
    <div className="w-full text-center" title="Ewerton Augusto - Software Developer">
      <i className={`${Icons.LOGO} text-[50px]`} />
    </div>
  );
};

export default Logo;
