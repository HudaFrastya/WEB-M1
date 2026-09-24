import React from 'react';
import { MulurLogo } from './MulurLogo';
import { STORE_INFO, BRANDS } from '../data/storeData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Truck, 
  ShieldCheck, 
  MessageCircle,
  ExternalLink,
  Heart
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = 2026;
  const waUrl = `https://wa.me/${STORE_INFO.phoneClean}?text=Halo%20Admin%20MULUR%201%20Jombang%2C%20saya%20ingin%20konsultasi%20bahan%20bangunan.`;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#beranda" className="inline-block">
              <MulurLogo variant="dark" size="lg" />
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              <strong className="text-white font-semibold">SUPERMARKET BAHAN BANGUNAN MULUR 1</strong> adalah pusat perbelanjaan bahan bangunan terlengkap dan terpercaya se-Kabupaten Jombang. Solusi One Stop Shopping kebutuhan proyek, renovasi, dan dekorasi hunian Anda dengan harga transparan dan armada pengiriman cepat.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-white font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Supermarket Bahan Bangunan No. 1 di Jombang</span>
              </span>
            </div>

            {/* Delivery Channels Badges */}
            <div className="pt-3">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Opsi Pengiriman Resmi:
              </p>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="px-2.5 py-1 rounded-lg bg-red-950/40 text-red-300 border border-red-900/40 font-semibold">
                  Armada Pribadi Toko
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 font-semibold">
                  JNE Express
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 font-semibold">
                  Indah Cargo
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#beranda" className="hover:text-amber-400 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#brand-mitra" className="hover:text-amber-400 transition-colors">
                  Brand Mitra Resmi
                </a>
              </li>
              <li>
                <a href="#tentang-kami" className="hover:text-amber-400 transition-colors">
                  Tentang Perusahaan
                </a>
              </li>
              <li>
                <a href="#keunggulan-layanan" className="hover:text-amber-400 transition-colors">
                  Keunggulan & Layanan
                </a>
              </li>
              <li>
                <a href="#kategori-produk" className="hover:text-amber-400 transition-colors">
                  Katalog Produk
                </a>
              </li>
              <li>
                <a href="#proyek" className="hover:text-amber-400 transition-colors">
                  Proyek Disuplai
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-amber-400 transition-colors">
                  Testimoni Pelanggan
                </a>
              </li>
              <li>
                <a href="#galeri-armada" className="hover:text-amber-400 transition-colors">
                  Galeri Toko & Armada
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Brand Populer (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Brand Unggulan
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {BRANDS.slice(0, 14).map((b) => (
                <span
                  key={b.id}
                  className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-medium"
                >
                  {b.name}
                </span>
              ))}
            </div>

            <div className="pt-3">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Layanan Khusus:
              </h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mesin Tinting Dulux & Indaco siap oplos warna akurat dalam hitungan menit di kasir toko.
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Kontak & Lokasi
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {STORE_INFO.address}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">{STORE_INFO.phone}</p>
                  <p className="text-[11px] text-slate-400">WhatsApp & Telepon CS</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300">{STORE_INFO.operatingHours.weekday}</p>
                  <p className="text-slate-400">{STORE_INFO.operatingHours.sunday}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat Admin WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-black/40 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} SUPERMARKET BAHAN BANGUNAN MULUR 1 JOMBANG. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Melayani dengan integritas di</span>
            <span className="text-amber-400 font-bold">Kabupaten Jombang</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
