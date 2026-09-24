import React, { useState } from 'react';
import { BRANDS, STORE_INFO } from '../data/storeData';
import { Award, CheckCircle, ExternalLink, MessageCircle, Sparkles } from 'lucide-react';

export const BrandMitraSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Semua Brand (20+)' },
    { id: 'cat', label: 'Cat & Pelapis' },
    { id: 'keramik', label: 'Granit & Keramik' },
    { id: 'hardware', label: 'Kunci & Hardware' },
    { id: 'sanitary', label: 'Sanitary & Pemanas Air' },
    { id: 'tools', label: 'Power Tools & Listrik' },
    { id: 'plumbing', label: 'Plumbing & Pompa' },
  ];

  const filteredBrands = activeCategory === 'all'
    ? BRANDS
    : BRANDS.filter(b => b.category === activeCategory || (activeCategory === 'plumbing' && (b.category === 'plumbing' || b.category === 'semen')));

  return (
    <section id="brand-mitra" className="py-16 md:py-20 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold mb-3">
              <Award className="w-3.5 h-3.5 text-red-600" />
              <span>PRINCIPAL & DISTRIBUTOR RESMI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-950">
              Brand Mitra Terpercaya di <span className="text-red-600">MULUR 1</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-2 max-w-2xl">
              Kami bekerjasama langsung dengan produsen dan brand kelas dunia. Menjamin keaslian produk 100%, ketersediaan suku cadang, dan garansi resmi pabrikan.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-xs text-slate-700 shrink-0 shadow-xs">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-medium">Garansi 100% Produk Original & Mesin Tinting Digital</span>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 md:gap-4">
          {filteredBrands.map((brand) => {
            const brandWaUrl = `https://wa.me/${STORE_INFO.phoneClean}?text=Halo%20Admin%20MULUR%201%2C%20saya%20ingin%20tanya%20produk%20dan%20harga%20brand%20*${encodeURIComponent(brand.name)}*...`;

            return (
              <div
                key={brand.id}
                className="group relative rounded-2xl bg-white hover:bg-slate-50/60 border border-slate-200/90 hover:border-slate-300 p-4 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Brand Visual Header Card */}
                <div>
                  <div
                    className="w-full h-16 rounded-xl flex flex-col items-center justify-center p-2 text-center transition-transform group-hover:scale-[1.02] shadow-inner relative overflow-hidden border border-slate-200/60"
                    style={{ backgroundColor: brand.logoBg }}
                  >
                    {/* Brand Name Typography */}
                    <span
                      className="font-display font-black text-base md:text-lg tracking-tight uppercase"
                      style={{ color: brand.textColor }}
                    >
                      {brand.name}
                    </span>
                    <span
                      className="text-[9px] font-semibold tracking-wider opacity-90 truncate max-w-[90%]"
                      style={{ color: brand.accentColor }}
                    >
                      {brand.tagline}
                    </span>
                  </div>

                  {/* Badge */}
                  {brand.badge && (
                    <div className="mt-2.5">
                      <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {brand.badge}
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-[11px] text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {brand.description}
                  </p>
                </div>

                {/* Bottom Products & WA Link */}
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-medium">Ready Stock</span>
                  <a
                    href={brandWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600 hover:text-red-700 transition-colors"
                  >
                    <span>Cek Stok</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Brand Section */}
        <div className="mt-12 rounded-2xl bg-slate-50 border border-slate-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white shrink-0 shadow-sm">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Mencari Brand atau Seri Tertentu?</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Kami siap membantu pengadaan khusus (indent/order khusus) untuk proyek perumahan, instansi, atau kontraktor di Jombang.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${STORE_INFO.phoneClean}?text=Halo%20Admin%20MULUR%201%2C%20saya%20ingin%20tanya%20ketersediaan%20brand%20spesifik%20untuk%20proyek%20saya...`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-sm shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Tanya Brand ke Admin WA</span>
          </a>
        </div>

      </div>
    </section>
  );
};
