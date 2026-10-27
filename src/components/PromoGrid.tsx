import React from 'react';
import { PROMO_CARDS } from '../data/insuranceData';
import { PromoCard } from '../types';

interface PromoGridProps {
  onOpenCardDetail: (card: PromoCard) => void;
}

export const PromoGrid: React.FC<PromoGridProps> = ({ onOpenCardDetail }) => {
  return (
    <section className="w-full bg-white px-6 lg:px-8 py-10">
      {/* 3 by 3 (3 across) grid showing all 6 educational program thumbnails */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROMO_CARDS.map((card) => {
          const titleLines = card.title.split('\n');
          return (
            <div
              key={card.id}
              className="flex flex-col border border-gray-200/80 p-3.5 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-[#8ec3eb] transition duration-150 group"
            >
              <h4 className="font-condensed text-lg font-bold text-[#444] mb-3 leading-tight min-h-[46px] group-hover:text-[#8cbbe0] transition-colors uppercase">
                {titleLines[0]}
                {titleLines[1] && (
                  <>
                    <br />
                    <span className="text-sm font-semibold text-gray-500 group-hover:text-sky-600 transition-colors">
                      {titleLines[1]}
                    </span>
                  </>
                )}
              </h4>

              <div className="w-full h-32 sm:h-36 mb-3 overflow-hidden bg-gray-100 relative border border-gray-100">
                <img
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={card.image}
                  loading="lazy"
                />
              </div>

              <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed mb-4 flex-grow">
                {card.snippet}
              </p>

              <div className="pt-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => onOpenCardDetail(card)}
                  className="inline-block gray-btn text-[11px] font-condensed uppercase px-3 py-1 font-bold cursor-pointer rounded-xs"
                >
                  MORE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
