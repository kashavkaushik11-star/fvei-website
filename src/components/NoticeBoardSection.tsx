import React, { useState } from 'react';
import { Search, Bell, FileText, Download, Calendar, ExternalLink, Filter } from 'lucide-react';
import { NOTICES, Notice } from '../data/instituteData';

interface NoticeBoardSectionProps {
  isHindi: boolean;
  onSelectNotice: (notice: Notice) => void;
}

export const NoticeBoardSection: React.FC<NoticeBoardSectionProps> = ({
  isHindi,
  onSelectNotice,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Admissions', 'Examinations', 'Results', 'Events', 'Circular'];

  const filteredNotices = NOTICES.filter((n) => {
    const matchesCategory = selectedCategory === 'All' || n.category === selectedCategory;
    const matchesSearch =
      n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (n.hindiTitle && n.hindiTitle.toLowerCase().includes(searchTerm.toLowerCase())) ||
      n.dispatchNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="notices" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-bold text-red-800 uppercase tracking-widest font-serif">
            {isHindi ? "आधिकारिक अधिसूचनाएं एवं सूचना पट्ट" : "Official Circulars & Dispatches"}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 font-display mt-2">
            {isHindi ? "महाविद्यालय सूचना पट्ट (Notice Board)" : "Institutional Notice Board"}
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-3 rounded-full"></div>
          <p className="text-stone-600 text-sm sm:text-base mt-3 font-serif-body">
            {isHindi
              ? "परीक्षा फॉर्म, प्रवेश तिथियां, मूट कोर्ट प्रतियोगिताएं, परीक्षा परिणाम एवं विश्वविद्यालय संबंधित सभी महत्वपूर्ण परिपत्र।"
              : "Access verified official communications, academic notifications, examination schedules, and scholarship circulations."}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={isHindi ? "सूचना खोजें (कीवर्ड, संदर्भ सं.)..." : "Search notices, circulars, dispatch no..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full min-h-[44px] pl-9 pr-4 py-2 rounded-lg border border-stone-300 text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-red-900 bg-stone-50"
            />
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 min-h-[44px] rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-red-900 text-white font-semibold'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Notices List */}
        <div className="space-y-3.5">
          {filteredNotices.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-2xl border border-stone-200 text-stone-500">
              <FileText className="w-10 h-10 mx-auto text-stone-400 mb-2" />
              <p className="text-sm font-semibold">No notices found matching your search query.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-3 min-h-[44px] px-3 py-2 text-xs text-red-900 hover:underline font-bold"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredNotices.map((notice) => (
              <div
                key={notice.id}
                onClick={() => onSelectNotice(notice)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onSelectNotice(notice); } }}
                className="group bg-white p-5 rounded-xl border border-stone-200 hover:border-amber-500/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-800 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  {/* Date badge */}
                  <div className="shrink-0 text-center bg-stone-100 group-hover:bg-amber-50 border border-stone-200 group-hover:border-amber-200 px-3 py-2 rounded-lg transition-colors">
                    <span className="block text-xs font-bold text-red-900 uppercase">
                      {notice.date.split(' ')[1]}
                    </span>
                    <span className="block text-lg font-extrabold text-stone-900 font-display">
                      {notice.date.split(' ')[0]}
                    </span>
                    <span className="block text-[11px] font-medium text-stone-700">
                      {notice.date.split(' ')[2]}
                    </span>
                  </div>

                  {/* Title & metadata */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                        {notice.category}
                      </span>
                      <span className="text-[11px] text-stone-700 font-mono">
                        Ref: {notice.dispatchNo}
                      </span>
                      {notice.isNew && (
                        <span className="bg-red-600 text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded uppercase animate-pulse">
                          NEW
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-red-900 transition-colors font-display">
                      {isHindi && notice.hindiTitle ? notice.hindiTitle : notice.title}
                    </h3>
                    <p className="text-xs text-stone-700 line-clamp-1 mt-1 font-serif-body">
                      {notice.content}
                    </p>
                  </div>
                </div>

                {/* Right Action */}
                <div className="shrink-0 flex items-center gap-2 self-end md:self-center">
                  <span className="text-xs font-bold text-red-900 group-hover:underline flex items-center gap-1 min-h-[44px] px-2">
                    <span>{isHindi ? "विस्तृत परिपत्र पढ़ें" : "View Circular"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
