import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { 
  Building, 
  Target, 
  Compass, 
  CheckCircle, 
  MapPin, 
  Award, 
  Users, 
  Sparkles,
  ShoppingBag,
  Clock,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang-kami" className="py-16 md:py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Two Column Layout: Story & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Stats */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 group">
              <img
                src="/src/assets/images/mulur_showroom_1790239278552.jpg"
                alt="Showroom Toko Mulur 1 Jombang"
                className="w-full h-80 sm:h-96 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-red-600 font-bold text-xs uppercase tracking-wider mb-2">
                  Pusat Jombang
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                  MULUR 1 - Jl. Gus Dur No. 66 Jombang
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">
                  Supermarket bahan bangunan berkonsep modern, ber-AC, display tertata rapi, dan mudah dijangkau.
                </p>
              </div>
            </div>

            {/* Overlapping Experience Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white text-slate-900 p-5 rounded-2xl shadow-xl border border-slate-200 hidden sm:block max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">No. 1</p>
                  <p className="text-xs font-bold text-slate-800">Supermarket Bangunan</p>
                  <p className="text-[10px] text-slate-500">Terlengkap di Kab. Jombang</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profil & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold">
              <Building className="w-3.5 h-3.5 text-red-600" />
              <span>PROFIL PERUSAHAAN & SEJARAH</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-950 tracking-tight leading-tight">
              Menghadirkan Solusi{' '}
              <span className="text-red-600">
                One Stop Shopping Bangunan
              </span>{' '}
              Bagi Warga Jombang
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong className="text-slate-900 font-semibold">MULUR 1</strong> adalah pelopor supermarket bahan bangunan terkemuka yang berlokasi di jalan protokol paling prestisius, <strong className="text-slate-900 font-semibold">Jl. Gus Dur No. 66, Jombang</strong>. Kami hadir untuk menjawab kebutuhan masyarakat Jombang akan tempat belanja material bangunan yang lengkap, nyaman, transparan, dan terpercaya.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Mulai dari kebutuhan pondasi kasar, semen mortar, besi beton, pipa saluran air, hingga tahap finishing mewah seperti keramik granit, sanitaryware hotel, cat dengan mesin tinting akurat, hingga aksesoris smart lock dan perkakas listrik industri—semuanya tersedia dalam satu atap dengan jaminan 100% original.
            </p>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <ShieldCheck className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">100% Asli Bergaransi</h4>
                  <p className="text-[11px] text-slate-500">Kemitraan langsung brand ternama</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <ShoppingBag className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">One Stop Shopping</h4>
                  <p className="text-[11px] text-slate-500">Dari semen sampai dekorasi interior</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Mesin Tinting Digital</h4>
                  <p className="text-[11px] text-slate-500">Ribuan warna cat Dulux & Indaco</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <Users className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Pelayanan Konsultatif</h4>
                  <p className="text-[11px] text-slate-500">Staf ramah & siap bantu hitung RAB</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Visi & Misi Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 pt-12 border-t border-slate-200">
          
          {/* Card Visi */}
          <div className="rounded-3xl p-6 md:p-8 bg-slate-50 border border-slate-200 shadow-xs relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center mb-5 shadow-sm">
              <Target className="w-6 h-6" />
            </div>

            <h3 className="text-xl md:text-2xl font-display font-extrabold text-slate-900">
              Visi Kami
            </h3>

            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Menjadi sentra supermarket bahan bangunan modern <strong className="font-semibold text-red-600">nomor satu, paling lengkap, dan paling dipercaya</strong> di Kabupaten Jombang dan sekitarnya melalui keunggulan kualitas barang, transparansi harga, dan pelayanan logistik yang prima bagi setiap pelanggan retail maupun mitra kontraktor.
            </p>
          </div>

          {/* Card Misi */}
          <div className="rounded-3xl p-6 md:p-8 bg-slate-900 text-white border border-slate-800 shadow-md relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 text-amber-400 flex items-center justify-center mb-5 shadow-xs">
              <Compass className="w-6 h-6" />
            </div>

            <h3 className="text-xl md:text-2xl font-display font-extrabold text-white">
              Misi Kami
            </h3>

            <ul className="space-y-3 mt-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                <span>Menyediakan pilihan material bangunan terlengkap dengan standar mutu nasional & internasional.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                <span>Menjalin kemitraan resmi dengan merek-merek ternama untuk menjamin harga bersaing dan garansi produk.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                <span>Memberikan pengalaman belanja yang nyaman, amanah, cepat, dan didukung teknologi mesin tinting modern.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">4</span>
                <span>Menyediakan armada pengiriman toko yang sigap menjangkau 21 kecamatan se-Kabupaten Jombang.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-14 rounded-3xl bg-slate-900 text-white p-6 sm:p-8 md:p-10 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STORE_INFO.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-amber-400 mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
