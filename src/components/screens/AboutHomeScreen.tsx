import React from 'react';
import { HeroCarousel } from '../HeroCarousel';
import { HighlightBanner } from '../HighlightBanner';
import { PromoGrid } from '../PromoGrid';
import { InsuranceCategories } from '../InsuranceCategories';
import { PromoCard } from '../../types';

interface CategoryItemInfo {
  id: string;
  name: string;
  category: string;
  typicalCoverage: string;
  startingAt: string;
  desc: string;
}

interface AboutHomeScreenProps {
  onOpenCardDetail: (card: PromoCard) => void;
  onOpenPhotoOnly: (card: PromoCard) => void;
  onSelectItem: (item: CategoryItemInfo) => void;
  onSelectCategoryOverview: (categoryKey: string, categoryTitle: string) => void;
  onNavigateToContacts: (scrollToForm?: boolean) => void;
  onNavigateToServices: () => void;
}

export const AboutHomeScreen: React.FC<AboutHomeScreenProps> = ({
  onOpenCardDetail,
  onOpenPhotoOnly,
  onSelectItem,
  onSelectCategoryOverview,
  onNavigateToContacts,
  onNavigateToServices,
}) => {
  const handleHeroCta = (slideId: string) => {
    if (slideId === 'subject-mastery') {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.mytutorph.app&pcampaignid=web_share';
    } else if (slideId === 'tutor-support') {
      onNavigateToContacts(true);
    } else {
      onNavigateToServices();
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* 1. HeroSection with Carousel */}
      <HeroCarousel onCtaClick={handleHeroCta} />

      {/* 2. HighlightBanner (Welcome & Quote) */}
      <HighlightBanner onLearnMore={onNavigateToServices} />

      {/* 3. PromoGrid (6 thumbnails in 3 by 3) */}
      <PromoGrid
        onOpenCardDetail={onOpenCardDetail}
        onOpenPhotoOnly={onOpenPhotoOnly}
      />

      {/* 4. Educational Categories (4 columns) */}
      <InsuranceCategories
        onSelectItem={onSelectItem}
        onSelectCategoryOverview={onSelectCategoryOverview}
      />
    </div>
  );
};
