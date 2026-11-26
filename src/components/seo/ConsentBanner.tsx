import React, { useEffect, useState } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import {
  ConsentStatus,
  bootstrapTrackingScripts,
  getStoredConsent,
  setStoredConsent,
} from '../../utils/analytics';

interface ConsentBannerProps {
  forceOpen?: boolean;
  onCloseForceOpen?: () => void;
}

export const ConsentBanner: React.FC<ConsentBannerProps> = ({
  forceOpen = false,
  onCloseForceOpen,
}) => {
  const [status, setStatus] = useState<ConsentStatus>('unset');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    setStatus(stored);
    setMounted(true);
    if (stored === 'granted') {
      bootstrapTrackingScripts();
    }
  }, []);

  if (!mounted) return null;

  const isVisible = forceOpen || status === 'unset';
  if (!isVisible) return null;

  const handleAccept = () => {
    setStoredConsent('granted');
    setStatus('granted');
    onCloseForceOpen?.();
  };

  const handleDecline = () => {
    setStoredConsent('denied');
    setStatus('denied');
    onCloseForceOpen?.();
  };

  return (
    <aside
      aria-label="Tùy chọn quyền riêng tư và phân tích"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-[410px] z-40 rounded-[22px] bg-white/92 backdrop-blur-xl border border-white shadow-[0_18px_42px_rgba(20,47,99,0.16)] p-4 text-[#112D52]"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#EAF5FF] text-[#345EAA] flex items-center justify-center shrink-0 mt-0.5">
          <ShieldCheck className="w-4.5 h-4.5" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="font-display text-xs font-bold text-[#142F63]">
              Quyền riêng tư & Trải nghiệm
            </p>
            {forceOpen && (
              <button
                type="button"
                onClick={onCloseForceOpen}
                aria-label="Đóng tùy chọn cookie"
                className="w-6 h-6 rounded-full hover:bg-[#EAF5FF] flex items-center justify-center text-[#52677D] cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          <p className="mt-1 text-[11.5px] text-[#52677D] leading-relaxed">
            ADIGO chỉ thu thập dữ liệu tương tác ẩn danh nhằm cải thiện hiệu năng
            và trải nghiệm khi bạn đồng ý.
          </p>

          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={handleAccept}
              className="px-3.5 py-1.5 rounded-full adigo-brand-gradient text-white text-[11.5px] font-semibold cursor-pointer shadow-xs"
            >
              Đồng ý
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="px-3.5 py-1.5 rounded-full bg-[#EAF5FF] hover:bg-[#DCEDFB] text-[#142F63] text-[11.5px] font-semibold cursor-pointer transition-colors"
            >
              Từ chối
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
