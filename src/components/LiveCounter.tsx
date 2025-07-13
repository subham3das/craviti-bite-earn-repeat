import { useState, useEffect } from 'react';
import { PartyPopper } from 'lucide-react';

const LiveCounter = () => {
  const [count, setCount] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 15000); // Update every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/20 to-secondary/20 px-4 py-2 rounded-full border border-accent/30">
      <PartyPopper className="h-4 w-4 text-secondary animate-pulse" />
      <span className="text-sm font-medium text-gray-700">
        🎉 {count} students claimed rewards today!
      </span>
    </div>
  );
};

export default LiveCounter;