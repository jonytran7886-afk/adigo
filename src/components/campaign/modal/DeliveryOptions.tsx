import React from 'react';
import { PhoneCall, Store, Truck } from 'lucide-react';
import { CampaignDeliveryOption, DeliveryOptionIcon } from '../../../config/campaignConfig';

interface DeliveryOptionsProps {
  options: CampaignDeliveryOption[];
  selected: CampaignDeliveryOption['value'];
  disabled?: boolean;
  onChange: (value: CampaignDeliveryOption['value']) => void;
}

function renderDeliveryIcon(iconName: DeliveryOptionIcon, active: boolean) {
  const cls = `w-4 h-4 shrink-0 ${active ? 'text-[#2F8E3B]' : 'text-[#345EAA]'}`;
  switch (iconName) {
    case 'truck':
      return <Truck className={cls} aria-hidden="true" />;
    case 'store':
      return <Store className={cls} aria-hidden="true" />;
    case 'phone':
      return <PhoneCall className={cls} aria-hidden="true" />;
  }
}

export const DeliveryOptions: React.FC<DeliveryOptionsProps> = ({
  options,
  selected,
  disabled = false,
  onChange,
}) => {
  return (
    <div role="radiogroup" aria-label="Hình thức nhận hàng mong muốn">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {options.map((option) => {
          const isActive = selected === option.value;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isActive}
              disabled={disabled}
              onClick={() => onChange(option.value)}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-left transition-all duration-150 cursor-pointer disabled:opacity-60 ${
                isActive
                  ? 'border-[#398441] bg-[#F0FDF4] shadow-[0_4px_12px_rgba(57,132,65,0.10)] text-[#112D52]'
                  : 'border-[#D4E3F1] bg-white hover:border-[#8BB6DE] text-[#455B73]'
              }`}
            >
              <span
                aria-hidden="true"
                className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                  isActive
                    ? 'border-[#2F8E3B] bg-[#2F8E3B]'
                    : 'border-[#B6CBE0] bg-white'
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </span>
              {renderDeliveryIcon(option.iconName, isActive)}
              <span className="text-xs font-semibold leading-tight">
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
