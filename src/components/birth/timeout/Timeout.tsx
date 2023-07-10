import React, { useEffect, useState } from 'react';

const Timeout: React.FC = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('October 20, 2023 15:00:00') as any;
    const currentDate = new Date() as any;
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
      return {
        months: 0,
        days: 0,
        hours: 0,
        seconds: 0
      };
    }

    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const currentMonth = currentDate.getMonth();
    const remainingDaysInMonth = new Date(
      currentDate.getFullYear(),
      currentMonth + 1,
      0
    ).getDate();
    const remainingDays = days % remainingDaysInMonth;
    const months = Math.floor(days / remainingDaysInMonth);

    return {
      months,
      days: remainingDays,
      hours,
      minutes,
      seconds
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='flex justify-center items-center gap-4'>
      <div className='flex flex-col gap-1 items-center justify-center  pr-4 border-r-2 border-purple border-opacity-30'>
        <span className='text-purple text-5xl max-sm:text-lg font-semibold'>{timeLeft.months}</span>
        <div className='text-sm max-sm:text-xl uppercase'>Meses</div>
      </div>
      <div className='flex flex-col gap-1 items-center justify-center pr-4 border-r-2 border-purple border-opacity-30'>
        <span className='text-purple text-5xl max-sm:text-lg font-semibold'>{timeLeft.days}</span>
        <div className='text-sm max-sm:text-xl uppercase'>Dias</div>
      </div>
      <div className='flex flex-col gap-1 items-center justify-center  pr-4 border-r-2 border-purple border-opacity-30'>
        <span className='text-purple text-5xl max-sm:text-lg font-semibold'>{timeLeft.hours}</span>
        <div className='text-sm max-sm:text-xl uppercase'>Horas</div>
      </div>
      <div className='flex flex-col gap-1 items-center justify-center  pr-4 border-r-2 border-purple border-opacity-30'>
        <span className='text-purple text-5xl max-sm:text-lg font-semibold'>{timeLeft.minutes}</span>
        <div className='text-sm max-sm:text-xl uppercase'>Min</div>
      </div>
      <div className='flex flex-col gap-1 items-center justify-center'>
        <span className='text-purple text-5xl max-sm:text-lg font-semibold'>{timeLeft.seconds}</span>
        <div className='text-sm max-sm:text-xl uppercase'>Sec</div>
      </div>
    </div>
  )
}

export default Timeout;