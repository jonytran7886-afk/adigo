import React, { useState } from 'react';
import {
  Bell,
  Search,
  Mic,
  ArrowRight,
  Plus,
  Check,
  Heart,
  Home,
  Compass,
  ShoppingBag,
  FileText,
  User,
} from 'lucide-react';
import { HERO_CONFIG } from '../../../../config/heroConfig';
import { APP_SECTION_CONFIG, AppTabId } from '../../../../config/appSectionConfig';
import { BrandLogo } from '../../../hero/Header/BrandLogo';
import { FoodThumbnail } from '../../../hero/ProductShowcase/ProductVisuals';

interface ScreenProps {
  onNavigate?: (tab: AppTabId) => void;
}

export const AppHomeScreen: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [cartIds, setCartIds] = useState<string[]>([]);
  const [favIds, setFavIds] = useState<string[]>([]);

  const toggleCart = (id: string) => {
    setCartIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleFav = (id: string) => {
    setFavIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-white">
      {/* App Header */}
      <div className="px-4 pt-1.5 pb-2 flex items-center justify-between shrink-0">
        <BrandLogo size="sm" />
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="w-7 h-7 rounded-full bg-[#F4F7FA] flex items-center justify-center text-[#112D52] cursor-pointer"
            aria-label="Thông báo"
          >
            <Bell className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate?.('membership')}
            className="w-7 h-7 rounded-full bg-gradient-to-br from-[#345EAA] to-[#4C9DC6] text-white text-[10px] font-bold flex items-center justify-center cursor-pointer"
            aria-label="Tài khoản thành viên"
          >
            MA
          </button>
        </div>
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-3.5 pb-3 flex flex-col gap-3">
        {/* Search */}
        <button
          type="button"
          onClick={() => onNavigate?.('discover')}
          className="flex items-center justify-between gap-2 bg-[#F4F7FA] border border-[#E2ECF4] rounded-xl px-3 py-2 text-left cursor-pointer"
        >
          <div className="flex items-center gap-2 min-w-0">
            <Search className="w-3.5 h-3.5 text-[#52677D] shrink-0" />
            <span className="text-[11px] text-[#52677D] truncate">
              Tìm sản phẩm, thương hiệu...
            </span>
          </div>
          <Mic className="w-3.5 h-3.5 text-[#52677D] shrink-0" />
        </button>

        {/* Fresh Produce Banner */}
        <div className="relative h-[120px] rounded-2xl overflow-hidden border border-[#E2ECF4] shrink-0">
          <img
            src={HERO_CONFIG.assets.freshBannerPhoto}
            alt="Thực phẩm tươi ngon cho mỗi ngày"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#1D5E31]/90 via-[#2E7D32]/65 to-transparent"
            aria-hidden="true"
          />
          <div className="relative z-10 h-full p-3 flex flex-col justify-between max-w-[168px]">
            <p className="font-display text-[13.5px] font-bold text-white leading-[1.2]">
              Thực phẩm tươi ngon cho mỗi ngày.
            </p>
            <button
              type="button"
              onClick={() => onNavigate?.('discover')}
              className="self-start inline-flex items-center gap-1 bg-white text-[#112D52] text-[10px] font-semibold px-2.5 py-1 rounded-full cursor-pointer"
            >
              <span>Mua sắm ngay</span>
              <ArrowRight className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>

        {/* 6 Categories Horizontal Row */}
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-0.5">
          {APP_SECTION_CONFIG.homeCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => onNavigate?.('discover')}
              className="flex flex-col items-center gap-1 shrink-0 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#E2ECF4] bg-[#F6F9FC]">
                <FoodThumbnail type={cat.visual} />
              </div>
              <span className="text-[9.5px] font-medium text-[#112D52] whitespace-nowrap">
                {cat.label}
              </span>
            </button>
          ))}
        </div>

        {/* Recommended Products */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-display text-xs font-bold text-[#112D52]">
              Sản phẩm đề xuất
            </span>
            <button
              type="button"
              onClick={() => onNavigate?.('discover')}
              className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-[#345EAA] cursor-pointer"
            >
              <span>Xem thêm</span>
              <ArrowRight className="w-2.5 h-2.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {HERO_CONFIG.mainPhone.featuredProducts.slice(0, 4).map((item) => {
              const inCart = cartIds.includes(item.id);
              const isFav = favIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-white border border-[#E2ECF4] rounded-2xl p-2 flex flex-col gap-1.5"
                >
                  <button
                    type="button"
                    onClick={() => onNavigate?.('product')}
                    className="relative h-16 rounded-xl overflow-hidden bg-[#F6F8FA] cursor-pointer"
                    aria-label={`Xem chi tiết ${item.name}`}
                  >
                    <FoodThumbnail type={item.visualType} />
                  </button>
                  <div className="flex items-center justify-between gap-1">
                    <p className="text-[10.5px] font-bold text-[#112D52] truncate">{item.name}</p>
                    <button
                      type="button"
                      onClick={() => toggleFav(item.id)}
                      className="shrink-0 cursor-pointer"
                      aria-label={`Yêu thích ${item.name}`}
                    >
                      <Heart
                        className={`w-3 h-3 ${
                          isFav ? 'fill-red-500 text-red-500' : 'text-[#52677D]'
                        }`}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-semibold text-[#52677D] tabular-nums">
                      {item.price}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleCart(item.id)}
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-white cursor-pointer ${
                        inCart ? 'bg-[#398441]' : 'bg-[#2C7A4B]'
                      }`}
                      aria-label={`Thêm ${item.name}`}
                    >
                      {inCart ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="shrink-0 bg-white border-t border-[#E2ECF4] px-2 pt-1.5 pb-4 grid grid-cols-5">
        {[
          { id: 'home' as AppTabId, label: 'Trang chủ', icon: Home },
          { id: 'discover' as AppTabId, label: 'Khám phá', icon: Compass },
          { id: 'cart' as AppTabId, label: 'Giỏ hàng', icon: ShoppingBag, badge: cartIds.length },
          { id: 'orders' as AppTabId, label: 'Đơn hàng', icon: FileText },
          { id: 'membership' as AppTabId, label: 'Thành viên', icon: User },
        ].map((nav) => {
          const Icon = nav.icon;
          const active = nav.id === 'home';
          return (
            <button
              key={nav.id}
              type="button"
              onClick={() => onNavigate?.(nav.id)}
              className={`relative flex flex-col items-center gap-0.5 cursor-pointer ${
                active ? 'text-[#2C7A4B]' : 'text-[#52677D]'
              }`}
            >
              <Icon className="w-4 h-4" />
              {nav.badge ? (
                <span className="absolute -top-1 right-2.5 min-w-[13px] h-[13px] px-0.5 rounded-full bg-[#345EAA] text-white text-[8px] font-bold flex items-center justify-center tabular-nums">
                  {nav.badge}
                </span>
              ) : null}
              <span className="text-[8.5px] font-semibold whitespace-nowrap">{nav.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
