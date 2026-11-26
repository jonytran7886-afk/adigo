import React from 'react';
import { FileText, Heart, Tag, Sparkles, Headphones, ChevronRight } from 'lucide-react';
import { AppTabId } from '../../../../config/appSectionConfig';
import { BrandLogo } from '../../../hero/Header/BrandLogo';

interface ScreenProps {
  onNavigate?: (tab: AppTabId) => void;
}

export const AppMembershipScreen: React.FC<ScreenProps> = ({ onNavigate }) => {
  const menuItems = [
    { label: 'Đơn hàng của tôi', icon: FileText, tab: 'orders' as AppTabId },
    { label: 'Sản phẩm yêu thích', icon: Heart, tab: 'discover' as AppTabId },
    { label: 'Ưu đãi', icon: Tag },
    { label: 'Tiện ích', icon: Sparkles },
    { label: 'Hỗ trợ khách hàng', icon: Headphones },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-white px-3.5 pt-2 pb-4 gap-3">
      {/* User Profile Row */}
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#345EAA] to-[#4C9DC6] text-white font-display text-xs font-bold flex items-center justify-center shrink-0">
          MA
        </div>
        <div>
          <p className="font-display text-sm font-bold text-[#112D52]">Minh Anh</p>
          <p className="text-[10px] text-[#52677D]">Tài khoản thành viên minh họa</p>
        </div>
      </div>

      {/* ADIGO Brand Gradient Membership Card (No unapproved tiers or fake points) */}
      <div className="rounded-2xl adigo-brand-gradient p-3.5 text-white shadow-[0_10px_24px_rgba(52,94,170,0.22)]">
        <div className="flex items-center justify-between">
          <span className="bg-white/95 px-2 py-1 rounded-lg">
            <BrandLogo size="sm" />
          </span>
          <span className="text-[9.5px] font-semibold text-white/90">Thẻ thành viên</span>
        </div>
        <p className="font-display text-sm font-bold mt-4">Kết nối ADIGO App & Mart</p>
        <p className="text-[9.5px] text-white/85 mt-0.5">
          Đồng bộ trải nghiệm mua sắm và ưu đãi thành viên
        </p>
      </div>

      {/* Utility List */}
      <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-1.5">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => item.tab && onNavigate?.(item.tab)}
              className="w-full rounded-xl bg-[#F6F9FC] border border-[#E2ECF4] px-3 py-2 flex items-center justify-between text-left hover:border-[#345EAA]/35 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Icon className="w-3.5 h-3.5 text-[#345EAA]" />
                <span className="text-[10.5px] font-semibold text-[#112D52]">{item.label}</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-[#52677D]" />
            </button>
          );
        })}
      </div>
    </div>
  );
};
