import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/insuranceData';

interface HighlightBannerProps {
  onLearnMore?: () => void;
}

export const HighlightBanner: React.FC<HighlightBannerProps> = ({ onLearnMore }) => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const currentTestimonial = TESTIMONIALS[activeTestimonialIdx];

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="w-full bg-[#8ec3eb] text-white grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-sky-300/40">
      {/* Left Box: Welcome */}
      <div className="p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5">
        <img
          alt="Hands nurturing learning building blocks"
          className="w-24 h-24 sm:w-28 sm:h-28 object-cover border-2 border-white/60 shadow-sm shrink-0 rounded-xs cursor-pointer hover:opacity-95 transition"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU4A635j7e40TFE1aOcHLqKP1PXSl764-0vYsOq3b9Jgz7nDYl3FQRV32kdPJXF11ZzX432UWMM6PiIdz4XVLQ4bRgYVvvhL68X8K4rRQixp_r6gc4X2SoWg4UClIGrByW-0aadjhJ44LNzmX4CmStmDJG3PezPzkhTRYRG6rhzHWJgQzpdOdA4XDrHVXkstrP-DdDo_qnDJYG3yu15RZVopEJozd_MxChkmyDjKkQJ3suXHHf2ThOcg"
          onClick={onLearnMore}
        />
        <div className="flex-1 text-center sm:text-left">
          <h2 className="font-condensed text-2xl lg:text-3xl font-bold tracking-normal uppercase leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
            WELCOME
          </h2>
          <h3 className="font-normal text-xs lg:text-[13px] text-sky-100 font-semibold mt-1">
            Nurturing every child’s potential with individualized care
          </h3>
          <p className="text-[11px] lg:text-xs text-sky-50 font-normal leading-relaxed mt-2 opacity-95">
            At MyTutorPH, we believe every learner thrives when given the right patience, individualized tools, and compassionate guidance. Whether your child requires SPED intervention, early developmental support, or focused academic enrichment, we walk alongside you.
          </p>
        </div>
      </div>

      {/* Right Box: Quote / Testimonial */}
      <div className="p-6 lg:p-8 flex flex-col justify-center relative group">
        <blockquote className="italic text-sm lg:text-base leading-snug font-normal text-white relative">
          <span className="text-2xl font-serif leading-none mr-1 select-none">“</span>
          {currentTestimonial.quote}
        </blockquote>
        <div className="flex items-center justify-between mt-4">
          <p className="text-[11px] lg:text-xs text-sky-100 italic font-light tracking-wide">
            {currentTestimonial.author}
          </p>
          <div className="flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonialIdx(idx)}
                aria-label={`View testimonial ${idx + 1}`}
                className={`w-2 h-2 rounded-full cursor-pointer transition ${
                  activeTestimonialIdx === idx ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
            <button
              onClick={handleNextTestimonial}
              title="Next quote"
              className="ml-2 text-[10px] uppercase font-bold text-sky-100 hover:text-white cursor-pointer px-1.5 py-0.5 rounded bg-sky-600/30 hover:bg-sky-600/50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
