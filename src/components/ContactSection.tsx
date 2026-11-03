import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Navigation,
  Building
} from 'lucide-react';
import { INSTITUTE_DETAILS } from '../data/instituteData';

interface ContactSectionProps {
  isHindi: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isHindi }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [inquiry, setInquiry] = useState({
    name: '',
    phone: '',
    email: '',
    courseInterested: 'B.Ed. (Bachelor of Education)',
    message: '',
  });

  const faqs = [
    {
      q: "What is the admission procedure for B.Ed, BTC (D.El.Ed) & D.Pharma?",
      hindiQ: "बी.एड, बीटीसी (डी.एल.एड) एवं डी.फार्मा में प्रवेश प्रक्रिया क्या है?",
      a: "Admissions to B.Ed and BTC are conducted through State Counseling and merit as per NCTE/SCERT guidelines. Admissions to D.Pharma are based on JEECUP / merit in 10+2 with Physics, Chemistry & Biology/Math complying with Pharmacy Council of India (PCI) norms."
    },
    {
      q: "Are government and post-matric scholarships accessible?",
      hindiQ: "क्या सरकारी एवं दशमोत्तर छात्रवृत्ति की सुविधा उपलब्ध है?",
      a: "Yes. Eligible SC, ST, OBC, and EWS students of B.Ed, BTC, D.Pharma, B.A. and Home Science are provided full assistance by our dedicated Scholarship Cell to apply through the State Scholarship Portal and National Scholarship Portal (NSP)."
    },
    {
      q: "Is hostel and mess facility provided for outstation students?",
      hindiQ: "क्या बाहरी छात्रों के लिए छात्रावास एवं मेस की सुविधा है?",
      a: "Yes, Fakirchand Vidyapeeth has independent, secure in-campus residential hostels for both male and female students with 24x7 security guards, CCTV surveillance, Wi-Fi, and 4 hygienic meals daily."
    },
    {
      q: "What practical training is provided for D.Pharma and B.Ed students?",
      hindiQ: "डी.फार्मा व बी.एड. छात्रों के लिए क्या व्यावहारिक प्रशिक्षण उपलब्ध है?",
      a: "D.Pharma candidates undergo extensive practicals in PCI approved compounding & analysis labs plus 500 hours hospital training. B.Ed and BTC trainees complete 16 weeks of intensive practice teaching internship in recognized schools."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold text-red-800 uppercase tracking-widest font-serif">
            {isHindi ? "संस्थान संपर्क एवं परामर्श केंद्र" : "Campus Location & Direct Inquiries"}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 font-display mt-2">
            {isHindi ? "संपर्क करें एवं परिसर भ्रमण" : "Contact & Visit Campus"}
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-3 rounded-full"></div>
          <p className="text-stone-600 text-sm sm:text-base mt-3 font-serif-body">
            {isHindi
              ? "प्रवेश परामर्श, परिसर भ्रमण एवं प्रशासनिक सहायता हेतु हमारे मुख्य कार्यालय से संपर्क करें।"
              : "Our admission counselors and administrative officers are available Monday through Saturday to assist you."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: Contact Info & Map Mock */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-stone-500 tracking-wider">Campus Address</h4>
                  <p className="text-xs sm:text-sm font-semibold text-stone-900 mt-0.5">
                    {INSTITUTE_DETAILS.address}
                  </p>
                  <span className="text-[11px] text-stone-500">Opposite District Administrative Enclave</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-stone-100">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-stone-500 tracking-wider">Telephone & Helplines</h4>
                  <div className="text-xs sm:text-sm font-semibold text-stone-900 mt-0.5">
                    {INSTITUTE_DETAILS.phone} / {INSTITUTE_DETAILS.tollFree}
                  </div>
                  <span className="text-[11px] text-stone-500">Toll-free student help desk</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-stone-100">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-stone-500 tracking-wider">Official Email</h4>
                  <div className="text-xs sm:text-sm font-semibold text-stone-900 mt-0.5">
                    {INSTITUTE_DETAILS.email}
                  </div>
                  <span className="text-[11px] text-stone-500">Inquiries responded within 24 working hours</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-stone-100">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-stone-500 tracking-wider">Administrative Hours</h4>
                  <div className="text-xs sm:text-sm font-semibold text-stone-900 mt-0.5">
                    {INSTITUTE_DETAILS.workingHours}
                  </div>
                  <span className="text-[11px] text-stone-500">Closed on Sundays & Gazetted Holidays</span>
                </div>
              </div>
            </div>

            {/* Campus Map Visual Card */}
            <div className="bg-stone-900 text-white rounded-2xl p-5 border border-stone-800 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-200">
                    Location & Transit Directions
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  Easy Highway Access
                </span>
              </div>
              <p className="text-xs text-stone-300 font-serif-body">
                Situated on the Main Grand Trunk Highway Corridor, 10 minutes from Central Railway Junction and Bus Terminal. Regular city electric buses and college shuttle buses serve the campus.
              </p>
              <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                <span className="text-amber-400 font-semibold">Coordinates: 28.883452° N, 77.8932637° E</span>
                <a
                  href="https://www.google.com/maps/place/Sharda+group+of+Institutions/@28.883452,77.8742093,15z/data=!4m10!1m2!2m1!1sSHARDA+GROUP+OF+INSTITUTION!3m6!1s0x390c64b308829dd7:0x98b93614af6436a5!8m2!3d28.883452!4d77.8932637!15sChtTSEFSREEgR1JPVVAgT0YgSU5TVElUVVRJT05aHSIbc2hhcmRhIGdyb3VwIG9mIGluc3RpdHV0aW9ukgEXZWR1Y2F0aW9uYWxfaW5zdGl0dXRpb27gAQA!16s%2Fg%2F11b809js20?authuser=0&entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-white underline cursor-pointer"
                >
                  View Route Map →
                </a>
              </div>
            </div>
          </div>

          {/* Right: Admission Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
            <h3 className="text-lg font-bold text-stone-900 font-display">
              {isHindi ? "त्वरित प्रवेश पूछताछ फॉर्म (Inquiry Form)" : "Quick Admission Inquiry 2026-27"}
            </h3>
            <p className="text-xs text-stone-500 mt-1 mb-6">
              Fill in your details to receive course brochures, fee waivers, and a callback from our senior admission counselor.
            </p>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-3 bg-stone-50 rounded-xl border border-stone-200">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-stone-900 font-display">
                  Inquiry Received Successfully!
                </h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto">
                  Thank you, <strong className="text-stone-800">{inquiry.name}</strong>. Our academic counseling cell will call you shortly on <span className="font-mono">{inquiry.phone}</span>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3 px-4 py-2 bg-stone-900 text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priyanshu Sharma"
                      value={inquiry.name}
                      onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit Mobile"
                      pattern="[0-9]{10}"
                      value={inquiry.phone}
                      onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="student@example.com"
                      value={inquiry.email}
                      onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Program Interested In *
                    </label>
                    <select
                      value={inquiry.courseInterested}
                      onChange={(e) => setInquiry({ ...inquiry, courseInterested: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-stone-300 bg-white focus:ring-2 focus:ring-red-900"
                    >
                      <option value="B.Ed. (Bachelor of Education)">B.Ed. (Bachelor of Education - २-वर्षीय)</option>
                      <option value="BTC / D.El.Ed (Elementary Education)">BTC / D.El.Ed. (२-वर्षीय डिप्लोमा)</option>
                      <option value="D.Pharma (Pharmacy)">D.Pharma (Diploma in Pharmacy - PCI Approved)</option>
                      <option value="B.Sc. Home Science">B.Sc. Home Science (३-वर्षीय स्नातक)</option>
                      <option value="B.A. (Bachelor of Arts)">B.A. (Bachelor of Arts - ३-वर्षीय स्नातक)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Your Query / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your previous educational qualifications, questions about scholarships, hostel facilities..."
                    value={inquiry.message}
                    onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-900"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-red-900 hover:bg-red-800 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-2 shadow transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry & Request Callback</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Frequently Asked Questions (FAQ) Accordion */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-bold uppercase text-red-800 tracking-wider">
              Student Helpdesk & FAQ
            </span>
            <h3 className="text-xl font-bold font-display text-stone-900 mt-1">
              {isHindi ? "प्रायः पूछे जाने वाले प्रश्न (FAQ)" : "Frequently Asked Questions"}
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-stone-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left bg-stone-50 hover:bg-stone-100 flex items-center justify-between text-xs sm:text-sm font-bold text-stone-900 transition-colors cursor-pointer"
                  >
                    <span>{isHindi ? faq.hindiQ : faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-500 transition-transform ${
                        isOpen ? 'rotate-180 text-red-900' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-white text-xs text-stone-600 leading-relaxed font-serif-body border-t border-stone-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
