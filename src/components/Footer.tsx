import React from 'react';
import {
  Award,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ShieldCheck,
  ExternalLink,
  BookOpen,
  GraduationCap
} from 'lucide-react';
import { INSTITUTE_DETAILS } from '../data/instituteData';

interface FooterProps {
  isHindi: boolean;
  onOpenAdmissionModal: () => void;
  onOpenProspectus: () => void;
  onOpenDisclosures: () => void;
  onOpenGrievance: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  isHindi,
  onOpenAdmissionModal,
  onOpenProspectus,
  onOpenDisclosures,
  onOpenGrievance,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 text-xs border-t-2 border-red-900">
      {/* Top Banner with Motto & Approvals */}
      <div className="bg-red-950/80 border-b border-red-900/60 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-amber-300 font-bold tracking-wide uppercase text-xs font-serif">
                ॥ {INSTITUTE_DETAILS.motto} ॥
              </div>
              <div className="text-stone-300 text-[11px] font-medium">
                {INSTITUTE_DETAILS.recognition} · {INSTITUTE_DETAILS.accreditation}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={onOpenAdmissionModal}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-lg transition-colors cursor-pointer"
            >
              Apply Online 2026-27
            </button>
            <button
              onClick={onOpenProspectus}
              className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 rounded-lg transition-colors cursor-pointer"
            >
              Download Prospectus
            </button>
          </div>
        </div>
      </div>

      {/* Main 4 Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Column 1: Institutional Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-red-900 border border-amber-400 flex items-center justify-center text-amber-300 font-bold text-sm shrink-0">
                FCV
              </div>
              <div>
                <h4 className="font-bold font-display text-white text-sm sm:text-base leading-tight uppercase">
                  {INSTITUTE_DETAILS.name}
                </h4>
                <div className="text-[11px] text-amber-400 font-serif-body">
                  {INSTITUTE_DETAILS.hindiName}
                </div>
              </div>
            </div>

            <p className="text-stone-400 leading-relaxed font-serif-body text-[11px]">
              Fakirchand Vidyapeeth Educational Institute is a recognized center of excellence approved by NCTE and PCI. Dedicated to preparing certified educators, healthcare pharmacists, nutritional scientists, and humane scholars with unyielding integrity.
            </p>

            <div className="pt-2 text-[11px] text-stone-400 space-y-1">
              <div><strong>AISHE Code:</strong> <span className="text-stone-200 font-mono">{INSTITUTE_DETAILS.aisheCode}</span></div>
              <div><strong>Affiliation Code:</strong> <span className="text-stone-200 font-mono">{INSTITUTE_DETAILS.collegeCode}</span></div>
              <div><strong>NAAC Grade:</strong> <span className="text-amber-400 font-bold">'A' Accredited</span></div>
            </div>
          </div>

          {/* Column 2: Academic Programs */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-bold text-amber-400 uppercase tracking-wider text-xs border-b border-stone-800 pb-2">
              Academic Programs
            </h5>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <button onClick={() => scrollTo('courses')} className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3 text-stone-600" />
                  <span>B.Ed. (Bachelor of Education - NCTE)</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('courses')} className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3 text-stone-600" />
                  <span>BTC / D.El.Ed. (२-वर्षीय डिप्लोमा)</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('courses')} className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3 text-stone-600" />
                  <span>D.Pharma (Pharmacy - PCI Approved)</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('courses')} className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3 text-stone-600" />
                  <span>B.Sc. Home Science (Food & Nutrition)</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('courses')} className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3 text-stone-600" />
                  <span>B.A. (Bachelor of Arts - ३-वर्षीय)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation & Statutory */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-bold text-amber-400 uppercase tracking-wider text-xs border-b border-stone-800 pb-2">
              Statutory Links
            </h5>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <button onClick={onOpenDisclosures} className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3 text-stone-600" />
                  <span>NCTE & PCI Approvals</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenGrievance} className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer text-red-400 font-semibold">
                  <ChevronRight className="w-3 h-3 text-red-600" />
                  <span>Anti-Ragging Squad</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenGrievance} className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3 text-stone-600" />
                  <span>Internal Complaints (ICC)</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('notices')} className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3 text-stone-600" />
                  <span>Examination Forms 2026</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenProspectus} className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3 text-stone-600" />
                  <span>Scholarship & Fee Norms</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenDisclosures} className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3 text-stone-600" />
                  <span>RTI Act Disclosures</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Helplines */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-bold text-amber-400 uppercase tracking-wider text-xs border-b border-stone-800 pb-2">
              Campus Administrative Desk
            </h5>
            <div className="space-y-2.5 text-stone-400 text-[11px]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{INSTITUTE_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${INSTITUTE_DETAILS.phone}`} className="hover:text-white font-mono text-stone-200">
                  {INSTITUTE_DETAILS.formattedPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${INSTITUTE_DETAILS.email}`} className="hover:text-white text-stone-200 truncate">
                  {INSTITUTE_DETAILS.email}
                </a>
              </div>
              <div className="pt-2 text-[10px] text-stone-500">
                National Anti-Ragging Helpline (24x7): <strong className="text-red-400">1800-180-5522</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Verification Strip */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Fakirchand Vidyapeeth Educational Institute. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button onClick={onOpenDisclosures} className="hover:text-stone-300 underline cursor-pointer">
              Privacy Policy & Terms
            </button>
            <button onClick={onOpenDisclosures} className="hover:text-stone-300 underline cursor-pointer">
              NCTE, PCI & UGC Compliance
            </button>
            <button onClick={onOpenGrievance} className="hover:text-stone-300 underline cursor-pointer">
              Grievance Officer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
