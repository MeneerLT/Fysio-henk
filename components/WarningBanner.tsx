
import React from 'react';
import { AlertTriangle, Phone } from 'lucide-react';

export const WarningBanner: React.FC = () => {
  return (
    <div className="bg-[#1a1a1a] text-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-b-4 border-[#ef5a24]">
      <div className="flex items-center gap-4">
        <div className="bg-[#ef5a24] p-2 rounded-full animate-pulse">
          <AlertTriangle className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="text-sm font-black uppercase tracking-widest text-[#ef5a24]">
            Spoedsymptomen Gedetecteerd
          </div>
          <div className="text-xs text-slate-300">
            Acute uitval, benauwdheid of zware rugklachten met uitval?
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <a 
          href="tel:112"
          className="bg-[#ef5a24] text-white px-6 py-2 rounded-full text-sm font-black hover:bg-[#d44d1d] transition-all flex items-center gap-2 shadow-lg"
        >
          <Phone className="w-4 h-4" /> BEL 112
        </a>
      </div>
    </div>
  );
};
