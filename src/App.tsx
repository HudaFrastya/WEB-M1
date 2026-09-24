import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandMitraSection } from './components/BrandMitraSection';
import { AboutSection } from './components/AboutSection';
import { KeunggulanLayananSection } from './components/KeunggulanLayananSection';
import { KategoriProdukSection } from './components/KategoriProdukSection';
import { ProyekSection } from './components/ProyekSection';
import { TestimoniSection } from './components/TestimoniSection';
import { GaleriTokoArmadaSection } from './components/GaleriTokoArmadaSection';
import { FaqSection } from './components/FaqSection';
import { CtaLokasiSection } from './components/CtaLokasiSection';
import { Footer } from './components/Footer';
import { KalkulatorMaterialModal } from './components/KalkulatorMaterialModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductItem } from './types';

export default function App() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

      <main>
        {/* 2. Hero Section: (Fokus Utama, Judul Kuat & Tombol Aksi) */}
        <HeroSection onOpenCalculator={() => setCalculatorOpen(true)} />

        {/* 3. Brand Mitra: (Deretan logo merek besar yang dijual) */}
        <BrandMitraSection />

        {/* 4. Tentang Perusahaan: (Profil singkat & Visi Misi) */}
        <AboutSection />

        {/* 5. Keunggulan & Layanan: (Kenapa belanja di sini & 3 jalur pengiriman) */}
        <KeunggulanLayananSection />

        {/* 6. Kategori Produk Unggulan: (Semen, Besi, Cat, Granit, Kunci, Tools) */}
        <KategoriProdukSection onSelectProduct={(prod) => setSelectedProduct(prod)} />

        {/* 7. Klien / Proyek: (Proyek yang pernah disuplai di Jombang) */}
        <ProyekSection />

        {/* 8. Testimoni Pelanggan: (Bukti kepuasan kontraktor & pelanggan) */}
        <TestimoniSection />

        {/* 9. Galeri Toko & Armada: (Bukti fisik toko aktif & logistik) */}
        <GaleriTokoArmadaSection />

        {/* 10. FAQ: (Tanya jawab seputar pemesanan/pengiriman/tinting) */}
        <FaqSection />

        {/* 11. CTA Konsultasi & Peta Lokasi: (Ajakan chat WA & Google Maps Jl. Gus Dur 66) */}
        <CtaLokasiSection />
      </main>

      {/* 12. Footer: (Kontak, Alamat, Medsos, Badges) */}
      <Footer />

      {/* Modals & Floating Tools */}
      <KalkulatorMaterialModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <FloatingWhatsApp />
    </div>
  );
}
