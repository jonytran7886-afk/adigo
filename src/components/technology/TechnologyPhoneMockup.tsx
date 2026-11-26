import { ResponsiveImage } from '../ResponsiveImage';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Bell,
  ShoppingCart,
  QrCode,
  Sparkles,
  Home,
  Compass,
  Store,
  ClipboardList,
  User,
  CheckCircle2,
  Plus,
} from 'lucide-react';
import { BrandLogo } from '../hero/Header/BrandLogo';
import {
  TECHNOLOGY_CONFIG,
  TechnologyExperienceId,
} from '../../config/technologyConfig';

interface TechnologyPhoneMockupProps {
  activeExperience: TechnologyExperienceId;
  onSelectExperience: (exp: TechnologyExperienceId) => void;
  size?: 'main' | 'side';
}

export const TechnologyPhoneMockup: React.FC<TechnologyPhoneMockupProps> = ({
  activeExperience,
  onSelectExperience,
  size = 'main',
}) => {
  const [selectedPromptIdx, setSelectedPromptIdx] = useState(0);

  const frameSize =
    size === 'main'
      ? 'w-[280px] sm:w-[304px] h-[568px] sm:h-[620px]'
      : 'w-[244px] sm:w-[260px] h-[494px] sm:h-[528px]';

  const aiRecommendations = [
    {
      title: 'Thực đơn gia đình cân bằng dinh dưỡng',
      items: [
        { name: 'Thịt gà thảo dược', img: TECHNOLOGY_CONFIG.assets.chickenPlatterPhoto },
        { name: 'Rau củ theo mùa', img: TECHNOLOGY_CONFIG.assets.veggiesProcessedPhoto },
      ],
    },
    {
      title: 'Nhóm thực phẩm tươi chọn lọc mỗi ngày',
      items: [
        { name: 'Thịt bò & ba chỉ', img: TECHNOLOGY_CONFIG.assets.porkBeefPhoto },
        { name: 'Trứng & cam sành', img: TECHNOLOGY_CONFIG.assets.eggsCitrusPhoto },
      ],
    },
    {
      title: 'Hành trình minh bạch qua tem mã QR',
      items: [
        { name: 'Thịt bò đóng khay', img: TECHNOLOGY_CONFIG.assets.traceabilityBeefPhoto },
        { name: 'Điểm bán ADIGO Mart', img: TECHNOLOGY_CONFIG.assets.martConceptPhoto },
      ],
    },
  ];

  const currentAiRec = aiRecommendations[selectedPromptIdx];

  return (
    <div
      className={`relative rounded-[44px] p-[9px] select-none ${frameSize}`}
      style={{
        background:
          'linear-gradient(148deg, #4B586E 0%, #1F2937 32%, #111827 68%, #3B495E 100%)',
        boxShadow:
          '0 34px 72px -14px rgba(17, 45, 82, 0.36), 0 14px 30px -10px rgba(22, 118, 210, 0.2), inset 0 1.5px 2px rgba(255, 255, 255, 0.45)',
      }}
    >
      {/* Titanium Side Hardware Controls */}
      <div
        className="absolute -left-[2.5px] top-[96px] h-7 w-[3px] rounded-l bg-[#64748B]"
        aria-hidden="true"
      />
      <div
        className="absolute -left-[2.5px] top-[138px] h-11 w-[3px] rounded-l bg-[#64748B]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-[2.5px] top-[120px] h-14 w-[3px] rounded-r bg-[#64748B]"
        aria-hidden="true"
      />

      {/* Inner Display Screen */}
      <div className="relative w-full h-full rounded-[36px] bg-white overflow-hidden flex flex-col border border-black/45">
        {/* Specular Glass Screen Reflection */}
        <div
          className="pointer-events-none absolute inset-0 z-30 opacity-30"
          style={{
            background:
              'linear-gradient(122deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.06) 24%, transparent 45%)',
          }}
          aria-hidden="true"
        />

        {/* Status Bar */}
        <div className="relative z-20 flex items-center justify-between px-5 pt-2.5 pb-1 text-[10px] font-semibold text-[#112D52] shrink-0 bg-white">
          <span className="tabular-nums">9:41</span>
          <div className="h-[17px] w-[72px] rounded-full bg-[#111827]" aria-hidden="true" />
          <div className="flex items-center gap-1" aria-hidden="true">
            <div className="flex items-end gap-[1.5px] h-2.5">
              <span className="w-[2px] h-1 bg-[#112D52] rounded-xs" />
              <span className="w-[2px] h-1.5 bg-[#112D52] rounded-xs" />
              <span className="w-[2px] h-2 bg-[#112D52] rounded-xs" />
              <span className="w-[2px] h-2.5 bg-[#112D52] rounded-xs" />
            </div>
            <div className="w-4 h-2.5 rounded-[3px] border border-[#112D52]/75 p-[1.5px] flex items-center">
              <div className="w-full h-full bg-[#112D52] rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* App Body */}
        <div className="flex-1 flex flex-col justify-between bg-[#F7FAFE] overflow-hidden relative z-10">
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
                </span>
                <div className="w-6 h-6 rounded-full overflow-hidden border border-[#CBE0F2] bg-[#EAF5FF] shrink-0">
                  <ResponsiveImage
                    src={TECHNOLOGY_CONFIG.assets.lifestylePhoto}
                    alt="Người tiêu dùng ADIGO"
                    width={120}
                    height={90}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#F2F7FB] border border-[#E1ECF4]">
              <Search className="w-3 h-3 text-[#7A8EA3] shrink-0" />
              <span className="text-[9.5px] text-[#7A8EA3] truncate">
                Tìm sản phẩm, nguồn gốc, điểm bán...
              </span>
            </div>
          </div>

          {/* Dynamic Synchronized App Screens */}
          <div className="flex-1 px-3 py-2 overflow-hidden flex flex-col">
            <AnimatePresence mode="wait">
              {activeExperience === 'data' && (
                <motion.div
                  key="tech-phone-data"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.24 }}
                  className="flex flex-col justify-between h-full gap-2"
                >
                  {/* Photorealistic Shopping Hero Banner */}
                  <div className="relative h-[86px] rounded-[14px] overflow-hidden border border-[#CBE4F5] shrink-0">
                    <ResponsiveImage
                      src={TECHNOLOGY_CONFIG.assets.varietyPhoto}
                      alt="Thực phẩm tươi chọn lọc trên ứng dụng ADIGO"
                      width={400}
                      height={220}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#142F63]/85 via-[#142F63]/45 to-transparent p-2.5 flex flex-col justify-between">
                      <span className="inline-block w-fit px-1.5 py-0.5 rounded bg-white/95 text-[#247A4B] text-[7.5px] font-bold">
                        Kết nối toàn chuỗi
                      </span>
                      <p className="font-display text-[11px] font-bold text-white leading-tight max-w-[65%]">
                        Thực phẩm tươi ngon & truy xuất QR
                      </p>
                    </div>
                  </div>

                  {/* Quick Category Chips */}
                  <div className="flex items-center gap-1 overflow-x-auto no-scrollbar shrink-0">
                    {['Tất cả', 'Thịt tươi', 'Trứng', 'Rau củ', 'Trái cây'].map((cat, idx) => (
                      <span
                        key={cat}
                        className={`px-2 py-0.5 rounded-full text-[8px] font-semibold whitespace-nowrap ${
                          idx === 0
                            ? 'bg-[#247A4B] text-white'
                            : 'bg-white border border-[#E2ECF4] text-[#52677D]'
                        }`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Real Product Cards */}
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      {
                        name: 'Thịt gà nguyên con',
                        price: '129.000 đ',
                        img: TECHNOLOGY_CONFIG.assets.chickenPlatterPhoto,
                      },
                      {
                        name: 'Thịt bò đóng khay',
                        price: '145.000 đ',
                        img: TECHNOLOGY_CONFIG.assets.traceabilityBeefPhoto,
                      },
                    ].map((prod) => (
                      <div
                        key={prod.name}
                        className="rounded-[12px] bg-white border border-[#E2ECF4] p-1.5 flex flex-col justify-between"
                      >
                        <div className="h-[54px] rounded-[8px] overflow-hidden bg-[#F4F8FB]">
                          <ResponsiveImage
                            src={prod.img}
                            alt={prod.name}
                            width={180}
                            height={120}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="mt-1 text-[9px] font-bold text-[#142F63] truncate">
                          {prod.name}
                        </p>
                        <div className="mt-0.5 flex items-center justify-between">
                          <span className="text-[8.5px] font-bold text-[#345EAA] tabular-nums">
                            {prod.price}
                          </span>
                          <span className="w-4 h-4 rounded-full bg-[#247A4B] text-white flex items-center justify-center">
                            <Plus className="w-2.5 h-2.5" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Traceability QR Widget + AI Prompt Strip */}
                  <div className="grid grid-cols-12 gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => onSelectExperience('data')}
                      className="col-span-5 rounded-[12px] bg-white border border-[#DCEAF5] p-1.5 flex items-center gap-1.5 text-left cursor-pointer hover:border-[#42C8EF]"
                    >
                      <QrCode className="w-5 h-5 text-[#142F63] shrink-0" />
                      <span className="text-[8px] font-bold text-[#142F63] leading-tight">
                        Quét QR nguồn gốc
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectExperience('smart')}
                      className="col-span-7 rounded-[12px] bg-gradient-to-r from-[#EAF5FF] to-[#E8F8F0] border border-[#CBE4F5] p-1.5 flex items-center gap-1.5 text-left cursor-pointer hover:border-[#1676D2]"
                    >
                      <Sparkles className="w-4 h-4 text-[#168CA9] shrink-0" />
                      <span className="text-[8px] font-bold text-[#142F63] leading-tight line-clamp-2">
                        Hôm nay bạn muốn chuẩn bị món gì?
                      </span>
                    </button>
                  </div>
                </motion.div>
              )}

              {activeExperience === 'sync' && (
                <motion.div
                  key="tech-phone-sync"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.24 }}
                  className="flex flex-col justify-between h-full gap-2"
                >
                  <div className="relative h-[96px] rounded-[14px] overflow-hidden border border-[#CBE4F5] shrink-0">
                    <ResponsiveImage
                      src={TECHNOLOGY_CONFIG.assets.martConceptPhoto}
                      alt="Hệ thống điểm bán ADIGO Mart"
                      width={400}
                      height={220}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#142F63]/85 via-[#142F63]/25 to-transparent p-2.5 flex flex-col justify-end">
                      <p className="text-[10.5px] font-bold text-white">
                        Đồng bộ ADIGO App & ADIGO Mart
                      </p>
                      <p className="text-[8px] text-white/85">
                        Đặt hàng trực tuyến · Nhận tại điểm bán hoặc giao tận nơi
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 flex-1">
                    {[
                      { title: 'Khám phá sản phẩm', sub: 'Danh mục đồng bộ trực tuyến & cửa hàng' },
                      { title: 'ADIGO Mart – Điểm bán chọn lọc 01', sub: 'Tra cứu hàng có sẵn tại điểm bán' },
                      { title: 'Theo dõi đơn hàng', sub: 'Cập nhật trạng thái chuẩn bị xuyên suốt' },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[12px] bg-white border border-[#E2ECF4] p-2.5 flex items-center justify-between gap-2"
                      >
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold text-[#142F63] truncate">
                            {item.title}
                          </p>
                          <p className="text-[8.5px] text-[#52677D] truncate">
                            {item.sub}
                          </p>
                        </div>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#398441] shrink-0" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeExperience === 'smart' && (
                <motion.div
                  key="tech-phone-smart"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.24 }}
                  className="flex flex-col justify-between h-full gap-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-bold text-[#142F63] flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#168CA9]" />
                      Trợ lý mua sắm thông minh
                    </span>
                    <span className="text-[8px] font-semibold text-[#1676D2] bg-[#EAF5FF] px-1.5 py-0.5 rounded-full">
                      Gợi ý AI
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    {TECHNOLOGY_CONFIG.aiPromptExamples.map((prompt, idx) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => setSelectedPromptIdx(idx)}
                        className={`w-full rounded-[10px] px-2.5 py-1.5 text-left text-[8.5px] font-medium border transition-colors cursor-pointer ${
                          selectedPromptIdx === idx
                            ? 'bg-[#EAF5FF] border-[#1676D2] text-[#142F63] font-semibold'
                            : 'bg-white border-[#E2ECF4] text-[#52677D]'
                        }`}
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>

                  <div className="rounded-[13px] bg-gradient-to-br from-[#F0F9FF] to-[#E8F8F0] border border-[#CCE6F4] p-2">
                    <p className="text-[8.5px] font-bold text-[#247A4B]">
                      {currentAiRec.title}
                    </p>
                    <div className="mt-1.5 grid grid-cols-2 gap-1.5">
                      {currentAiRec.items.map((item) => (
                        <div
                          key={item.name}
                          className="rounded-lg bg-white border border-[#DCEAF5] p-1"
                        >
                          <div className="h-[46px] rounded-md overflow-hidden">
                            <ResponsiveImage
                              src={item.img}
                              alt={item.name}
                              width={160}
                              height={110}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="mt-1 text-[8px] font-bold text-[#142F63] truncate">
                            {item.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeExperience === 'personal' && (
                <motion.div
                  key="tech-phone-personal"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.24 }}
                  className="flex flex-col justify-between h-full gap-2"
                >
                  <div className="rounded-[14px] bg-gradient-to-r from-[#247A4B] to-[#1676D2] text-white p-2.5">
                    <span className="text-[8px] text-white/85">
                      Cá nhân hóa trải nghiệm
                    </span>
                    <p className="text-[11px] font-bold">
                      Gợi ý riêng theo nhu cầu của bạn
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="rounded-[12px] bg-white border border-[#E2ECF4] p-1.5">
                      <div className="h-[52px] rounded-lg overflow-hidden">
                        <ResponsiveImage
                          src={TECHNOLOGY_CONFIG.assets.porkBeefPhoto}
                          alt="Thực phẩm tươi yêu thích"
                          width={160}
                          height={120}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="mt-1 text-[8.5px] font-bold text-[#142F63] truncate">
                        Thịt tươi chọn lọc
                      </p>
                    </div>
                    <div className="rounded-[12px] bg-white border border-[#E2ECF4] p-1.5">
                      <div className="h-[52px] rounded-lg overflow-hidden">
                        <ResponsiveImage
                          src={TECHNOLOGY_CONFIG.assets.eggsCitrusPhoto}
                          alt="Trứng và trái cây"
                          width={160}
                          height={120}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="mt-1 text-[8.5px] font-bold text-[#142F63] truncate">
                        Trứng & Trái cây
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {[
                      { title: 'Ưu đãi & tiện ích thành viên', desc: 'Đồng bộ giữa ứng dụng ADIGO và ADIGO Mart' },
                      { title: 'Điểm bán thường ghé', desc: 'ADIGO Mart – Điểm bán chọn lọc 01' },
                    ].map((card) => (
                      <div
                        key={card.title}
                        className="rounded-[12px] bg-white border border-[#E2ECF4] p-2"
                      >
                        <p className="text-[9.5px] font-bold text-[#142F63]">
                          {card.title}
                        </p>
                        <p className="mt-0.5 text-[8px] text-[#52677D]">
                          {card.desc}
                        </p>
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
              { id: 'home', label: 'Trang chủ', Icon: Home, active: activeExperience === 'data', target: 'data' as TechnologyExperienceId },
              { id: 'discover', label: 'Khám phá', Icon: Compass, active: activeExperience === 'smart', target: 'smart' as TechnologyExperienceId },
              { id: 'mart', label: 'Mart', Icon: Store, active: activeExperience === 'sync', target: 'sync' as TechnologyExperienceId },
              { id: 'orders', label: 'Đơn hàng', Icon: ClipboardList, active: false, target: 'sync' as TechnologyExperienceId },
              { id: 'account', label: 'Tài khoản', Icon: User, active: activeExperience === 'personal', target: 'personal' as TechnologyExperienceId },
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

        {/* Home Indicator */}
        <div
          className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-[#112D52]/20 z-30 pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
