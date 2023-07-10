import React from 'react';

type CounterProps = {
  label: string;
  value: string | number;
  showBorderR?: boolean;
}

const Counter: React.FC<CounterProps> = ({
  label,
  value,
  showBorderR
}) => {
  return (
    <div className={`flex flex-col gap-2 items-center justify-center pr-4 ${showBorderR && "border-r-2 border-purple border-opacity-30"}`}>
      <span className='text-purple text-6xl max-sm:text-4xl font-semibold'>{value}</span>
      <div className='text-base max-sm:text-xs uppercase'>{label}</div>
    </div>
  )
}

export default Counter;
