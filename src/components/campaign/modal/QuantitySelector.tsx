import React, { useEffect, useState } from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  value: number;
  unit: string;
  max: number;
  disabled?: boolean;
  error?: string;
  onChange: (nextQuantity: number) => void;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value,
  unit,
  max,
  disabled = false,
  error,
  onChange,
}) => {
  const [draft, setDraft] = useState<string>(String(value));

  useEffect(() => {
    setDraft(String(value));
  }, [value]);

  const commitValue = (next: number) => {
    const clamped = Math.max(1, Math.min(max, Math.floor(next)));
    setDraft(String(clamped));
    if (clamped !== value) {
      onChange(clamped);
    }
  };

  const handleDecrement = () => {
    if (disabled || value <= 1) return;
    commitValue(value - 1);
  };

  const handleIncrement = () => {
    if (disabled || value >= max) return;
    commitValue(value + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    // Allow clearing temporarily while typing digits, block decimals/negatives/non-digits
    if (raw === '') {
      setDraft('');
      return;
    }
    const digitsOnly = raw.replace(/[^0-9]/g, '');
    if (!digitsOnly) return;

    const parsed = parseInt(digitsOnly, 10);
    if (Number.isNaN(parsed) || parsed <= 0) {
      setDraft('1');
      onChange(1);
      return;
    }
    const clamped = Math.min(max, parsed);
    setDraft(String(clamped));
    if (clamped !== value) {
      onChange(clamped);
    }
  };

  const handleBlur = () => {
    if (!draft) {
      commitValue(1);
      return;
    }
    const parsed = parseInt(draft, 10);
    if (Number.isNaN(parsed) || parsed < 1) {
      commitValue(1);
    } else {
      commitValue(parsed);
    }
  };

  return (
    <div className="mt-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <label
          htmlFor="preorder-quantity-input"
          className="text-xs sm:text-[13px] font-bold text-[#142F63]"
        >
          Số lượng
        </label>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center rounded-full bg-white border border-[#D4E3F1] shadow-[0_4px_12px_rgba(20,47,99,0.06)] p-1">
            <button
              type="button"
              onClick={handleDecrement}
              disabled={disabled || value <= 1}
              aria-label="Giảm số lượng"
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#142F63] hover:bg-[#EAF5FF] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <Minus className="w-3.5 h-3.5" aria-hidden="true" />
            </button>

            <input
              id="preorder-quantity-input"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={draft}
              disabled={disabled}
              onChange={handleInputChange}
              onBlur={handleBlur}
              aria-label="Số lượng đặt trước"
              className="w-12 text-center font-display font-bold text-sm sm:text-[15px] text-[#112D52] tabular-nums bg-transparent focus:outline-none"
            />

            <button
              type="button"
              onClick={handleIncrement}
              disabled={disabled || value >= max}
              aria-label="Tăng số lượng"
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#142F63] hover:bg-[#EAF5FF] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>

          <span className="text-xs sm:text-[13px] text-[#52677D] font-medium">
            Đơn vị: <strong className="text-[#142F63]">{unit}</strong>
          </span>
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-1.5 text-xs text-[#DC2626] font-medium">
          {error}
        </p>
      )}
    </div>
  );
};
