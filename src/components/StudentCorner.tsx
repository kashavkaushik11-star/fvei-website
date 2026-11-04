import React from 'react';
import { ShieldAlert, Award, HeartHandshake, BookOpen, Quote, Phone, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/instituteData';

interface StudentCornerProps {
  isHindi: boolean;
  onOpenGrievance: () => void;
}

export const StudentCorner: React.FC<StudentCornerProps> = ({ isHindi, onOpenGrievance }) => {
  return (
    <section id="student-corner" className="py-16 sm:py-20 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold text-red-800 uppercase tracking-widest font-serif">
            {isHindi ? "छात्र कल्याण, विधिक सहायता एवं उपलब्धियां" : "Student Welfare, Advocacy & Accomplishments"}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 font-display mt-2">
            {isHindi ? "छात्र जीवन एवं कल्याण प्रकोष्ठ" : "Student Life & Welfare Cells"}
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-3 rounded-full"></div>
          <p className="text-stone-600 text-sm sm:text-base mt-3 font-serif-body">
            {isHindi
              ? "रैगिंग मुक्त सुरक्षित परिसर, सक्रिय मूट कोर्ट परिषद, समाजोपयोगी निःशुल्क विधिक सहायता एवं उत्कृष्ट न्यायिक परिणाम।"
              : "A vibrant collegiate culture ensuring zero-ragging compliance, trial practice societies, gender equity, and career advancement."}
          </p>
        </div>

        {/* 4 Cells / Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Anti-Ragging */}
          <div className="bg-white p-6 rounded-xl border border-red-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-red-100 text-red-700 flex items-center justify-center mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900 font-display">
                {isHindi ? "रैगिंग रोधी प्रकोष्ठ" : "Anti-Ragging Squad"}
              </h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                {isHindi
                  ? "परिसर में रैगिंग सर्वथा वर्जित व दंडनीय अपराध है। त्वरित सहायता हेतु २४ घंटे हेल्पलाइन सक्रिय है।"
                  : "Strict zero-tolerance policy in accordance with Supreme Court guidelines and UGC regulations."}
              </p>
              <div className="mt-3 text-[11px] font-semibold text-red-900 bg-red-50 p-2 rounded border border-red-100">
                Helpline: 1800-180-5522 (Toll-Free)
              </div>
            </div>
            <button
              onClick={onOpenGrievance}
              className="mt-4 min-h-[44px] px-2 py-2 text-xs font-bold text-red-800 hover:underline text-left cursor-pointer"
            >
              {isHindi ? "ऑनलाइन शिकायत दर्ज करें →" : "File Online Grievance →"}
            </button>
          </div>

          {/* Teacher Trainees & CTET Forum */}
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900 font-display">
                {isHindi ? "शिक्षक प्रशिक्षण व टीईटी प्रकोष्ठ" : "Teacher Trainees & TET Cell"}
              </h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                {isHindi
                  ? "बी.एड. व बीटीसी छात्रों हेतु नियमित माइक्रो-टीचिंग, लेसन प्लानिंग एवं सीटीईटी/यूपीटीईटी विशेष तैयारी।"
                  : "Dedicated coaching for CTET, State TET, lesson planning, and primary/secondary school teaching internships."}
              </p>
            </div>
            <div className="mt-4 text-[11px] text-amber-900 font-semibold">
              CTET & State TET Special Batches
            </div>
          </div>

          {/* Health & Pharmacy Outreach */}
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900 font-display">
                {isHindi ? "स्वास्थ्य व औषधीय परामर्श सेल" : "Health & Pharmacy Cell"}
              </h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                {isHindi
                  ? "डी.फार्मा छात्रों द्वारा ग्रामीण क्षेत्रों में निःशुल्क प्राथमिक चिकित्सा, पोषण व दवा परामर्श शिविर।"
                  : "Free health checkups, blood pressure monitoring, BMI screenings, and drug counseling camps in surrounding villages."}
              </p>
            </div>
            <div className="mt-4 text-[11px] text-blue-900 font-semibold">
              Rural Health Outreach Program
            </div>
          </div>

          {/* Teacher & Healthcare Placement */}
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900 font-display">
                {isHindi ? "शिक्षक एवं हॉस्पिटल प्लेसमेंट" : "Teaching & Pharma Placement"}
              </h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                {isHindi
                  ? "प्रतिष्ठित विद्यालयों, अस्पतालों एवं फार्मास्यूटिकल कंपनियों में कैंपस रिक्रूटमेंट व इंटर्नशिप सहायता।"
                  : "Campus placement drives across leading schools, multi-specialty hospital pharmacies, and pharma manufacturing units."}
              </p>
            </div>
            <div className="mt-4 text-[11px] text-emerald-900 font-semibold">
              95%+ Teacher & Pharmacist Placement Track
            </div>
          </div>
        </div>

        {/* Student Testimonials Banner */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-bold uppercase text-amber-700 tracking-wider">
              Alumni Voices & Selections
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-900 mt-1">
              {isHindi ? "पूर्व छात्रों की सफलता गाथा" : "Words from Our Proud Alumni"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testi, idx) => (
              <div
                key={idx}
                className="bg-stone-50 p-5 rounded-xl border border-stone-200/80 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-amber-500 mb-2 opacity-70" />
                  <p className="text-xs text-stone-700 font-serif-body italic leading-relaxed">
                    "{testi.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-stone-200">
                  <img
                    src={testi.avatar}
                    alt={testi.name}
                    className="w-10 h-10 rounded-full object-cover border border-amber-600"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">{testi.name}</h4>
                    <p className="text-[11px] font-semibold text-red-900">{testi.designation}</p>
                    <p className="text-[10px] text-stone-500">{testi.batch}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
