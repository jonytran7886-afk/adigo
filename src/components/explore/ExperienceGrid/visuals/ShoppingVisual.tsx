import { ResponsiveImage } from '../../../ResponsiveImage';
import React from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { EXPLORE_CONFIG } from '../../../../config/exploreConfig';

export const ShoppingVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[220px] lg:min-h-full overflow-hidden select-none pointer-events-none">
      {/* Lifestyle photography positioned cleanly on right half */}
      <ResponsiveImage
        src={EXPLORE_CONFIG.assets.shoppingLifestyle}
        alt="Người tiêu dùng sử dụng smartphone mua sắm thuận tiện trong cửa hàng thực phẩm hiện đại"
        referrerPolicy="no-referrer"
        loading="lazy"
        decoding="async"
        width={960}
        height={536}
        className="w-full h-full object-cover object-[64%_22%] transition-transform duration-500 ease-out group-hover:scale-[1.025]"
      />

      {/* Seamless Gradient Mask blending photo into Card 02 Mint Background */}
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, #E3F6EC 0%, rgba(227,246,236,0.92) 12%, rgba(227,246,236,0.45) 34%, transparent 62%)',
        }}
        aria-hidden="true"
      />
      <div
        className="lg:hidden absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #E3F6EC 0%, rgba(227,246,236,0.72) 18%, transparent 45%)',
        }}
        aria-hidden="true"
      />

      {/* Floating Glass Cart + Check Badge next to shopper (pure icon, zero text) */}
      <div
        className="absolute top-6 left-6 sm:top-8 sm:left-8 lg:top-10 lg:left-4 z-10 inline-flex items-center gap-2 px-3.5 py-2.5 rounded-[18px] bg-white/80 backdrop-blur-md border border-white/90 shadow-[0_12px_28px_rgba(31,84,130,0.14)] transition-transform duration-300 group-hover:-translate-y-1"
        aria-hidden="true"
      >
        <ShoppingCart className="w-5 h-5 text-[#345EAA]" />
        <span className="w-5 h-5 rounded-full bg-[#398441] text-white flex items-center justify-center">
          <Check className="w-3 h-3" strokeWidth={2.8} />
        </span>
      </div>
    </div>
  );
};
