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
      className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-b from-[#34B249] via-[#238E35] to-[#136B24] text-white font-display font-extrabold text-sm sm:text-base shadow-[0_12px_26px_rgba(35,142,53,0.34),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-[#72DF83]/50 hover:brightness-105 active:scale-[0.99] disabled:opacity-75 disabled:cursor-wait transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#238E35] focus-visible:ring-offset-2"
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
