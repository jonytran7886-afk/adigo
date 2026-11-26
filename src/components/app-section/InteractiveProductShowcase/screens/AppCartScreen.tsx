import React, { useState } from 'react';
import { Plus, Minus, Truck, Store } from 'lucide-react';
import { APP_SECTION_CONFIG, AppTabId } from '../../../../config/appSectionConfig';
import { FoodThumbnail } from '../../../hero/ProductShowcase/ProductVisuals';

interface ScreenProps {
  onNavigate?: (tab: AppTabId) => void;
}

export const AppCartScreen: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [items, setItems] = useState(APP_SECTION_CONFIG.cartInitialItems);
  const [method, setMethod] = useState<'delivery' | 'pickup'>('delivery');

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-white px-3.5 pt-2 pb-4 gap-2.5">
      <div className="flex items-center justify-between">
        <p className="font-display text-sm font-bold text-[#112D52]">Giỏ hàng</p>
        <span className="text-[9.5px] font-medium text-[#52677D]">Đặt hàng nhanh</span>
      </div>

      {/* Product list */}
      <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-xl bg-[#F6F9FC] border border-[#E2ECF4] p-2 flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-white shrink-0 border border-[#E2ECF4]">
              <FoodThumbnail type={item.visual} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10.5px] font-bold text-[#112D52] truncate">{item.name}</p>
              <p className="text-[9px] text-[#52677D] tabular-nums">
                {item.unit} · {item.price.toLocaleString('vi-VN')} đ
              </p>
            </div>
            <div className="flex items-center gap-1 bg-white rounded-lg border border-[#E2ECF4] p-0.5 shrink-0">
              <button
                type="button"
                onClick={() => updateQty(item.id, -1)}
                className="w-4 h-4 rounded flex items-center justify-center text-[#112D52] cursor-pointer"
                aria-label={`Giảm số lượng ${item.name}`}
              >
                <Minus className="w-2.5 h-2.5" />
              </button>
              <span className="text-[10px] font-bold w-3.5 text-center tabular-nums">
                {item.qty}
              </span>
              <button
                type="button"
                onClick={() => updateQty(item.id, 1)}
                className="w-4 h-4 rounded flex items-center justify-center text-[#112D52] cursor-pointer"
                aria-label={`Tăng số lượng ${item.name}`}
              >
                <Plus className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Illustrative Delivery Selector */}
      <div className="grid grid-cols-2 gap-1.5 shrink-0">
        <button
          type="button"
          onClick={() => setMethod('delivery')}
          className={`rounded-xl p-2 border text-left transition-colors cursor-pointer ${
            method === 'delivery'
              ? 'bg-[#EAF5FF] border-[#345EAA] text-[#142F63]'
              : 'bg-[#F6F9FC] border-[#E2ECF4] text-[#52677D]'
          }`}
        >
          <Truck className="w-3.5 h-3.5 mb-0.5" />
          <span className="text-[9.5px] font-bold block">Giao tận nơi</span>
        </button>

        <button
          type="button"
          onClick={() => setMethod('pickup')}
          className={`rounded-xl p-2 border text-left transition-colors cursor-pointer ${
            method === 'pickup'
              ? 'bg-[#E8F8F0] border-[#398441] text-[#112D52]'
              : 'bg-[#F6F9FC] border-[#E2ECF4] text-[#52677D]'
          }`}
        >
          <Store className="w-3.5 h-3.5 mb-0.5" />
          <span className="text-[9.5px] font-bold block">Nhận tại Mart</span>
        </button>
      </div>

      {/* Subtotal + Continue */}
      <div className="shrink-0 pt-2 border-t border-[#E2ECF4] flex items-center justify-between gap-2">
        <div>
          <span className="text-[9px] text-[#52677D] block">Tạm tính</span>
          <span className="font-display text-xs font-extrabold text-[#142F63] tabular-nums">
            {subtotal.toLocaleString('vi-VN')} đ
          </span>
        </div>
        <button
          type="button"
          onClick={() => onNavigate?.('orders')}
          className="px-3.5 py-2 rounded-xl bg-[#345EAA] text-white text-[10.5px] font-semibold cursor-pointer"
        >
          Tiếp tục đặt hàng
        </button>
      </div>
    </div>
  );
};
