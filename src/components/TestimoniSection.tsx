import React from 'react';
import { TESTIMONIALS } from '../data/storeData';
import { Star, Quote, CheckCircle2, MessageSquare } from 'lucide-react';

export const TestimoniSection: React.FC = () => {
  return (
    <section id="testimoni" className="py-16 md:py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-red-600" />
            <span>KATA MEREKA TENTANG KAMI</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
            Bukti Kepuasan Pelanggan & Mitra{' '}
            <span className="text-red-600">
              SUPERMARKET BAHAN BANGUNAN MULUR 1
            </span>
          </h2>

          <p className="text-slate-600 text-sm md:text-base mt-2">
            Cerita asli dari kontraktor, tukang bangunan, arsitek, dan pemilik rumah di seantero Jombang yang telah membuktikan kualitas dan pelayanan kami.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="rounded-3xl p-6 sm:p-8 bg-slate-50/80 border border-slate-200/90 hover:border-slate-300 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-1.5">5.0 / 5.0</span>
                  </div>

                  <Quote className="w-8 h-8 text-slate-200 group-hover:text-red-200 transition-colors" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{testi.text}"
                </p>

                {/* Project Tag */}
                <div className="mt-4 pt-3 border-t border-slate-200/80">
                  <span className="inline-block text-[11px] font-semibold text-slate-500">
                    Proyek:{' '}
                    <strong className="text-slate-800 font-bold">{testi.projectSupplied}</strong>
                  </span>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-slate-200/80">
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-red-600 shadow-xs"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-slate-900">{testi.name}</h4>
                    {testi.verifiedBadge && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    )}
                  </div>
                  <p className="text-xs text-red-600 font-semibold">{testi.role}</p>
                  <p className="text-[11px] text-slate-500">{testi.companyOrArea}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Summary Bar */}
        <div className="mt-12 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="text-4xl sm:text-5xl font-extrabold text-amber-400 font-display">
              4.9<span className="text-2xl text-slate-400">/5</span>
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-bold text-white mt-1">
                Tingkat Kepuasan Pelanggan se-Kabupaten Jombang
              </p>
              <p className="text-[11px] text-slate-400">
                Berdasarkan ulasan ratusan kontraktor, arsitek & pemilik hunian
              </p>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-xs text-slate-300">Siap menjadi bagian dari pelanggan puas kami?</p>
            <p className="text-sm font-bold text-amber-400">Kunjungi Toko di Jl. Gus Dur No. 66 Jombang</p>
          </div>
        </div>

      </div>
    </section>
  );
};
