import React from 'react';
import { AdigoLogo, OrganicVietnamBadge } from './BrandLogos';

export type InfoDocType = 'support' | 'privacy' | 'terms';

interface FooterProps {
  onOpenInterest: (role: 'consumer' | 'seller' | 'partner') => void;
  onOpenInfoDoc: (doc: InfoDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInterest, onOpenInfoDoc }) => {
  return (
    <footer className="bg-[#F5F9FC] border-t border-[#E2ECF4] pt-14 pb-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E2ECF4]">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#top" aria-label="ADIGO">
              <AdigoLogo />
            </a>
            <p className="mt-4 text-sm text-[#4A6075] leading-relaxed max-w-sm">
              Nền tảng công nghệ kết nối sản phẩm, thương hiệu, nhà bán hàng, hệ thống bán lẻ và người tiêu dùng trên một trải nghiệm mua sắm thuận tiện và minh bạch.
            </p>
          </div>

          {/* Sản phẩm */}
          <div className="md:col-span-2">
            <h3 className="font-display text-sm font-bold text-[#0B1F33] mb-3.5">Sản phẩm</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#4A6075]">
              <li>
                <a href="#ung-dung" className="hover:text-[#0A74DA] transition-colors">
                  ADIGO App
                </a>
              </li>
              <li>
                <a href="#marketplace" className="hover:text-[#0A74DA] transition-colors">
                  ADIGO Marketplace
                </a>
              </li>
              <li>
                <a href="#mart" className="hover:text-[#0A74DA] transition-colors">
                  ADIGO Mart
                </a>
              </li>
            </ul>
          </div>

          {/* Kết nối */}
          <div className="md:col-span-2">
            <h3 className="font-display text-sm font-bold text-[#0B1F33] mb-3.5">Kết nối</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#4A6075]">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInterest('seller')}
                  className="hover:text-[#0A74DA] transition-colors text-left cursor-pointer"
                >
                  Nhà bán hàng
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInterest('partner')}
                  className="hover:text-[#0A74DA] transition-colors text-left cursor-pointer"
                >
                  Đối tác kinh doanh
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInterest('consumer')}
                  className="hover:text-[#0A74DA] transition-colors text-left cursor-pointer"
                >
                  Liên hệ
                </button>
              </li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-bold text-[#0B1F33] mb-3.5">Hỗ trợ</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#4A6075]">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfoDoc('support')}
                  className="hover:text-[#0A74DA] transition-colors text-left cursor-pointer"
                >
                  Trung tâm hỗ trợ
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfoDoc('privacy')}
                  className="hover:text-[#0A74DA] transition-colors text-left cursor-pointer"
                >
                  Chính sách bảo mật
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfoDoc('terms')}
                  className="hover:text-[#0A74DA] transition-colors text-left cursor-pointer"
                >
                  Điều khoản sử dụng
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Brand Attribution */}
        <div className="pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#4A6075]">
            ADIGO – Sản phẩm công nghệ được phát triển bởi Organic Việt Nam.
          </p>
          <OrganicVietnamBadge />
        </div>
      </div>
    </footer>
  );
};
