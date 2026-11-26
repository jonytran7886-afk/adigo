import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, AlertCircle, Smartphone, Compass, QrCode, ArrowRight, ExternalLink } from 'lucide-react';
import { BrandLogo } from './Header/BrandLogo';
import { SEO_CONFIG } from '../../config/seoConfig';
import { trackEvent } from '../../utils/analytics';

export type HeroModalMode = 'register' | 'app-tour' | null;

interface HeroPreviewModalProps {
  mode: HeroModalMode;
  selectedTopic?: string;
  onSwitchMode: (mode: HeroModalMode) => void;
  onClose: () => void;
}

export const HeroPreviewModal: React.FC<HeroPreviewModalProps> = ({
  mode,
  selectedTopic,
  onSwitchMode,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'consumer' | 'seller' | 'partner'>('consumer');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const formStartedRef = useRef(false);

  useEffect(() => {
    setSubmitted(false);
    setError('');
    formStartedRef.current = false;
  }, [mode, selectedTopic]);

  if (!mode) return null;

  const markFormStarted = () => {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    trackEvent('partner_form_start', {
      topic: selectedTopic || 'general',
      lead_role: role,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (name.trim().length < 2) {
      setError('Vui lòng nhập họ và tên của bạn.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Vui lòng nhập địa chỉ email hợp lệ.');
      return;
    }

    setSubmitted(true);
    trackEvent('generate_lead', {
      lead_role: role,
      topic: selectedTopic || 'general',
      form_location: 'hero_preview_modal',
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#112D52]/45 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hero-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-[28px] bg-white/95 backdrop-blur-xl border border-white shadow-[0_24px_60px_rgba(20,47,99,0.22)] p-6 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#EAF5FF] hover:bg-[#D9EEFC] text-[#142F63] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Đóng"
        >
          <X className="w-4 h-4" />
        </button>

        <BrandLogo size="sm" />

        {mode === 'app-tour' ? (
          <div className="mt-5">
            <h2 id="hero-modal-title" className="font-display text-xl font-bold text-[#112D52]">
              Khám phá trải nghiệm ADIGO App
            </h2>
            <p className="mt-1.5 text-sm text-[#52677D] leading-relaxed">
              Khám phá ba điểm chạm chính trong hành trình trải nghiệm ứng dụng ADIGO.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {[
                {
                  icon: Smartphone,
                  title: 'Trang chủ mua sắm trực quan',
                  desc: 'Tìm kiếm sản phẩm, chọn danh mục thiết yếu và thêm nhanh vào giỏ hàng.',
                },
                {
                  icon: Compass,
                  title: 'Khám phá đa dạng nhóm hàng',
                  desc: 'Kết nối thịt tươi, hải sản, rau củ, trái cây, nông sản và thực phẩm chế biến.',
                },
                {
                  icon: QrCode,
                  title: 'Nguồn gốc sản phẩm minh bạch',
                  desc: 'Theo dõi thông tin từ trang trại liên kết đến hệ thống ADIGO Mart.',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-[#F5FAFF] border border-[#E2ECF4] p-4 flex items-start gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E2ECF4] text-[#345EAA] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-[#112D52]">{item.title}</h3>
                      <p className="text-xs text-[#52677D] mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
              {SEO_CONFIG.storeLinks.appStore && (
                <a
                  href={SEO_CONFIG.storeLinks.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent('app_download_click', { store: 'app_store' })
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#EAF5FF] text-[#142F63] text-xs font-semibold hover:bg-[#DCEEFF] transition-colors"
                >
                  <span>App Store</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {SEO_CONFIG.storeLinks.googlePlay && (
                <a
                  href={SEO_CONFIG.storeLinks.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent('app_download_click', { store: 'google_play' })
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#E8F8F0] text-[#247A4B] text-xs font-semibold hover:bg-[#D4F2E3] transition-colors"
                >
                  <span>Google Play</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-full text-sm font-semibold text-[#52677D] hover:text-[#112D52] cursor-pointer"
              >
                Đóng
              </button>
              <button
                type="button"
                onClick={() => onSwitchMode('register')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full adigo-brand-gradient text-white text-sm font-semibold cursor-pointer"
              >
                <span>Đăng ký nhận thông tin</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : !submitted ? (
          <div className="mt-5">
            <h2 id="hero-modal-title" className="font-display text-xl font-bold text-[#112D52]">
              {selectedTopic
                ? `Quan tâm nội dung: ${selectedTopic}`
                : 'Đăng ký trải nghiệm ADIGO'}
            </h2>
            <p className="mt-1.5 text-sm text-[#52677D] leading-relaxed">
              Để lại thông tin để nhận cập nhật mới nhất khi ADIGO chính thức ra mắt ứng dụng và các điểm kết nối.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-1.5 p-1 bg-[#EAF5FF] rounded-2xl">
              {(
                [
                  { id: 'consumer', label: 'Người tiêu dùng' },
                  { id: 'seller', label: 'Nhà bán hàng' },
                  { id: 'partner', label: 'Đối tác' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setRole(tab.id);
                    markFormStarted();
                  }}
                  className={`py-2 px-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                    role === tab.id
                      ? 'bg-white text-[#142F63] shadow-xs'
                      : 'text-[#52677D] hover:text-[#112D52]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3.5" noValidate>
              <div>
                <label htmlFor="hero-reg-name" className="block text-xs font-semibold text-[#112D52] mb-1">
                  Họ và tên *
                </label>
                <input
                  id="hero-reg-name"
                  type="text"
                  value={name}
                  onFocus={markFormStarted}
                  onChange={(e) => {
                    markFormStarted();
                    setName(e.target.value);
                  }}
                  placeholder="Nguyễn Minh Anh"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D4E3F0] focus:border-[#345EAA] focus:outline-none text-sm text-[#112D52]"
                  required
                />
              </div>

              <div>
                <label htmlFor="hero-reg-email" className="block text-xs font-semibold text-[#112D52] mb-1">
                  Email liên hệ *
                </label>
                <input
                  id="hero-reg-email"
                  type="email"
                  value={email}
                  onFocus={markFormStarted}
                  onChange={(e) => {
                    markFormStarted();
                    setEmail(e.target.value);
                  }}
                  placeholder="ban@domain.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D4E3F0] focus:border-[#345EAA] focus:outline-none text-sm text-[#112D52]"
                  required
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-xs text-red-700 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                className="mt-1 w-full py-3 px-6 rounded-full adigo-brand-gradient text-white text-sm font-semibold shadow-[0_12px_24px_rgba(52,94,170,0.25)] cursor-pointer"
              >
                Gửi thông tin quan tâm
              </button>
            </form>
          </div>
        ) : (
          <div className="mt-6 py-4 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F8F0] text-[#398441] flex items-center justify-center mb-3.5">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h2 className="font-display text-lg font-bold text-[#112D52]">
              Đã ghi nhận thông tin quan tâm
            </h2>
            <p className="mt-1.5 text-sm text-[#52677D] max-w-sm leading-relaxed">
              Cảm ơn <span className="font-semibold text-[#112D52]">{name}</span>. Thông tin đăng ký ({email}) đã được xác nhận trên giao diện giới thiệu ADIGO.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-5 px-6 py-2.5 rounded-full bg-[#142F63] text-white text-sm font-semibold cursor-pointer"
            >
              Hoàn tất
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
