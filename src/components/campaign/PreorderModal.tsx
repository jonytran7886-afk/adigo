import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle, ShoppingCart, X } from 'lucide-react';
import { CampaignConfig } from '../../config/campaignConfig';
import {
  PreorderFormValues,
  PreorderSubmitSuccess,
  extractUtmMetadata,
  generateRequestId,
  submitPreorder,
  validatePreorderForm,
} from '../../services/preorderService';
import { trackEvent } from '../../utils/analytics';
import { ProductPreview } from './modal/ProductPreview';
import { ProductCard } from './modal/ProductCard';
import { QuantitySelector } from './modal/QuantitySelector';
import { CustomerForm } from './modal/CustomerForm';
import { OrderSummary } from './modal/OrderSummary';
import { ConsentCheckbox } from './modal/ConsentCheckbox';
import { SubmitButton } from './modal/SubmitButton';
import { SuccessScreen } from './modal/SuccessScreen';

import { ProductEntryPoint } from '../../config/productDiscoveryConfig';

interface PreorderModalProps {
  isOpen: boolean;
  entryPoint: ProductEntryPoint;
  config: CampaignConfig;
  restoreFocusRef: React.RefObject<HTMLButtonElement | null>;
  onClose: () => void;
  onSuccessSubmitted?: () => void;
}

function createInitialValues(config: CampaignConfig): PreorderFormValues {
  return {
    quantity: 1,
    customerName: '',
    phone: '',
    address: '',
    deliveryMethod: config.deliveryOptions[0]?.value || 'Giao hàng tận nơi',
    note: '',
    privacyAccepted: false,
    companyWebsite: '',
  };
}

export const PreorderModal: React.FC<PreorderModalProps> = ({
  isOpen,
  entryPoint,
  config,
  restoreFocusRef,
  onClose,
  onSuccessSubmitted,
}) => {
  const [values, setValues] = useState<PreorderFormValues>(() =>
    createInitialValues(config)
  );
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<PreorderSubmitSuccess | null>(null);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const requestIdRef = useRef<string>(generateRequestId());
  const hasStartedFormRef = useRef(false);
  const wasOpenRef = useRef(false);

  // Reset transient errors & generate fresh requestId on open; restore focus on close
  useEffect(() => {
    if (isOpen && !wasOpenRef.current) {
      wasOpenRef.current = true;
      setFieldErrors({});
      setSubmitError('');
      setSuccessData(null);
      setValues(createInitialValues(config));
      requestIdRef.current = generateRequestId();
      hasStartedFormRef.current = false;

      const timer = window.setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 40);
      return () => window.clearTimeout(timer);
    }

    if (!isOpen && wasOpenRef.current) {
      wasOpenRef.current = false;
      restoreFocusRef.current?.focus();
    }
  }, [isOpen, config, restoreFocusRef]);

  // Body scroll lock, Escape close, and accessible focus trap
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (!isSubmitting) {
          onClose();
        }
        return;
      }

      if (e.key !== 'Tab' || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isSubmitting, onClose]);

  if (!isOpen) return null;

  const handleFirstInteract = () => {
    if (hasStartedFormRef.current) return;
    hasStartedFormRef.current = true;
    const utm = extractUtmMetadata();
    trackEvent('preorder_form_start', {
      entry_point: entryPoint,
      campaign_id: config.campaignId,
      product_id: config.product.id,
      utm_source: utm.utmSource || undefined,
      utm_medium: utm.utmMedium || undefined,
      utm_campaign: utm.utmCampaign || undefined,
    });
  };

  const handleFieldChange = <K extends keyof PreorderFormValues>(
    field: K,
    nextVal: PreorderFormValues[K]
  ) => {
    requestIdRef.current = generateRequestId();
    setValues((prev) => ({ ...prev, [field]: nextVal }));
    setSubmitError('');
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleQuantityChange = (nextQuantity: number) => {
    handleFirstInteract();
    handleFieldChange('quantity', nextQuantity);
    trackEvent('preorder_quantity_change', {
      entry_point: entryPoint,
      campaign_id: config.campaignId,
      product_id: config.product.id,
      quantity: nextQuantity,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validatePreorderForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setSubmitError(Object.values(validationErrors)[0]);
      trackEvent('preorder_submit_error', {
        entry_point: entryPoint,
        campaign_id: config.campaignId,
        product_id: config.product.id,
        error_code: 'CLIENT_VALIDATION',
      });
      return;
    }

    setFieldErrors({});
    setSubmitError('');
    setIsSubmitting(true);

    const utm = extractUtmMetadata();
    trackEvent('preorder_form_submit', {
      entry_point: entryPoint,
      campaign_id: config.campaignId,
      product_id: config.product.id,
      quantity: values.quantity,
      delivery_method: values.deliveryMethod,
      utm_source: utm.utmSource || undefined,
      utm_medium: utm.utmMedium || undefined,
      utm_campaign: utm.utmCampaign || undefined,
    });

    const result = await submitPreorder(values, requestIdRef.current, entryPoint);
    setIsSubmitting(false);

    if (result.ok === false) {
      if (result.fieldErrors) {
        setFieldErrors(result.fieldErrors);
      }
      setSubmitError(result.message);
      trackEvent('preorder_submit_error', {
        entry_point: entryPoint,
        campaign_id: config.campaignId,
        product_id: config.product.id,
        error_code: result.error,
      });
      return;
    }

    // Fire generate_lead strictly AFTER verified Google Sheets write
    trackEvent('generate_lead', {
      lead_type: 'campaign_preorder',
      entry_point: entryPoint,
      campaign_id: config.campaignId,
      product_id: config.product.id,
      quantity: values.quantity,
      utm_source: utm.utmSource || undefined,
      utm_medium: utm.utmMedium || undefined,
      utm_campaign: utm.utmCampaign || undefined,
    });

    onSuccessSubmitted?.();
    setSuccessData(result);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 lg:p-6 bg-[#06182C]/70 backdrop-blur-md"
      role="presentation"
      onClick={() => {
        if (!isSubmitting) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="preorder-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full h-[100dvh] sm:h-auto sm:max-h-[92dvh] max-w-none sm:max-w-[740px] lg:max-w-[1200px] rounded-none sm:rounded-[30px] overflow-hidden bg-[#F4F9FF] shadow-[0_32px_90px_rgba(6,24,44,0.45)] border-0 sm:border-2 sm:border-white/85 flex flex-col lg:grid lg:grid-cols-12"
      >
        {/* Top-Right Close Button (Always reachable, never covered) */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={() => {
            if (!isSubmitting) onClose();
          }}
          aria-label="Đóng cửa sổ đặt trước"
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-30 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-[#142F63] border border-[#D4E3F1] shadow-[0_6px_18px_rgba(20,47,99,0.14)] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#345EAA]"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Left 45% (5 / 12 cols on desktop) — Product Preview; Compact top on mobile */}
        <div className="lg:col-span-5 shrink-0 lg:overflow-y-auto max-h-[34dvh] sm:max-h-[38dvh] lg:max-h-none overflow-y-auto no-scrollbar">
          <ProductPreview config={config} />
        </div>

        {/* Right 55% (7 / 12 cols on desktop) — Form / Success Screen */}
        <div className="lg:col-span-7 flex-1 min-h-0 flex flex-col bg-gradient-to-br from-[#FFFFFF] via-[#F7FBFF] to-[#EEF7FF] overflow-y-auto">
          {successData ? (
            <div className="flex-1 p-5 sm:p-7 lg:p-8">
              <SuccessScreen
                config={config}
                orderCode={successData.orderCode}
                customerName={values.customerName.trim()}
                quantity={values.quantity}
                status={successData.status}
                onClose={onClose}
              />
            </div>
          ) : (
            <form
              noValidate
              onSubmit={handleSubmit}
              className="flex-1 flex flex-col justify-between"
            >
              <div className="p-5 sm:p-6 lg:px-8 lg:pt-6 lg:pb-4 space-y-4">
                {/* Modal Form Header */}
                <div className="pr-10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-xl bg-[#E8F8EC] border border-[#BBE7C7] text-[#2F8E3B] flex items-center justify-center shrink-0">
                      <ShoppingCart className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h2
                        id="preorder-modal-title"
                        className="font-display font-extrabold text-xl sm:text-2xl text-[#112D52] leading-tight tracking-tight"
                      >
                        {config.formCopy.title}
                      </h2>
                      <p className="text-xs sm:text-[13.5px] text-[#52677D] mt-0.5">
                        {config.formCopy.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Part 01 — Product & Quantity */}
                <section aria-label="Phần 1: Sản phẩm đặt trước">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#2F8E3B] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <h3 className="font-display font-bold text-sm sm:text-[15px] text-[#112D52]">
                      {config.formCopy.productSectionTitle}
                    </h3>
                  </div>

                  <ProductCard config={config} />

                  <QuantitySelector
                    value={values.quantity}
                    unit={config.product.unit}
                    max={config.product.maxQuantityPerOrder}
                    disabled={isSubmitting}
                    error={fieldErrors.quantity}
                    onChange={handleQuantityChange}
                  />
                </section>

                {/* Part 02 — Customer Order Details */}
                <section aria-label="Phần 2: Thông tin đặt hàng">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#2F8E3B] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <h3 className="font-display font-bold text-sm sm:text-[15px] text-[#112D52]">
                      {config.formCopy.customerSectionTitle}
                    </h3>
                  </div>

                  <CustomerForm
                    config={config}
                    values={values}
                    errors={fieldErrors}
                    disabled={isSubmitting}
                    onFieldChange={handleFieldChange}
                    onFirstInteract={handleFirstInteract}
                  />
                </section>

                {/* Part 03 — Summary */}
                <OrderSummary config={config} quantity={values.quantity} />

                {/* Part 04 — Privacy Consent */}
                <ConsentCheckbox
                  config={config}
                  checked={values.privacyAccepted}
                  disabled={isSubmitting}
                  error={fieldErrors.privacyAccepted}
                  onChange={(checked) => handleFieldChange('privacyAccepted', checked)}
                />

                {/* Global Submit Error Alert */}
                {submitError && (
                  <div
                    role="alert"
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-xs font-medium leading-relaxed"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{submitError}</span>
                  </div>
                )}
              </div>

              {/* Sticky Footer Submit CTA on Mobile, Inline Bottom on Desktop */}
              <div className="sticky bottom-0 z-20 bg-[#F7FBFF]/95 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none border-t border-[#E1EDF8] lg:border-t-0 px-5 py-3.5 sm:px-6 lg:px-8 lg:pt-1 lg:pb-6">
                <SubmitButton
                  label={config.formCopy.submitLabel}
                  submittingLabel={config.formCopy.submittingLabel}
                  isSubmitting={isSubmitting}
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
