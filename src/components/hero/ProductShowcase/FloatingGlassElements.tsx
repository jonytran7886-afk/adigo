import React from 'react';
import { QrCode, ShoppingCart, Leaf } from 'lucide-react';

export const FloatingGlassElements: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-40" aria-hidden="true">
      {/* Glass Card 01: Top-right QR icon */}
      <div
        className="hidden sm:flex items-center justify-center w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] rounded-[22px] adigo-glass-strong absolute top-2 right-2 lg:top-4 lg:right-4 rotate-[8deg] animate-float-slow"
      >
        <QrCode className="w-8 h-8 lg:w-9 lg:h-9 text-[#345EAA]" />
      </div>

      {/* Glass Card 02: Bottom-left Cart icon */}
      <div
        className="flex items-center justify-center w-[62px] h-[62px] sm:w-[74px] sm:h-[74px] lg:w-[82px] lg:h-[82px] rounded-[20px] sm:rounded-[22px] adigo-glass-strong absolute bottom-16 left-2 sm:bottom-20 sm:left-4 lg:left-6 -rotate-[8deg] animate-float-delayed"
      >
        <ShoppingCart className="w-7 h-7 sm:w-8 sm:h-8 text-[#398441]" />
      </div>

      {/* Glass Card 03: Bottom-right Leaf icon */}
      <div
        className="hidden sm:flex items-center justify-center w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] rounded-[22px] adigo-glass-strong absolute bottom-14 right-2 lg:bottom-20 lg:right-3 rotate-[10deg] animate-float-slow"
      >
        <Leaf className="w-8 h-8 text-[#398441]" />
      </div>
    </div>
  );
};
