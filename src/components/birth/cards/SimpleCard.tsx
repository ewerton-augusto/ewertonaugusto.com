import React from 'react';

type SimpleCardProps = {
  icon: string;
  label: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ icon, label }) => {
  return (
    <div className='w-full max-w-[160px] p-2 flex flex-col justify-center items-center gap-4'>
      <i className={`text-purple text-5xl ${icon}`}></i>
      <p className='text-xl text-white text-center font-bold'>{label}</p>
    </div>
  )
}

export default SimpleCard;
