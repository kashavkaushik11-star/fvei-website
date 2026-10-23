import React from 'react';
import { ShieldCheck, Target, Eye, BookOpen, Quote, Award, Sparkles } from 'lucide-react';
import { INSTITUTE_DETAILS, LEADERSHIP } from '../data/instituteData';

interface AboutSectionProps {
  isHindi: boolean;
  onOpenProspectus: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ isHindi, onOpenProspectus }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold text-red-800 uppercase tracking-widest font-serif">
            {isHindi ? "संस्थान की पृष्ठभूमि एवं नेतृत्व" : "Institutional Genesis & Leadership"}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 font-display mt-2">
            {isHindi ? "फ़कीरचंद विद्यापीठ का गौरवशाली इतिहास" : "About Fakirchand Vidyapeeth"}
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-3 rounded-full"></div>
          <p className="text-stone-600 text-sm sm:text-base mt-4 font-serif-body">
            {isHindi
              ? "१९८४ में संस्थापित, फ़कीरचंद विद्यापीठ शिक्षा संस्थान NCTE, PCI एवं UGC द्वारा मान्यता प्राप्त, शिक्षक प्रशिक्षण (B.Ed / BTC), फार्मेसी (D.Pharma), गृह विज्ञान एवं मानविकी शिक्षा के क्षेत्र में गुणवत्ता और निष्ठा का पर्याय है।"
              : "Established in 1984 under the noble vision of Late Pt. Fakirchand Ji, our educational institution is renowned for shaping dedicated teachers, certified healthcare pharmacists, nutrition scientists, and visionary scholars."}
          </p>
        </div>

        {/* 3 Pillars: Legacy, Vision, Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-7 rounded-xl border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-red-50 text-red-800 flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-display">
              {isHindi ? "गौरवशाली धरोहर (Our Legacy)" : "Historic Foundation"}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2.5 leading-relaxed">
              {isHindi
                ? "चार दशकों से अधिक समय से, संस्थान ने बी.एड., बीटीसी, डी.फार्मा व गृह विज्ञान के माध्यम से हजारों युवक-युवतियों को स्वावलंबी व राष्ट्र सेवा हेतु तैयार किया है।"
                : "For more than four decades, the Vidyapeeth has stood as a bastion of pedagogical excellence, vocational healthcare training, and science education with profound social responsibility."}
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-display">
              {isHindi ? "हमारा दृष्टिकोण (Our Vision)" : "Institutional Vision"}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2.5 leading-relaxed">
              {isHindi
                ? "विद्यार्थियों में आदर्श शिक्षण कौशल, औषधीय विज्ञान की समझ, वैज्ञानिक दृष्टिकोण एवं मानवीय मूल्यों का संचार करना।"
                : "To be recognized as a premier center of teacher education, pharmaceutical training, nutritional science, and ethical values empowering students to serve schools, healthcare, and society."}
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-display">
              {isHindi ? "हमारा ध्येय (Our Mission)" : "Core Mission"}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2.5 leading-relaxed">
              {isHindi
                ? "आधुनिक माइक्रो-टीचिंग लैब, पीसीआई अनुमोदित फार्मेसी प्रयोगशालाएं, आधुनिक गृह विज्ञान पाकशाला एवं सतत मार्गदर्शन से सर्वांगीण विकास।"
                : "To cultivate modern instructional methods, high-tech pharmaceutical lab expertise, dietetic clinical skills, and comprehensive personality development."}
            </p>
          </div>
        </div>

        {/* Leadership Desk: Chairman & Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chairman Desk */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 pb-6 border-b border-stone-100">
                <img
                  src={LEADERSHIP[1].image}
                  alt={LEADERSHIP[1].name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-amber-600/60 shadow"
                />
                <div>
                  <span className="text-[11px] font-bold uppercase text-red-800 tracking-wider">
                    {LEADERSHIP[1].role}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-stone-900 font-display">
                    {isHindi ? LEADERSHIP[1].hindiName : LEADERSHIP[1].name}
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">{LEADERSHIP[1].title}</p>
                </div>
              </div>

              <div className="relative pt-6">
                <Quote className="w-8 h-8 text-amber-200 absolute -top-1 -left-2 -z-0 opacity-80" />
                <p className="relative z-10 text-stone-700 text-xs sm:text-sm italic font-serif-body leading-relaxed">
                  "{isHindi
                    ? "फ़कीरचंद विद्यापीठ में हम केवल डिग्रियों का वितरण नहीं करते, बल्कि सत्य, न्याय और चरित्र की नींव स्थापित करते हैं। हमारा प्रत्येक विद्यार्थी न्यायपालिका, प्रशासनिक सेवाओं व शीर्ष कॉरपोरेट संस्थाओं में राष्ट्र का मान बढ़ा रहा है।"
                    : LEADERSHIP[1].quote}"
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="font-semibold text-stone-700">Governing Body / Vidyapeeth Trust</span>
              <span>FCV Educational Society</span>
            </div>
          </div>

          {/* Principal Desk */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 pb-6 border-b border-stone-100">
                <img
                  src={LEADERSHIP[2].image}
                  alt={LEADERSHIP[2].name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-amber-600/60 shadow"
                />
                <div>
                  <span className="text-[11px] font-bold uppercase text-red-800 tracking-wider">
                    {LEADERSHIP[2].role}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-stone-900 font-display">
                    {isHindi ? LEADERSHIP[2].hindiName : LEADERSHIP[2].name}
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">{LEADERSHIP[2].title}</p>
                </div>
              </div>

              <div className="relative pt-6">
                <Quote className="w-8 h-8 text-amber-200 absolute -top-1 -left-2 -z-0 opacity-80" />
                <p className="relative z-10 text-stone-700 text-xs sm:text-sm italic font-serif-body leading-relaxed">
                  "{isHindi
                    ? "हमारे सुसज्जित मॉडल माइक्रो-टीचिंग हॉल, पीसीआई प्रमाणित फार्मेसी लैब, आधुनिक गृह विज्ञान प्रायोगिक पाकशाला एवं सरस्वती ई-पुस्तकालय के माध्यम से छात्र व्यावहारिक दक्षता अर्जित करते हैं।"
                    : LEADERSHIP[2].quote}"
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="font-semibold text-stone-700">Direct Contact:</span>
              <a href={`mailto:${INSTITUTE_DETAILS.principalEmail}`} className="text-amber-700 hover:underline">
                {INSTITUTE_DETAILS.principalEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
