import React from 'react';
import { Search } from 'lucide-react';
import { HERO_CONFIG } from '../../../config/heroConfig';
import { PhoneShell } from './PhoneShell';
import { FoodThumbnail } from './ProductVisuals';

export const DiscoverPhoneMockup: React.FC = () => {
  return (
    <PhoneShell size="side">
      <div className="flex-1 px-3.5 pt-2 pb-4 flex flex-col gap-2.5 bg-white">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-base font-bold text-[#112D52]">
            {HERO_CONFIG.discoverPhone.title}
          </h3>
          <Search className="w-3.5 h-3.5 text-[#52677D]" />
        </div>

        {/* 2-Column Rounded Visual Category Grid */}
        <div className="grid grid-cols-2 gap-2 flex-1">
          {HERO_CONFIG.discoverPhone.categories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-xl bg-[#F6F9FC] border border-[#E2ECF4] p-1.5 flex flex-col justify-between overflow-hidden"
            >
              <div className="h-[74px] rounded-lg overflow-hidden bg-white">
                <FoodThumbnail type={cat.visualType} />
              </div>
              <span className="mt-1.5 px-0.5 text-[10px] font-semibold text-[#112D52] leading-tight line-clamp-2">
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PhoneShell>
  );
};
