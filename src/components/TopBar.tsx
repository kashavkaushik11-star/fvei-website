import React from 'react';
import { Phone, Mail, Award, Globe, ExternalLink, ShieldCheck } from 'lucide-react';
import { INSTITUTE_DETAILS } from '../data/instituteData';

interface TopBarProps {
  isHindi: boolean;
  setIsHindi: (val: boolean) => void;
  onOpenGrievance: () => void;
  onOpenNotice: () => void;
  onOpenProspectus: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  isHindi,
  setIsHindi,
  onOpenGrievance,
  onOpenProspectus,
}) => {
  return (
    <div className="bg-stone-900 text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left Side: Approvals & Codes */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold tracking-wide">
            <Award className="w-3.5 h-3.5" />
            <span>NAAC Grade 'A' Accredited</span>
          </div>
          <span className="text-stone-600 hidden sm:inline">|</span>
          <div className="flex items-center gap-1.5 text-stone-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>NCTE, PCI & UGC Approved</span>
          </div>
          <span className="text-stone-600 hidden md:inline">|</span>
          <div className="hidden md:flex items-center gap-2 text-stone-400">
            <span>AISHE: <strong className="text-stone-200">{INSTITUTE_DETAILS.aisheCode}</strong></span>
            <span>·</span>
            <span>Code: <strong className="text-stone-200">{INSTITUTE_DETAILS.collegeCode}</strong></span>
          </div>
        </div>

        {/* Right Side: Quick Links, Helpline & Language */}
        <div className="flex items-center flex-wrap gap-4">
          <a
            href={`tel:${INSTITUTE_DETAILS.phone}`}
            className="flex items-center gap-1 text-stone-200 hover:text-amber-400 transition-colors font-medium"
          >
            <Phone className="w-3 h-3 text-amber-500" />
            <span>{INSTITUTE_DETAILS.formattedPhone}</span>
          </a>

          <a
            href={`mailto:${INSTITUTE_DETAILS.email}`}
            className="hidden xl:flex items-center gap-1 text-stone-300 hover:text-amber-400 transition-colors"
          >
            <Mail className="w-3 h-3 text-amber-500" />
            <span>{INSTITUTE_DETAILS.email}</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenProspectus}
              className="hover:text-amber-400 text-stone-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>{isHindi ? "विवरणिका (Prospectus)" : "Prospectus 2026"}</span>
              <ExternalLink className="w-3 h-3" />
            </button>

            <button
              onClick={onOpenGrievance}
              className="text-stone-300 hover:text-amber-400 transition-colors cursor-pointer"
            >
              {isHindi ? "शिकायत निवारण (ICC/Anti-Ragging)" : "Grievance / Anti-Ragging"}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center border border-stone-700 rounded bg-stone-800 p-0.5 ml-2">
              <button
                onClick={() => setIsHindi(false)}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                  !isHindi
                    ? 'bg-amber-800 text-white font-semibold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setIsHindi(true)}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                  isHindi
                    ? 'bg-amber-800 text-white font-semibold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
