import React, { useEffect, useState } from 'react';
import Counter from './Counter';

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
    <div className="flex justify-center items-center max-sm:gap-1 gap-4">
      <Counter label={`Mes${timeLeft.months > 1 ? "es" : ""}`} value={timeLeft.months} showBorderR />
      <Counter
        label={`Dia${timeLeft.days > 1 ? "s" : ""}`}
        value={timeLeft.days}
        showBorderR
      />
      <Counter label={`Hora${timeLeft.hours > 1 ? "s" : ""}`} value={timeLeft.hours} showBorderR />
      <Counter label="Min" value={timeLeft.minutes} showBorderR />
      <Counter label="Seg" value={timeLeft.seconds} />
    </div>
  )
}

export default Timeout;
