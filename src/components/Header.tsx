import React, { useState } from 'react';
import { NavTab } from '../types';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenConsultationModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: NavTab[] = [
    'HOME',
    'ABOUT US',
    'SERVICES',
    'CONTACTS'
  ];

  return (
    <header className="w-full bg-[#f4f4f4] border-b border-gray-200">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 py-0">
        {/* Logo and Mobile Toggle */}
        <div className="w-full md:w-auto py-4 md:py-6 flex items-center justify-between">
          <button
            onClick={() => {
              onSelectTab('HOME');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-3xl lg:text-4xl tracking-tight uppercase font-condensed font-bold text-[#35363a] select-none hover:opacity-90 transition text-left cursor-pointer"
          >
            MyTutorPH
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex flex-wrap items-center justify-center font-condensed text-xs lg:text-[13px] tracking-wider uppercase font-semibold">
          {navItems.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => onSelectTab(tab)}
                className={`px-5 lg:px-6 py-5 transition-colors cursor-pointer border-b-2 ${
                  isActive
                    ? 'text-white bg-[#8cbbe0] border-[#7cb5df] shadow-sm'
                    : 'text-[#444] border-transparent hover:text-[#8cbbe0] hover:bg-gray-100/70'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-1">
          {navItems.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => {
                  onSelectTab(tab);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left font-condensed text-sm uppercase font-semibold px-3 py-2.5 rounded transition ${
                  isActive
                    ? 'bg-[#8cbbe0] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
