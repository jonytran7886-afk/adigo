import React from 'react';
import { FileText, MapPin, Phone, User } from 'lucide-react';
import { CampaignConfig, CampaignDeliveryOption } from '../../../config/campaignConfig';
import { PreorderFormValues } from '../../../services/preorderService';
import { DeliveryOptions } from './DeliveryOptions';

interface CustomerFormProps {
  config: CampaignConfig;
  values: PreorderFormValues;
  errors: Record<string, string>;
  disabled?: boolean;
  onFieldChange: <K extends keyof PreorderFormValues>(
    field: K,
    value: PreorderFormValues[K]
  ) => void;
  onFirstInteract: () => void;
}

export const CustomerForm: React.FC<CustomerFormProps> = ({
  config,
  values,
  errors,
  disabled = false,
  onFieldChange,
  onFirstInteract,
}) => {
  return (
    <div className="space-y-3">
      {/* Honeypot field for bot deterrence (must remain hidden & empty) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="preorder-company-website">Website</label>
        <input
          id="preorder-company-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.companyWebsite || ''}
          onChange={(e) => onFieldChange('companyWebsite', e.target.value)}
        />
      </div>

      {/* Row 1: Full name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label
            htmlFor="preorder-name"
            className="block text-xs font-bold text-[#142F63] mb-1"
          >
            Họ và tên <span className="text-[#DC2626]">*</span>
          </label>
          <div className="relative">
            <User
              className="w-4 h-4 text-[#4C7199] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="preorder-name"
              type="text"
              required
              maxLength={80}
              disabled={disabled}
              value={values.customerName}
              onFocus={onFirstInteract}
              onChange={(e) => onFieldChange('customerName', e.target.value)}
              placeholder="Nhập họ và tên"
              autoComplete="name"
              aria-invalid={Boolean(errors.customerName)}
              className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border text-sm text-[#112D52] placeholder:text-[#8DA2B8] focus:outline-none focus:ring-2 focus:ring-[#398441]/30 transition-colors ${
                errors.customerName
                  ? 'border-[#DC2626]'
                  : 'border-[#D4E3F1] focus:border-[#398441]'
              }`}
            />
          </div>
          {errors.customerName && (
            <p role="alert" className="mt-1 text-[11.5px] text-[#DC2626] font-medium">
              {errors.customerName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="preorder-phone"
            className="block text-xs font-bold text-[#142F63] mb-1"
          >
            Số điện thoại <span className="text-[#DC2626]">*</span>
          </label>
          <div className="relative">
            <Phone
              className="w-4 h-4 text-[#4C7199] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="preorder-phone"
              type="tel"
              inputMode="tel"
              required
              maxLength={20}
              disabled={disabled}
              value={values.phone}
              onFocus={onFirstInteract}
              onChange={(e) => onFieldChange('phone', e.target.value)}
              placeholder="Nhập số điện thoại"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border text-sm text-[#112D52] placeholder:text-[#8DA2B8] tabular-nums focus:outline-none focus:ring-2 focus:ring-[#398441]/30 transition-colors ${
                errors.phone
                  ? 'border-[#DC2626]'
                  : 'border-[#D4E3F1] focus:border-[#398441]'
              }`}
            />
          </div>
          {errors.phone && (
            <p role="alert" className="mt-1 text-[11.5px] text-[#DC2626] font-medium">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Delivery Address */}
      <div>
        <label
          htmlFor="preorder-address"
          className="block text-xs font-bold text-[#142F63] mb-1"
        >
          Khu vực / Địa chỉ nhận hàng <span className="text-[#DC2626]">*</span>
        </label>
        <div className="relative">
          <MapPin
            className="w-4 h-4 text-[#4C7199] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            id="preorder-address"
            type="text"
            required
            maxLength={240}
            disabled={disabled}
            value={values.address}
            onFocus={onFirstInteract}
            onChange={(e) => onFieldChange('address', e.target.value)}
            placeholder="Nhập xã/phường, quận/huyện, tỉnh/thành"
            autoComplete="street-address"
            aria-invalid={Boolean(errors.address)}
            className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border text-sm text-[#112D52] placeholder:text-[#8DA2B8] focus:outline-none focus:ring-2 focus:ring-[#398441]/30 transition-colors ${
              errors.address
                ? 'border-[#DC2626]'
                : 'border-[#D4E3F1] focus:border-[#398441]'
            }`}
          />
        </div>
        {errors.address && (
          <p role="alert" className="mt-1 text-[11.5px] text-[#DC2626] font-medium">
            {errors.address}
          </p>
        )}
      </div>

      {/* Row 3: Delivery Options */}
      <div>
        <p className="block text-xs font-bold text-[#142F63] mb-1.5">
          Hình thức nhận hàng mong muốn
        </p>
        <DeliveryOptions
          options={config.deliveryOptions}
          selected={values.deliveryMethod}
          disabled={disabled}
          onChange={(method: CampaignDeliveryOption['value']) => {
            onFirstInteract();
            onFieldChange('deliveryMethod', method);
          }}
        />
      </div>

      {/* Row 4: Optional Note */}
      <div>
        <label
          htmlFor="preorder-note"
          className="block text-xs font-bold text-[#142F63] mb-1"
        >
          Ghi chú thêm <span className="font-normal text-[#637B92]">(không bắt buộc)</span>
        </label>
        <div className="relative">
          <FileText
            className="w-4 h-4 text-[#4C7199] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            id="preorder-note"
            type="text"
            maxLength={300}
            disabled={disabled}
            value={values.note}
            onFocus={onFirstInteract}
            onChange={(e) => onFieldChange('note', e.target.value)}
            placeholder="Thời gian nhận hàng hoặc yêu cầu khác..."
            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-[#D4E3F1] text-sm text-[#112D52] placeholder:text-[#8DA2B8] focus:outline-none focus:border-[#398441] focus:ring-2 focus:ring-[#398441]/30 transition-colors"
          />
        </div>
      </div>
    </div>
  );
};
