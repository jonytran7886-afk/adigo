import React, { useState } from 'react';
import { QrCode, ShieldCheck, ArrowRight, ScanLine } from 'lucide-react';
import { ADIGO_CONFIG } from '../config/adigoConfig';
import { ResilientImage } from './ResilientImage';
import { PhoneFrame } from './mockups/PhoneFrame';
import { TraceabilityScreen } from './mockups/AdigoScreens';

export const TraceabilitySection: React.FC = () => {
  const [scanned, setScanned] = useState(true);

  const journeySteps = [
    {
      step: '01',
      title: 'Nguồn sản xuất',
      desc: 'Thông tin về đơn vị sản xuất và vùng canh tác, chăn nuôi hoặc chế biến được cung cấp.',
    },
    {
      step: '02',
      title: 'Sản phẩm',
      desc: 'Quy cách đóng gói, mã lô, ngày đóng gói và hướng dẫn bảo quản rõ ràng.',
    },
    {
      step: '03',
      title: 'Phân phối',
      desc: 'Thông tin điểm bán, gian hàng hoặc hệ thống cửa hàng phân phối sản phẩm.',
    },
    {
      step: '04',
      title: 'Người tiêu dùng',
      desc: 'Quét mã QR trực tiếp trên bao bì bằng ADIGO App để xem đầy đủ dữ liệu.',
    },
  ];

  return (
    <section id="nguon-goc" className="py-20 sm:py-28 bg-white border-t border-[#E2ECF4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-[#00A896] mb-2">Thông tin và Nguồn gốc</p>
          <h2 className="font-display font-bold text-[#0B1F33] tracking-[-0.025em] text-[clamp(1.75rem,3.2vw,2.65rem)] leading-[1.15] text-balance">
            Hiểu rõ hơn về sản phẩm bạn chọn.
          </h2>
          <p className="mt-4 text-base text-[#4A6075] leading-relaxed">
            ADIGO hướng đến kết nối thông tin sản phẩm với dữ liệu nguồn gốc, giúp người tiêu dùng có thêm cơ sở tìm hiểu và đưa ra lựa chọn phù hợp.
          </p>
        </div>

        {/* Main Showcase: Real Product with QR + Interactive Smartphone Traceability */}
        <div className="rounded-3xl bg-[#F5F9FC] border border-[#E2ECF4] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Real Packaged Product + Interactive Scan Controls */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2ECF4] bg-white aspect-[4/3]">
              <ResilientImage
                src={ADIGO_CONFIG.images.traceabilityProduce}
                alt="Sản phẩm đóng gói kèm nhãn mã QR truy xuất nguồn gốc"
                className="w-full h-full object-cover"
                fallbackTitle="Sản phẩm kèm mã QR thông tin nguồn gốc"
              />
              {/* Animated Subtle Scan Overlay when in scanning state */}
              {!scanned && (
                <div className="absolute inset-0 bg-[#0B1F33]/30 flex flex-col items-center justify-center p-6">
                  <div className="w-44 h-44 rounded-2xl border-2 border-white/90 relative overflow-hidden flex items-center justify-center bg-black/15">
                    <div className="w-full h-0.5 bg-[#5EEAD4] shadow-[0_0_12px_#5EEAD4] animate-pulse" />
                  </div>
                  <span className="mt-3 text-xs font-semibold text-white bg-[#0B1F33]/80 px-3 py-1.5 rounded-lg">
                    Đang đọc mã QR trên bao bì...
                  </span>
                </div>
              )}
            </div>

            {/* Interactive Switch between Scan Mode & Profile Mode */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 bg-white border border-[#E2ECF4] rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#0A74DA] flex items-center justify-center shrink-0">
                  {scanned ? <ShieldCheck className="w-5 h-5" /> : <ScanLine className="w-5 h-5" />}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0C1B2A]">
                    {scanned ? 'Đang hiển thị hồ sơ sản phẩm' : 'Đang mô phỏng quét mã QR'}
                  </p>
                  <p className="text-xs text-[#4A6075]">
                    Chạm để chuyển đổi trạng thái minh họa
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 p-1 bg-[#F5F9FC] rounded-xl border border-[#E2ECF4]">
                <button
                  type="button"
                  onClick={() => setScanned(false)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    !scanned ? 'bg-[#0A74DA] text-white' : 'text-[#4A6075] hover:text-[#0C1B2A]'
                  }`}
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>Quét mã QR</span>
                </button>
                <button
                  type="button"
                  onClick={() => setScanned(true)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    scanned ? 'bg-[#0A74DA] text-white' : 'text-[#4A6075] hover:text-[#0C1B2A]'
                  }`}
                >
                  Hồ sơ nguồn gốc
                </button>
              </div>
            </div>

            <p className="mt-3 text-xs text-[#4A6075] leading-relaxed">
              Lưu ý: Thông tin nguồn gốc và hồ sơ chất lượng được hiển thị dựa trên dữ liệu thực tế do nhà sản xuất và đối tác cung cấp cho từng lô sản phẩm.
            </p>
          </div>

          {/* Right: Traceability Smartphone Screen */}
          <div className="lg:col-span-6 flex justify-center">
            <PhoneFrame activeTab="explore" showBottomNav={false}>
              <TraceabilityScreen scanned={scanned} />
            </PhoneFrame>
          </div>
        </div>

        {/* 4-Step Visual Product Journey Timeline */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {journeySteps.map((item, idx) => (
            <div
              key={item.step}
              className="relative rounded-2xl bg-white border border-[#E2ECF4] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#0A74DA] tabular-nums">
                    {item.step}
                  </span>
                  {idx < journeySteps.length - 1 && (
                    <ArrowRight className="hidden lg:block w-4 h-4 text-[#CBD5E1]" aria-hidden="true" />
                  )}
                </div>
                <h3 className="font-display text-base font-bold text-[#0B1F33]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#4A6075] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
