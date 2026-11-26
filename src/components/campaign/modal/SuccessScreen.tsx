import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CampaignConfig } from '../../../config/campaignConfig';

interface SuccessScreenProps {
  config: CampaignConfig;
  orderCode: string;
  customerName: string;
  quantity: number;
  status: string;
  onClose: () => void;
}

export const SuccessScreen: React.FC<SuccessScreenProps> = ({
  config,
  orderCode,
  customerName,
  quantity,
  status,
  onClose,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-6 sm:py-10 px-2 sm:px-6 h-full">
      <div className="w-16 h-16 rounded-full bg-[#E6F9EC] border-2 border-[#86EFAC] flex items-center justify-center text-[#1E8A38] shadow-[0_12px_28px_rgba(30,138,56,0.16)]">
        <CheckCircle2 className="w-9 h-9" aria-hidden="true" />
      </div>

      <h3 className="mt-4 font-display font-extrabold text-2xl sm:text-[26px] text-[#112D52] tracking-tight">
        {config.successCopy.title}
      </h3>

      <p className="mt-2.5 text-sm text-[#4A6278] leading-relaxed max-w-md">
        {config.successCopy.message}
      </p>

      <div className="mt-6 w-full max-w-md rounded-2xl bg-white border border-[#D4E3F1] shadow-[0_10px_24px_rgba(20,47,99,0.06)] p-4 sm:p-5 text-left space-y-2.5">
        <div className="flex items-center justify-between gap-3 pb-2.5 border-b border-[#EBF2F8]">
          <span className="text-xs font-medium text-[#52677D]">Mã đặt trước</span>
          <span className="font-mono font-bold text-sm text-[#142F63] tabular-nums bg-[#EAF5FF] px-2.5 py-1 rounded-lg">
            {orderCode}
          </span>
        </div>

        <div className="flex items-center justify-between gap-3 text-xs sm:text-[13px]">
          <span className="text-[#52677D]">Khách hàng</span>
          <span className="font-bold text-[#112D52] text-right">{customerName}</span>
        </div>

        <div className="flex items-center justify-between gap-3 text-xs sm:text-[13px]">
          <span className="text-[#52677D]">Sản phẩm</span>
          <span className="font-bold text-[#112D52] text-right">{config.product.name}</span>
        </div>

        <div className="flex items-center justify-between gap-3 text-xs sm:text-[13px]">
          <span className="text-[#52677D]">Số lượng đã đặt</span>
          <span className="font-bold text-[#112D52] tabular-nums">
            {quantity} {config.product.unit}
          </span>
        </div>

        <div className="flex items-center justify-between gap-3 text-xs sm:text-[13px] pt-1 border-t border-[#EBF2F8]">
          <span className="text-[#52677D]">Trạng thái</span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] text-xs font-bold">
            {status || 'Chờ xác nhận'}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full adigo-brand-gradient text-white font-display font-bold text-sm shadow-[0_10px_24px_rgba(52,94,170,0.28)] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#345EAA] focus-visible:ring-offset-2"
      >
        <span>{config.successCopy.ctaLabel}</span>
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </button>
    </div>
  );
};
