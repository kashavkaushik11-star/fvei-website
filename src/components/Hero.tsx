import React from 'react';
import {
  GraduationCap,
  Download,
  BookOpen,
  Award,
  Users,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
  Building2,
  Sparkles
} from 'lucide-react';
import { INSTITUTE_DETAILS } from '../data/instituteData';

interface HeroProps {
  isHindi: boolean;
  onOpenAdmissionModal: () => void;
  onOpenProspectus: () => void;
  onScrollToCourses: () => void;
  onScrollToFee: () => void;
  onScrollToFacilities: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  isHindi,
  onOpenAdmissionModal,
  onOpenProspectus,
  onScrollToCourses,
  onScrollToFee,
  onScrollToFacilities,
}) => {
  return (
    <div id="hero" className="relative bg-stone-900 text-white overflow-hidden">
      {/* Background imagery with academic atmosphere */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920"
          alt="Fakirchand Vidyapeeth Campus Architecture"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-90 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-16 md:pt-18 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide uppercase">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>{isHindi ? "४० वर्षों की गौरवशाली शैक्षणिक परंपरा" : "40+ Years of Academic & Professional Excellence"}</span>
              <span className="text-amber-500">·</span>
              <span className="text-stone-300">ESTD. 1984</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-stone-100 leading-tight">
              {isHindi ? (
                <>
                  शिक्षक प्रशिक्षण, फार्मेसी, गृह विज्ञान एवं <br />
                  <span className="text-amber-400">चरित्र निर्माण</span> का अग्रणी केंद्र
                </>
              ) : (
                <>
                  Nurturing Accomplished Educators, <br />
                  <span className="text-amber-400">Pharmacists & Scholars</span> for the Nation
                </>
              )}
            </h1>

            <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl font-serif-body leading-relaxed mx-auto lg:mx-0">
              {isHindi
                ? "फ़कीरचंद विद्यापीठ शिक्षा संस्थान NCTE, PCI एवं UGC द्वारा मान्यता प्राप्त उच्च शिक्षा का शीर्ष केंद्र है। बी.एड (B.Ed), बीटीसी (BTC/D.El.Ed), डी.फार्मा (D.Pharma), बी.एससी. गृह विज्ञान एवं बी.ए. पाठ्यक्रमों के माध्यम से एक सुरक्षित व उज्ज्वल करियर का निर्माण करें।"
                : "Fakirchand Vidyapeeth Educational Institute is an esteemed seat of higher education approved by NCTE for Teacher Education, PCI for Pharmacy, and recognized by UGC. Offering premier B.Ed, BTC (D.El.Ed), D.Pharma, B.Sc Home Science, and B.A. programs with modern laboratories and dedicated faculty."}
            </p>

            {/* Badges row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-stone-300 pt-2">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>NAAC Grade 'A' Accredited</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>NCTE Approved (B.Ed & BTC)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>PCI Approved (D.Pharma)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>UGC 2(f) & 12(B)</span>
              </div>
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                onClick={onOpenAdmissionModal}
                className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-sm shadow-lg hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <GraduationCap className="w-5 h-5" />
                <span>{isHindi ? "ऑनलाइन प्रवेश आवेदन २०२६-२७" : "Apply for Admission 2026-27"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenProspectus}
                className="flex items-center gap-2 px-5 py-3.5 rounded-lg border border-stone-600 hover:border-amber-400 bg-stone-800/80 hover:bg-stone-800 text-stone-200 text-sm font-semibold transition-all shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>{isHindi ? "विवरणिका डाउनलोड करें" : "Download Prospectus"}</span>
              </button>

              <button
                onClick={onScrollToCourses}
                className="flex items-center gap-1.5 px-4 py-3.5 rounded-lg hover:bg-white/10 text-stone-300 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-stone-400" />
                <span>{isHindi ? "सभी ५ पाठ्यक्रम देखें" : "Explore 5 Programs"}</span>
              </button>
            </div>
          </div>

          {/* Right Highlights & Quick Notice Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-stone-900/90 border border-stone-700/80 rounded-xl p-5 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-stone-200 uppercase tracking-wider">
                    {isHindi ? "प्रवेश सूचना २०२६-२७" : "Admissions Desk 2026-27"}
                  </span>
                </div>
                <span className="text-[11px] text-amber-400 font-semibold">
                  Seats Filling Fast
                </span>
              </div>

              <div className="py-4 space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <CalendarCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-200 font-semibold">Programs Offered:</span>
                    <p className="text-stone-300 font-medium">B.Ed, BTC (D.El.Ed), D.Pharma, B.A., B.Sc Home Science</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-200 font-semibold">Helpline & WhatsApp:</span>
                    <p className="text-amber-300 font-mono font-bold text-sm">{INSTITUTE_DETAILS.formattedPhone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-200 font-semibold">Scholarship Assistance:</span>
                    <p className="text-stone-400">Full UP / State Post-Matric & SC/ST/OBC Fee Reimbursement</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenAdmissionModal}
                  className="w-full py-2.5 rounded bg-red-800 hover:bg-red-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <span>{isHindi ? "प्रवेश फॉर्म भरें" : "Proceed to Online Registration"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quick Stat Pill Trio */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-stone-900/70 border border-stone-800 p-3 rounded-lg text-center">
                <div className="text-xl font-extrabold text-amber-400 font-display">15,000+</div>
                <div className="text-[11px] text-stone-400">{isHindi ? "सफल शिक्षक व फार्मासिस्ट" : "Teachers & Pharmacists"}</div>
              </div>
              <div className="bg-stone-900/70 border border-stone-800 p-3 rounded-lg text-center">
                <div className="text-xl font-extrabold text-amber-400 font-display">38,000+</div>
                <div className="text-[11px] text-stone-400">{isHindi ? "पुस्तकालय संदर्भ ग्रंथ" : "Library Volumes"}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Quick Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-stone-800">
          <div
            onClick={onOpenAdmissionModal}
            className="group bg-stone-800/60 hover:bg-stone-800/90 border border-stone-700/60 hover:border-amber-500/50 p-4 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
              {isHindi ? "प्रवेश पोर्टल २०२६" : "Admissions Portal 2026"}
            </h4>
            <p className="text-xs text-stone-400 mt-1">
              {isHindi ? "B.Ed, BTC, D.Pharma, B.A. व गृह विज्ञान में सीधा आवेदन" : "Direct registration, seat matrix & eligibility criteria"}
            </p>
          </div>

          <div
            onClick={onScrollToCourses}
            className="group bg-stone-800/60 hover:bg-stone-800/90 border border-stone-700/60 hover:border-amber-500/50 p-4 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md"
          >
            <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center mb-3 group-hover:bg-red-700 group-hover:text-white transition-colors">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
              {isHindi ? "पाठ्यक्रम एवं विषय सूची" : "Curriculum & Syllabus"}
            </h4>
            <p className="text-xs text-stone-400 mt-1">
              {isHindi ? "सेमेस्टर वार विषय सूची व पीडीएफ डाउनलोड" : "Detailed semester modules & printable curriculum PDFs"}
            </p>
          </div>

          <div
            onClick={onScrollToFee}
            className="group bg-stone-800/60 hover:bg-stone-800/90 border border-stone-700/60 hover:border-amber-500/50 p-4 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
              {isHindi ? "शुल्क कैलकुलेटर व छात्रवृत्ति" : "Fee & Scholarship Estimator"}
            </h4>
            <p className="text-xs text-stone-400 mt-1">
              {isHindi ? "पारदर्शी शुल्क, श्रेणी छूट एवं किस्तवार विवरण" : "Category concession and transparent installment schedule"}
            </p>
          </div>

          <div
            onClick={onScrollToFacilities}
            className="group bg-stone-800/60 hover:bg-stone-800/90 border border-stone-700/60 hover:border-amber-500/50 p-4 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Building2 className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
              {isHindi ? "फार्मेसी लैब व शिक्षण केंद्र" : "Pharmacy & Teaching Labs"}
            </h4>
            <p className="text-xs text-stone-400 mt-1">
              {isHindi ? "आधुनिक लैब, गृह विज्ञान पाकशाला एवं सरस्वती पुस्तकालय" : "Ultra-modern labs, nutrition kitchens & library tour"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
