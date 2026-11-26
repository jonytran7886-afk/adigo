import React from 'react';
import { Truck, CheckCircle2, Package, MapPin } from 'lucide-react';
import { APP_SECTION_CONFIG } from '../../../../config/appSectionConfig';

export const AppOrdersScreen: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-white px-3.5 pt-2 pb-4 gap-2.5">
      <div className="flex items-center justify-between">
        <p className="font-display text-sm font-bold text-[#112D52]">Theo dõi đơn hàng</p>
      </div>

      {/* Order Status Summary */}
      <div className="rounded-2xl bg-[#F4F8FC] border border-[#E2ECF4] p-2.5 flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] font-bold text-[#112D52] tabular-nums">
            Đơn hàng #ADG12839
          </p>
          <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-[#398441] text-white text-[9px] font-semibold">
            Đang giao nhận
          </span>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#EAF5FF] text-[#345EAA] flex items-center justify-center shrink-0">
          <Truck className="w-5 h-5" />
        </div>
      </div>

      {/* 5-Step Timeline */}
      <div className="flex-1 overflow-y-auto no-scrollbar rounded-2xl bg-white border border-[#E2ECF4] p-3 flex flex-col gap-2.5">
        {APP_SECTION_CONFIG.orderTimeline.map((step, idx) => {
          const isLast = idx === APP_SECTION_CONFIG.orderTimeline.length - 1;
          return (
            <div key={step.id} className="flex items-start gap-2.5">
              <div className="flex flex-col items-center shrink-0">
                <CheckCircle2
                  className={`w-4 h-4 ${step.done ? 'text-[#398441]' : 'text-[#CBD5E1]'}`}
                />
                {!isLast && (
                  <div
                    className={`w-px h-3.5 mt-0.5 ${
                      step.done ? 'bg-[#398441]/35' : 'bg-[#E2ECF4]'
                    }`}
                  />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p
                  className={`text-[10.5px] font-bold leading-tight ${
                    step.done ? 'text-[#112D52]' : 'text-[#52677D]'
                  }`}
                >
                  {step.label}
                </p>
                <span className="text-[9px] text-[#52677D] tabular-nums">{step.time}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Generic Order Items & Pickup Note (No real personal data) */}
      <div className="rounded-xl bg-[#F6F9FC] border border-[#E2ECF4] p-2.5 flex items-center justify-between gap-2 text-[9.5px] text-[#52677D]">
        <div className="flex items-center gap-1.5 min-w-0">
          <Package className="w-3.5 h-3.5 text-[#345EAA] shrink-0" />
          <span className="truncate font-medium text-[#112D52]">Thịt gà, Trứng gà, Rau củ</span>
        </div>
        <div className="flex items-center gap-1 shrink-0 text-[#398441] font-semibold">
          <MapPin className="w-3 h-3" />
          <span>ADIGO Mart</span>
        </div>
      </div>
    </div>
  );
};
