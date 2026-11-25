import React from 'react';
import { Search, Store, QrCode, Layers, ArrowUpRight } from 'lucide-react';
import { ResilientImage } from './ResilientImage';
import { ADIGO_CONFIG } from '../config/adigoConfig';

export const DiscoverSection: React.FC = () => {
  return (
    <section id="kham-pha" className="py-20 sm:py-28 bg-white border-t border-[#E2ECF4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <p className="text-sm font-semibold text-[#0A74DA] mb-2">Khám phá ADIGO</p>
          <h2 className="font-display font-bold text-[#0B1F33] tracking-[-0.025em] text-[clamp(1.75rem,3.2vw,2.65rem)] leading-[1.15] text-balance">
            Một nền tảng. Nhiều trải nghiệm.
          </h2>
          <p className="mt-4 text-base text-[#4A6075] leading-relaxed">
            ADIGO kết nối sản phẩm, thương hiệu, nhà bán hàng và hệ thống bán lẻ, giúp người dùng dễ dàng khám phá, lựa chọn và mua sắm theo nhu cầu.
          </p>
        </div>

        {/* 4-Zone Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Card 1: Khám phá dễ dàng (Wide 7 cols) */}
          <div className="md:col-span-7 rounded-3xl bg-[#F5F9FC] border border-[#E2ECF4] overflow-hidden flex flex-col justify-between">
            <div className="p-7 sm:p-8">
              <h3 className="font-display text-xl font-bold text-[#0B1F33]">
                Khám phá dễ dàng
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#4A6075] max-w-md leading-relaxed">
                Tìm kiếm sản phẩm, thương hiệu và những lựa chọn phù hợp với nhu cầu.
              </p>

              {/* Inline Mini Search & Category UI Visual */}
              <div className="mt-6 bg-white border border-[#E2ECF4] rounded-2xl p-4">
                <div className="flex items-center gap-2.5 pb-3 border-b border-[#E2ECF4]">
                  <Search className="w-4 h-4 text-[#0A74DA]" />
                  <span className="text-sm text-[#0C1B2A] font-medium">Tìm kiếm rau củ theo mùa, trà thảo mộc, thịt tươi...</span>
                </div>
                <div className="pt-3 grid grid-cols-3 gap-2.5 text-xs">
                  <div className="rounded-xl bg-[#F5F9FC] p-2.5">
                    <span className="font-semibold text-[#0C1B2A] block">Rau củ & Trái cây</span>
                    <span className="text-[#4A6075]">Đa dạng vùng miền</span>
                  </div>
                  <div className="rounded-xl bg-[#F5F9FC] p-2.5">
                    <span className="font-semibold text-[#0C1B2A] block">Thịt & Trứng tươi</span>
                    <span className="text-[#4A6075]">Đóng gói sạch</span>
                  </div>
                  <div className="rounded-xl bg-[#F5F9FC] p-2.5">
                    <span className="font-semibold text-[#0C1B2A] block">Thương hiệu</span>
                    <span className="text-[#4A6075]">Gian hàng rõ ràng</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Mua sắm thuận tiện (5 cols, lifestyle photo + scrim) */}
          <div className="md:col-span-5 rounded-3xl border border-[#E2ECF4] overflow-hidden relative min-h-[320px] flex flex-col justify-end">
            <ResilientImage
              src={ADIGO_CONFIG.images.consumerLifestyle}
              alt="Người tiêu dùng trải nghiệm mua sắm thuận tiện cùng ADIGO"
              className="absolute inset-0 w-full h-full object-cover"
              fallbackTitle="Trải nghiệm mua sắm thuận tiện"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/90 via-[#0B1F33]/40 to-transparent"
              aria-hidden="true"
            />
            <div className="relative z-10 p-7 sm:p-8 text-white">
              <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7DD3FC] mb-1.5">
                <Store className="w-3.5 h-3.5" />
                <span>Trực tuyến & Trực tiếp</span>
              </div>
              <h3 className="font-display text-xl font-bold">Mua sắm thuận tiện</h3>
              <p className="mt-2 text-sm text-white/90 leading-relaxed">
                Trải nghiệm mua sắm kết nối giữa trực tuyến và trực tiếp.
              </p>
            </div>
          </div>

          {/* Card 3: Thông tin minh bạch (5 cols) */}
          <div className="md:col-span-5 rounded-3xl bg-[#F5F9FC] border border-[#E2ECF4] p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-[#0B1F33]">
                Thông tin minh bạch
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#4A6075] leading-relaxed">
                Tiếp cận thông tin sản phẩm và nguồn gốc theo dữ liệu được cung cấp.
              </p>
            </div>

            <div className="mt-6 bg-white border border-[#E2ECF4] rounded-2xl p-4 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] text-[#0A74DA] flex items-center justify-center shrink-0">
                <QrCode className="w-7 h-7" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-[#0C1B2A]">Hồ sơ nguồn gốc sản phẩm</p>
                <p className="text-xs text-[#4A6075] mt-0.5">
                  Nhà sản xuất · Vùng sản xuất · Hướng dẫn bảo quản
                </p>
              </div>
              <a
                href="#nguon-goc"
                className="w-9 h-9 rounded-xl bg-[#F5F9FC] hover:bg-[#E2ECF4] flex items-center justify-center text-[#0C1B2A] shrink-0 transition-colors"
                aria-label="Xem phần thông tin nguồn gốc"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 4: Kết nối không giới hạn (7 cols) */}
          <div className="md:col-span-7 rounded-3xl bg-[#0B1F33] text-white p-7 sm:p-8 flex flex-col justify-between overflow-hidden relative">
            <div
              className="pointer-events-none absolute -right-12 -bottom-12 w-72 h-72 rounded-full bg-gradient-to-tr from-[#0A74DA]/35 to-[#00A896]/25 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#5EEAD4] mb-2">
                <Layers className="w-4 h-4" />
                <span>Hệ sinh thái mở</span>
              </div>
              <h3 className="font-display text-xl font-bold">
                Kết nối không giới hạn
              </h3>
              <p className="mt-2 text-sm sm:text-base text-white/80 max-w-lg leading-relaxed">
                Khám phá thêm nhiều sản phẩm, nhà bán hàng và cơ hội tiêu dùng.
              </p>
            </div>

            <div className="relative z-10 mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: 'ADIGO App', desc: 'Trải nghiệm tiêu dùng hàng ngày' },
                { title: 'ADIGO Marketplace', desc: 'Đa dạng thương hiệu & nhà bán' },
                { title: 'ADIGO Mart', desc: 'Hệ thống điểm bán kết nối' },
              ].map((node) => (
                <div
                  key={node.title}
                  className="rounded-2xl bg-white/8 border border-white/12 p-4 backdrop-blur-xs"
                >
                  <p className="font-display text-sm font-bold text-white">{node.title}</p>
                  <p className="text-xs text-white/75 mt-1">{node.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
