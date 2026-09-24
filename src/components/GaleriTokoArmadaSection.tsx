import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/storeData';
import { Camera, ZoomIn, X, MapPin, Truck, Sparkles } from 'lucide-react';

export const GaleriTokoArmadaSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  return (
    <section id="galeri-armada" className="py-16 md:py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold mb-3">
            <Camera className="w-3.5 h-3.5 text-red-600" />
            <span>BUKTI FISIK TOKO AKTIF & OPERASIONAL</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
            Galeri Toko & Armada Logistik{' '}
            <span className="text-red-600">
              SUPERMARKET BAHAN BANGUNAN MULUR 1
            </span>
          </h2>

          <p className="text-slate-600 text-sm md:text-base mt-2">
            Lihat langsung suasana supermarket, display granit & sanitari berkelas, stasiun tinting cat resmi, serta kesiapan armada pengiriman kami.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 hover:border-slate-300 shadow-xs cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>

              {/* Zoom hover indicator */}
              <div className="absolute top-3 right-3 p-2 rounded-xl bg-white/90 text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-slate-200 shadow-xs">
                <ZoomIn className="w-4 h-4 text-red-600" />
              </div>

              {/* Category Pill Top Left */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                {item.category}
              </div>

              {/* Content bottom */}
              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="text-sm font-bold text-white group-hover:text-red-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-200 mt-1 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Store Highlights Info Bar */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3 shadow-xs">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl border border-red-100 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Gedung Supermarket Representatif</p>
              <p className="text-[11px] text-slate-500">Jl. Gus Dur No. 66 Jombang, mudah parkir</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3 shadow-xs">
            <div className="p-3 bg-slate-100 text-slate-800 rounded-xl border border-slate-200 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Armada Mandiri Toko Siap Kirim</p>
              <p className="text-[11px] text-slate-500">Truk & pick-up siap meluncur tiap hari</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3 shadow-xs">
            <div className="p-3 bg-amber-50 text-amber-700 rounded-xl border border-amber-100 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Mesin Tinting Dulux & Indaco</p>
              <p className="text-[11px] text-slate-500">Oplos ribuan warna akurat dalam hitungan menit</p>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-3xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white bg-slate-800/80 hover:bg-red-600 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] w-full overflow-hidden bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 border-t border-slate-800">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {selectedImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
