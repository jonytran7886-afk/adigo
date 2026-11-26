import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Bell,
  Store,
  MapPin,
  ArrowRight,
  ChevronRight,
  Home,
  Compass,
  ClipboardList,
  User,
  Plus,
  Check,
  Package,
  Truck,
  Heart,
  Crown,
  ShoppingCart,
} from 'lucide-react';
import { PhoneShell } from '../hero/ProductShowcase/PhoneShell';
import { BrandLogo } from '../hero/Header/BrandLogo';
import { MART_CONFIG, MartExperienceId } from '../../config/martConfig';
import { FoodThumbnail } from '../hero/ProductShowcase/ProductVisuals';

interface MartPhoneMockupProps {
  activeExperience: MartExperienceId;
  onSelectExperience: (exp: MartExperienceId) => void;
  size?: 'main' | 'side';
}

export const MartPhoneMockup: React.FC<MartPhoneMockupProps> = ({
  activeExperience,
  onSelectExperience,
  size = 'main',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'meat-eggs' | 'veggies' | 'fruits'>('all');
  const [cartIds, setCartIds] = useState<string[]>(['mp-mart-1']);
  const [selectedFulfillment, setSelectedFulfillment] = useState<string>('pickup');

  const toggleCart = (id: string) => {
    setCartIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredStores = MART_CONFIG.demoStores.filter(
    (s) =>
      searchQuery.trim() === '' ||
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.areaLabel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProducts = MART_CONFIG.demoProducts.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <PhoneShell size={size}>
      <div className="flex-1 flex flex-col justify-between bg-[#F7FAFE] overflow-hidden">
        {/* App Header */}
        <div className="px-3.5 pt-1.5 pb-2 bg-white border-b border-[#E7F0F7] shrink-0">
          <div className="flex items-center justify-between">
            <BrandLogo size="sm" className="!h-[19px]" />

            <div className="flex items-center gap-1.5">
              <span
                className="relative w-6 h-6 rounded-full bg-[#F3F8FC] flex items-center justify-center text-[#142F63]"
                aria-hidden="true"
              >
                <Bell className="w-3 h-3" />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#398441]" />
              </span>

              <span
                className="relative w-6 h-6 rounded-full bg-[#F3F8FC] flex items-center justify-center text-[#142F63]"
                aria-hidden="true"
              >
                <ShoppingCart className="w-3 h-3" />
                {cartIds.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[13px] h-[13px] px-0.5 rounded-full bg-[#398441] text-white text-[7.5px] font-bold flex items-center justify-center">
                    {cartIds.length}
                  </span>
                )}
              </span>

              <div className="w-6 h-6 rounded-full overflow-hidden border border-[#CBE0F2] bg-[#EAF5FF] shrink-0">
                <img
                  src={MART_CONFIG.assets.shopperPortrait}
                  alt="Tài khoản ADIGO"
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

          {/* Interactive Search Input */}
          <div className="mt-2 relative">
            <Search className="w-3 h-3 text-[#7A8EA3] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm sản phẩm, cửa hàng..."
              aria-label="Tìm sản phẩm hoặc điểm bán ADIGO Mart"
              className="w-full h-7 pl-7 pr-2.5 rounded-full bg-[#F2F7FB] border border-[#E1ECF4] text-[10px] text-[#112D52] placeholder:text-[#7A8EA3] focus:outline-none focus:border-[#4C9DC6]"
            />
          </div>
        </div>

        {/* Synchronized Viewport */}
        <div className="flex-1 px-3 py-2.5 overflow-hidden flex flex-col">
          <AnimatePresence mode="wait">
            {activeExperience === 'store' && (
              <motion.div
                key="mart-screen-store"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-between h-full gap-2.5"
              >
                {/* Store Finder Banner */}
                <div className="relative rounded-[16px] overflow-hidden border border-[#C6E6D4] bg-gradient-to-br from-[#237B4E] via-[#2F8C58] to-[#4CA768] text-white p-3 flex items-center justify-between gap-2 shrink-0">
                  <div className="max-w-[60%] z-10">
                    <p className="font-display font-bold text-[12.5px] leading-snug">
                      Tìm cửa hàng ADIGO Mart gần bạn
                    </p>
                    <button
                      type="button"
                      onClick={() => onSelectExperience('online')}
                      className="mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-[#142F63] text-[9px] font-bold hover:bg-[#EAF5FF] transition-colors cursor-pointer"
                    >
                      Khám phá cửa hàng
                      <ArrowRight className="w-2.5 h-2.5" />
                    </button>
                  </div>

                  {/* Mini Map Illustration Graphic */}
                  <div className="w-[38%] h-[76px] rounded-[12px] bg-[#E8F8F0]/95 border border-white/80 relative overflow-hidden flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 80 70" className="w-full h-full opacity-70" aria-hidden="true">
                      <path d="M0 36 Q 40 28, 80 38" stroke="#FFFFFF" strokeWidth="6" fill="none" />
                      <path d="M35 0 L 42 70" stroke="#FFFFFF" strokeWidth="5" fill="none" />
                    </svg>
                    <div className="absolute w-7 h-7 rounded-full bg-gradient-to-br from-[#65B848] to-[#238A5C] border-2 border-white shadow-sm flex items-center justify-center">
                      <MapPin className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Store List Section */}
                <div className="flex-1 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#142F63]">
                      Cửa hàng và điểm bán
                    </span>
                    <span className="text-[9px] font-semibold text-[#398441]">
                      Đang kết nối
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {(filteredStores.length > 0
                      ? filteredStores
                      : MART_CONFIG.demoStores
                    ).map((store) => (
                      <button
                        key={store.id}
                        type="button"
                        onClick={() => onSelectExperience('online')}
                        className="w-full rounded-[13px] bg-white border border-[#E2ECF4] p-2 flex items-center justify-between gap-2 text-left hover:border-[#4C9DC6] transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="w-10 h-10 rounded-[10px] overflow-hidden border border-[#DCEAF5] bg-[#EAF5FF] shrink-0 relative">
                            <img
                              src={MART_CONFIG.assets.storeInterior}
                              alt={store.name}
                              width={160}
                              height={90}
                              loading="lazy"
                              decoding="async"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover object-bottom"
                            />
                            <span className="absolute inset-x-0 top-0 h-2 bg-[#143E78]" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[10.5px] font-bold text-[#142F63] truncate">
                              {store.name}
                            </p>
                            <p className="text-[8.5px] text-[#52677D] truncate">
                              {store.areaLabel}
                            </p>
                            <p className="text-[8px] text-[#398441] font-medium truncate">
                              {store.note}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-[#7A8EA3] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeExperience === 'online' && (
              <motion.div
                key="mart-screen-online"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-between h-full gap-2"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#142F63]">
                      Đặt hàng trực tuyến
                    </span>
                    <span className="text-[8.5px] font-semibold text-[#345EAA]">
                      Giỏ hàng: {cartIds.length}
                    </span>
                  </div>

                  {/* Category Filter Pills */}
                  <div className="mt-1.5 flex items-center gap-1 overflow-x-auto no-scrollbar">
                    {[
                      { id: 'all' as const, label: 'Tất cả' },
                      { id: 'meat-eggs' as const, label: 'Thịt & Trứng' },
                      { id: 'veggies' as const, label: 'Rau củ' },
                      { id: 'fruits' as const, label: 'Trái cây' },
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-2 py-0.5 rounded-full text-[8.5px] font-semibold whitespace-nowrap cursor-pointer ${
                          selectedCategory === cat.id
                            ? 'bg-[#247A4B] text-white'
                            : 'bg-white border border-[#E1ECF4] text-[#52677D]'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 flex-1">
                  {(filteredProducts.length > 0
                    ? filteredProducts
                    : MART_CONFIG.demoProducts
                  )
                    .slice(0, 4)
                    .map((product) => {
                      const inCart = cartIds.includes(product.id);
                      return (
                        <div
                          key={product.id}
                          className="rounded-[12px] bg-white border border-[#E2ECF4] p-1.5 flex flex-col justify-between"
                        >
                          <div>
                            <div className="h-[58px] rounded-[8px] overflow-hidden bg-[#F4F8FB]">
                              <FoodThumbnail type={product.visual} />
                            </div>
                            <p className="mt-1 text-[9.5px] font-bold text-[#142F63] line-clamp-1">
                              {product.name}
                            </p>
                            <p className="text-[8px] text-[#64748B] truncate">
                              {product.unit}
                            </p>
                          </div>

                          <div className="mt-1.5 flex items-center justify-between">
                            <span className="text-[8.5px] font-semibold text-[#398441]">
                              {inCart ? 'Đã chọn' : 'Xem chọn'}
                            </span>
                            <button
                              type="button"
                              onClick={() => toggleCart(product.id)}
                              aria-label={`Chọn ${product.name}`}
                              className={`w-5 h-5 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
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
              </motion.div>
            )}

            {activeExperience === 'fulfillment' && (
              <motion.div
                key="mart-screen-fulfillment"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-between h-full gap-2"
              >
                <div className="rounded-[13px] bg-white border border-[#E2ECF4] p-2.5 flex items-center justify-between">
                  <div>
                    <p className="text-[10.5px] font-bold text-[#142F63]">
                      Phương thức nhận hàng
                    </p>
                    <p className="text-[8.5px] text-[#52677D]">
                      Đơn hàng · {cartIds.length} sản phẩm
                    </p>
                  </div>
                  <Package className="w-4.5 h-4.5 text-[#345EAA]" />
                </div>

                {/* Interactive Fulfillment Selector */}
                <div className="flex flex-col gap-1.5">
                  {MART_CONFIG.fulfillmentOptions.map((opt) => {
                    const isSelected = selectedFulfillment === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedFulfillment(opt.id)}
                        className={`w-full rounded-[12px] p-2 text-left border transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#EAF5FF] border-[#4C9DC6]'
                            : 'bg-white border-[#E2ECF4]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[#142F63] flex items-center gap-1.5">
                            {opt.id === 'pickup' ? (
                              <Store className="w-3.5 h-3.5 text-[#398441]" />
                            ) : (
                              <Truck className="w-3.5 h-3.5 text-[#345EAA]" />
                            )}
                            {opt.title}
                          </span>
                          <span
                            className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? 'border-[#345EAA] bg-[#345EAA]'
                                : 'border-[#CBD5E1]'
                            }`}
                          >
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-white" />
                            )}
                          </span>
                        </div>
                        <p className="mt-1 text-[8.5px] text-[#52677D] leading-snug">
                          {opt.description}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Preparation Steps */}
                <div className="rounded-[12px] bg-white border border-[#E2ECF4] p-2.5 flex flex-col gap-1.5">
                  <span className="text-[9.5px] font-bold text-[#142F63]">
                    Trạng thái chuẩn bị đơn hàng
                  </span>
                  {MART_CONFIG.preparationSteps.map((step) => (
                    <div key={step.id} className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          step.active ? 'bg-[#398441]' : 'bg-[#CBD5E1]'
                        }`}
                      />
                      <span className="text-[8.5px] text-[#52677D]">
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeExperience === 'connected' && (
              <motion.div
                key="mart-screen-connected"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-between h-full gap-2"
              >
                {/* Member Header Card */}
                <div className="rounded-[15px] bg-gradient-to-r from-[#142F63] via-[#2B5FA3] to-[#3A9A8B] text-white p-3 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[8.5px] text-white/80 font-medium">
                      Tài khoản trải nghiệm ADIGO
                    </span>
                    <p className="mt-0.5 font-display text-[12px] font-bold truncate">
                      Kết nối cửa hàng & ứng dụng
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center shrink-0">
                    <Crown className="w-4 h-4 text-[#A4CE46]" />
                  </div>
                </div>

                {/* Saved Store & Favorite Product */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-[12px] bg-white border border-[#E2ECF4] p-2">
                    <div className="flex items-center gap-1 text-[#345EAA] text-[9px] font-bold">
                      <Store className="w-3 h-3" />
                      <span>Điểm bán đã lưu</span>
                    </div>
                    <p className="mt-1 text-[9.5px] font-semibold text-[#142F63] truncate">
                      ADIGO Mart – Điểm bán chọn lọc 01
                    </p>
                  </div>
                  <div className="rounded-[12px] bg-white border border-[#E2ECF4] p-2">
                    <div className="flex items-center gap-1 text-[#E11D48] text-[9px] font-bold">
                      <Heart className="w-3 h-3" />
                      <span>Sản phẩm quan tâm</span>
                    </div>
                    <p className="mt-1 text-[9.5px] font-semibold text-[#142F63] truncate">
                      Thịt gà ta đóng khay
                    </p>
                  </div>
                </div>

                {/* Connected Utilities */}
                <div className="flex flex-col gap-1.5">
                  {MART_CONFIG.connectedUtilities.map((util) => (
                    <div
                      key={util.id}
                      className="rounded-[12px] bg-white border border-[#E2ECF4] p-2.5"
                    >
                      <p className="text-[10px] font-bold text-[#142F63]">
                        {util.title}
                      </p>
                      <p className="mt-0.5 text-[8.5px] text-[#52677D] leading-snug">
                        {util.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom 5-Tab Navigation Bar (Mart Active by Default) */}
        <div className="px-2 pt-1.5 pb-2.5 bg-white border-t border-[#E6EFF6] grid grid-cols-5 gap-0.5 shrink-0">
          {[
            { id: 'home', label: 'Trang chủ', Icon: Home, active: false, target: 'store' as MartExperienceId },
            { id: 'discover', label: 'Khám phá', Icon: Compass, active: activeExperience === 'online', target: 'online' as MartExperienceId },
            { id: 'mart', label: 'Mart', Icon: Store, active: activeExperience === 'store', target: 'store' as MartExperienceId },
            { id: 'orders', label: 'Đơn hàng', Icon: ClipboardList, active: activeExperience === 'fulfillment', target: 'fulfillment' as MartExperienceId },
            { id: 'account', label: 'Tài khoản', Icon: User, active: activeExperience === 'connected', target: 'connected' as MartExperienceId },
          ].map(({ id, label, Icon, active, target }) => (
            <button
              key={id}
              type="button"
              onClick={() => onSelectExperience(target)}
              className="flex flex-col items-center justify-center gap-0.5 cursor-pointer py-0.5"
            >
              <Icon
                className={`w-3.5 h-3.5 transition-colors ${
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
            </button>
          ))}
        </div>
      </div>
    </PhoneShell>
  );
};
