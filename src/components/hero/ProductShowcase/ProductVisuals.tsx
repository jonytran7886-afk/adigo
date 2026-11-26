import { ResponsiveImage } from '../../ResponsiveImage';
import React from 'react';
import { QrCode } from 'lucide-react';
import { BrandLogo } from '../Header/BrandLogo';

export type FoodVisualType =
  | 'chicken'
  | 'eggs'
  | 'pork'
  | 'veggies'
  | 'orange'
  | 'pomelo'
  | 'seafood'
  | 'agri'
  | 'processed'
  | 'botanicalCare'
  | 'teaCoffee'
  | 'homeCeramic'
  | 'honeyWellness'
  | 'freshFruits'
  | 'pantryDry';

const FOOD_PHOTO_MAP: Record<
  FoodVisualType,
  { src: string; alt: string; objectPosition?: string; bgClass: string }
> = {
  chicken: {
    src: '/src/assets/images/product_whole_chicken_clean_1795656979195.webp',
    alt: 'Thịt gà tươi',
    objectPosition: 'object-center',
    bgClass: 'bg-[#FAF3EB]',
  },
  eggs: {
    src: '/src/assets/images/marketplace_eggs_citrus_1795655578585.webp',
    alt: 'Trứng gà ta tươi',
    objectPosition: 'object-[18%_55%]',
    bgClass: 'bg-[#FDF6EC]',
  },
  pork: {
    src: '/src/assets/images/marketplace_pork_beef_cuts_1795655577544.webp',
    alt: 'Thịt tươi đóng khay',
    objectPosition: 'object-center',
    bgClass: 'bg-[#FDF2F2]',
  },
  veggies: {
    src: '/src/assets/images/marketplace_veggies_processed_1795655578984.webp',
    alt: 'Rau củ tươi theo mùa',
    objectPosition: 'object-[22%_50%]',
    bgClass: 'bg-[#ECFDF5]',
  },
  orange: {
    src: '/src/assets/images/hero_prod_fresh_fruits_1795658859046.webp',
    alt: 'Trái cây tươi chọn lọc',
    objectPosition: 'object-center',
    bgClass: 'bg-[#FFF7ED]',
  },
  pomelo: {
    src: '/src/assets/images/adigo_traceability_produce_1795602233534.webp',
    alt: 'Nông sản chọn lọc',
    objectPosition: 'object-[70%_55%]',
    bgClass: 'bg-[#F0FDF4]',
  },
  seafood: {
    src: '/src/assets/images/adigo_marketplace_variety_1795602233383.webp',
    alt: 'Thực phẩm tươi sống chọn lọc',
    objectPosition: 'object-[78%_28%]',
    bgClass: 'bg-[#EFF6FF]',
  },
  agri: {
    src: '/src/assets/images/hero_prod_pantry_dry_1795658859664.webp',
    alt: 'Nông sản & ngũ cốc sạch',
    objectPosition: 'object-center',
    bgClass: 'bg-[#F8FAFC]',
  },
  processed: {
    src: '/src/assets/images/hero_prod_artisan_tea_coffee_1795658860432.webp',
    alt: 'Đặc sản & đồ uống chọn lọc',
    objectPosition: 'object-center',
    bgClass: 'bg-[#F8FAFC]',
  },
  botanicalCare: {
    src: '/src/assets/images/hero_prod_botanical_care_1795658860019.webp',
    alt: 'Sản phẩm chăm sóc cá nhân chiết xuất thảo mộc',
    objectPosition: 'object-center',
    bgClass: 'bg-[#F6F5F0]',
  },
  teaCoffee: {
    src: '/src/assets/images/hero_prod_artisan_tea_coffee_1795658860432.webp',
    alt: 'Trà và cà phê đặc sản đóng gói',
    objectPosition: 'object-center',
    bgClass: 'bg-[#F7F4EF]',
  },
  homeCeramic: {
    src: '/src/assets/images/hero_prod_home_ceramic_1795658858752.webp',
    alt: 'Bộ gia dụng gốm sứ và tre tự nhiên',
    objectPosition: 'object-center',
    bgClass: 'bg-[#F8F6F2]',
  },
  honeyWellness: {
    src: '/src/assets/images/hero_prod_honey_wellness_1795658858371.webp',
    alt: 'Mật ong hoa tự nhiên và sản phẩm chăm sóc sức khỏe',
    objectPosition: 'object-center',
    bgClass: 'bg-[#FBF6EC]',
  },
  freshFruits: {
    src: '/src/assets/images/hero_prod_fresh_fruits_1795658859046.webp',
    alt: 'Trái cây tươi chọn lọc theo mùa',
    objectPosition: 'object-center',
    bgClass: 'bg-[#F3F8F1]',
  },
  pantryDry: {
    src: '/src/assets/images/hero_prod_pantry_dry_1795658859664.webp',
    alt: 'Hạt dinh dưỡng và ngũ cốc chọn lọc',
    objectPosition: 'object-center',
    bgClass: 'bg-[#F7F5F0]',
  },
};

export const FoodThumbnail: React.FC<{
  type: FoodVisualType;
  className?: string;
}> = ({ type, className = '' }) => {
  const item = FOOD_PHOTO_MAP[type];

  return (
    <div className={`w-full h-full overflow-hidden relative ${item.bgClass} ${className}`}>
      <ResponsiveImage
        src={item.src}
        sizes="160px"
        alt={item.alt}
        width={420}
        height={420}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className={`w-full h-full object-cover ${item.objectPosition ?? 'object-center'}`}
      />
    </div>
  );
};

export const PackagedChickenQrVisual: React.FC = () => {
  return (
    <div className="relative w-full h-24 rounded-2xl bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0] p-2 flex items-center justify-center overflow-hidden border border-[#E2ECF4]">
      <div className="relative w-full h-full rounded-xl bg-white border border-[#CBD5E1] shadow-sm overflow-hidden flex items-center justify-between">
        <ResponsiveImage
          src="/src/assets/images/chicken_whole_vacuum_pack_1795655111694.webp"
          sizes="300px"
          alt="Sản phẩm đóng gói kèm mã QR truy xuất nguồn gốc ADIGO"
          width={480}
          height={360}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />

        {/* Crisp Branded QR Sticker Overlay */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-white/95 backdrop-blur-xs border border-[#DCE8F3] p-1 shadow-sm flex flex-col items-center gap-0.5">
          <BrandLogo variant="icon" size="sm" className="!h-3 !w-3" />
          <QrCode className="w-6 h-6 text-[#112D52]" aria-hidden="true" />
        </div>

        {/* Clear plastic wrap reflection sheen */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(120deg, rgba(255,255,255,0.45) 0%, transparent 45%, rgba(255,255,255,0.22) 100%)',
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
