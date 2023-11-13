import { useEffect, useState } from "react";

const END_DATE = new Date("Dec 22, 2023 12:00:00").getTime();

export default function Index() {
  const [isExpired, setIsExpired] = useState(false)
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = END_DATE - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds })
    }, 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <p className="space-x-2"><span>{time.days}d</span><span>{time.hours}h</span><span>{time.minutes}m</span><span>{time.seconds}s</span>  </p>
    </main>
  );
}
