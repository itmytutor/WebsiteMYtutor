import React, { useState } from 'react';
import { Phone, Check } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyPolicy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyPolicy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+63 915 993 7065');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full bg-[#f4f4f4] border-t border-gray-200 px-6 lg:px-8 py-5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-sans">
        {/* Copyright & Legal */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/aistudio/1_4688ea95.jpg"
            alt="MyTutorPH Official Seal"
            className="w-6 h-6 rounded-full object-cover border border-[#fbc232] shrink-0"
          />
          <div>
            <span>
              © 2026 <strong className="font-bold font-condensed tracking-wide"><span className="text-[#2b5da6]">MY</span><span className="text-[#69bc45]">TUTOR</span><span className="text-[#fbc232]">PH</span></strong>. All Rights Reserved.
            </span>
            <span className="mx-2">|</span>
            <button
              type="button"
              onClick={onOpenPrivacyPolicy}
              className="hover:text-gray-800 hover:underline transition cursor-pointer text-gray-600"
            >
              Privacy Policy
            </button>
          </div>
        </div>

        {/* Contact Phone */}
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-[#2b5da6] fill-current" />
          <a
            href="tel:+639159937065"
            className="font-condensed text-xl lg:text-2xl text-[#2b5da6] hover:text-[#1e4379] font-bold tracking-tight transition"
          >
            +63 915 993 7065
          </a>
          <button
            onClick={handleCopyPhone}
            title="Copy phone number"
            className="text-[10px] uppercase font-semibold text-gray-400 hover:text-gray-600 px-1.5 py-0.5 rounded border border-gray-200 ml-1 cursor-pointer"
          >
            {copied ? (
              <span className="text-[#69bc45] flex items-center gap-0.5 font-bold">
                <Check className="w-3 h-3" /> Copied
              </span>
            ) : (
              'Copy'
            )}
          </button>
        </div>
      </div>
    </footer>
  );
};
