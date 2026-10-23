import React from 'react';
import { X, Download, BookOpen, Award, CheckCircle2, ShieldCheck, Printer } from 'lucide-react';
import { INSTITUTE_DETAILS, COURSES } from '../data/instituteData';

interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyOnline: () => void;
  isHindi: boolean;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({
  isOpen,
  onClose,
  onApplyOnline,
  isHindi,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-950 via-stone-900 to-red-950 text-white p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-xl font-bold font-display leading-tight">
                {isHindi ? "संस्थान विवरणिका एवं सूचना विवरण (Prospectus 2026-27)" : "Information Brochure & Prospectus 2026-27"}
              </h3>
              <p className="text-xs text-amber-300 font-serif-body">
                {INSTITUTE_DETAILS.name} · Estd. {INSTITUTE_DETAILS.established}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close prospectus"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Prospectus Pages */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8 font-serif-body text-xs sm:text-sm text-stone-800">
          {/* Cover & Identity Section */}
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 text-center relative">
            <div className="text-[11px] font-bold text-amber-800 uppercase tracking-widest font-sans">
              ॥ {INSTITUTE_DETAILS.motto} ॥
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-display mt-2 uppercase">
              {INSTITUTE_DETAILS.name}
            </h2>
            <div className="text-sm font-semibold text-stone-700">
              {INSTITUTE_DETAILS.hindiName}
            </div>
            <p className="text-xs text-stone-500 mt-2 max-w-xl mx-auto">
              {INSTITUTE_DETAILS.recognition} · {INSTITUTE_DETAILS.accreditation}
            </p>
            <div className="mt-4 inline-block bg-red-900 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider font-sans">
              OFFICIAL ADMISSION PROSPECTUS (SESSION 2026-2027)
            </div>
          </div>

          {/* Section 1: Institutional Profile */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-sans uppercase tracking-wider text-red-900 border-b border-stone-200 pb-1.5">
              1. Institutional Heritage & Affiliations
            </h4>
            <p className="leading-relaxed text-stone-700">
              Fakirchand Vidyapeeth Educational Institute was founded in 1984 under the pioneering aegis of Late Pt. Fakirchand Ji to serve as an epitome of pedagogical excellence, healthcare pharmacy, and science education. The Institute holds permanent approval from the National Council for Teacher Education (NCTE) for its B.Ed and BTC programs, Pharmacy Council of India (PCI) for D.Pharma, is recognized by the University Grants Commission (UGC) under Section 2(f) and 12(B), and possesses NAAC Grade 'A' accreditation.
            </p>
          </div>

          {/* Section 2: Approved Seat Matrix 2026-27 */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-sans uppercase tracking-wider text-red-900 border-b border-stone-200 pb-1.5">
              2. Approved Program Intake & Eligibility Matrix
            </h4>
            <div className="overflow-x-auto border border-stone-200 rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200">
                  <tr>
                    <th className="p-3">Program</th>
                    <th className="p-3">Duration</th>
                    <th className="p-3">Approved Intake</th>
                    <th className="p-3">Basic Eligibility</th>
                    <th className="p-3">Annual Tuition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {COURSES.map((c) => (
                    <tr key={c.id} className="hover:bg-stone-50">
                      <td className="p-3 font-semibold text-stone-900">{c.name}</td>
                      <td className="p-3 text-stone-600">{c.duration}</td>
                      <td className="p-3 font-mono font-bold text-stone-800">{c.intake} Seats</td>
                      <td className="p-3 text-stone-600 max-w-xs">{c.eligibility}</td>
                      <td className="p-3 font-bold text-red-900">₹{c.annualFee.toLocaleString('en-IN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: Statutory Rules & Zero Ragging */}
          <div className="space-y-3 bg-red-50/70 p-5 rounded-xl border border-red-200">
            <h4 className="text-sm font-bold font-sans uppercase tracking-wider text-red-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-red-700" />
              <span>3. Statutory Disclosures & Zero Tolerance Towards Ragging</span>
            </h4>
            <p className="text-xs text-stone-700 leading-relaxed">
              In accordance with the directives of the Hon'ble Supreme Court of India in SLP No. (C) 24295/2004 and UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009, ragging in any form is strictly banned and constitutes a cognizable criminal offence. Any candidate found indulging in ragging shall face immediate rustication and criminal FIR lodgement.
            </p>
            <div className="text-xs font-bold text-red-950 font-sans">
              National Anti-Ragging Toll-Free Helpline: 1800-180-5522 | Campus Proctorial Cell: {INSTITUTE_DETAILS.phone}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-stone-50 px-6 py-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={() => {
              alert("Prospectus 2026-27 PDF download initiated. The file will save to your downloads folder.");
            }}
            className="px-4 py-2 border border-stone-300 hover:bg-stone-100 rounded-lg text-xs font-bold text-stone-800 flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-4 h-4 text-red-800" />
            <span>Download Official PDF Prospectus</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onApplyOnline();
            }}
            className="px-6 py-2.5 bg-red-900 hover:bg-red-800 text-white rounded-lg text-xs font-bold shadow transition-colors cursor-pointer"
          >
            {isHindi ? "ऑनलाइन आवेदन पोर्टल पर जाएं" : "Proceed to Online Admission Form"}
          </button>
        </div>
      </div>
    </div>
  );
};
