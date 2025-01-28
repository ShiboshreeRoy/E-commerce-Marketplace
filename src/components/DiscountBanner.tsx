import React from 'react';
import { Tag, Timer } from 'lucide-react';

export const DiscountBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-2 md:mb-0">
            <Tag className="animate-pulse" />
            <span className="font-semibold">Special Offer: Get 15% off on bulk orders over $1000!</span>
          </div>
          <div className="flex items-center gap-2">
            <Timer size={18} />
            <span className="text-sm">Ends in: 2d 15h 30m</span>
            <button className="ml-4 px-4 py-1 bg-white text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors">
              Claim Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};