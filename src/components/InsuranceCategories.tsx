import React from 'react';
import { INSURANCE_CATEGORIES } from '../data/insuranceData';

interface CategoryItemInfo {
  id: string;
  name: string;
  category: string;
  typicalCoverage: string;
  startingAt: string;
  desc: string;
}

interface InsuranceCategoriesProps {
  onSelectItem: (item: CategoryItemInfo) => void;
  onSelectCategoryOverview: (categoryKey: string, categoryTitle: string) => void;
}

export const InsuranceCategories: React.FC<InsuranceCategoriesProps> = ({
  onSelectItem,
  onSelectCategoryOverview,
}) => {
  const categoryKeys = Object.keys(INSURANCE_CATEGORIES) as Array<keyof typeof INSURANCE_CATEGORIES>;

  return (
    <section className="w-full bg-[#f9f9f9] px-6 lg:px-8 py-8 border-t border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryKeys.map((key) => {
          const cat = INSURANCE_CATEGORIES[key];
          return (
            <div key={key} className="flex flex-col">
              {/* Category Header Badge */}
              <button
                type="button"
                onClick={() => onSelectCategoryOverview(key, cat.title)}
                className="bg-[#4c4d51] hover:bg-[#3d3e42] text-white font-condensed text-xs font-semibold py-1.5 px-3 rounded text-center tracking-wider uppercase mb-3 shadow-inner cursor-pointer transition w-full"
              >
                {cat.title}
              </button>

              {/* Sub-item links */}
              <ul className="text-[11px] text-[#888] space-y-1.5 pl-1">
                {cat.items.map((item) => (
                  <li
                    key={item.id}
                    onClick={() =>
                      onSelectItem({
                        ...item,
                        category: cat.title,
                      })
                    }
                    className="hover:text-sky-600 cursor-pointer flex items-center transition group select-none"
                  >
                    <span className="text-gray-400 group-hover:text-sky-500 mr-1.5 font-bold">›</span>
                    <span className="font-semibold">{item.name}</span>
                    <span className="ml-auto text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition">
                      from {item.startingAt}
                    </span>
                  </li>
                ))}
              </ul>

              {/* "MORE" link */}
              <div className="mt-3 pl-1">
                <button
                  type="button"
                  onClick={() => onSelectCategoryOverview(key, cat.title)}
                  className="text-[10px] text-sky-500 hover:text-sky-700 hover:underline font-bold uppercase tracking-wider cursor-pointer"
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
