import React from 'react';

type ItemListProps = {
  icon: string;
  label: string;
}

const ItemList: React.FC<ItemListProps> = ({
  icon,
  label,
}) => {
  return (
    <li className='flex gap-4 items-center justify-start'>
      <i className={`${icon} text-2xl`}></i>
      <p>{label}</p>
    </li>
  )
}

export default ItemList;
