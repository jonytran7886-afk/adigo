import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Bell,
  ShoppingCart,
  QrCode,
  MapPin,
  Crown,
  Sparkles,
  Home,
  Compass,
  Store,
  ClipboardList,
  User,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { PhoneShell } from '../hero/ProductShowcase/PhoneShell';
import { BrandLogo } from '../hero/Header/BrandLogo';
import { HERO_CONFIG } from '../../config/heroConfig';
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

  const aiResponses = [
    'Gợi ý minh họa: Thực đơn gia đình gồm thịt gà ta đóng khay, rau củ tươi theo mùa và trái cây chọn lọc.',
    'Gợi ý minh họa: Nhóm sản phẩm thiết yếu được sắp xếp theo nhu cầu bữa ăn hàng ngày.',
    'Gợi ý minh họa: Mở thông tin hành trình sản phẩm từ vùng sản xuất đến điểm bán qua mã QR.',
  ];

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
              <div className="w-6 h-6 rounded-full overflow-hidden border border-[#CBE0F2] bg-[#EAF5FF] shrink-0">
                <img
                  src={HERO_CONFIG.assets.lifestylePhoto}
                  alt="Người tiêu dùng ADIGO"
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

          <div className="mt-2 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#F2F7FB] border border-[#E1ECF4]">
            <Search className="w-3 h-3 text-[#7A8EA3] shrink-0" />
            <span className="text-[9.5px] text-[#7A8EA3] truncate">
              Tìm sản phẩm, điểm bán, thông tin...
            </span>
          </div>
        </div>

        {/* Synchronized Viewport */}
        <div className="flex-1 px-3 py-2.5 overflow-hidden flex flex-col">
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
                <div className="grid grid-cols-2 gap-2 flex-1">
                  {[
                    { label: 'Mua sắm dễ dàng', Icon: ShoppingCart, color: 'text-[#398441]', bg: 'bg-[#E8F8F0]', target: 'sync' as TechnologyExperienceId },
                    { label: 'Truy xuất nguồn gốc', Icon: QrCode, color: 'text-[#345EAA]', bg: 'bg-[#EAF5FF]', target: 'data' as TechnologyExperienceId },
                    { label: 'Tìm điểm bán', Icon: MapPin, color: 'text-[#2E8C62]', bg: 'bg-[#E8F8F0]', target: 'sync' as TechnologyExperienceId },
                    { label: 'Ưu đãi & thành viên', Icon: Crown, color: 'text-[#168CA9]', bg: 'bg-[#EAF5FF]', target: 'personal' as TechnologyExperienceId },
                  ].map(({ label, Icon, color, bg, target }) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => onSelectExperience(target)}
                      className="rounded-[15px] bg-white border border-[#E2ECF4] p-2.5 flex flex-col items-center justify-center gap-2 text-center hover:border-[#4C9DC6] transition-colors cursor-pointer shadow-2xs"
                    >
                      <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center ${color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-[#142F63] leading-tight">
                        {label}
                      </span>
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectExperience('smart')}
                  className="rounded-[14px] bg-gradient-to-r from-[#EAF5FF] to-[#E8F8F0] border border-[#CBE4F5] p-2.5 flex items-center justify-between gap-2 text-left cursor-pointer hover:border-[#4C9DC6]"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Sparkles className="w-4 h-4 text-[#168CA9] shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-[#142F63] truncate">
                        Trợ lý mua sắm thông minh
                      </p>
                      <p className="text-[8.5px] text-[#52677D] truncate">
                        Minh họa định hướng trải nghiệm
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#345EAA] shrink-0" />
                </button>
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
                <div className="rounded-[14px] bg-gradient-to-r from-[#142F63] to-[#2B64AC] text-white p-2.5">
                  <p className="text-[10.5px] font-bold">
                    Đồng bộ trải nghiệm đa kênh
                  </p>
                  <p className="mt-0.5 text-[8.5px] text-white/80">
                    Kết nối liền mạch giữa ứng dụng ADIGO, Marketplace và điểm bán.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 flex-1">
                  {[
                    { title: 'Khám phá sản phẩm', sub: 'Danh mục đồng bộ trực tuyến & cửa hàng' },
                    { title: 'Điểm bán minh họa 01', sub: 'Tra cứu sản phẩm có sẵn tại điểm bán' },
                    { title: 'Theo dõi đơn hàng', sub: 'Cập nhật trạng thái minh họa xuyên suốt' },
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
                className="flex flex-col justify-between h-full gap-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-bold text-[#142F63] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#168CA9]" />
                    Trợ lý mua sắm thông minh
                  </span>
                  <span className="text-[8px] font-semibold text-[#345EAA] bg-[#EAF5FF] px-1.5 py-0.5 rounded-full">
                    Định hướng AI
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  {TECHNOLOGY_CONFIG.aiPromptExamples.map((prompt, idx) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => setSelectedPromptIdx(idx)}
                      className={`w-full rounded-[11px] px-2.5 py-1.5 text-left text-[9px] font-medium border transition-colors cursor-pointer ${
                        selectedPromptIdx === idx
                          ? 'bg-[#EAF5FF] border-[#4C9DC6] text-[#142F63] font-semibold'
                          : 'bg-white border-[#E2ECF4] text-[#52677D]'
                      }`}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>

                <div className="rounded-[13px] bg-gradient-to-br from-[#F0F9FF] to-[#E8F8F0] border border-[#CCE6F4] p-2.5">
                  <span className="text-[8.5px] font-bold text-[#247A4B]">
                    Phản hồi minh họa
                  </span>
                  <p className="mt-1 text-[9px] text-[#142F63] leading-relaxed">
                    {aiResponses[selectedPromptIdx]}
                  </p>
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
                <div className="rounded-[14px] bg-gradient-to-r from-[#247A4B] to-[#345EAA] text-white p-2.5">
                  <span className="text-[8px] text-white/80">
                    Minh họa cá nhân hóa
                  </span>
                  <p className="text-[11px] font-bold">
                    Trải nghiệm theo nhu cầu của bạn
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 flex-1">
                  {[
                    { title: 'Nhóm sản phẩm quan tâm', desc: 'Thực phẩm tươi · Rau củ · Trái cây' },
                    { title: 'Ưu đãi & tiện ích thành viên', desc: 'Gợi ý phù hợp theo thói quen mua sắm' },
                    { title: 'Điểm bán thường ghé', desc: 'Điểm bán minh họa ADIGO Mart' },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="rounded-[12px] bg-white border border-[#E2ECF4] p-2.5"
                    >
                      <p className="text-[10px] font-bold text-[#142F63]">
                        {card.title}
                      </p>
                      <p className="mt-0.5 text-[8.5px] text-[#52677D]">
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
    </PhoneShell>
  );
};
