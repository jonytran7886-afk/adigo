import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Lock } from 'lucide-react';
import { CampaignConfig } from '../../../config/campaignConfig';

interface ConsentCheckboxProps {
  config: CampaignConfig;
  checked: boolean;
  disabled?: boolean;
  error?: string;
  onChange: (checked: boolean) => void;
}

export const ConsentCheckbox: React.FC<ConsentCheckboxProps> = ({
  config,
  checked,
  disabled = false,
  error,
  onChange,
}) => {
  const [showPolicy, setShowPolicy] = useState(false);

  return (
    <div>
      <div className="flex items-start gap-2.5">
        <input
          id="preorder-privacy-consent"
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded border-[#B5CAE0] text-[#2F8E3B] focus:ring-[#398441] cursor-pointer shrink-0"
        />
        <div className="text-xs text-[#2D445C] leading-relaxed">
          <label
            htmlFor="preorder-privacy-consent"
            className="cursor-pointer select-none"
          >
            {config.formCopy.consentLabel}
          </label>{' '}
          <button
            type="button"
            onClick={() => setShowPolicy((prev) => !prev)}
            aria-expanded={showPolicy}
            className="inline-flex items-center gap-0.5 font-semibold text-[#345EAA] hover:text-[#142F63] underline underline-offset-2 cursor-pointer"
          >
            <span>Xem quy định bảo mật</span>
            {showPolicy ? (
              <ChevronUp className="w-3 h-3" aria-hidden="true" />
            ) : (
              <ChevronDown className="w-3 h-3" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {showPolicy && (
        <div className="mt-2 ml-6 p-3 rounded-xl bg-[#F3F9FF] border border-[#D4E4F4] text-[11.5px] text-[#3F576F] leading-relaxed space-y-1">
          <p className="font-bold text-[#142F63] inline-flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[#2F8E3B]" aria-hidden="true" />
            <span>{config.formCopy.privacyTitle}</span>
          </p>
          <p>{config.formCopy.privacySummary}</p>
          <p className="text-[#52677D]">{config.formCopy.retentionNotice}</p>
        </div>
      )}

      {error && (
        <p role="alert" className="mt-1 ml-6 text-[11.5px] text-[#DC2626] font-medium">
          {error}
        </p>
      )}
    </div>
  );
};
