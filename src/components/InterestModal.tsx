import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';
import { AdigoLogo } from './BrandLogos';
import { InfoDocType } from './Footer';

export type InterestRole = 'consumer' | 'seller' | 'partner';

interface InterestModalProps {
  isOpen: boolean;
  initialRole: InterestRole;
  onClose: () => void;
}

export const InterestModal: React.FC<InterestModalProps> = ({
  isOpen,
  initialRole,
  onClose,
}) => {
  const [role, setRole] = useState<InterestRole>(initialRole);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setRole(initialRole);
    setSubmitted(false);
    setError('');
  }, [initialRole, isOpen]);

  if (!isOpen) return null;

  const roleLabels: Record<InterestRole, { title: string; subtitle: string }> = {
    consumer: {
      title: 'Đăng ký trải nghiệm ADIGO',
      subtitle: 'Nhận thông báo khi ADIGO App chính thức ra mắt và các cập nhật mới từ hệ sinh thái.',
    },
    seller: {
      title: 'Đăng ký quan tâm Nhà bán hàng',
      subtitle: 'Dành cho thương hiệu và nhà sản xuất muốn giới thiệu sản phẩm trên ADIGO Marketplace.',
    },
    partner: {
      title: 'Kết nối Đối tác kinh doanh',
      subtitle: 'Dành cho cửa hàng, nhà phân phối và đơn vị cung cấp dịch vụ bổ trợ cùng hệ sinh thái ADIGO.',
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (trimmedName.length < 2) {
      setError('Vui lòng nhập họ tên đầy đủ.');
      return;
    }

    if (!emailPattern.test(trimmedEmail)) {
      setError('Vui lòng nhập địa chỉ email hợp lệ.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F33]/55 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="interest-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-[#E2ECF4] shadow-2xl p-6 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-xl bg-[#F5F9FC] hover:bg-[#E2ECF4] text-[#4A6075] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Đóng hộp thoại"
        >
          <X className="w-4 h-4" />
        </button>

        <AdigoLogo />

        {!submitted ? (
          <>
            <h3 id="interest-modal-title" className="font-display text-xl font-bold text-[#0B1F33] mt-5">
              {roleLabels[role].title}
            </h3>
            <p className="text-sm text-[#4A6075] mt-1.5 leading-relaxed">
              {roleLabels[role].subtitle}
            </p>

            {/* Role Selector */}
            <div className="mt-5 grid grid-cols-3 gap-1.5 p-1 bg-[#F5F9FC] rounded-xl border border-[#E2ECF4]">
              {(
                [
                  { id: 'consumer', label: 'Người tiêu dùng' },
                  { id: 'seller', label: 'Nhà bán hàng' },
                  { id: 'partner', label: 'Đối tác' },
                ] as { id: InterestRole; label: string }[]
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setRole(tab.id)}
                  className={`py-2 px-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    role === tab.id
                      ? 'bg-white text-[#0A74DA] shadow-xs'
                      : 'text-[#4A6075] hover:text-[#0C1B2A]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3.5" noValidate>
              <div>
                <label htmlFor="adigo-name" className="block text-xs font-semibold text-[#0C1B2A] mb-1">
                  Họ và tên *
                </label>
                <input
                  id="adigo-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Nguyễn Minh Anh"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2ECF4] focus:border-[#0A74DA] focus:outline-none text-sm text-[#0C1B2A]"
                  required
                />
              </div>

              <div>
                <label htmlFor="adigo-email" className="block text-xs font-semibold text-[#0C1B2A] mb-1">
                  Email liên hệ *
                </label>
                <input
                  id="adigo-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tenban@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2ECF4] focus:border-[#0A74DA] focus:outline-none text-sm text-[#0C1B2A]"
                  required
                />
              </div>

              {role !== 'consumer' && (
                <div>
                  <label htmlFor="adigo-org" className="block text-xs font-semibold text-[#0C1B2A] mb-1">
                    Thương hiệu / Đơn vị
                  </label>
                  <input
                    id="adigo-org"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Tên thương hiệu hoặc cửa hàng của bạn"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2ECF4] focus:border-[#0A74DA] focus:outline-none text-sm text-[#0C1B2A]"
                  />
                </div>
              )}

              <div>
                <label htmlFor="adigo-note" className="block text-xs font-semibold text-[#0C1B2A] mb-1">
                  Nhóm sản phẩm hoặc nội dung quan tâm
                </label>
                <textarea
                  id="adigo-note"
                  rows={2}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Chia sẻ thêm về nhu cầu trải nghiệm hoặc hợp tác của bạn..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2ECF4] focus:border-[#0A74DA] focus:outline-none text-sm text-[#0C1B2A] resize-none"
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
                className="mt-1 w-full py-3 px-5 rounded-xl bg-[#0A74DA] hover:bg-[#0759A8] text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                Gửi thông tin quan tâm
              </button>
            </form>
          </>
        ) : (
          <div className="mt-6 py-4 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-[#ECFDF5] text-[#16A34A] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#0B1F33]">
              Đã ghi nhận thông tin đăng ký mẫu
            </h3>
            <p className="mt-2 text-sm text-[#4A6075] leading-relaxed max-w-sm">
              Cảm ơn <span className="font-semibold text-[#0C1B2A]">{fullName}</span>. Thông tin của bạn đã được xác nhận hợp lệ trên giao diện giới thiệu ADIGO ({email}).
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 px-6 py-2.5 rounded-xl bg-[#0B1F33] text-white text-sm font-semibold cursor-pointer"
            >
              Hoàn tất
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

interface InfoDocModalProps {
  docType: InfoDocType | null;
  onClose: () => void;
}

export const InfoDocModal: React.FC<InfoDocModalProps> = ({ docType, onClose }) => {
  if (!docType) return null;

  const content: Record<InfoDocType, { title: string; body: string[] }> = {
    support: {
      title: 'Trung tâm hỗ trợ ADIGO',
      body: [
        'ADIGO đang phát triển hệ sinh thái kết nối ADIGO App, ADIGO Marketplace và ADIGO Mart nhằm mang đến trải nghiệm mua sắm thuận tiện và thông tin sản phẩm minh bạch.',
        'Khi nền tảng chính thức vận hành rộng rãi, trung tâm hỗ trợ sẽ cung cấp hướng dẫn đặt hàng, tra cứu mã QR nguồn gốc sản phẩm và chính sách đồng hành dành cho nhà bán hàng.',
      ],
    },
    privacy: {
      title: 'Chính sách bảo mật',
      body: [
        'ADIGO tôn trọng quyền riêng tư của người dùng và đối tác. Thông tin cá nhân chỉ được sử dụng cho mục đích trải nghiệm dịch vụ, xử lý đơn hàng hoặc liên hệ khi có sự đồng ý của người dùng.',
        'Trang giới thiệu sản phẩm hiện tại không lưu trữ dữ liệu thanh toán hay tài khoản cá nhân trên trình duyệt.',
      ],
    },
    terms: {
      title: 'Điều khoản sử dụng',
      body: [
        'Các màn hình ứng dụng, danh mục sản phẩm và không gian ADIGO Mart được trình bày trên website này nhằm minh họa định hướng trải nghiệm sản phẩm ADIGO.',
        'Thông tin nguồn gốc sản phẩm trên hệ sinh thái được hiển thị dựa trên dữ liệu do nhà sản xuất, thương hiệu và đối tác cung cấp theo từng lô hàng cụ thể.',
      ],
    },
  };

  const current = content[docType];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F33]/55 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-doc-title"
    >
      <div className="relative w-full max-w-md rounded-3xl bg-white border border-[#E2ECF4] shadow-2xl p-6 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-xl bg-[#F5F9FC] hover:bg-[#E2ECF4] text-[#4A6075] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Đóng hộp thoại"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 id="info-doc-title" className="font-display text-lg font-bold text-[#0B1F33] pr-8">
          {current.title}
        </h3>
        <div className="mt-4 flex flex-col gap-3 text-sm text-[#4A6075] leading-relaxed">
          {current.body.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full py-2.5 rounded-xl bg-[#0B1F33] text-white text-sm font-semibold cursor-pointer"
        >
          Đóng
        </button>
      </div>
    </div>
  );
};
