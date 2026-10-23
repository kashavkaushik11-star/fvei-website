import React from 'react';
import { X, Download, FileText, Printer, Building2, ShieldCheck } from 'lucide-react';
import { Notice, INSTITUTE_DETAILS } from '../data/instituteData';

interface NoticeModalProps {
  notice: Notice | null;
  onClose: () => void;
  isHindi: boolean;
}

export const NoticeModal: React.FC<NoticeModalProps> = ({ notice, onClose, isHindi }) => {
  if (!notice) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-300 overflow-hidden my-6">
        {/* Top Control Bar */}
        <div className="bg-stone-900 text-stone-300 px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <FileText className="w-4 h-4 text-amber-400" />
            <span>Official Institutional Notification</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close notice preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Letterhead Body */}
        <div className="p-6 sm:p-8 font-serif-body">
          {/* Institutional Header */}
          <div className="text-center pb-4 border-b-2 border-stone-800">
            <div className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
              ॥ {INSTITUTE_DETAILS.motto} ॥
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-stone-900 font-display uppercase tracking-tight mt-1">
              {INSTITUTE_DETAILS.name}
            </h2>
            <div className="text-xs font-semibold text-stone-700">
              {INSTITUTE_DETAILS.hindiName}
            </div>
            <div className="text-[10px] text-stone-500 mt-1">
              {INSTITUTE_DETAILS.recognition} · NAAC Grade 'A'
            </div>
            <div className="text-[10px] text-stone-500">
              Campus: {INSTITUTE_DETAILS.address} | Email: {INSTITUTE_DETAILS.email}
            </div>
          </div>

          {/* Reference & Date */}
          <div className="flex items-center justify-between text-xs text-stone-600 py-3 border-b border-stone-200 font-sans">
            <div>
              <strong>Dispatch Ref:</strong> <span className="font-mono text-stone-900">{notice.dispatchNo}</span>
            </div>
            <div>
              <strong>Date:</strong> <span>{notice.date}</span>
            </div>
          </div>

          {/* Subject */}
          <div className="my-4 p-3 bg-stone-50 rounded-lg border border-stone-200">
            <span className="text-[11px] font-bold text-red-900 uppercase tracking-wider block font-sans">
              Subject / विषय:
            </span>
            <h3 className="text-sm sm:text-base font-bold text-stone-900 mt-1 font-display">
              {notice.title}
            </h3>
            {notice.hindiTitle && (
              <div className="text-xs text-stone-600 mt-0.5">
                {notice.hindiTitle}
              </div>
            )}
          </div>

          {/* Body Content */}
          <div className="py-2 text-xs sm:text-sm text-stone-800 leading-relaxed space-y-3">
            <p>{notice.content}</p>
            <p>
              All concerned faculty members, department heads, and students are hereby directed to note the contents and comply with the stipulated schedule. For any clarifications, contact the administrative office.
            </p>
          </div>

          {/* Signature Block */}
          <div className="pt-8 flex items-end justify-between text-xs">
            <div className="text-stone-500 font-sans text-[11px]">
              <div>Copy forwarded to:</div>
              <ul className="list-disc list-inside mt-1 text-[10px] text-stone-600">
                <li>Dean of Academics, Head of Education & Pharmacy</li>
                <li>Examination Controller Office</li>
                <li>College Website Notice Board</li>
              </ul>
            </div>

            <div className="text-right">
              <div className="font-serif italic text-sm text-stone-800 font-bold mb-1">R. K. Saxena</div>
              <div className="w-32 border-b border-stone-500 ml-auto mb-1"></div>
              <div className="font-bold text-stone-900 font-sans text-xs">Registrar</div>
              <div className="text-[10px] text-stone-500 font-sans">Fakirchand Vidyapeeth</div>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="bg-stone-50 px-6 py-3.5 border-t border-stone-200 flex items-center justify-between">
          <button
            onClick={() => window.print()}
            className="text-xs text-stone-600 hover:text-stone-900 flex items-center gap-1.5 font-medium cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Notice</span>
          </button>

          <button
            onClick={() => {
              alert(`Downloading official circular: ${notice.attachmentName}`);
            }}
            className="px-4 py-2 bg-red-900 hover:bg-red-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Signed Circular (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
