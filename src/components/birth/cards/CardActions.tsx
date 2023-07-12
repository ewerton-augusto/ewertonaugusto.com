import React from 'react';

type CardActionsProps = {
  label: string;
  img: string;
  onClick: () => void;
}

const CardActions: React.FC<CardActionsProps> = ({
  label,
  img,
  onClick,
}) => {
  return (
    <li
      onClick={onClick}
      className='w-full sm:max-w-[250px] min-h-[350px] bg-dark-purple shadow-sm text-white text-base font-medium p-4 rounded-xl flex flex-col justify-between gap-2 items-center hover:opacity-80 hover:cursor-pointer hover:shadow-purple'
    >
      <img src={img} alt={label} className='w-full h-[270px] object-cover rounded-lg opacity-70' />
      <p>{label}</p>
    </li>
  )
}

export default CardActions;
