import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/insuranceData';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface HeroCarouselProps {
  onCtaClick: (slideId: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onCtaClick }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slide = HERO_SLIDES[currentSlideIndex];

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      className="relative w-full bg-gradient-to-r from-[#e3e3e3] via-[#ececec] to-[#d9d9d9] overflow-hidden select-none border-b border-gray-200"
      data-purpose="hero-carousel"
    >
      {/* Carousel Left Arrow */}
      <button
        aria-label="Previous slide"
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/25 text-white/80 hover:text-white transition cursor-pointer shadow-sm"
        type="button"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Carousel Right Arrow */}
      <button
        aria-label="Next slide"
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/25 text-white/80 hover:text-white transition cursor-pointer shadow-sm"
        type="button"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Carousel Slide Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px] lg:min-h-[420px] items-center relative">
        {/* Hero Text & CTA */}
        <div className="md:col-span-6 px-8 md:pl-14 lg:pl-16 py-8 md:py-10 z-10">
          <div className="font-condensed uppercase leading-[0.92] tracking-tight">
            <span className="block text-5xl lg:text-7xl font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.15)]">
              {slide.tagline1}
            </span>
            <span className="block text-5xl lg:text-7xl font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.15)]">
              {slide.tagline2}
            </span>
            <span className="block text-2xl lg:text-3xl font-normal text-[#8ec3eb] tracking-normal lowercase italic mt-1 font-body drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
              {slide.subtitle}
            </span>
            <span className="block text-3xl lg:text-5xl font-bold text-[#8ec3eb] mt-1 tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
              {slide.highlightText}
            </span>
          </div>

          {slide.description && (
            <p className="mt-3 text-xs md:text-sm text-gray-600 max-w-md leading-relaxed hidden sm:block">
              {slide.description}
            </p>
          )}

          {/* Hero Button */}
          <div className="mt-7 flex items-center gap-3">
            <button
              onClick={() => onCtaClick(slide.id)}
              className="inline-flex items-center gap-2 hero-btn-gradient text-white font-condensed tracking-wider font-semibold text-sm lg:text-base px-6 py-2.5 rounded-full uppercase transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{slide.ctaText}</span>
              <span className="w-4 h-4 bg-white/40 rounded-full inline-flex items-center justify-center text-[9px] text-white">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </span>
            </button>

            {/* Slide Dots */}
            <div className="flex items-center gap-1.5 ml-4">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlideIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 transition-all rounded-full cursor-pointer ${
                    currentSlideIndex === idx
                      ? 'w-6 bg-[#8ec3eb]'
                      : 'w-2 bg-gray-400/50 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:col-span-6 relative flex justify-center md:justify-end items-end self-end h-full">
          <img
            key={slide.image}
            alt={slide.imageAlt}
            className="w-full max-w-[420px] object-cover object-top h-[320px] md:h-[420px] transition-opacity duration-300"
            src={slide.image}
          />
        </div>
      </div>
    </section>
  );
};
