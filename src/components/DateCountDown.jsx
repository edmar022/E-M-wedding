import React, { useState, useEffect } from 'react';
import background from '../images/countdown_background.jpg'

const DateCountDown = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const targetDate = new Date("2025-06-08T23:59:59");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const timeleft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
      setTimeLeft(timeleft);
    } else {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    }
  };

  useEffect(() => {
    calculateTimeLeft(); // initialize immediately
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container" style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
      <h2 className='story'>The Wedding Day</h2>
      <p className='fs-6 px-5 text-center'>"Save the date for our celebration of love—join us!"</p>
      <div className="countdown">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="time-unit">
            <span className="value">{value}</span>
            <span className="label">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateCountDown;
