import React, { useState } from 'react';
import { Phone, Check } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyPolicy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyPolicy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+63 2 8920 1456');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full bg-[#f4f4f4] border-t border-gray-200 px-6 lg:px-8 py-5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-sans">
        {/* Copyright & Legal */}
        <div>
          <span>
            © 2026 <strong className="font-semibold text-gray-700">MyTutorPH</strong>. All Rights Reserved.
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

        {/* Contact Phone */}
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-[#8ec3eb] fill-current" />
          <a
            href="tel:+63289201456"
            className="font-condensed text-xl lg:text-2xl text-[#8ec3eb] hover:text-[#7cb5df] font-bold tracking-tight transition"
          >
            +63 (02) 8920 1456
          </a>
          <button
            onClick={handleCopyPhone}
            title="Copy phone number"
            className="text-[10px] uppercase font-semibold text-gray-400 hover:text-gray-600 px-1.5 py-0.5 rounded border border-gray-200 ml-1 cursor-pointer"
          >
            {copied ? (
              <span className="text-green-600 flex items-center gap-0.5">
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
