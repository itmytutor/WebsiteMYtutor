/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavTab, PromoCard } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutHomeScreen } from './components/screens/AboutHomeScreen';
import { AboutUsScreen } from './components/screens/AboutUsScreen';
import { ServicesScreen } from './components/screens/ServicesScreen';
import { ContactsScreen } from './components/screens/ContactsScreen';
import { CardDetailModal } from './components/modals/CardDetailModal';
import { CategoryDetailModal } from './components/modals/CategoryDetailModal';
import { PrivacyPolicyModal } from './components/modals/PrivacyPolicyModal';

interface CategoryItemInfo {
  id: string;
  name: string;
  category: string;
  typicalCoverage: string;
  startingAt: string;
  desc: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('HOME');

  // Modals state
  const [selectedPromoCard, setSelectedPromoCard] = useState<PromoCard | null>(null);
  const [selectedCategoryItem, setSelectedCategoryItem] = useState<CategoryItemInfo | null>(null);
  const [selectedCategoryOverview, setSelectedCategoryOverview] = useState<{
    key: string;
    title: string;
  } | null>(null);
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);

  const handleSelectCategoryOverview = (key: string, title: string) => {
    setSelectedCategoryOverview({ key, title });
  };

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="text-gray-700 antialiased min-h-screen flex flex-col items-center bg-[#ededed] py-0 sm:py-4">
      {/* Main Website Container (matches desktop frame of 1020px) */}
      <div className="w-full max-w-[1020px] bg-white shadow-2xl flex flex-col my-0 sm:my-2 transition-all border border-gray-300/60">
        {/* Header */}
        <Header
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
        />

        {/* Dynamic Screen View */}
        <main className="w-full flex-1">
          {activeTab === 'HOME' && (
            <AboutHomeScreen
              onOpenCardDetail={(card) => setSelectedPromoCard(card)}
              onSelectItem={(item) => setSelectedCategoryItem(item)}
              onSelectCategoryOverview={handleSelectCategoryOverview}
              onNavigateToContacts={() => handleSelectTab('CONTACTS')}
              onNavigateToServices={() => handleSelectTab('SERVICES')}
            />
          )}

          {activeTab === 'ABOUT US' && (
            <AboutUsScreen
              onExplorePrograms={() => handleSelectTab('SERVICES')}
              onContactUs={() => handleSelectTab('CONTACTS')}
            />
          )}

          {activeTab === 'SERVICES' && (
            <ServicesScreen
              onSelectItem={(item) => setSelectedCategoryItem(item)}
              onContactSpecialist={() => handleSelectTab('CONTACTS')}
            />
          )}

          {activeTab === 'CONTACTS' && (
            <ContactsScreen
              onExplorePrograms={() => handleSelectTab('SERVICES')}
            />
          )}
        </main>

        {/* Footer */}
        <Footer onOpenPrivacyPolicy={() => setPrivacyPolicyOpen(true)} />
      </div>

      {/* Global Interactive Modals */}
      <CardDetailModal
        card={selectedPromoCard}
        onClose={() => setSelectedPromoCard(null)}
        onConsultationRequest={() => {
          setSelectedPromoCard(null);
          handleSelectTab('CONTACTS');
        }}
      />

      <CategoryDetailModal
        item={selectedCategoryItem}
        categoryTitle={selectedCategoryOverview?.title}
        categoryKey={selectedCategoryOverview?.key}
        onClose={() => {
          setSelectedCategoryItem(null);
          setSelectedCategoryOverview(null);
        }}
        onOpenQuoteModal={() => {
          setSelectedCategoryItem(null);
          setSelectedCategoryOverview(null);
          handleSelectTab('CONTACTS');
        }}
        onOpenAgentFinder={() => {
          setSelectedCategoryItem(null);
          setSelectedCategoryOverview(null);
          handleSelectTab('CONTACTS');
        }}
      />

      <PrivacyPolicyModal
        isOpen={privacyPolicyOpen}
        onClose={() => setPrivacyPolicyOpen(false)}
      />
    </div>
  );
}
