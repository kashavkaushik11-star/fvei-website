import React, { useState } from 'react';
import { X, ShieldAlert, CheckCircle2, Send, PhoneCall } from 'lucide-react';
import { INSTITUTE_DETAILS } from '../data/instituteData';

interface GrievanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  isHindi: boolean;
}

export const GrievanceModal: React.FC<GrievanceModalProps> = ({ isOpen, onClose, isHindi }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: 'Current Student',
    contact: '',
    email: '',
    category: 'Anti-Ragging Squad',
    description: '',
    isConfidential: true,
  });

  const [ticketId, setTicketId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedTicket = `GRV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(generatedTicket);
  };

  const handleReset = () => {
    setTicketId(null);
    setFormData({
      name: '',
      role: 'Current Student',
      contact: '',
      email: '',
      category: 'Anti-Ragging Squad',
      description: '',
      isConfidential: true,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-950 to-stone-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-5 h-5 text-red-400" />
            <div>
              <h3 className="text-base font-bold font-display">
                {isHindi ? "ऑनलाइन छात्र शिकायत व रैगिंग निवारण पोर्टल" : "Student Grievance & Anti-Ragging Portal"}
              </h3>
              <p className="text-[11px] text-stone-300 font-serif-body">
                Internal Complaints Committee (ICC) & Student Welfare Cell
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close grievance dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {ticketId ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-stone-900 font-display">
                Grievance Registered Successfully
              </h4>
              <p className="text-xs text-stone-600 max-w-md mx-auto">
                Your complaint has been submitted under strict confidentiality to the Convener, Proctorial Board & Grievance Redressal Committee.
              </p>
              <div className="p-3 bg-stone-100 rounded-lg inline-block border border-stone-300">
                <span className="text-xs text-stone-500 block">Tracking Ticket ID:</span>
                <span className="font-mono font-bold text-red-900 text-base">{ticketId}</span>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2 rounded-lg bg-stone-900 text-white font-bold text-xs hover:bg-stone-800 cursor-pointer"
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="p-3 bg-red-50 rounded-lg border border-red-200 text-red-900 text-[11px] flex items-center justify-between">
                <span>Direct Toll-Free Anti-Ragging Helpline: <strong>1800-180-5522</strong></span>
                <PhoneCall className="w-4 h-4 text-red-700" />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Your Full Name (नाम) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Rahul Kumar / Anonymous (if sensitive)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-900 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Grievance Cell / Committee *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white focus:ring-2 focus:ring-red-900"
                  >
                    <option value="Anti-Ragging Squad">Anti-Ragging Squad</option>
                    <option value="Internal Complaints Committee (ICC)">Women's Safety & ICC</option>
                    <option value="Examination & Results">Examination & Results</option>
                    <option value="Hostel & Canteen Facility">Hostel & Mess Grievance</option>
                    <option value="Academic & Faculty Mentorship">Academic & Library</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Mobile / Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit Phone"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Incident or Complaint Particulars (शिकायत का विवरण) *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Please state details regarding date, location, individuals involved, and the specific relief requested..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-900"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="confidential"
                  checked={formData.isConfidential}
                  onChange={(e) => setFormData({ ...formData, isConfidential: e.target.checked })}
                  className="w-4 h-4 text-red-900 rounded"
                />
                <label htmlFor="confidential" className="text-[11px] text-stone-600 cursor-pointer">
                  Keep my identity strictly confidential between the Convener and Disciplinary Committee
                </label>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-stone-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-stone-300 rounded-lg text-stone-700 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-red-900 hover:bg-red-800 text-white rounded-lg font-bold flex items-center gap-1.5 shadow cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Formal Grievance</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
