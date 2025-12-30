
import React from 'react';
import { MapPin, CheckCircle, Clock, Heart, ShieldCheck, Microscope, Calendar } from 'lucide-react';

const locations = [
  "Weezenhof (Dukenburg)",
  "Lankforst",
  "Meijhorst",
  "Nijmegen-Oost",
  "Overasselt",
  "Wijchen"
];

const usps = [
  "Binnen 24 uur een afspraak",
  "Manuele therapie & Sportrevalidatie",
  "Specialisten in Geriatrie & Oedeem",
  "Contracten met álle verzekeraars"
];

export const Sidebar: React.FC = () => {
  return (
    <div className="p-6 space-y-8 h-full bg-[#f8fafc]">
      <section>
        <h3 className="text-xs font-black text-[#1a1a1a] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#ef5a24]" /> Wetenschap
        </h3>
        <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm space-y-3">
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Fysio Henk is geprogrammeerd op basis van de meest recente <strong>NHG-Standaarden</strong> en <strong>KNGF-richtlijnen</strong>.
          </p>
          <div className="flex items-center gap-2 text-[#ef5a24] font-bold text-[10px] bg-orange-50 p-2 rounded-lg">
            <Microscope className="w-3.5 h-3.5" /> Evidence-Based Protocol
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xs font-black text-[#1a1a1a] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#ef5a24]" /> Waarom Fy-fit?
        </h3>
        <ul className="space-y-3">
          {usps.map((usp, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
              <CheckCircle className="w-4 h-4 text-[#ef5a24] mt-0.5 flex-shrink-0" />
              <span>{usp}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-xs font-black text-[#1a1a1a] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#ef5a24]" /> Vestigingen
        </h3>
        <div className="grid grid-cols-1 gap-1.5">
          {locations.map((loc, i) => (
            <div key={i} className="bg-white border border-slate-100 p-2.5 rounded-lg text-xs font-bold text-slate-600 hover:text-[#ef5a24] hover:bg-orange-50 transition-all cursor-default shadow-sm border-l-4 border-l-slate-200 hover:border-l-[#ef5a24]">
              {loc}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1a1a1a] p-5 rounded-2xl shadow-xl">
        <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
          <Heart className="w-4 h-4 text-[#ef5a24]" /> Expertise
        </h3>
        <p className="text-[11px] text-slate-300 leading-relaxed">
          Samen met jou kijken we naar de beste weg naar herstel. Onze therapeuten in Nijmegen staan direct voor je klaar.
        </p>
      </section>

      <div className="pt-4 opacity-30 text-[9px] text-[#1a1a1a] font-black uppercase tracking-[0.3em] text-center">
        Fy-fit &copy; 2024
      </div>
    </div>
  );
};
