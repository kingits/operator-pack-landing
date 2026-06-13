'use client';

import { useState, useEffect } from 'react';

export function DownloadTimer({ expiresAt }: { expiresAt: number }) {
  const [timeLeft, setTimeLeft] = useState<string>('--:--:--');
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = expiresAt - now;

      if (difference <= 0) {
        setIsExpired(true);
        setTimeLeft('00:00:00');
        return;
      }

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(
        `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      );
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [expiresAt]);

  return (
    <div className={`text-2xl font-mono font-bold ${isExpired ? 'text-red-600' : 'text-orange-600'}`}>
      {timeLeft}
    </div>
  );
}