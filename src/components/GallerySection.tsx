import React, { useState } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/instituteData';

interface GallerySectionProps {
  isHindi: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ isHindi }) => {
  const [filterCat, setFilterCat] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Moot Court', 'Campus', 'Seminars', 'Cultural', 'Sports'];

  const filteredItems = filterCat === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((g) => g.category === filterCat);

  const openLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((x) => x.id === item.id);
    setLightboxIndex(idx);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-bold text-red-800 uppercase tracking-widest font-serif">
            {isHindi ? "परिसर गतिविधियां एवं चित्र वीथिका" : "Campus Life & Visual Chronology"}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 font-display mt-2">
            {isHindi ? "चित्र दीर्घा (Photo Gallery)" : "Institute Photo Gallery"}
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-3 rounded-full"></div>
          <p className="text-stone-600 text-sm sm:text-base mt-3 font-serif-body">
            {isHindi
              ? "दीक्षांत समारोह, राष्ट्रीय मूट कोर्ट, सेमिनार, खेलकूद एवं सांस्कृतिक महोत्सव की यादगार झलकियां।"
              : "Moments of intellectual victory, academic ceremonies, cultural jubilation, and campus life at Fakirchand Vidyapeeth."}
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCat(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                filterCat === cat
                  ? 'bg-red-900 text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              {cat === 'All' ? (isHindi ? 'सभी' : 'All') : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative bg-stone-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer transition-all aspect-[4/3]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 left-3 bg-stone-950/70 backdrop-blur-md text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded border border-stone-700">
                {item.category}
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h4 className="text-sm font-bold font-display group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-stone-300 line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="p-2.5 rounded-full bg-amber-500 text-stone-950 shadow-lg">
                  <Eye className="w-5 h-5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-stone-800 text-stone-200 hover:text-white hover:bg-stone-700 cursor-pointer"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 p-2 rounded-full bg-stone-800 text-stone-200 hover:text-white hover:bg-stone-700 cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 p-2 rounded-full bg-stone-800 text-stone-200 hover:text-white hover:bg-stone-700 cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={GALLERY_ITEMS[lightboxIndex].imageUrl}
              alt={GALLERY_ITEMS[lightboxIndex].title}
              className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center text-white mt-4 max-w-xl">
              <span className="text-[11px] font-bold uppercase text-amber-400">
                {GALLERY_ITEMS[lightboxIndex].category}
              </span>
              <h3 className="text-lg font-bold font-display mt-0.5">
                {GALLERY_ITEMS[lightboxIndex].title}
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                {GALLERY_ITEMS[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
