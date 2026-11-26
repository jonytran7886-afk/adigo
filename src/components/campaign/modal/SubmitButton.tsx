import React from 'react';
import { ArrowRight, Loader2, ShoppingCart } from 'lucide-react';

interface SubmitButtonProps {
  label: string;
  submittingLabel: string;
  isSubmitting: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  label,
  submittingLabel,
  isSubmitting,
}) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="campaign-cta-gloss group w-full min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 font-display font-extrabold text-sm sm:text-base disabled:opacity-75 disabled:cursor-wait cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F8E3B] focus-visible:ring-offset-2"
    >
      {isSubmitting ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin shrink-0" aria-hidden="true" />
          <span>{submittingLabel}</span>
        </>
      ) : (
        <>
          <ShoppingCart className="w-4.5 h-4.5 shrink-0" aria-hidden="true" />
          <span>{label}</span>
          <ArrowRight
            className="w-4.5 h-4.5 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </>
      )}
    </button>
  );
};
