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
import { HERO_CONFIG } from '../../../config/heroConfig';
import { BrandLogo } from '../Header/BrandLogo';
import { PhoneShell } from './PhoneShell';
import { FoodThumbnail } from './ProductVisuals';

export const MainPhoneMockup: React.FC<{ onExploreTap?: () => void }> = ({
  onExploreTap,
}) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [cartIds, setCartIds] = useState<string[]>([]);
  const [favIds, setFavIds] = useState<string[]>([]);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const toggleCart = (id: string) => {
    setCartIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleFav = (id: string) => {
    setFavIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const visibleProducts = showAllProducts
    ? HERO_CONFIG.mainPhone.featuredProducts
    : HERO_CONFIG.mainPhone.featuredProducts.slice(0, 2);

  return (
    <PhoneShell size="main">
      {/* App Top Bar */}
      <div className="px-4 pt-1.5 pb-2 flex items-center justify-between bg-white">
        <BrandLogo size="sm" />
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            className="w-7 h-7 rounded-full bg-[#F5F9FC] flex items-center justify-center text-[#112D52] hover:bg-[#EAF5FF] transition-colors cursor-pointer"
            aria-label="Thông báo ứng dụng"
          >
            <Bell className="w-3.5 h-3.5" />
          </button>
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#345EAA] to-[#4C9DC6] text-white text-[10px] font-bold flex items-center justify-center">
            MA
          </div>
        </div>
      </div>

      {/* Scrollable Inner App Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-3.5 pb-3 flex flex-col gap-3">
        {/* Search Input Bar */}
        <div className="flex items-center justify-between gap-2 bg-[#F4F7FA] border border-[#E2ECF4] rounded-xl px-3 py-2">
          <div className="flex items-center gap-2 min-w-0">
            <Search className="w-3.5 h-3.5 text-[#52677D] shrink-0" />
            <span className="text-[11px] text-[#52677D] truncate">
              {HERO_CONFIG.mainPhone.searchPlaceholder}
            </span>
          </div>
          <Mic className="w-3.5 h-3.5 text-[#52677D] shrink-0" />
        </div>

        {/* Fresh Produce Hero Banner inside App */}
        <div className="relative h-[126px] rounded-2xl overflow-hidden border border-[#E2ECF4] shrink-0">
          <img
            src={HERO_CONFIG.assets.freshBannerPhoto}
            alt="Thực phẩm tươi ngon cho mỗi ngày trên ADIGO"
            width={960}
            height={536}
            decoding="async"
            fetchPriority="high"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#1D5E31]/90 via-[#2E7D32]/65 to-transparent"
            aria-hidden="true"
          />
          <div className="relative z-10 h-full p-3.5 flex flex-col justify-between max-w-[170px]">
            <p className="font-display text-[14px] font-bold text-white leading-[1.2]">
              {HERO_CONFIG.mainPhone.bannerTitle}
            </p>
            <button
              type="button"
              onClick={onExploreTap}
              className="self-start inline-flex items-center gap-1 bg-white text-[#112D52] text-[10px] font-semibold px-2.5 py-1.5 rounded-full shadow-xs cursor-pointer hover:bg-[#EAF5FF] transition-colors"
            >
              <span>{HERO_CONFIG.mainPhone.bannerCta}</span>
              <ArrowRight className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>

        {/* 5 Category Quick Circles */}
        <div className="grid grid-cols-5 gap-1.5 text-center">
          {HERO_CONFIG.mainPhone.categories.map((cat) => {
            const active = selectedCat === cat.id;
            const visualMap: Record<string, 'pork' | 'veggies' | 'orange' | 'eggs' | 'agri'> = {
              meat: 'pork',
              veggies: 'veggies',
              fruits: 'orange',
              eggs: 'eggs',
              agri: 'agri',
            };
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCat(active ? 'all' : cat.id)}
                className="flex flex-col items-center gap-1 cursor-pointer group"
              >
                <div
                  className={`w-10 h-10 rounded-full overflow-hidden border transition-colors ${
                    active ? 'border-[#345EAA] ring-2 ring-[#345EAA]/25' : 'border-[#E2ECF4]'
                  }`}
                >
                  <FoodThumbnail type={visualMap[cat.id]} />
                </div>
                <span className="text-[9.5px] font-medium text-[#112D52] whitespace-nowrap">
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Products */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-display text-xs font-bold text-[#112D52]">
              Sản phẩm nổi bật
            </span>
            <button
              type="button"
              onClick={() => setShowAllProducts((prev) => !prev)}
              className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-[#345EAA] cursor-pointer"
            >
              <span>{showAllProducts ? 'Thu gọn' : 'Xem thêm'}</span>
              <ArrowRight className="w-2.5 h-2.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {visibleProducts.map((item) => {
              const inCart = cartIds.includes(item.id);
              const isFav = favIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-white border border-[#E2ECF4] rounded-2xl p-2 flex flex-col gap-1.5 shadow-[0_2px_10px_rgba(20,47,99,0.04)]"
                >
                  <div className="relative h-20 rounded-xl overflow-hidden bg-[#F6F8FA]">
                    <FoodThumbnail type={item.visualType} />
                    <button
                      type="button"
                      onClick={() => toggleFav(item.id)}
                      className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-white/90 flex items-center justify-center cursor-pointer"
                      aria-label={`Yêu thích ${item.name}`}
                    >
                      <Heart
                        className={`w-3 h-3 ${
                          isFav ? 'fill-red-500 text-red-500' : 'text-[#52677D]'
                        }`}
                      />
                    </button>
                  </div>

                  <p className="text-[11px] font-bold text-[#112D52] truncate">{item.name}</p>

                  <div className="flex items-center justify-between gap-1 mt-auto">
                    <span className="text-[10.5px] font-bold text-[#112D52] tabular-nums">
                      {item.price}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleCart(item.id)}
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                        inCart
                          ? 'bg-[#398441] text-white'
                          : 'bg-[#2C7A4B] hover:bg-[#398441] text-white'
                      }`}
                      aria-label={`Thêm ${item.name} vào giỏ hàng`}
                    >
                      {inCart ? <Check className="w-3 h-3" /> : <Plus className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom 5-Item App Navigation */}
      <div className="shrink-0 bg-white border-t border-[#E2ECF4] px-2 pt-1.5 pb-4 grid grid-cols-5">
        {[
          { label: 'Trang chủ', icon: Home, active: true },
          { label: 'Khám phá', icon: Compass, active: false },
          { label: 'Giỏ hàng', icon: ShoppingBag, active: false, badge: cartIds.length },
          { label: 'Đơn hàng', icon: FileText, active: false },
          { label: 'Tài khoản', icon: User, active: false },
        ].map((nav) => {
          const Icon = nav.icon;
          return (
            <div
              key={nav.label}
              className={`relative flex flex-col items-center gap-0.5 ${
                nav.active ? 'text-[#2C7A4B]' : 'text-[#52677D]'
              }`}
            >
              <Icon className="w-4 h-4" />
              {nav.badge ? (
                <span className="absolute -top-1 right-2.5 min-w-[13px] h-[13px] px-0.5 rounded-full bg-[#345EAA] text-white text-[8px] font-bold flex items-center justify-center tabular-nums">
                  {nav.badge}
                </span>
              ) : null}
              <span className="text-[8.5px] font-semibold whitespace-nowrap">{nav.label}</span>
            </div>
          );
        })}
      </div>
    </PhoneShell>
  );
};
