import React, { useState } from 'react';
import { MapPin, ShoppingBag, Truck, Store } from 'lucide-react';
import { ADIGO_CONFIG } from '../config/adigoConfig';
import { ResilientImage } from './ResilientImage';
import { PhoneFrame } from './mockups/PhoneFrame';
import { StoreLocatorScreen } from './mockups/AdigoScreens';

export const MartSection: React.FC = () => {
  const [fulfillmentMode, setFulfillmentMode] = useState<'instore' | 'pickup' | 'delivery'>('pickup');

  const modes: {
    id: 'instore' | 'pickup' | 'delivery';
    label: string;
    desc: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    {
      id: 'instore',
      label: 'Mua trực tiếp tại cửa hàng',
      desc: 'Khám phá sản phẩm tại không gian ADIGO Mart, quét mã xem thông tin và tích điểm thành viên.',
      icon: Store,
    },
    {
      id: 'pickup',
      label: 'Đặt trước, nhận tại quầy',
      desc: 'Chọn sẵn sản phẩm trên ADIGO App và ghé điểm bán thuận đường để nhận nhanh không cần chờ.',
      icon: ShoppingBag,
    },
    {
      id: 'delivery',
      label: 'Giao từ điểm bán gần bạn',
      desc: 'Kết nối trực tiếp tồn kho điểm bán gần nhất để giao hàng nhanh trong khung giờ linh hoạt.',
      icon: Truck,
    },
  ];

  return (
    <section id="mart" className="py-20 sm:py-28 bg-[#F5F9FC] border-t border-[#E2ECF4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Concept Store Visual + Narrative */}
          <div className="lg:col-span-7 flex flex-col">
            <p className="text-sm font-semibold text-[#0A74DA] mb-2">ADIGO Mart</p>
            <h2 className="font-display font-bold text-[#0B1F33] tracking-[-0.025em] text-[clamp(1.75rem,3.2vw,2.65rem)] leading-[1.15] text-balance">
              Mua sắm theo cách bạn muốn.
            </h2>
            <p className="mt-4 text-base text-[#4A6075] leading-relaxed max-w-2xl">
              ADIGO Mart hướng đến kết nối không gian bán lẻ trực tiếp với trải nghiệm mua sắm số, mang đến sự thuận tiện trong việc khám phá, lựa chọn và tiếp cận sản phẩm.
            </p>

            {/* Concept Store Image with explicit directional illustration caption */}
            <div className="mt-8 rounded-3xl overflow-hidden border border-[#E2ECF4] bg-white">
              <div className="aspect-[16/9] relative">
                <ResilientImage
                  src={ADIGO_CONFIG.images.martConcept}
                  alt="Hình ảnh minh họa định hướng không gian bán lẻ ADIGO Mart"
                  className="w-full h-full object-cover"
                  fallbackTitle="Không gian bán lẻ định hướng ADIGO Mart"
                />
              </div>
              <div className="px-5 py-3.5 bg-white border-t border-[#E2ECF4] flex flex-wrap items-center justify-between gap-2 text-xs text-[#4A6075]">
                <span className="font-medium text-[#0C1B2A]">
                  Hình ảnh minh họa định hướng không gian cửa hàng ADIGO Mart
                </span>
                <span>Kết nối trải nghiệm mua sắm trực tiếp & trực tuyến</span>
              </div>
            </div>

            {/* Interactive Omnichannel Experience Modes */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {modes.map((m) => {
                const Icon = m.icon;
                const active = fulfillmentMode === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setFulfillmentMode(m.id)}
                    className={`text-left rounded-2xl p-4 border transition-colors cursor-pointer ${
                      active
                        ? 'bg-white border-[#0A74DA] shadow-[0_10px_24px_-12px_rgba(10,116,218,0.22)]'
                        : 'bg-white/70 border-[#E2ECF4] hover:bg-white'
                    }`}
                  >
                    <Icon className={`w-5 h-5 mb-2.5 ${active ? 'text-[#0A74DA]' : 'text-[#4A6075]'}`} />
                    <p className="font-display text-sm font-bold text-[#0C1B2A] leading-snug">
                      {m.label}
                    </p>
                    <p className="text-xs text-[#4A6075] mt-1.5 leading-relaxed">{m.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Phone Mockup Showing Store Locator + Seamless Member Offers */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative">
              <PhoneFrame activeTab="home" showBottomNav={false}>
                <StoreLocatorScreen mode={fulfillmentMode} />
              </PhoneFrame>

              {/* Subtle floating Store Benefit Card */}
              <div className="hidden sm:flex items-center gap-3 mt-4 bg-white border border-[#E2ECF4] rounded-2xl px-4 py-3 max-w-[284px]">
                <MapPin className="w-4 h-4 text-[#00A896] shrink-0" />
                <p className="text-xs text-[#4A6075] leading-snug">
                  Tìm điểm bán phù hợp, xem sản phẩm sẵn có và đồng bộ ưu đãi thành viên.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
