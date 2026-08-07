import React from 'react';
import { Download, Server, Star, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';
import { MOVIE_DATA } from '../data/movieData';

interface DownloadSectionProps {
  onStartDownload: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ onStartDownload }) => {
  return (
    <div className="w-full max-w-xl mx-auto px-4 py-8 text-center flex flex-col items-center">
      {/* Title */}
      <h2 className="serif-title text-2xl sm:text-3xl font-extrabold text-white mb-3">
        Download Spider-Man: Brand New Day in Full HD
      </h2>

      {/* Subtitle description */}
      <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed max-w-lg">
        Get high-speed offline mirror access to the complete movie and exclusive bonus content.{' '}
        <span className="text-[#ff007a] font-bold">100% Free &amp; Fast</span>. Starts instantly.
      </p>

      {/* Large Gradient CTA Download Button */}
      <button
        onClick={onStartDownload}
        className="w-full sm:w-auto min-w-[280px] sm:min-w-[340px] bg-gradient-btn text-white py-4 px-8 rounded-full font-black text-lg sm:text-xl tracking-wider uppercase flex items-center justify-center gap-3 glow-pink-button transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer mb-3 shadow-2xl"
      >
        <Download className="w-6 h-6 stroke-[2.5]" />
        <span>DOWNLOAD MOVIE</span>
      </button>

      {/* Microcopy indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff007a] glow-pink-dot animate-pulse"></span>
        <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">
          START HIGH-SPEED DOWNLOAD INSTANTLY
        </span>
      </div>

      {/* Stat Cards Grid (2 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
        {/* Card 1: Connections Today */}
        <div className="bg-[#0b0e18] border border-slate-800/80 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg transition-colors hover:border-slate-700">
          <div className="w-10 h-10 rounded-xl bg-[#28081a] border border-[#ff007a]/30 text-[#ff007a] flex items-center justify-center mb-3">
            <Server className="w-5 h-5" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
            {MOVIE_DATA.totalConnections}
          </div>
          <div className="text-slate-400 text-xs font-extrabold tracking-widest uppercase">
            CONNECTIONS TODAY
          </div>
        </div>

        {/* Card 2: Satisfaction Index */}
        <div className="bg-[#0b0e18] border border-slate-800/80 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg transition-colors hover:border-slate-700">
          <div className="flex items-center gap-1 text-amber-400 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
            {MOVIE_DATA.rating}
          </div>
          <div className="text-slate-400 text-xs font-extrabold tracking-widest uppercase">
            SATISFACTION INDEX
          </div>
        </div>
      </div>

      {/* Trust Badges (SSL, Mirror Verified, Zero Virus) */}
      <div className="flex flex-wrap items-center justify-center gap-3 w-full">
        {/* Badge 1: SSL Secure */}
        <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#06180f] border border-[#00ff66]/40 text-[#00ff66] text-xs font-extrabold tracking-wider uppercase shadow-sm">
          <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
          <span>SSL SECURE</span>
        </div>

        {/* Badge 2: Mirror Verified */}
        <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#200713] border border-[#ff007a]/40 text-[#ff007a] text-xs font-extrabold tracking-wider uppercase shadow-sm">
          <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
          <span>MIRROR VERIFIED</span>
        </div>

        {/* Badge 3: Zero Virus */}
        <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#061726] border border-[#00ccff]/40 text-[#00ccff] text-xs font-extrabold tracking-wider uppercase shadow-sm">
          <Lock className="w-4 h-4 stroke-[2.5]" />
          <span>ZERO VIRUS</span>
        </div>
      </div>
    </div>
  );
};
