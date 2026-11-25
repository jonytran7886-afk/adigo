import React from 'react';

interface PhoneShellProps {
  children: React.ReactNode;
  className?: string;
  size?: 'main' | 'side';
}

export const PhoneShell: React.FC<PhoneShellProps> = ({
  children,
  className = '',
  size = 'main',
}) => {
  const frameSize =
    size === 'main'
      ? 'w-[280px] sm:w-[304px] h-[568px] sm:h-[620px]'
      : 'w-[244px] sm:w-[260px] h-[494px] sm:h-[528px]';

  return (
    <div
      className={`relative rounded-[44px] p-[9px] select-none ${frameSize} ${className}`}
      style={{
        background:
          'linear-gradient(145deg, #2B3648 0%, #141B26 48%, #243042 100%)',
        boxShadow:
          '0 28px 60px -16px rgba(20, 47, 99, 0.24), 0 10px 24px -10px rgba(20, 47, 99, 0.14), inset 0 1px 1px rgba(255, 255, 255, 0.35)',
      }}
    >
      {/* Side hardware buttons */}
      <div
        className="absolute -left-[2px] top-[96px] h-7 w-[2.5px] rounded-l bg-[#3B4A60]"
        aria-hidden="true"
      />
      <div
        className="absolute -left-[2px] top-[138px] h-11 w-[2.5px] rounded-l bg-[#3B4A60]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-[2px] top-[120px] h-14 w-[2.5px] rounded-r bg-[#3B4A60]"
        aria-hidden="true"
      />

      {/* Inner screen */}
      <div className="relative w-full h-full rounded-[36px] bg-white overflow-hidden flex flex-col border border-black/40">
        {/* Subtle glass screen reflection */}
        <div
          className="pointer-events-none absolute inset-0 z-30 opacity-30"
          style={{
            background:
              'linear-gradient(122deg, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.06) 24%, transparent 45%)',
          }}
          aria-hidden="true"
        />

        {/* Status Bar */}
        <div className="relative z-20 flex items-center justify-between px-5 pt-2.5 pb-1 text-[10px] font-semibold text-[#112D52] shrink-0 bg-white">
          <span className="tabular-nums">9:41</span>
          <div className="h-[17px] w-[72px] rounded-full bg-[#111827]" aria-hidden="true" />
          <div className="flex items-center gap-1" aria-hidden="true">
            <div className="flex items-end gap-[1.5px] h-2.5">
              <span className="w-[2px] h-1 bg-[#112D52] rounded-xs" />
              <span className="w-[2px] h-1.5 bg-[#112D52] rounded-xs" />
              <span className="w-[2px] h-2 bg-[#112D52] rounded-xs" />
              <span className="w-[2px] h-2.5 bg-[#112D52] rounded-xs" />
            </div>
            <div className="w-4 h-2.5 rounded-[3px] border border-[#112D52]/75 p-[1.5px] flex items-center">
              <div className="w-full h-full bg-[#112D52] rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Viewport body */}
        <div className="flex-1 flex flex-col overflow-hidden relative z-10">
          {children}
        </div>

        {/* Home indicator */}
        <div
          className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-[#112D52]/20 z-30 pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
