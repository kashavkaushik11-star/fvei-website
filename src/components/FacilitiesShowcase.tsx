import React, { useState } from 'react';
import { BookOpen, Monitor, Presentation, Trophy, CheckCircle, Eye, Building2 } from 'lucide-react';
import { FACILITIES } from '../data/instituteData';

interface FacilitiesShowcaseProps {
  isHindi: boolean;
  onOpenGallery: () => void;
}

export const FacilitiesShowcase: React.FC<FacilitiesShowcaseProps> = ({ isHindi, onOpenGallery }) => {
  const [activeFacility, setActiveFacility] = useState(FACILITIES[0]);

  return (
    <section id="facilities" className="py-16 sm:py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-widest font-serif">
            {isHindi ? "अत्याधुनिक प्रयोगशालाएं व आधारभूत ढांचा" : "World-Class Academic & Lab Infrastructure"}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display mt-2">
            {isHindi ? "परिसर सुविधाएं एवं उन्नत प्रयोगशालाएं" : "Campus Facilities & Laboratories"}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-stone-300 text-sm sm:text-base mt-3 font-serif-body">
            {isHindi
              ? "शिक्षक प्रशिक्षण हेतु माइक्रो-टीचिंग लैब, पीसीआई अनुमोदित फार्मेसी प्रयोगशालाएं, गृह विज्ञान पोषण व पाकशाला एवं सरस्वती पुस्तकालय।"
              : "An immersive training ecosystem featuring micro-teaching studios, pharmaceutical preparation labs, modular home science kitchens, and extensive library."}
          </p>
        </div>

        {/* Featured Big Showcase */}
        <div className="bg-stone-800/90 rounded-2xl border border-stone-700 overflow-hidden shadow-2xl mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image side */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[340px]">
              <img
                src={activeFacility.image}
                alt={activeFacility.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-stone-950/80 backdrop-blur-md px-4 py-2.5 rounded-lg border border-stone-700/80 flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300">{activeFacility.stats}</span>
                <span className="text-[11px] text-stone-300">Live Campus Facility</span>
              </div>
            </div>

            {/* Content side */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase text-amber-400 tracking-wider">
                  Featured Facility
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                  {isHindi ? activeFacility.hindiTitle : activeFacility.title}
                </h3>
                <div className="text-xs text-stone-400 mt-0.5">
                  {!isHindi ? activeFacility.hindiTitle : activeFacility.title}
                </div>
                <p className="text-xs sm:text-sm text-stone-300 mt-4 leading-relaxed font-serif-body">
                  {activeFacility.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-700/80 flex items-center justify-between">
                <button
                  onClick={onOpenGallery}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>{isHindi ? "दीर्घा में और तस्वीरें देखें" : "View Photo Gallery"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Selector Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {FACILITIES.map((fac) => {
            const isCurrent = fac.id === activeFacility.id;
            return (
              <button
                key={fac.id}
                onClick={() => setActiveFacility(fac)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-amber-500/10 border-amber-500 text-amber-300 ring-1 ring-amber-500'
                    : 'bg-stone-800/60 border-stone-700/70 hover:bg-stone-800 text-stone-300 hover:border-stone-500'
                }`}
              >
                <div className="text-xs font-bold truncate">
                  {isHindi ? fac.hindiTitle.split(' ')[0] : fac.title.split(' ')[0]}...
                </div>
                <div className="text-[10px] text-stone-400 mt-1 line-clamp-1">
                  {fac.stats.split('|')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
