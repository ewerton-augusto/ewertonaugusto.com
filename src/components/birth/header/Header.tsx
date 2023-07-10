import React from 'react';

type BirthHeaderProps = {
  showLoginLink?: boolean;
  className?: string;
};

const BirthHeader: React.FC<BirthHeaderProps> = ({ showLoginLink, className }) => {
  return (
    <header className={`w-full fixed top-0 left-0 p-6 flex items-center justify-between gap-4 ${className}`}>
      <div className='flex gap-3 justify-start items-center'>
        <i className='icon-cake-candles-solid text-purple text-4xl'></i>
        <h1 className='text-[40px] font-bold text-white'>30Ton</h1>
      </div>
      {showLoginLink && (
        <p className='text-white text-xs text-right'>
          Já confirmou sua presença anteriormente?
          <a href="" className='text-purple hover:underline'> clique aqui!</a>
        </p>)}
    </header>
  )
}

export default BirthHeader;
