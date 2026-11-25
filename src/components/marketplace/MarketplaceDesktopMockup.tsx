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
  Store,
  Award,
  Sparkles,
  ShieldCheck,
  Tag,
} from 'lucide-react';
import { BrandLogo } from '../hero/Header/BrandLogo';
import { HERO_CONFIG } from '../../config/heroConfig';
import {
  MARKETPLACE_CONFIG,
  MarketplaceTabId,
} from '../../config/marketplaceConfig';
import { FoodThumbnail } from '../hero/ProductShowcase/ProductVisuals';

interface MarketplaceDesktopMockupProps {
  activeTab: MarketplaceTabId;
  onSelectTab: (tab: MarketplaceTabId) => void;
  cartIds: string[];
  favoriteIds: string[];
  onToggleCart: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

export const MarketplaceDesktopMockup: React.FC<MarketplaceDesktopMockupProps> = ({
  activeTab,
  onSelectTab,
  cartIds,
  favoriteIds,
  onToggleCart,
  onToggleFavorite,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const filteredProducts = MARKETPLACE_CONFIG.demoProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const visibleProducts = (
    filteredProducts.length > 0
      ? filteredProducts
      : MARKETPLACE_CONFIG.demoProducts
  ).slice(0, 5);

  const filteredStores = MARKETPLACE_CONFIG.demoStores.filter(
    (s) =>
      searchQuery.trim() === '' ||
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredBrands = MARKETPLACE_CONFIG.demoBrands.filter((b) => {
    const matchesSearch =
      searchQuery.trim() === '' ||
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry =
      selectedIndustry === 'all' ||
      (selectedIndustry === 'fresh' && b.id === 'br-1') ||
      (selectedIndustry === 'agri' && b.id === 'br-2') ||
      (selectedIndustry === 'processed' && (b.id === 'br-3' || b.id === 'br-4'));
    return matchesSearch && matchesIndustry;
  });

  return (
    <div
      className="relative w-[560px] xl:w-[640px] h-[458px] xl:h-[488px] rounded-[28px] p-[8px] select-none shrink-0"
      style={{
        background:
          'linear-gradient(145deg, #2B3648 0%, #141B26 48%, #243042 100%)',
        boxShadow:
          '0 28px 64px -16px rgba(20, 47, 99, 0.24), 0 12px 26px -10px rgba(20, 47, 99, 0.14), inset 0 1px 1px rgba(255, 255, 255, 0.35)',
      }}
    >
      {/* Inner Tablet Screen */}
      <div className="relative w-full h-full rounded-[21px] bg-[#F7FAFC] overflow-hidden flex flex-col border border-black/35">
        {/* Subtle Screen Reflection */}
        <div
          className="pointer-events-none absolute inset-0 z-30 opacity-25"
          style={{
            background:
              'linear-gradient(118deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.05) 26%, transparent 45%)',
          }}
          aria-hidden="true"
        />

        {/* Tablet Header */}
        <div className="relative z-20 px-4 py-2.5 bg-white/95 border-b border-[#E4EEF6] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 shrink-0">
            <BrandLogo size="sm" />
          </div>

          <div className="flex-1 max-w-[270px] relative">
            <Search className="w-3.5 h-3.5 text-[#7A8EA3] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm sản phẩm, thương hiệu, gian hàng..."
              aria-label="Tìm kiếm trên ADIGO Marketplace"
              className="w-full h-7.5 pl-8 pr-3 rounded-full bg-[#F1F6FA] border border-[#DFECF5] text-[11px] text-[#112D52] placeholder:text-[#7A8EA3] focus:outline-none focus:border-[#4C9DC6]"
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span
              className="relative w-7 h-7 rounded-full bg-[#F4F8FB] border border-[#E4EEF6] flex items-center justify-center text-[#142F63]"
              aria-hidden="true"
            >
              <Bell className="w-3.5 h-3.5" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#398441]" />
            </span>

            <span
              className="relative w-7 h-7 rounded-full bg-[#F4F8FB] border border-[#E4EEF6] flex items-center justify-center text-[#142F63]"
              aria-label={`Giỏ hàng minh họa (${cartIds.length} sản phẩm)`}
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              {cartIds.length > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[14px] h-[14px] px-1 rounded-full bg-[#398441] text-white text-[8px] font-bold flex items-center justify-center">
                  {cartIds.length}
                </span>
              )}
            </span>

            <div className="w-7 h-7 rounded-full overflow-hidden border border-[#CBE0F2] bg-[#EAF5FF] shrink-0">
              <img
                src={HERO_CONFIG.assets.lifestylePhoto}
                alt="Người dùng ADIGO"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Interactive Tab Body (fixed height container for zero layout shift) */}
        <div className="relative flex-1 overflow-hidden px-4 py-3 flex flex-col">
          <AnimatePresence mode="wait">
            {activeTab === 'products' && (
              <motion.div
                key="desktop-products"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col h-full justify-between gap-2.5"
              >
                {/* Category Chips */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5 shrink-0">
                  {MARKETPLACE_CONFIG.categories.slice(0, 6).map((cat) => {
                    const isCatActive = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                          isCatActive
                            ? 'bg-[#1F6E4A] text-white shadow-xs'
                            : 'bg-white text-[#4A6178] border border-[#E1ECF4] hover:border-[#4C9DC6]/50'
                        }`}
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                </div>

                {/* Promotional Showcase Banner */}
                <div className="relative rounded-[16px] overflow-hidden border border-[#D4E9DF] bg-gradient-to-r from-[#E6F7EE] via-[#F2FBF6] to-[#E2F2FA] px-4 py-3 flex items-center justify-between gap-3 shrink-0">
                  <div className="max-w-[58%] z-10">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 border border-[#C6E6D4] text-[9px] font-semibold text-[#2E7D4A]">
                      <ShieldCheck className="w-2.5 h-2.5" />
                      Thông tin nguồn gốc
                    </span>
                    <h4 className="mt-1.5 font-display text-[14px] xl:text-[15px] font-bold text-[#142F63] leading-snug">
                      Đa dạng sản phẩm. Thêm nhiều lựa chọn.
                    </h4>
                    <p className="mt-0.5 text-[10px] text-[#4E647B] line-clamp-1">
                      Khám phá những sản phẩm phù hợp với nhu cầu mỗi ngày.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedCategory('all')}
                      className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#247A4B] text-white text-[10px] font-semibold hover:bg-[#1D653E] transition-colors cursor-pointer"
                    >
                      Khám phá ngay
                      <ArrowRight className="w-2.5 h-2.5" />
                    </button>
                  </div>

                  <div className="w-[39%] h-[88px] rounded-[12px] overflow-hidden border border-white/80 shadow-xs shrink-0">
                    <img
                      src={HERO_CONFIG.assets.freshBannerPhoto}
                      alt="Thực phẩm đa dạng trên ADIGO Marketplace"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Featured Products Row */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[12px] font-bold text-[#142F63]">
                        Sản phẩm nổi bật
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-[#EAF5FF] text-[#345EAA] text-[8.5px] font-medium">
                        Minh họa
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedCategory('all')}
                      className="text-[10px] font-semibold text-[#398441] hover:underline flex items-center gap-0.5 cursor-pointer"
                    >
                      Xem tất cả
                      <ArrowRight className="w-2.5 h-2.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    {visibleProducts.map((product) => {
                      const inCart = cartIds.includes(product.id);
                      const isFav = favoriteIds.includes(product.id);
                      return (
                        <div
                          key={product.id}
                          className="rounded-[12px] bg-white border border-[#E3EDF5] p-1.5 flex flex-col justify-between shadow-[0_2px_8px_rgba(20,47,99,0.04)]"
                        >
                          <div>
                            <div className="relative h-[56px] rounded-[9px] overflow-hidden bg-[#F5F9FC]">
                              <FoodThumbnail type={product.visual} />
                              <button
                                type="button"
                                onClick={() => onToggleFavorite(product.id)}
                                aria-label={`Yêu thích ${product.name}`}
                                className="absolute top-1 right-1 w-4.5 h-4.5 rounded-full bg-white/90 flex items-center justify-center shadow-xs cursor-pointer"
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
                            <p className="mt-1.5 text-[10px] font-bold text-[#142F63] truncate">
                              {product.name}
                            </p>
                            <p className="text-[8.5px] text-[#64748B] truncate">
                              {product.unit}
                            </p>
                          </div>

                          <div className="mt-1.5 flex items-center justify-between gap-1">
                            <span className="text-[9.5px] font-bold text-[#345EAA] tabular-nums truncate">
                              {product.priceVnd}
                            </span>
                            <button
                              type="button"
                              onClick={() => onToggleCart(product.id)}
                              aria-label={`Thêm ${product.name} vào giỏ minh họa`}
                              className={`w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                                inCart
                                  ? 'bg-[#345EAA] text-white'
                                  : 'bg-[#247A4B] text-white hover:bg-[#1D653E]'
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

                {/* Bottom Strip: Featured Stores & Selected Brand Groups */}
                <div className="grid grid-cols-12 gap-2.5 pt-0.5 shrink-0">
                  <div className="col-span-5 rounded-[12px] bg-white border border-[#E3EDF5] p-2 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-[#142F63]">
                        Gian hàng nổi bật
                      </span>
                      <button
                        type="button"
                        onClick={() => onSelectTab('stores')}
                        className="text-[9px] text-[#345EAA] font-semibold cursor-pointer"
                      >
                        Khám phá →
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => onSelectTab('stores')}
                      className="w-full rounded-[9px] bg-[#F4F9FD] border border-[#E1EEF7] px-2 py-1.5 flex items-center justify-between gap-2 hover:bg-[#EAF4FC] transition-colors cursor-pointer text-left"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-6 h-6 rounded-lg bg-white border border-[#DCEAF5] flex items-center justify-center shrink-0">
                          <BrandLogo variant="icon" size="sm" className="!h-4 !w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold text-[#142F63] truncate">
                            Gian hàng minh họa 01
                          </p>
                          <p className="text-[8.5px] text-[#64748B] truncate">
                            Không gian trưng bày đối tác
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-3 h-3 text-[#345EAA] shrink-0" />
                    </button>
                  </div>

                  <div className="col-span-7 rounded-[12px] bg-white border border-[#E3EDF5] p-2 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-[#142F63]">
                        Nhóm thương hiệu chọn lọc
                      </span>
                      <button
                        type="button"
                        onClick={() => onSelectTab('brands')}
                        className="text-[9px] text-[#345EAA] font-semibold cursor-pointer"
                      >
                        Xem danh mục →
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                      {MARKETPLACE_CONFIG.demoBrands.slice(0, 3).map((brand, idx) => (
                        <button
                          key={brand.id}
                          type="button"
                          onClick={() => onSelectTab('brands')}
                          className="rounded-[9px] bg-[#F7FAFC] border border-[#E3EDF5] px-2 py-1.5 text-left hover:border-[#4C9DC6]/60 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-1">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                idx === 0
                                  ? 'bg-[#345EAA]'
                                  : idx === 1
                                  ? 'bg-[#398441]'
                                  : 'bg-[#4C9DC6]'
                              }`}
                            />
                            <span className="text-[8.5px] font-semibold text-[#64748B]">
                              Minh họa
                            </span>
                          </div>
                          <p className="mt-0.5 text-[9.5px] font-bold text-[#142F63] truncate">
                            {brand.name.replace('Nhóm thương hiệu ', '')}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'stores' && (
              <motion.div
                key="desktop-stores"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col h-full justify-between gap-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display text-[15px] font-bold text-[#142F63]">
                        Khám phá gian hàng
                      </h4>
                      <span className="px-2 py-0.5 rounded-full bg-[#EAF5FF] text-[#345EAA] text-[9px] font-semibold">
                        Dữ liệu minh họa
                      </span>
                    </div>
                    <p className="text-[11px] text-[#52677D]">
                      Kết nối trực tiếp với không gian trưng bày của nhà bán hàng và nhà sản xuất.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5 flex-1">
                  {(filteredStores.length > 0
                    ? filteredStores
                    : MARKETPLACE_CONFIG.demoStores
                  ).map((store, idx) => {
                    const sampleProducts = MARKETPLACE_CONFIG.demoProducts.slice(
                      idx,
                      idx + 2
                    );
                    return (
                      <div
                        key={store.id}
                        className="rounded-[16px] bg-white border border-[#E1ECF4] p-3 flex flex-col justify-between shadow-[0_4px_12px_rgba(20,47,99,0.04)]"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <div
                              className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0"
                              style={{ backgroundColor: store.accentColor }}
                            >
                              <Store className="w-4.5 h-4.5" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[11.5px] font-bold text-[#142F63] truncate">
                                {store.name}
                              </p>
                              <p className="text-[9.5px] text-[#398441] font-medium truncate">
                                {store.category}
                              </p>
                            </div>
                          </div>
                          <p className="mt-2 text-[9.5px] text-[#64748B]">
                            {store.note}
                          </p>

                          <div className="mt-2.5 grid grid-cols-2 gap-1.5">
                            {sampleProducts.map((sp) => (
                              <div
                                key={sp.id}
                                className="rounded-lg bg-[#F7FAFC] border border-[#E6EFF6] p-1.5"
                              >
                                <div className="h-11 rounded-md overflow-hidden">
                                  <FoodThumbnail type={sp.visual} />
                                </div>
                                <p className="mt-1 text-[9px] font-semibold text-[#142F63] truncate">
                                  {sp.name}
                                </p>
                                <p className="text-[8.5px] font-bold text-[#345EAA] tabular-nums">
                                  {sp.priceVnd}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => onSelectTab('products')}
                          className="mt-2.5 w-full py-1.5 rounded-full bg-[#EAF5FF] text-[#345EAA] text-[10px] font-semibold hover:bg-[#DCEEFF] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                        >
                          Khám phá gian hàng
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {activeTab === 'brands' && (
              <motion.div
                key="desktop-brands"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col h-full justify-between gap-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display text-[15px] font-bold text-[#142F63]">
                        Khám phá thương hiệu
                      </h4>
                      <span className="px-2 py-0.5 rounded-full bg-[#EAF5FF] text-[#345EAA] text-[9px] font-semibold">
                        Minh họa danh mục
                      </span>
                    </div>
                    <p className="text-[11px] text-[#52677D]">
                      Lọc và tiếp cận các nhóm thương hiệu theo ngành hàng tiêu dùng.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {[
                    { id: 'all', label: 'Tất cả nhóm hàng' },
                    { id: 'fresh', label: 'Thực phẩm tươi' },
                    { id: 'agri', label: 'Nông sản' },
                    { id: 'processed', label: 'Chế biến & Hệ sinh thái' },
                  ].map((ind) => (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => setSelectedIndustry(ind.id)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-semibold transition-colors cursor-pointer ${
                        selectedIndustry === ind.id
                          ? 'bg-[#345EAA] text-white'
                          : 'bg-white text-[#52677D] border border-[#E1ECF4]'
                      }`}
                    >
                      {ind.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2.5 flex-1">
                  {(filteredBrands.length > 0
                    ? filteredBrands
                    : MARKETPLACE_CONFIG.demoBrands
                  ).map((brand, idx) => (
                    <div
                      key={brand.id}
                      className="rounded-[16px] bg-white border border-[#E1ECF4] p-3 flex items-center justify-between gap-3 shadow-[0_4px_12px_rgba(20,47,99,0.04)]"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-11 h-11 rounded-2xl bg-[#F2F8FD] border border-[#DCEAF5] flex items-center justify-center shrink-0">
                          {brand.id === 'br-4' ? (
                            <BrandLogo variant="icon" size="sm" />
                          ) : (
                            <Award
                              className={`w-5 h-5 ${
                                idx % 2 === 0 ? 'text-[#345EAA]' : 'text-[#398441]'
                              }`}
                            />
                          )}
                        </div>
                        <div className="min-w-0">
                          <span className="inline-block text-[8.5px] font-semibold uppercase tracking-wide text-[#4C9DC6]">
                            Nhóm minh họa
                          </span>
                          <p className="text-[11.5px] font-bold text-[#142F63] truncate">
                            {brand.name}
                          </p>
                          <p className="text-[9.5px] text-[#64748B] truncate">
                            {brand.category}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectTab('products')}
                        className="px-2.5 py-1 rounded-full bg-[#F1F6FA] hover:bg-[#EAF5FF] text-[#345EAA] text-[9.5px] font-semibold shrink-0 cursor-pointer"
                      >
                        Xem sản phẩm
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'offers' && (
              <motion.div
                key="desktop-offers"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col h-full justify-between gap-2.5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display text-[15px] font-bold text-[#142F63]">
                        Khám phá ưu đãi
                      </h4>
                      <span className="px-2 py-0.5 rounded-full bg-[#E8F8F0] text-[#398441] text-[9px] font-semibold">
                        Trải nghiệm thành viên
                      </span>
                    </div>
                    <p className="text-[11px] text-[#52677D]">
                      Các nhóm gợi ý mua sắm linh hoạt và tiện ích đồng bộ trong hệ sinh thái ADIGO.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5 flex-1">
                  {MARKETPLACE_CONFIG.demoOffers.map((offer, idx) => (
                    <div
                      key={offer.id}
                      className="rounded-[16px] bg-white border border-[#E1ECF4] p-3 flex flex-col justify-between shadow-[0_4px_12px_rgba(20,47,99,0.04)]"
                    >
                      <div>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#EAF5FF] text-[#345EAA] text-[8.5px] font-semibold">
                          <Tag className="w-2.5 h-2.5" />
                          {offer.tag}
                        </span>
                        <h5 className="mt-2 font-display text-[12px] font-bold text-[#142F63] leading-snug">
                          {offer.title}
                        </h5>
                        <p className="mt-1 text-[10px] text-[#52677D] leading-relaxed">
                          {offer.desc}
                        </p>
                      </div>

                      <div className="mt-2 pt-2 border-t border-[#EDF3F8] flex items-center justify-between">
                        <span className="text-[9.5px] font-semibold text-[#398441] flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Gợi ý #{idx + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => onSelectTab('products')}
                          className="text-[9.5px] font-semibold text-[#345EAA] hover:underline cursor-pointer"
                        >
                          Khám phá →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Member Benefit Strip */}
                <div className="rounded-[14px] bg-gradient-to-r from-[#142F63] via-[#345EAA] to-[#4C9DC6] text-white px-4 py-2.5 flex items-center justify-between gap-3 shrink-0">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/15 border border-white/25 flex items-center justify-center shrink-0">
                      <BrandLogo variant="icon" size="sm" className="!h-5 !w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold">
                        Kết nối tiện ích thành viên ADIGO
                      </p>
                      <p className="text-[9.5px] text-white/80">
                        Đồng bộ danh sách quan tâm giữa ứng dụng ADIGO và không gian Marketplace.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectTab('products')}
                    className="px-3 py-1.5 rounded-full bg-white text-[#142F63] text-[10px] font-bold shrink-0 cursor-pointer hover:bg-[#EAF5FF] transition-colors"
                  >
                    Xem sản phẩm
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
