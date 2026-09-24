import React from 'react';
import { SUPPLIED_PROJECTS, STORE_INFO } from '../data/storeData';
import { Building2, MapPin, Calendar, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

export const ProyekSection: React.FC = () => {
  return (
    <section id="proyek" className="py-16 md:py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold mb-3">
              <Building2 className="w-3.5 h-3.5 text-red-600" />
              <span>PORTOFOLIO KLIEN & REKANAN PROYEK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-950">
              Proyek yang Telah Disuplai oleh{' '}
              <span className="text-red-600">
                SUPERMARKET BAHAN BANGUNAN MULUR 1
              </span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-2 max-w-2xl">
              Bukti nyata kepercayaan pengembang perumahan, kontraktor, yayasan pesantren, hingga pemilik hunian pribadi di Kabupaten Jombang terhadap ketepatan suplai material kami.
            </p>
          </div>

          <a
            href={`https://wa.me/${STORE_INFO.phoneClean}?text=Halo%20Admin%20MULUR%201%2C%20saya%20kontraktor%2Fdeveloper%20dan%20ingin%20bermitra%20suplai%20material%20proyek...`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Kemitraan Proyek & Tender</span>
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SUPPLIED_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="rounded-3xl bg-white border border-slate-200 hover:border-slate-300 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 border border-slate-200 shadow-xs">
                    {proj.category}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-red-400" />
                      <span>{proj.location}</span>
                    </span>
                    <span className="flex items-center gap-1 text-slate-200">
                      <Calendar className="w-3.5 h-3.5 text-amber-300" />
                      <span>{proj.year}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Material Disuplai:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.materials.map((mat, mIdx) => (
                        <span
                          key={mIdx}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/80"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/${STORE_INFO.phoneClean}?text=Halo%20Admin%20MULUR%201%2C%20saya%20ingin%20tanya%20suplai%20material%20seperti%20pada%20proyek%20*${encodeURIComponent(proj.title)}*...`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-slate-900 transition-colors border border-slate-200"
                >
                  <span>Konsultasikan Kebutuhan Serupa</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
