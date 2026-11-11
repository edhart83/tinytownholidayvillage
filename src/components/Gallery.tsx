import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const galleryItems = [
  {
    title: 'Tiny Houses Glow',
    image: '/glow.jpg?auto=compress&cs=tinysrgb&w=600',
    full: '/glow.jpg',
  },
  {
    title: 'The 30-Foot Tree',
    image: '/tree.jpg?auto=compress&cs=tinysrgb&w=600',
    full: '/tree.jpg',
  },
  {
    title: 'Stroll the Lane',
    image: '/stroll.jpg?auto=compress&cs=tinysrgb&w=600',
    full: '/stroll.jpg',
  },
  {
    title: 'Family Night',
    image: '/family.jpg?auto=compress&cs=tinysrgb&w=600',
    full: '/family.jpg',
  },
  {
    title: 'Warm Lights',
    image: '/warm.jpg?auto=compress&cs=tinysrgb&w=600',
    full: '/warm.jpg',
  },
  {
    title: 'Holiday Magic',
    image: '/tiny_town_holiday_party_invitation.jpg?auto=compress&cs=tinysrgb&w=600',
    full: '/tiny_town_holiday_party_invitation.jpg',
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(() => {
    setActiveIndex(i => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length));
  }, []);

  const next = useCallback(() => {
    setActiveIndex(i => (i === null ? null : (i + 1) % galleryItems.length));
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeIndex, close, prev, next]);

  return (
    <section id="gallery" className="py-20 bg-stone-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <Camera className="w-12 h-12 text-yellow-300 mx-auto" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Photo Moments
            </h2>

            <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-6 rounded-full"></div>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Bring your camera—Tiny Town is full of cozy corners and glowing backdrops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 border border-white/10 cursor-zoom-in text-left"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[90vh] px-16" onClick={e => e.stopPropagation()}>
            <img
              src={galleryItems[activeIndex].full}
              alt={galleryItems[activeIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            <p className="text-center text-white font-semibold mt-3 text-lg">
              {galleryItems[activeIndex].title}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); next(); }}
            className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
}
