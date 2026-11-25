import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ADIGO_CONFIG } from '../config/adigoConfig';
import { ResilientImage } from './ResilientImage';

interface BusinessSectionProps {
  onOpenSellerModal: () => void;
  onOpenPartnerModal: () => void;
}

export const BusinessSection: React.FC<BusinessSectionProps> = ({
  onOpenSellerModal,
  onOpenPartnerModal,
}) => {
  const audiences = [
    {
      index: '01',
      title: 'Nhà sản xuất',
      desc: 'Đưa sản phẩm tiếp cận người tiêu dùng và thị trường.',
    },
    {
      index: '02',
      title: 'Thương hiệu và nhà bán hàng',
      desc: 'Khám phá thêm cơ hội phát triển gian hàng và kết nối khách hàng.',
    },
    {
      index: '03',
      title: 'Cửa hàng và nhà phân phối',
      desc: 'Kết nối hoạt động bán lẻ với hệ sinh thái thương mại số.',
    },
    {
      index: '04',
      title: 'Đối tác kinh doanh',
      desc: 'Cùng phát triển các sản phẩm, dịch vụ và tiện ích bổ trợ cho hệ sinh thái ADIGO.',
    },
  ];

  return (
    <section id="doi-tac" className="py-20 sm:py-28 bg-white border-t border-[#E2ECF4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mb-12">
          {/* Left Narrative + CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold text-[#00A896] mb-2">Kết nối kinh doanh</p>
              <h2 className="font-display font-bold text-[#0B1F33] tracking-[-0.025em] text-[clamp(1.75rem,3.2vw,2.65rem)] leading-[1.15] text-balance">
                Cùng mở rộng cơ hội kinh doanh.
              </h2>
              <p className="mt-4 text-base text-[#4A6075] leading-relaxed">
                ADIGO hướng đến kết nối các thương hiệu, nhà sản xuất, nhà bán hàng, cửa hàng và đối tác để cùng phát triển một thị trường rộng mở hơn.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onOpenSellerModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0B1F33] hover:bg-[#133353] text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Trở thành nhà bán hàng</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenPartnerModal}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white border border-[#E2ECF4] hover:border-[#0A74DA]/40 hover:bg-[#F5F9FC] text-[#0C1B2A] text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Kết nối đối tác
              </button>
            </div>
          </div>

          {/* Right Editorial Community Photograph */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[280px] rounded-3xl overflow-hidden border border-[#E2ECF4] bg-[#F5F9FC]">
              <ResilientImage
                src={ADIGO_CONFIG.images.partnerCommunity}
                alt="Các nhà sản xuất, thương hiệu và chủ cửa hàng đồng hành cùng hệ sinh thái ADIGO"
                className="w-full h-full object-cover"
                fallbackTitle="Cộng đồng nhà sản xuất & đối tác ADIGO"
              />
            </div>
          </div>
        </div>

        {/* 4 Partner Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audiences.map((item) => (
            <div
              key={item.index}
              className="rounded-2xl bg-[#F5F9FC] border border-[#E2ECF4] p-6 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#0A74DA] tabular-nums">
                  {item.index}
                </span>
                <h3 className="font-display text-lg font-bold text-[#0B1F33] mt-3">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#4A6075] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
