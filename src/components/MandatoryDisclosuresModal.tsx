import React from 'react';
import { X, ShieldCheck, Download, ExternalLink, FileText, CheckCircle } from 'lucide-react';
import { MANDATORY_DISCLOSURES, INSTITUTE_DETAILS } from '../data/instituteData';

interface MandatoryDisclosuresModalProps {
  isOpen: boolean;
  onClose: () => void;
  isHindi: boolean;
}

export const MandatoryDisclosuresModal: React.FC<MandatoryDisclosuresModalProps> = ({
  isOpen,
  onClose,
  isHindi,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-950 via-stone-900 to-red-950 text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display">
                {isHindi ? "वैधानिक एवं अनिवार्य प्रकटीकरण (Mandatory Disclosures)" : "Statutory & Mandatory Disclosures"}
              </h3>
              <p className="text-[11px] text-stone-300 font-serif-body">
                Compliant with NCTE, PCI, UGC, NAAC & State University Regulatory Mandates
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close disclosures"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 leading-relaxed">
            In compliance with the directives of the National Council for Teacher Education (NCTE), Pharmacy Council of India (PCI), University Grants Commission (UGC), and State Technical Education Board, the following statutory records, approvals, and regulatory committees of Fakirchand Vidyapeeth Educational Institute are placed in the public domain for prospective students, parents, and stakeholders.
          </div>

          <div className="space-y-3">
            {MANDATORY_DISCLOSURES.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-stone-200 bg-white hover:border-amber-500/60 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-red-50 text-red-800 flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900 font-display">
                      {item.title}
                    </h4>
                    <span className="text-[11px] text-stone-500 font-mono">
                      Statutory Order / Ref: {item.refNo}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    alert(`Downloading official certified document: ${item.file}`);
                  }}
                  className="shrink-0 px-3.5 py-1.5 rounded-lg border border-stone-300 hover:border-red-900 bg-stone-50 hover:bg-stone-100 text-xs font-semibold text-stone-800 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-red-800" />
                  <span>Download PDF</span>
                </button>
              </div>
            ))}
          </div>

          {/* Institutional Credentials */}
          <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 space-y-1">
            <div className="font-bold">Institutional Regulatory Identity:</div>
            <div><strong>AISHE Code:</strong> {INSTITUTE_DETAILS.aisheCode}</div>
            <div><strong>Affiliating University Code:</strong> {INSTITUTE_DETAILS.collegeCode}</div>
            <div><strong>RTI Public Information Officer:</strong> Shri R. K. Saxena, Registrar (Phone: {INSTITUTE_DETAILS.phone})</div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-stone-50 px-6 py-3 border-t border-stone-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-lg cursor-pointer"
          >
            Close Disclosures
          </button>
        </div>
      </div>
    </div>
  );
};
