import React from 'react';
import { ShoppingBasket } from 'lucide-react';
import { CampaignConfig } from '../../../config/campaignConfig';

interface OrderSummaryProps {
  config: CampaignConfig;
  quantity: number;
}

function formatVnd(amount: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(amount);
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ config, quantity }) => {
  const { product, formCopy } = config;
  const hasOfficialPrice =
    product.showPricingEstimate &&
    typeof product.unitPrice === 'number' &&
    product.unitPrice > 0;

  const estimatedTotal = hasOfficialPrice
    ? (product.unitPrice as number) * quantity
    : null;

  const estimatedTotalWeight =
    product.showPricingEstimate &&
    typeof product.estimatedWeightKg === 'number' &&
    product.estimatedWeightKg > 0
      ? Number((product.estimatedWeightKg * quantity).toFixed(1))
      : null;

  return (
    <div className="rounded-2xl bg-[#E9F9EE] border border-[#C6E8D0] px-3.5 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
      <div className="flex items-start sm:items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-white border border-[#C6E8D0] flex items-center justify-center text-[#2F8E3B] shrink-0">
          <ShoppingBasket className="w-4.5 h-4.5" aria-hidden="true" />
        </div>
        <div>
          <p className="font-display text-xs sm:text-[13px] font-bold text-[#112D52]">
            {formCopy.summaryTitle}
          </p>
          <p className="text-xs text-[#3C566E] mt-0.5 tabular-nums">
            Sản phẩm: <strong className="text-[#112D52]">{product.name}</strong>
            <span className="mx-1.5 text-[#9BB4C7]" aria-hidden="true">
              |
            </span>
            Số lượng:{' '}
            <strong className="text-[#112D52]">
              {quantity} {product.unit}
            </strong>
            {estimatedTotalWeight !== null && (
              <>
                <span className="mx-1.5 text-[#9BB4C7]" aria-hidden="true">
                  |
                </span>
                Ước tính: <strong className="text-[#112D52]">~{estimatedTotalWeight} kg</strong>
              </>
            )}
          </p>
        </div>
      </div>

      <div className="sm:border-l sm:border-[#C6E8D0] sm:pl-3.5 shrink-0">
        <p className="text-[11px] font-medium text-[#52677D]">
          {hasOfficialPrice ? 'Tạm tính:' : 'Giá bán:'}
        </p>
        <p className="text-xs sm:text-[13px] font-bold text-[#1E7A34] leading-tight tabular-nums">
          {estimatedTotal !== null ? formatVnd(estimatedTotal) : product.pricePendingText}
        </p>
      </div>
    </div>
  );
};
