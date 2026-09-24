import React, { useState, useMemo } from 'react';
import { FEATURED_PRODUCTS, STORE_INFO } from '../data/storeData';
import { ProductItem } from '../types';
import { 
  Search, 
  MessageCircle, 
  Eye, 
  Sparkles, 
  Layers, 
  Paintbrush, 
  Key, 
  Bath, 
  Wrench, 
  Package, 
  Flame,
  CheckCircle2
} from 'lucide-react';

interface KategoriProdukSectionProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const KategoriProdukSection: React.FC<KategoriProdukSectionProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryTabs = [
    { id: 'all', label: 'Semua Produk', icon: Layers },
    { id: 'keramik', label: 'Granit & Keramik', icon: Layers },
    { id: 'cat', label: 'Cat & Mesin Tinting', icon: Paintbrush },
    { id: 'kunci', label: 'Kunci & Smart Lock', icon: Key },
    { id: 'sanitary', label: 'Sanitary & Heater', icon: Bath },
    { id: 'tools', label: 'Power Tools & Mesin', icon: Wrench },
    { id: 'semen', label: 'Semen & Mortar', icon: Package },
    { id: 'pompa', label: 'Pompa Air & Pipa', icon: Wrench },
  ];

  const filteredProducts = useMemo(() => {
    return FEATURED_PRODUCTS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' ||
        item.categorySlug === activeCategory ||
        (activeCategory === 'pompa' && (item.categorySlug === 'pompa' || item.categorySlug === 'pipa'));

      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="kategori-produk" className="py-16 md:py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>KATALOG PRODUK UNGGULAN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
              Pilihan Bahan Bangunan{' '}
              <span className="text-red-600">
                Lengkap & Berkualitas
              </span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-2 max-w-xl">
              Tersedia ribuan SKU material siap kirim. Klik untuk melihat detail spesifikasi atau langsung konsultasikan harga promo ke CS kami.
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari granit, cat dulux, bosch..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Category Filter Horizontal Scroll */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <Package className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-base font-bold text-slate-700">Produk tidak ditemukan</p>
            <p className="text-xs text-slate-500 mt-1">Coba kata kunci pencarian lain atau pilih kategori Semua.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const waProductUrl = `https://wa.me/${STORE_INFO.phoneClean}?text=Halo%20Admin%20MULUR%201%2C%20saya%20tertarik%20dengan%20produk%20*${encodeURIComponent(product.name)}*%20(${encodeURIComponent(product.brand)}).%20Apakah%20stok%20tersedia%20dan%20berapa%20harga%20terbaiknya%3F`;

              return (
                <div
                  key={product.id}
                  className="rounded-2xl bg-white border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
                >
                  {/* Top Image & Badges */}
                  <div>
                    <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>

                      {/* Brand Label Top Left */}
                      <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-white border border-slate-700">
                        {product.brand}
                      </div>

                      {/* Best Seller / Tinting Badges */}
                      <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                        {product.isBestSeller && (
                          <span className="flex items-center gap-1 bg-red-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full shadow-md">
                            <Flame className="w-2.5 h-2.5 fill-white" />
                            <span>BEST SELLER</span>
                          </span>
                        )}
                        {product.isTinting && (
                          <span className="bg-amber-400 text-slate-950 text-[9px] font-extrabold px-2 py-0.5 rounded-full shadow-md">
                            TINTING DIGITAL
                          </span>
                        )}
                      </div>

                      {/* Category Label Bottom Left */}
                      <div className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-amber-300 drop-shadow">
                        {product.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-red-600 transition-colors">
                        {product.name}
                      </h3>

                      {/* Specs Snippet */}
                      <ul className="mt-3 space-y-1">
                        {product.specs.slice(0, 2).map((spec, sIdx) => (
                          <li key={sIdx} className="text-[11px] text-slate-600 flex items-start gap-1.5 line-clamp-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-3 flex items-center justify-between text-xs">
                        <span className="text-[10px] uppercase font-bold text-slate-400">Satuan Jual:</span>
                        <span className="font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                          {product.unit}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions: Detail & WhatsApp */}
                  <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Detail</span>
                    </button>

                    <a
                      href={waProductUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Pesan WA</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Banner inside Products */}
        <div className="mt-12 rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-3 bg-red-600 text-white rounded-xl shrink-0 hidden sm:block shadow-xs">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                Punya Daftar Rencana Anggaran Biaya (RAB) atau Butuh Penawaran Proyek?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Kirimkan file RAB atau foto kebutuhan material Anda melalui WhatsApp kami untuk mendapatkan harga spesial kontraktor.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${STORE_INFO.phoneClean}?text=Halo%20Admin%20MULUR%201%2C%20saya%20punya%20daftar%20RAB%20kebutuhan%20material%20proyek%20dan%20ingin%20minta%20estimasi%20penawaran%20harga...`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shrink-0 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Kirim Daftar RAB ke WA</span>
          </a>
        </div>

      </div>
    </section>
  );
};
