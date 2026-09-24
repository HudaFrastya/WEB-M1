import React, { useState, useEffect } from 'react';
import { MulurLogo } from './MulurLogo';
import { STORE_INFO } from '../data/storeData';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Truck, 
  MessageCircle, 
  Calculator, 
  Menu, 
  X, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Brand Mitra', href: '#brand-mitra' },
    { name: 'Tentang Kami', href: '#tentang-kami' },
    { name: 'Keunggulan', href: '#keunggulan-layanan' },
    { name: 'Kategori Produk', href: '#kategori-produk' },
    { name: 'Proyek', href: '#proyek' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Galeri & Armada', href: '#galeri-armada' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Lokasi & Kontak', href: '#lokasi-kontak' },
  ];

  const waUrl = `https://wa.me/${STORE_INFO.phoneClean}?text=Halo%20Admin%20MULUR%201%20Jombang%2C%20saya%20ingin%20konsultasi%20bahan%20bangunan%20dan%20cek%20ketersediaan%20stok.`;

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mulur 1 Logo */}
          <a href="#beranda" className="flex items-center">
            <MulurLogo variant="light" size="md" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.slice(0, 7).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-semibold text-slate-700 hover:text-red-600 px-2.5 py-1.5 rounded-md hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="relative group">
              <button className="text-xs lg:text-sm font-semibold text-slate-700 hover:text-red-600 px-2.5 py-1.5 rounded-md hover:bg-slate-50 transition-colors flex items-center gap-1">
                Lainnya
                <span className="text-[10px]">▼</span>
              </button>
              <div className="absolute right-0 top-full hidden group-hover:block bg-white shadow-xl rounded-xl border border-slate-100 py-2 w-48 z-50">
                {navLinks.slice(7).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons: Calculator & WA */}
          <div className="hidden sm:flex items-center gap-2 md:gap-3">
            <button
              onClick={onOpenCalculator}
              type="button"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <Calculator className="w-3.5 h-3.5 text-slate-600" />
              <span>Hitung Bahan</span>
            </button>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs md:text-sm font-bold text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCalculator}
              className="p-2 text-slate-700 bg-slate-100 rounded-xl border border-slate-200"
              title="Kalkulator Material"
            >
              <Calculator className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-semibold text-slate-700 hover:text-red-600 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl border border-slate-200 hover:bg-slate-200"
              >
                <Calculator className="w-4 h-4 text-slate-600" />
                <span>Kalkulator Kebutuhan Granit & Cat</span>
              </button>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Konsultasi WA: {STORE_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
