import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { 
  Truck, 
  Paintbrush, 
  ShieldCheck, 
  Calculator, 
  CreditCard, 
  MapPin, 
  PackageCheck, 
  Sparkles, 
  ArrowRight,
  MessageCircle,
  Clock,
  CheckCircle2
} from 'lucide-react';

export const KeunggulanLayananSection: React.FC = () => {
  const waUrl = `https://wa.me/${STORE_INFO.phoneClean}?text=Halo%20Admin%20MULUR%201%2C%20saya%20ingin%20tanya%20layanan%20pengiriman%20dan%20estimasi%20biaya%20ke%20alamat%20saya...`;

  const keunggulanList = [
    {
      icon: Paintbrush,
      iconBg: 'bg-red-50 text-red-600 border border-red-100',
      title: 'Mesin Tinting Cat Digital Modern',
      desc: 'Tersedia mesin oplos digital resmi Dulux dan Indaco Paints. Dapatkan ribuan warna pilihan dengan tingkat akurasi 100% cepat dalam hitungan menit.',
      badge: 'Teknologi Komputer'
    },
    {
      icon: Truck,
      iconBg: 'bg-slate-100 text-slate-800 border border-slate-200',
      title: 'Armada Pengiriman Pribadi Toko',
      desc: 'Armada truk & pick-up khusus Mulur 1 siap mengantar pesanan semen, pasir, besi, hingga keramik langsung ke lokasi proyek atau hunian Anda se-Jombang.',
      badge: 'Cepat & Aman'
    },
    {
      icon: PackageCheck,
      iconBg: 'bg-blue-50 text-blue-700 border border-blue-100',
      title: 'Opsi Ekspedisi JNE & Indah Cargo',
      desc: 'Untuk paket aksesoris/kunci kami sediakan kurir JNE Express, sedangkan pesanan volume besar/luar kota dilayani melalui Indah Logistik Cargo hemat biaya.',
      badge: 'Multi Ekspedisi'
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
      title: '100% Produk Original Bergaransi',
      desc: 'Setiap perkakas Bosch, Makita, water heater Viessmann, pompa Shimizu, dan kunci Evomab dilengkapi jaminan garansi resmi pabrikan bukan barang tiruan.',
      badge: 'Resmi & Bergaransi'
    },
    {
      icon: Calculator,
      iconBg: 'bg-amber-50 text-amber-800 border border-amber-100',
      title: 'Konsultasi & Estimasi RAB Gratis',
      desc: 'Bingung berapa dus granit atau berapa galon cat yang dibutuhkan? Staf ahli kami siap membantu simulasi perhitungan material secara gratis dan presisi.',
      badge: 'Bebas Konsultasi'
    },
    {
      icon: CreditCard,
      iconBg: 'bg-slate-100 text-slate-700 border border-slate-200',
      title: 'Kemudahan Sistem Pembayaran',
      desc: 'Mendukung pembayaran tunai kasir, QRIS instan, transfer antar-bank BCA, Mandiri, BRI, BNI, serta invoice resmi untuk kontraktor dan institusi.',
      badge: 'Fleksibel & Aman'
    }
  ];

  return (
    <section id="keunggulan-layanan" className="py-16 md:py-24 bg-slate-50/80 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>KENAPA BELANJA DI TOKO MULUR 1?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
            Keunggulan & Layanan Unggulan{' '}
            <span className="text-red-600">
              SUPERMARKET BAHAN BANGUNAN MULUR 1
            </span>
          </h2>

          <p className="text-slate-600 text-sm md:text-base mt-3">
            Kenyamanan berbelanja, kelengkapan produk, jaminan garansi resmi, dan kepastian armada pengiriman tepat waktu adalah komitmen utama kami.
          </p>
        </div>

        {/* 6 Grid Keunggulan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keunggulanList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-xs`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/60">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-red-600 group-hover:text-red-700 transition-colors">
                  <span>Layanan Mulur 1</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail Pengiriman Section (Armada Pribadi, JNE, Indah Cargo) */}
        <div className="mt-16 rounded-3xl bg-slate-900 text-white p-6 sm:p-8 md:p-10 border border-slate-800 relative overflow-hidden shadow-2xl">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-bold">
                <Truck className="w-3.5 h-3.5 text-amber-400" />
                <span>SOLUSI PENGIRIMAN FLEKSIBEL</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Siap Kirim ke Seluruh{' '}
                <span className="text-red-400">
                  21 Kecamatan di Jombang
                </span>
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Kami memahami pentingnya kelancaran jadwal proyek Anda. Oleh karena itu, Supermarket Bahan Bangunan Mulur 1 mengoperasikan armada mandiri serta menggandeng mitra kurir nasional.
              </p>

              <div className="pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-red-600 hover:bg-red-700 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Jadwalkan Pengiriman via WA</span>
                </a>
              </div>
            </div>

            {/* 3 Delivery Options Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {STORE_INFO.deliveryPartners.map((partner, pIdx) => (
                <div
                  key={pIdx}
                  className={`rounded-2xl p-4 sm:p-5 flex flex-col justify-between border transition-all ${
                    partner.highlight
                      ? 'bg-gradient-to-b from-red-950/40 to-slate-800/90 border-red-500/50 shadow-lg'
                      : 'bg-slate-800/60 border-slate-700/80'
                  }`}
                >
                  <div>
                    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 ${
                      partner.highlight
                        ? 'bg-red-600 text-white'
                        : 'bg-slate-700 text-amber-300'
                    }`}>
                      {partner.badge}
                    </span>

                    <h4 className="text-sm font-bold text-white">
                      {partner.name}
                    </h4>

                    <p className="text-[10px] font-semibold text-slate-400 uppercase mt-0.5">
                      {partner.type}
                    </p>

                    <p className="text-[11px] text-slate-300 mt-2.5 leading-relaxed">
                      {partner.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Tersedia Setiap Hari</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
