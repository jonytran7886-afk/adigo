import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Bell,
  ShoppingCart,
  Heart,
  Plus,
  Check,
  ArrowRight,
  Home,
  LayoutGrid,
  ClipboardList,
  User,
  Tag,
} from 'lucide-react';
import { PhoneShell } from '../hero/ProductShowcase/PhoneShell';
import { BrandLogo } from '../hero/Header/BrandLogo';
import { HERO_CONFIG } from '../../config/heroConfig';
import {
  MARKETPLACE_CONFIG,
  MarketplaceTabId,
} from '../../config/marketplaceConfig';
import { FoodThumbnail } from '../hero/ProductShowcase/ProductVisuals';

interface MarketplaceMobileMockupProps {
  activeTab: MarketplaceTabId;
  onSelectTab: (tab: MarketplaceTabId) => void;
  cartIds: string[];
  favoriteIds: string[];
  onToggleCart: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  size?: 'main' | 'side';
}

export const MarketplaceMobileMockup: React.FC<MarketplaceMobileMockupProps> = ({
  activeTab,
  onSelectTab,
  cartIds,
  favoriteIds,
  onToggleCart,
  onToggleFavorite,
  size = 'side',
}) => {
  const [selectedChip, setSelectedChip] = useState<string>('all');

  const mobileCategories = [
    { id: 'meat-eggs', label: 'Thịt', visual: 'pork' as const },
    { id: 'eggs', label: 'Trứng', visual: 'eggs' as const },
    { id: 'veggies', label: 'Rau củ', visual: 'veggies' as const },
    { id: 'fruits', label: 'Trái cây', visual: 'orange' as const },
    { id: 'all', label: 'Khác', visual: 'agri' as const },
  ];

  const suggestedProducts = MARKETPLACE_CONFIG.demoProducts
    .filter((p) => {
      if (selectedChip === 'all') return true;
      if (selectedChip === 'eggs') return p.id === 'mp-3';
      return p.category === selectedChip;
    })
    .slice(0, 2);

  const displayProducts =
    suggestedProducts.length > 0
      ? suggestedProducts
      : MARKETPLACE_CONFIG.demoProducts.slice(0, 2);

  return (
    <PhoneShell size={size} className="shrink-0">
      <div className="flex-1 flex flex-col justify-between bg-[#F8FBFE] overflow-hidden">
        {/* Top Mobile App Header */}
        <div className="px-3.5 pt-1.5 pb-2 bg-white border-b border-[#E8F0F6] shrink-0">
          <div className="flex items-center justify-between">
            <BrandLogo size="sm" className="!h-[18px]" />
            <div className="flex items-center gap-1.5">
              <span className="relative w-6 h-6 rounded-full bg-[#F3F8FC] flex items-center justify-center text-[#142F63]">
                <Bell className="w-3 h-3" />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#398441]" />
              </span>
              <span className="relative w-6 h-6 rounded-full bg-[#F3F8FC] flex items-center justify-center text-[#142F63]">
                <ShoppingCart className="w-3 h-3" />
                {cartIds.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[12px] h-[12px] px-0.5 rounded-full bg-[#398441] text-white text-[7px] font-bold flex items-center justify-center">
                    {cartIds.length}
                  </span>
                )}
              </span>
              <div className="w-6 h-6 rounded-full overflow-hidden border border-[#CDE1F2]">
                <img
                  src={HERO_CONFIG.assets.lifestylePhoto}
                  alt="Tài khoản người dùng ADIGO"
                  width={120}
                  height={90}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Search Pill */}
          <div className="mt-2 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#F2F7FB] border border-[#E1ECF4]">
            <Search className="w-3 h-3 text-[#7A8EA3] shrink-0" />
            <span className="text-[10px] text-[#7A8EA3] truncate">
              Tìm sản phẩm, gian hàng...
            </span>
          </div>
        </div>

        {/* Dynamic Synced Viewport */}
        <div className="flex-1 px-3 py-2 flex flex-col justify-between overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === 'products' && (
              <motion.div
                key="mobile-products"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.24 }}
                className="flex flex-col justify-between h-full gap-2"
              >
                {/* 5 Quick Category Icons */}
                <div className="grid grid-cols-5 gap-1 shrink-0">
                  {mobileCategories.map((cat) => {
                    const active = selectedChip === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedChip(cat.id)}
                        className="flex flex-col items-center gap-0.5 cursor-pointer"
                      >
                        <div
                          className={`w-9 h-9 rounded-full overflow-hidden border p-0.5 transition-all ${
                            active
                              ? 'border-[#398441] bg-[#E8F8F0] scale-105'
                              : 'border-[#E1ECF4] bg-white'
                          }`}
                        >
                          <div className="w-full h-full rounded-full overflow-hidden">
                            <FoodThumbnail type={cat.visual} />
                          </div>
                        </div>
                        <span
                          className={`text-[8.5px] font-semibold truncate max-w-full ${
                            active ? 'text-[#398441]' : 'text-[#52677D]'
                          }`}
                        >
                          {cat.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Fresh Banner */}
                <div className="relative rounded-[14px] overflow-hidden border border-[#CBE7D6] bg-gradient-to-r from-[#DCF5E6] to-[#ECF9F1] p-2.5 flex items-center justify-between gap-2 shrink-0">
                  <div className="max-w-[56%]">
                    <span className="inline-block px-1.5 py-0.5 rounded bg-white/90 text-[#2E7D4A] text-[8px] font-semibold">
                      Mỗi ngày trên ADIGO
                    </span>
                    <p className="mt-1 font-display text-[12px] font-bold text-[#142F63] leading-tight">
                      Tươi ngon mỗi ngày
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedChip('all')}
                      className="mt-1.5 inline-flex items-center gap-0.5 px-2.5 py-1 rounded-full bg-[#247A4B] text-white text-[8.5px] font-semibold cursor-pointer"
                    >
                      Khám phá
                      <ArrowRight className="w-2.5 h-2.5" />
                    </button>
                  </div>
                  <div className="w-[42%] h-[68px] rounded-[10px] overflow-hidden border border-white/80 shrink-0">
                    <img
                      src={HERO_CONFIG.assets.freshBannerPhoto}
                      alt="Sản phẩm tươi ngon trên ADIGO Marketplace"
                      width={480}
                      height={268}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Suggested Products */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-bold text-[#142F63]">
                      Sản phẩm gợi ý
                    </span>
                    <span className="text-[8.5px] font-semibold text-[#398441]">
                      Chọn lọc
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {displayProducts.map((product) => {
                      const inCart = cartIds.includes(product.id);
                      const isFav = favoriteIds.includes(product.id);
                      return (
                        <div
                          key={product.id}
                          className="rounded-[12px] bg-white border border-[#E2ECF4] p-1.5 flex flex-col justify-between shadow-2xs"
                        >
                          <div>
                            <div className="relative h-[64px] rounded-[8px] overflow-hidden bg-[#F4F8FB]">
                              <FoodThumbnail type={product.visual} />
                              <button
                                type="button"
                                onClick={() => onToggleFavorite(product.id)}
                                aria-label={`Yêu thích ${product.name}`}
                                className="absolute top-1 right-1 w-4 h-4 rounded-full bg-white/90 flex items-center justify-center cursor-pointer"
                              >
                                <Heart
                                  className={`w-2.5 h-2.5 ${
                                    isFav
                                      ? 'fill-[#E11D48] text-[#E11D48]'
                                      : 'text-[#64748B]'
                                  }`}
                                />
                              </button>
                            </div>
                            <p className="mt-1 text-[9.5px] font-bold text-[#142F63] truncate">
                              {product.name}
                            </p>
                            <p className="text-[8px] text-[#64748B] truncate">
                              {product.unit}
                            </p>
                          </div>

                          <div className="mt-1 flex items-center justify-between">
                            <span className="text-[9.5px] font-bold text-[#345EAA] tabular-nums">
                              {product.priceVnd}
                            </span>
                            <button
                              type="button"
                              onClick={() => onToggleCart(product.id)}
                              aria-label={`Thêm ${product.name}`}
                              className={`w-4.5 h-4.5 rounded-full flex items-center justify-center cursor-pointer ${
                                inCart
                                  ? 'bg-[#345EAA] text-white'
                                  : 'bg-[#247A4B] text-white'
                              }`}
                            >
                              {inCart ? (
                                <Check className="w-2.5 h-2.5" />
                              ) : (
                                <Plus className="w-2.5 h-2.5" />
                              )}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'stores' && (
              <motion.div
                key="mobile-stores"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.24 }}
                className="flex flex-col gap-2 h-full"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#142F63]">
                    Gian hàng kết nối
                  </span>
                  <span className="text-[8.5px] font-semibold text-[#345EAA] bg-[#EAF5FF] px-1.5 py-0.5 rounded-full">
                    Đối tác
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {MARKETPLACE_CONFIG.demoStores.map((store) => (
                    <div
                      key={store.id}
                      className="rounded-[12px] bg-white border border-[#E2ECF4] p-1.5 flex items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-12 h-11 rounded-lg overflow-hidden border border-[#DCEAF5] shrink-0">
                          <img
                            src={store.image}
                            alt={store.name}
                            width={140}
                            height={105}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[9.5px] font-bold text-[#142F63] truncate">
                            {store.name}
                          </p>
                          <p className="text-[8px] text-[#398441] truncate">
                            {store.category}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => onSelectTab('products')}
                        className="px-2 py-1 rounded-full bg-[#EAF5FF] text-[#345EAA] text-[8.5px] font-semibold shrink-0 cursor-pointer"
                      >
                        Xem
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'brands' && (
              <motion.div
                key="mobile-brands"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.24 }}
                className="flex flex-col gap-2 h-full"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#142F63]">
                    Thương hiệu chọn lọc
                  </span>
                  <span className="text-[8.5px] font-semibold text-[#398441] bg-[#E8F8F0] px-1.5 py-0.5 rounded-full">
                    Chính thức
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {MARKETPLACE_CONFIG.demoBrands.map((brand) => (
                    <button
                      key={brand.id}
                      type="button"
                      onClick={() => onSelectTab('products')}
                      className="rounded-[12px] bg-white border border-[#E2ECF4] p-1.5 text-left flex flex-col gap-1.5 cursor-pointer hover:border-[#4C9DC6]"
                    >
                      <div className="relative h-14 rounded-lg overflow-hidden bg-[#F1F7FD]">
                        <img
                          src={brand.image}
                          alt={brand.name}
                          width={180}
                          height={120}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-white/95 flex items-center">
                          {brand.logoType === 'organic-vn' ? (
                            <img
                              src="/assets/organic-vietnam-logo.png"
                              alt="Organic Việt Nam"
                              width={175}
                              height={65}
                              className="h-2.5 w-auto object-contain"
                            />
                          ) : (
                            <BrandLogo variant="icon" size="sm" className="!h-3 !w-3" />
                          )}
                        </div>
                      </div>
                      <p className="text-[9px] font-bold text-[#142F63] line-clamp-2 leading-tight px-0.5">
                        {brand.name}
                      </p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'offers' && (
              <motion.div
                key="mobile-offers"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.24 }}
                className="flex flex-col gap-2 h-full"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#142F63]">
                    Bộ sưu tập & Ưu đãi
                  </span>
                  <span className="text-[8.5px] font-semibold text-[#398441] bg-[#E8F8F0] px-1.5 py-0.5 rounded-full">
                    Thành viên
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {MARKETPLACE_CONFIG.demoOffers.slice(0, 2).map((offer) => (
                    <div
                      key={offer.id}
                      className="rounded-[12px] bg-white border border-[#E2ECF4] p-1.5 flex items-center gap-2"
                    >
                      <div className="w-16 h-14 rounded-lg overflow-hidden shrink-0">
                        <img
                          src={offer.image}
                          alt={offer.title}
                          width={160}
                          height={120}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="inline-flex items-center gap-1 text-[7.5px] font-semibold text-[#345EAA]">
                          <Tag className="w-2.5 h-2.5" />
                          {offer.tag}
                        </span>
                        <p className="mt-0.5 text-[9.5px] font-bold text-[#142F63] leading-snug line-clamp-2">
                          {offer.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom 5-Tab Navigation Bar */}
        <div className="px-2 pt-1.5 pb-2.5 bg-white border-t border-[#E6EFF6] grid grid-cols-5 gap-0.5 shrink-0">
          {[
            { id: 'home', label: 'Trang chủ', Icon: Home, active: activeTab === 'products' },
            { id: 'cats', label: 'Danh mục', Icon: LayoutGrid, active: activeTab === 'brands' || activeTab === 'stores' },
            { id: 'cart', label: 'Giỏ hàng', Icon: ShoppingCart, active: false },
            { id: 'orders', label: 'Đơn hàng', Icon: ClipboardList, active: false },
            { id: 'account', label: 'Cá nhân', Icon: User, active: activeTab === 'offers' },
          ].map(({ id, label, Icon, active }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center gap-0.5"
            >
              <Icon
                className={`w-3.5 h-3.5 ${
                  active ? 'text-[#247A4B]' : 'text-[#6E8296]'
                }`}
              />
              <span
                className={`text-[7.5px] font-semibold ${
                  active ? 'text-[#247A4B]' : 'text-[#6E8296]'
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PhoneShell>
  );
};
