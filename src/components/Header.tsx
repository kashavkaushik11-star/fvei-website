import React from 'react';
import { Download, Sparkles, BookOpen, GraduationCap, Calculator } from 'lucide-react';
import { INSTITUTE_DETAILS } from '../data/instituteData';

interface HeaderProps {
  isHindi: boolean;
  onOpenAdmissionModal: () => void;
  onOpenProspectus: () => void;
  onScrollToFee: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isHindi,
  onOpenAdmissionModal,
  onOpenProspectus,
  onScrollToFee,
}) => {
  return (
    <header className="bg-white border-b border-stone-200 py-4 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-5">
        {/* Left: Official Emblem & Institution Names */}
        <div className="flex items-center gap-4 text-center sm:text-left">
          {/* Institutional Crest / Emblem */}
          <div className="relative shrink-0 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-red-950 via-red-900 to-amber-900 border-3 border-amber-500 shadow-md p-1">
            <div className="w-full h-full rounded-full border border-amber-400/60 flex flex-col items-center justify-center text-amber-300 relative overflow-hidden bg-stone-900/40">
              <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400" />
              <div className="text-[9px] font-bold tracking-widest text-amber-200 uppercase mt-0.5">FCV</div>
              <div className="text-[7.5px] text-amber-400/90 tracking-tighter">ESTD. {INSTITUTE_DETAILS.established}</div>
            </div>
            {/* Circular rim label effect */}
            <div className="absolute -bottom-1 bg-amber-500 text-stone-950 text-[8px] font-bold px-1.5 py-0.2 rounded-full uppercase tracking-wider shadow-sm">
              NAAC 'A'
            </div>
          </div>

          {/* Titles & Affiliations */}
          <div className="flex flex-col">
            <div className="text-amber-800 font-semibold text-xs sm:text-sm tracking-wide font-serif">
              ॥ {INSTITUTE_DETAILS.motto} ॥
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight font-display leading-tight uppercase">
              {isHindi ? INSTITUTE_DETAILS.hindiName : INSTITUTE_DETAILS.name}
            </h1>
            <p className="text-xs sm:text-sm font-medium text-stone-600 mt-0.5">
              {!isHindi ? INSTITUTE_DETAILS.hindiName : INSTITUTE_DETAILS.name}
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 text-[11px] sm:text-xs text-stone-500 mt-1.5">
              <span className="font-medium text-stone-700">{INSTITUTE_DETAILS.recognition}</span>
              <span className="hidden sm:inline text-stone-300">·</span>
              <span className="text-stone-600">{INSTITUTE_DETAILS.affiliation}</span>
            </div>
          </div>
        </div>

        {/* Right: Quick Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
          <button
            onClick={onScrollToFee}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-stone-300 hover:border-amber-500 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-amber-600" />
            <span>{isHindi ? "शुल्क कैलकुलेटर" : "Fee Calculator"}</span>
          </button>

          <button
            onClick={onOpenProspectus}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-red-900/20 hover:border-red-900 bg-red-50 hover:bg-red-100/70 text-red-900 text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer"
          >
            <Download className="w-4 h-4 text-red-700" />
            <span>{isHindi ? "प्रॉस्पेक्टस डाउनलोड" : "Download Prospectus"}</span>
          </button>

          <button
            onClick={onOpenAdmissionModal}
            className="relative group flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-gradient-to-r from-red-800 via-red-700 to-amber-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <GraduationCap className="w-4 h-4 text-amber-300" />
            <span>{isHindi ? "ऑनलाइन प्रवेश २०२६-२७" : "Apply Online 2026-27"}</span>
            <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
