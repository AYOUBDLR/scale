import React from 'react';
import { Check, Play, Film } from 'lucide-react';
import { MOVIE_DATA } from '../data/movieData';

interface HeroSectionProps {
  onStartDownload: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartDownload }) => {
  return (
    <div className="flex flex-col items-center text-center pt-8 pb-6 px-4 max-w-2xl mx-auto">
      {/* Glowing Avatar Ring with Verified Badge */}
      <div className="relative mb-6 cursor-pointer group" onClick={onStartDownload}>
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 border-2 border-[#ff007a] glow-pink-ring transition-transform group-hover:scale-105 duration-300 relative bg-[#131722] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&w=400&q=80"
            alt="Spider-Man & MJ"
            className="w-full h-full object-cover rounded-full"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Verified Pink Check Badge */}
        <div className="absolute bottom-1 right-1 bg-[#ff007a] text-white p-1 sm:p-1.5 rounded-full border-2 border-[#080a12] shadow-lg flex items-center justify-center">
          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
        </div>
      </div>

      {/* Main Serif Display Title */}
      <h1 className="serif-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide leading-tight mb-4 uppercase drop-shadow-md">
        SPIDER-MAN: BRAND NEW DAY
      </h1>

      {/* Mirror Status Pill */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#071911] border border-[#0d3b25] mb-8 shadow-inner">
        <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66] glow-green-dot animate-pulse"></span>
        <span className="text-[#00ff66] text-xs sm:text-sm font-extrabold tracking-wider uppercase">
          FAST OFFLINE MIRROR • AVAILABLE NOW
        </span>
      </div>

      {/* Video Preview Media Card */}
      <div
        onClick={onStartDownload}
        className="w-full relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0d101a] shadow-2xl group cursor-pointer aspect-video max-w-xl mx-auto transition-all duration-300 hover:border-[#ff007a]/50"
      >
        {/* Poster Image Background */}
        <img
          src={MOVIE_DATA.posterImage}
          alt="Spider-Man Movie Frame Preview"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
          referrerPolicy="no-referrer"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Center Glowing Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#ff007a] text-white flex items-center justify-center shadow-[0_0_30px_rgba(255,0,122,0.9)] animate-pulse-glow transition-transform group-hover:scale-110">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white translate-x-0.5" />
          </div>
        </div>

        {/* Bottom Pill Button inside preview */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <button className="bg-white hover:bg-slate-100 text-[#ff007a] border-2 border-[#ff007a]/20 px-5 py-2 rounded-full font-extrabold text-xs sm:text-sm tracking-wide uppercase flex items-center gap-2 shadow-xl transition-all hover:scale-105 cursor-pointer">
            <Film className="w-4 h-4 text-[#ff007a]" />
            <span>PLAY MOVIE PREVIEW</span>
          </button>
        </div>
      </div>
    </div>
  );
};
