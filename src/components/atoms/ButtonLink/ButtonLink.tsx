import Link from 'next/link';
import React from 'react';

const ButtonLink: React.FC = () => {
  return (
    <Link href="/about">
      <div className="px-4 py-2 rounded-md border-[1px] flex justify-center items-center capitalize text-primary bg-opacity-0">
        saiba mais
      </div>
    </Link>
  );
};

export default ButtonLink;
