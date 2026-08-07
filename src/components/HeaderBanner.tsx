import React from 'react';
import { Sparkles } from 'lucide-react';

export const HeaderBanner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-banner py-2.5 px-4 text-center text-white font-extrabold tracking-wider text-xs sm:text-sm uppercase flex items-center justify-center gap-2 shadow-md rounded-t-2xl sm:rounded-t-3xl">
      <Sparkles className="w-4 h-4 fill-amber-200 text-amber-200 animate-pulse" />
      <span>EXCLUSIVE SPIDER-MAN: BRAND NEW DAY PORTAL</span>
      <Sparkles className="w-4 h-4 fill-amber-200 text-amber-200 animate-pulse" />
    </div>
  );
};
