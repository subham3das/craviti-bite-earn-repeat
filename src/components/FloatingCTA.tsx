import { useState, useEffect } from 'react';
import { Gift, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dealsCount, setDealsCount] = useState(2);

  useEffect(() => {
    // Show floating CTA after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000);
    
    // Update deals count periodically for dynamic feel
    const dealsTimer = setInterval(() => {
      setDealsCount(prev => Math.floor(Math.random() * 5) + 1);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(dealsTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-auto z-50 animate-bounce-in">
      <div className="bg-gradient-to-r from-primary to-secondary rounded-full px-6 py-3 shadow-glow">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-white animate-pulse" />
            <span className="text-white font-semibold text-sm md:text-base">
              🎁 Today's Deals Nearby ({dealsCount})
            </span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;