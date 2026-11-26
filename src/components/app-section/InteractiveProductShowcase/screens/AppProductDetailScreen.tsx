import React, { useState } from 'react';
import { ChevronLeft, QrCode, Sprout, ShieldCheck, Package, Store, Plus, Check } from 'lucide-react';
import { AppTabId } from '../../../../config/appSectionConfig';
import { FoodThumbnail } from '../../../hero/ProductShowcase/ProductVisuals';

interface ScreenProps {
  onNavigate?: (tab: AppTabId) => void;
}

export const AppProductDetailScreen: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [showOrigin, setShowOrigin] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-white px-3.5 pt-2 pb-4 gap-2.5">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => onNavigate?.('discover')}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#112D52] cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Chi tiết sản phẩm</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-2.5 pr-0.5">
        {/* Product Photo */}
        <div className="h-28 rounded-2xl overflow-hidden bg-[#F6F8FA] border border-[#E2ECF4] shrink-0">
          <FoodThumbnail type="chicken" />
        </div>

        {/* Title & Unit */}
        <div>
          <span className="text-[9.5px] font-semibold text-[#398441]">
            Đơn vị sản xuất liên kết
          </span>
          <p className="font-display text-sm font-bold text-[#112D52] mt-0.5">
            Thịt gà ta
          </p>
          <p className="text-[10.5px] text-[#52677D] mt-0.5">
            Khay 1 kg · Đóng gói màng giữ lạnh theo lô
          </p>
        </div>

        {/* Origin Info Button / Toggle */}
        <button
          type="button"
          onClick={() => setShowOrigin((prev) => !prev)}
          className="w-full rounded-xl bg-[#EAF5FF] border border-[#345EAA]/20 px-3 py-2 flex items-center justify-between text-left cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <QrCode className="w-4 h-4 text-[#345EAA] shrink-0" />
            <div>
              <p className="text-[10.5px] font-bold text-[#142F63]">Tìm hiểu nguồn gốc sản phẩm</p>
              <p className="text-[9px] text-[#52677D]">
                {showOrigin ? 'Thu gọn hành trình nguồn gốc' : 'Xem thông tin hành trình theo dữ liệu'}
              </p>
            </div>
          </div>
        </button>

        {/* Conditional Origin Timeline */}
        {showOrigin && (
          <div className="rounded-xl bg-[#F6F9FC] border border-[#E2ECF4] p-2.5 flex flex-col gap-2">
            {[
              { title: 'Nguồn sản xuất', desc: 'Trang trại liên kết', icon: Sprout },
              { title: 'Chăn nuôi', desc: 'Theo quy trình được kiểm soát', icon: ShieldCheck },
              { title: 'Sơ chế & đóng gói', desc: 'Đóng gói giữ lạnh theo lô', icon: Package },
              { title: 'Phân phối', desc: 'Đến hệ thống ADIGO Mart', icon: Store },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#E8F8F0] text-[#398441] flex items-center justify-center shrink-0">
                    <Icon className="w-3 h-3" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-[#112D52] leading-tight">{step.title}</p>
                    <p className="text-[9px] text-[#52677D] leading-tight">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Storage Guide */}
        <div className="rounded-xl bg-[#F6F9FC] border border-[#E2ECF4] p-2.5 text-[10px] text-[#52677D] leading-relaxed">
          <span className="font-bold text-[#112D52] block mb-0.5">Hướng dẫn bảo quản</span>
          Bảo quản lạnh ở 0–4°C và sử dụng trong thời hạn ghi trên tem đóng gói.
        </div>
      </div>

      {/* Add to Cart CTA */}
      <button
        type="button"
        onClick={() => {
          setAdded(true);
          onNavigate?.('cart');
        }}
        className={`shrink-0 w-full py-2.5 rounded-xl text-white text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
          added ? 'bg-[#398441]' : 'bg-[#345EAA] hover:bg-[#142F63]'
        }`}
      >
        {added ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        <span>{added ? 'Đã thêm vào giỏ hàng' : 'Thêm vào giỏ hàng'}</span>
      </button>
    </div>
  );
};
