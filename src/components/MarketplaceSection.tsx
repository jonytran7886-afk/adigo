import React, { useState, useMemo } from 'react';
import { Search, Store, Tag, Package, Sparkles, MapPin } from 'lucide-react';
import { ADIGO_CONFIG } from '../config/adigoConfig';
import { ResilientImage } from './ResilientImage';

export const MarketplaceSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return ADIGO_CONFIG.marketplaceProducts.filter((product) => {
      const matchesCat =
        selectedCategory === 'Tất cả' || product.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.brand.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="marketplace" className="py-20 sm:py-28 bg-white border-t border-[#E2ECF4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + Editorial Banner Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-[#00A896] mb-2">ADIGO Marketplace</p>
            <h2 className="font-display font-bold text-[#0B1F33] tracking-[-0.025em] text-[clamp(1.75rem,3.2vw,2.65rem)] leading-[1.15] text-balance">
              Khám phá nhiều hơn.
              <br />
              Kết nối rộng hơn.
            </h2>
            <p className="mt-4 text-base text-[#4A6075] leading-relaxed">
              ADIGO Marketplace hướng đến xây dựng một không gian thương mại kết nối nhiều nhà sản xuất, thương hiệu và nhà bán hàng, giúp người dùng có thêm lựa chọn và giúp sản phẩm tiếp cận thị trường rộng hơn.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#0C1B2A]">
              <span>Danh mục đa dạng</span>
              <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
              <span>Gian hàng thương hiệu</span>
              <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
              <span>Ưu đãi mua sắm</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-[#E2ECF4] bg-[#F5F9FC] aspect-[16/9] relative">
              <ResilientImage
                src={ADIGO_CONFIG.images.marketplaceVariety}
                alt="Đa dạng nhóm sản phẩm tươi sống, trứng, thịt, rau củ, trái cây và thảo dược trên ADIGO Marketplace"
                className="w-full h-full object-cover"
                fallbackTitle="Danh mục sản phẩm đa dạng trên ADIGO Marketplace"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/65 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-center justify-between gap-2 text-white">
                <span className="text-xs sm:text-sm font-medium">
                  Thực phẩm tươi sống · Thịt & Trứng · Rau củ & Trái cây · Nông sản & Thảo dược
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Marketplace Product Showcase Frame */}
        <div className="rounded-3xl bg-[#F5F9FC] border border-[#E2ECF4] p-5 sm:p-8">
          {/* Showcase Header Bar: Search + Title */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E2ECF4]">
            <div>
              <h3 className="font-display text-lg font-bold text-[#0B1F33]">
                Không gian trải nghiệm ADIGO Marketplace
              </h3>
              <p className="text-xs sm:text-sm text-[#4A6075] mt-0.5">
                Minh họa giao diện tìm kiếm, danh mục, gian hàng và sản phẩm nổi bật
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#0A74DA] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm sản phẩm hoặc gian hàng..."
                aria-label="Tìm sản phẩm hoặc gian hàng minh họa"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E2ECF4] focus:border-[#0A74DA] focus:outline-none text-sm text-[#0C1B2A] placeholder:text-[#4A6075]/70"
              />
            </div>
          </div>

          {/* 10 Product Category Filter Tabs */}
          <div className="py-5 flex items-center gap-2 overflow-x-auto no-scrollbar" role="tablist" aria-label="Danh mục sản phẩm Marketplace">
            {ADIGO_CONFIG.marketplaceCategories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#0B1F33] text-white'
                      : 'bg-white border border-[#E2ECF4] text-[#4A6075] hover:text-[#0C1B2A] hover:border-[#0A74DA]/40'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Storefronts Row */}
          <div className="mb-7">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-[#4A6075]">Gian hàng thương hiệu & nhà sản xuất</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {ADIGO_CONFIG.marketplaceStores.map((store) => (
                <button
                  key={store.id}
                  type="button"
                  onClick={() => setSearchQuery(store.name)}
                  className="text-left bg-white border border-[#E2ECF4] hover:border-[#0A74DA]/40 rounded-2xl p-4 transition-colors flex items-start gap-3 cursor-pointer"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white"
                    style={{ backgroundColor: store.accent }}
                  >
                    <Store className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-sm font-bold text-[#0C1B2A] truncate">{store.name}</p>
                    <p className="text-xs text-[#4A6075] truncate mt-0.5">{store.specialty}</p>
                    <div className="flex items-center gap-1 text-[11px] text-[#4A6075] mt-1.5">
                      <MapPin className="w-3 h-3 text-[#00A896]" />
                      <span>{store.region}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-[#4A6075]">
                Sản phẩm nổi bật ({filteredProducts.length})
              </span>
              {(selectedCategory !== 'Tất cả' || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('Tất cả');
                    setSearchQuery('');
                  }}
                  className="text-xs font-semibold text-[#0A74DA] hover:underline cursor-pointer"
                >
                  Xem tất cả danh mục
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-[#E2ECF4] rounded-2xl p-8 text-center">
                <p className="text-sm font-semibold text-[#0C1B2A]">
                  Chưa tìm thấy sản phẩm phù hợp với từ khóa "{searchQuery}".
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('Tất cả');
                    setSearchQuery('');
                  }}
                  className="mt-3 px-4 py-2 rounded-xl bg-[#0A74DA] text-white text-xs font-semibold cursor-pointer"
                >
                  Đặt lại bộ lọc
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white border border-[#E2ECF4] rounded-2xl p-4 flex flex-col justify-between hover:border-[#0A74DA]/35 transition-colors"
                  >
                    <div>
                      <div className="h-24 rounded-xl bg-[#F5F9FC] border border-[#E2ECF4] flex items-center justify-center relative mb-3">
                        <Package
                          className="w-8 h-8"
                          style={{ color: product.accentColor }}
                        />
                        {product.featured && (
                          <span className="absolute top-2 right-2 inline-flex items-center gap-1 text-[10px] font-semibold text-[#0A74DA]">
                            <Sparkles className="w-3 h-3" />
                            <span>Nổi bật</span>
                          </span>
                        )}
                      </div>

                      <div className="text-[11px] font-medium text-[#4A6075] mb-1 truncate">
                        {product.category} · {product.unit}
                      </div>
                      <h4 className="font-display text-sm font-bold text-[#0C1B2A] leading-snug line-clamp-2">
                        {product.name}
                      </h4>
                      <p className="text-xs text-[#4A6075] mt-1 truncate">{product.brand}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E2ECF4] flex items-center justify-between gap-2">
                      <span className="font-display text-sm font-extrabold text-[#0A74DA] tabular-nums">
                        {product.price}
                      </span>
                      <span className="text-[11px] text-[#00A896] font-medium truncate">
                        {product.promoLabel || product.originNote}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Subtle Promotional Strip inside Marketplace */}
          <div className="mt-6 rounded-2xl bg-white border border-[#E2ECF4] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] text-[#0A74DA] flex items-center justify-center shrink-0">
                <Tag className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0C1B2A]">
                  Chương trình ưu đãi & kết nối thị trường trực tiếp
                </p>
                <p className="text-xs text-[#4A6075]">
                  Nhà bán hàng chủ động giới thiệu sản phẩm, combo theo mùa và ưu đãi cho người tiêu dùng.
                </p>
              </div>
            </div>
            <span className="text-xs font-medium text-[#4A6075] whitespace-nowrap">
              Giao diện giới thiệu trải nghiệm Marketplace
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
