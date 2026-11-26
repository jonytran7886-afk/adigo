import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { AppTabId } from '../../../../config/appSectionConfig';
import { FoodThumbnail, FoodVisualType } from '../../../hero/ProductShowcase/ProductVisuals';

interface ScreenProps {
  onNavigate?: (tab: AppTabId) => void;
}

const DISCOVER_ITEMS: { id: string; name: string; group: string; groupLabel: string; visual: FoodVisualType }[] = [
  { id: 'd1', name: 'Thịt gà đóng khay', group: 'meat', groupLabel: 'Thịt tươi', visual: 'chicken' },
  { id: 'd2', name: 'Cá hồi tươi cắt lát', group: 'seafood', groupLabel: 'Hải sản', visual: 'seafood' },
  { id: 'd3', name: 'Rau củ tươi theo mùa', group: 'veggies', groupLabel: 'Rau củ', visual: 'veggies' },
  { id: 'd4', name: 'Cam sành chọn lọc', group: 'fruits', groupLabel: 'Trái cây', visual: 'orange' },
  { id: 'd5', name: 'Trứng gà ta hộp 10 quả', group: 'eggs', groupLabel: 'Trứng & Nông sản', visual: 'eggs' },
  { id: 'd6', name: 'Thịt lợn cắt chuẩn bếp', group: 'meat', groupLabel: 'Thịt tươi', visual: 'pork' },
];

export const AppDiscoverScreen: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');

  const filters = [
    { id: 'all', label: 'Tất cả' },
    { id: 'meat', label: 'Thịt tươi' },
    { id: 'veggies', label: 'Rau củ' },
    { id: 'fruits', label: 'Trái cây' },
    { id: 'seafood', label: 'Hải sản' },
  ];

  const items = DISCOVER_ITEMS.filter((item) => {
    const matchFilter = filter === 'all' || item.group === filter;
    const matchQuery = !query.trim() || item.name.toLowerCase().includes(query.trim().toLowerCase());
    return matchFilter && matchQuery;
  });

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-white px-3.5 pt-2 pb-4 gap-2.5">
      <div className="flex items-center justify-between">
        <p className="font-display text-sm font-bold text-[#112D52]">Khám phá sản phẩm</p>
        <SlidersHorizontal className="w-4 h-4 text-[#52677D]" />
      </div>

      {/* Interactive Search */}
      <div className="flex items-center gap-2 bg-[#F4F7FA] border border-[#E2ECF4] rounded-xl px-2.5 py-2">
        <Search className="w-3.5 h-3.5 text-[#345EAA] shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm sản phẩm, nhóm hàng..."
          aria-label="Tìm sản phẩm trên ADIGO"
          className="w-full bg-transparent text-[11px] text-[#112D52] placeholder:text-[#52677D] focus:outline-none"
        />
      </div>

      {/* Category Filter Row */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5 shrink-0">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              filter === f.id
                ? 'bg-[#142F63] text-white'
                : 'bg-[#F4F7FA] text-[#52677D] hover:text-[#112D52]'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Curated Showcase Strip (Generic brand group, no unverified real sellers) */}
      <div className="rounded-xl bg-gradient-to-r from-[#EAF5FF] to-[#E8F8F0] border border-[#DCEEFB] p-2.5 flex items-center justify-between shrink-0">
        <div>
          <p className="text-[9.5px] font-semibold text-[#345EAA]">Nhóm thương hiệu đối tác</p>
          <p className="text-[11px] font-bold text-[#112D52]">Thực phẩm chọn lọc theo mùa</p>
        </div>
        <ArrowRight className="w-3.5 h-3.5 text-[#142F63]" />
      </div>

      {/* Product Grid */}
      <div className="flex-1 overflow-y-auto no-scrollbar grid grid-cols-2 gap-2 content-start">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate?.('product')}
            className="text-left rounded-2xl bg-[#F6F9FC] border border-[#E2ECF4] p-2 flex flex-col gap-1.5 hover:border-[#345EAA]/40 transition-colors cursor-pointer"
          >
            <div className="h-16 rounded-xl overflow-hidden bg-white">
              <FoodThumbnail type={item.visual} />
            </div>
            <p className="text-[10.5px] font-bold text-[#112D52] leading-tight line-clamp-2">
              {item.name}
            </p>
            <span className="text-[9px] text-[#52677D]">{item.groupLabel}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
