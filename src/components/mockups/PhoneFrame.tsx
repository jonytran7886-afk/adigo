import React from 'react';
import { Home, Compass, ShoppingBag, Truck, User } from 'lucide-react';

export type PhoneNavTab = 'home' | 'explore' | 'cart' | 'orders' | 'member';

interface PhoneFrameProps {
  children: React.ReactNode;
  activeTab?: PhoneNavTab;
  showBottomNav?: boolean;
  onSelectTab?: (tab: PhoneNavTab) => void;
  className?: string;
  screenBg?: string;
  caption?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  activeTab = 'home',
  showBottomNav = true,
  onSelectTab,
  className = '',
  screenBg = 'bg-[#F6F9FC]',
  caption,
}) => {
  const navItems: { id: PhoneNavTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'Trang chủ', icon: Home },
    { id: 'explore', label: 'Khám phá', icon: Compass },
    { id: 'cart', label: 'Giỏ hàng', icon: ShoppingBag },
    { id: 'orders', label: 'Đơn hàng', icon: Truck },
    { id: 'member', label: 'Thành viên', icon: User },
  ];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative w-[272px] sm:w-[284px] rounded-[42px] bg-[#0B1F33] p-[9px] shadow-[0_24px_60px_-15px_rgba(11,31,51,0.22)] ring-1 ring-white/15">
        {/* Subtle side hardware buttons */}
        <div className="absolute -left-[2px] top-24 h-8 w-[2px] rounded-l bg-[#1E3A54]" aria-hidden="true" />
        <div className="absolute -left-[2px] top-36 h-12 w-[2px] rounded-l bg-[#1E3A54]" aria-hidden="true" />
        <div className="absolute -right-[2px] top-28 h-14 w-[2px] rounded-r bg-[#1E3A54]" aria-hidden="true" />

        {/* Screen viewport */}
        <div className={`relative flex flex-col h-[548px] w-full overflow-hidden rounded-[33px] ${screenBg} text-[#0C1B2A]`}>
          {/* Status bar & Dynamic Island */}
          <div className="flex items-center justify-between px-5 pt-2.5 pb-1.5 text-[10px] font-semibold tracking-tight text-[#0C1B2A] shrink-0 bg-white/80 backdrop-blur-sm z-10">
            <span className="tabular-nums">9:41</span>
            <div className="h-[18px] w-[74px] rounded-full bg-[#0B1F33]" aria-hidden="true" />
            <div className="flex items-center gap-1" aria-hidden="true">
              <div className="flex items-end gap-[1.5px] h-2.5">
                <span className="w-[2px] h-1 bg-[#0C1B2A] rounded-xs" />
                <span className="w-[2px] h-1.5 bg-[#0C1B2A] rounded-xs" />
                <span className="w-[2px] h-2 bg-[#0C1B2A] rounded-xs" />
                <span className="w-[2px] h-2.5 bg-[#0C1B2A] rounded-xs" />
              </div>
              <div className="w-4 h-2.5 rounded-[3px] border border-[#0C1B2A]/70 p-[1.5px] flex items-center">
                <div className="w-full h-full bg-[#0C1B2A] rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* Screen content */}
          <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col">
            {children}
          </div>

          {/* Bottom Tab Navigation */}
          {showBottomNav && (
            <div className="shrink-0 bg-white border-t border-[#E2ECF4] px-2 pt-1.5 pb-3 grid grid-cols-5 gap-0.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelectTab?.(item.id)}
                    className={`flex flex-col items-center justify-center gap-0.5 py-1 rounded-lg transition-colors cursor-pointer ${
                      isActive ? 'text-[#0A74DA]' : 'text-[#4A6075] hover:text-[#0C1B2A]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-[9px] font-medium whitespace-nowrap">{item.label}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Home indicator bar */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-[#0B1F33]/20 pointer-events-none" aria-hidden="true" />
        </div>
      </div>
      {caption && (
        <span className="mt-3 text-xs font-medium text-[#4A6075] text-center">{caption}</span>
      )}
    </div>
  );
};
