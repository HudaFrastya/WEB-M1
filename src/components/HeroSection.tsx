import React, { useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import { 
  MessageCircle, 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  PhoneCall,
  Sparkles,
  Building2,
  Boxes,
  Award,
  Maximize2,
  X
} from 'lucide-react';

interface HeroSectionProps {
  onOpenCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCalculator }) => {
  const storefrontImg = '/src/assets/images/regenerated_image_1790242050525.png';
  const [showLightbox, setShowLightbox] = useState<boolean>(false);

  const waUrl = `https://wa.me/${STORE_INFO.phoneClean}?text=Halo%20Admin%20MULUR%201%20Jombang%2C%20saya%20tertarik%20dengan%20produk%20bahan%20bangunan%20dan%20ingin%20konsultasi%20kebutuhan%20proyek%20saya.`;

  return (
    <section id="beranda" className="relative bg-gradient-to-b from-white via-slate-50/80 to-slate-100/50 text-slate-900 overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80">
      {/* Subtle Architectural Pattern */}
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bold Text, Badges & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50/90 border border-red-200/80 text-red-700 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <span className="tracking-wider uppercase font-bold text-[11px] text-red-700">
                MULUR 1 JOMBANG
              </span>
              <span className="text-red-300">•</span>
              <span className="text-[11px] text-slate-700 font-medium">
                Supermarket Bahan Bangunan Terlengkap
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-display font-extrabold tracking-tight leading-[1.15] text-slate-950">
              One Stop Solution Shopping{' '}
              <span className="block mt-1 text-red-600">
                Bahan Bangunan Terlengkap
              </span>
              <span className="block mt-1 text-slate-800 text-2xl sm:text-3xl lg:text-4xl font-bold">
                se-Kabupaten Jombang
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              Pusat belanja material modern di <strong className="text-slate-900 font-semibold">Jl. Gus Dur No. 66 Jombang</strong>. Menyediakan granit, keramik, cat oplos mesin tinting digital, sanitaryware, smart lock, semen hingga power tools original dengan armada pengiriman cepat ke seluruh pelosok Jombang.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full pt-1 text-xs md:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Mesin Tinting Oplos Cat Dulux & Indaco</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pengiriman Pribadi, JNE & Indah Cargo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Produk Original Bergaransi Resmi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Konsultasi & Hitung Estimasi RAB Gratis</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3 w-full sm:w-auto">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm md:text-base text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Konsultasi WA: {STORE_INFO.phone}</span>
              </a>

              <a
                href="#kategori-produk"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm md:text-base text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 transition-all shadow-xs"
              >
                <span>Katalog Produk</span>
                <ArrowRight className="w-4 h-4 text-slate-600" />
              </a>

              <button
                type="button"
                onClick={onOpenCalculator}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs md:text-sm text-amber-900 bg-amber-50 hover:bg-amber-100/80 border border-amber-200/90 transition-all shadow-xs"
              >
                <span>Hitung Granit / Cat</span>
              </button>
            </div>

          </div>

          {/* Right Column: Clean Visual Storefront Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
              {/* Storefront Image with natural wide aspect ratio, angled towards building facade */}
              <div 
                className="aspect-[16/9] w-full overflow-hidden relative bg-slate-100 cursor-pointer"
                onClick={() => setShowLightbox(true)}
              >
                <img
                  src={storefrontImg}
                  alt="Supermarket Bahan Bangunan MULUR 1 Jombang"
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Floating zoom indicator on hover */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-slate-800 px-2.5 py-1.5 rounded-lg backdrop-blur-sm border border-slate-200 flex items-center gap-1.5 text-xs shadow-md">
                  <Maximize2 className="w-3.5 h-3.5 text-red-600" />
                  <span className="text-[11px] font-semibold">Perbesar Foto</span>
                </div>
              </div>

              {/* Clean caption bar below the image */}
              <div className="p-3.5 bg-white border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-red-50 border border-red-100 text-red-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">SUPERMARKET BAHAN BANGUNAN MULUR 1</p>
                    <p className="text-[11px] text-slate-500">Jl. Gus Dur No. 66, Jombang</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={STORE_INFO.gmapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-red-600 hover:text-red-700 underline shrink-0 pl-1"
                  >
                    Buka Peta →
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Quick Cards Bar under Hero */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-200/80">
          
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 transition-all">
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-100 text-amber-700 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Lokasi Strategis & Parkir Luas</h4>
              <p className="text-xs text-slate-500 mt-0.5">Jl. Gus Dur No. 66 Jombang, akses mudah untuk mobil & truk proyek</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 transition-all">
            <div className="p-3 rounded-lg bg-red-50 border border-red-100 text-red-600 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">3 Jalur Logistik Lengkap</h4>
              <p className="text-xs text-slate-500 mt-0.5">Armada Toko Mulur 1, ekspedisi JNE, dan Indah Cargo</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 transition-all">
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-700 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">100% Keaslian Brand Resmi</h4>
              <p className="text-xs text-slate-500 mt-0.5">Dulux, Indaco, Bosch, Makita, Infiniti, Wasser, Platinum bergaransi</p>
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen High-Resolution Lightbox Modal */}
      {showLightbox && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setShowLightbox(false)}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Actions Bar */}
            <div className="w-full flex items-center justify-between pb-3 text-white border-b border-slate-800 mb-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <span className="text-xs sm:text-sm font-bold tracking-wide">
                  SUPERMARKET BAHAN BANGUNAN MULUR 1 JOMBANG (FASAD UTAMA)
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowLightbox(false)}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Clean, uncropped original image */}
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl max-h-[78vh] flex items-center justify-center">
              <img
                src={storefrontImg}
                alt="Foto Fasad Supermarket Bahan Bangunan MULUR 1"
                className="max-h-[78vh] w-auto object-contain rounded-lg"
              />
            </div>

            <p className="text-slate-400 text-xs mt-3 text-center">
              Jl. Gus Dur No. 66, Jombang • Supermarket Bahan Bangunan Terlengkap se-Kabupaten Jombang
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
