import React, { useState } from 'react';
import { Megaphone, Play, Pause, ChevronRight } from 'lucide-react';
import { NOTICES } from '../data/instituteData';

interface AnnouncementTickerProps {
  isHindi: boolean;
  onSelectNotice: (notice: typeof NOTICES[0]) => void;
  onViewAllNotices: () => void;
}

export const AnnouncementTicker: React.FC<AnnouncementTickerProps> = ({
  isHindi,
  onSelectNotice,
  onViewAllNotices,
}) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="bg-amber-100 border-b border-amber-300 py-1.5 px-4 overflow-hidden relative shadow-inner">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Label badge */}
        <div className="shrink-0 flex items-center gap-1.5 bg-red-800 text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-sm z-10">
          <Megaphone className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span className="uppercase tracking-wider">
            {isHindi ? "नवीनतम सूचनाएं" : "Latest Updates"}
          </span>
        </div>

        {/* Ticker marquee */}
        <div
          className="flex-1 overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`animate-marquee flex items-center space-x-8 text-xs font-medium text-stone-800 ${
              isPaused ? 'cursor-pointer' : ''
            }`}
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {NOTICES.concat(NOTICES).map((item, idx) => (
              <button
                key={`${item.id}-${idx}`}
                onClick={() => onSelectNotice(item)}
                className="inline-flex items-center gap-2 hover:text-red-800 hover:underline cursor-pointer shrink-0"
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600"></span>
                <span>{isHindi && item.hindiTitle ? item.hindiTitle : item.title}</span>
                {item.isNew && (
                  <span className="bg-red-600 text-[10px] text-white font-bold px-1.5 py-0.2 rounded uppercase">
                    NEW
                  </span>
                )}
                <span className="text-stone-400">·</span>
              </button>
            ))}
          </div>
        </div>

        {/* Ticker Controls */}
        <div className="shrink-0 flex items-center gap-2 z-10 pl-2 border-l border-amber-300">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1 text-stone-600 hover:text-stone-900 transition-colors"
            title={isPaused ? "Play ticker" : "Pause ticker"}
            aria-label="Pause or play ticker"
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={onViewAllNotices}
            className="text-[11px] font-semibold text-red-900 hover:text-red-700 flex items-center gap-0.5 cursor-pointer"
          >
            <span>{isHindi ? "सभी देखें" : "View All"}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
