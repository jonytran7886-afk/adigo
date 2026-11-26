import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CampaignConfig } from '../../../config/campaignConfig';

interface ProductCardProps {
  config: CampaignConfig;
}

export const ProductCard: React.FC<ProductCardProps> = ({ config }) => {
  const { product, modalAssets } = config;

  return (
    <div
      className="flex items-center justify-between gap-3 p-3 rounded-2xl border-2 border-[#398441] bg-gradient-to-r from-[#F0FDF4] via-[#F7FEF9] to-[#FFFFFF] shadow-[0_6px_18px_rgba(57,132,65,0.08)]"
      aria-label={`Sản phẩm đã chọn mặc định: ${product.name}`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden bg-[#F3ECE2] border border-[#DCFCE7] shrink-0">
          <img
            src={modalAssets.productCardThumbnail}
            alt={product.name}
            width={160}
            height={120}
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="min-w-0">
          <p className="font-display font-bold text-sm sm:text-[15.5px] text-[#112D52] leading-snug">
            {product.name}
          </p>
          <p className="text-xs text-[#52677D] leading-snug mt-0.5">
            {product.shortDescription}
          </p>
        </div>
      </div>

      <span
        className="w-7 h-7 rounded-full bg-[#2F8E3B] text-white flex items-center justify-center shrink-0 shadow-xs"
        aria-hidden="true"
      >
        <CheckCircle2 className="w-4.5 h-4.5" />
      </span>
    </div>
  );
};
