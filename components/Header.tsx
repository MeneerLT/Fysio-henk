
import React from 'react';
import { Phone } from 'lucide-react';
import { HenkAvatar } from './HenkAvatar';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 px-4 sm:px-8 py-3 flex items-center justify-between shadow-sm z-30 sticky top-0">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="relative group cursor-help shrink-0">
          <HenkAvatar className="w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-105 transition-transform" />
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full shadow-sm"></div>
        </div>
        <div className="min-w-0">
          <h1 className="text-xl sm:text-2xl font-black text-[#1a1a1a] leading-none tracking-tight truncate">Fy-fit</h1>
          <p className="text-[9px] sm:text-[11px] text-[#ef5a24] font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.25em] mt-1 truncate">Fysiotherapie Nijmegen</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 sm:gap-8">
        <a 
          href="tel:0243447833" 
          className="hidden md:flex flex-col items-end group"
        >
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Bel direct</span>
          <span className="text-[#1a1a1a] font-black text-base group-hover:text-[#ef5a24] transition-colors">024 - 344 78 33</span>
        </a>
        <a 
          href="https://www.fysiotherapienijmegen.nl/afspraak-plannen/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#ef5a24] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-black hover:bg-[#d44d1d] transition-all hover:scale-105 shadow-[0_4px_15px_0_rgba(239,90,36,0.3)] text-center uppercase tracking-widest"
        >
          <span className="sm:hidden">Afspraak</span>
          <span className="hidden sm:inline">Afspraak Maken</span>
        </a>
      </div>
    </header>
  );
};
