import React, { useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  MessageCircle, 
  Send, 
  ExternalLink, 
  Truck, 
  CheckCircle2, 
  Navigation,
  Sparkles
} from 'lucide-react';

export const CtaLokasiSection: React.FC = () => {
  const [nama, setNama] = useState('');
  const [telepon, setTelepon] = useState('');
  const [kategori, setKategori] = useState('Granit & Keramik');
  const [kecamatan, setKecamatan] = useState('Jombang Kota');
  const [catatan, setCatatan] = useState('');

  const kecamatanJombang = [
    'Jombang Kota',
    'Diwek',
    'Peterongan',
    'Mojoagung',
    'Ploso',
    'Bareng',
    'Mojowarno',
    'Ngoro',
    'Perak',
    'Sumobito',
    'Kesamben',
    'Kabuh',
    'Tembelang',
    'Megaluh',
    'Bandarkedungmulyo',
    'Gudo',
    'Ngusikan',
    'Kudu',
    'Wonosalam',
    'Luar Kabupaten Jombang'
  ];

  const handleSendWa = (e: React.FormEvent) => {
    e.preventDefault();
    const textMsg = `Halo Admin MULUR 1 Jombang, saya ingin konsultasi kebutuhan material bangunan:
• Nama: ${nama || '-'}
• No. Kontak: ${telepon || '-'}
• Kebutuhan Material: ${kategori}
• Lokasi Pengiriman: Kecamatan ${kecamatan}
• Catatan Tambahan: ${catatan || 'Mohon info katalog & estimasi harga terbaik.'}

Apakah bisa dibantu cek stok & jadwal pengiriman armada toko? Terima kasih.`;

    const encoded = encodeURIComponent(textMsg);
    window.open(`https://wa.me/${STORE_INFO.phoneClean}?text=${encoded}`, '_blank');
  };

  return (
    <section id="lokasi-kontak" className="py-16 md:py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>KONSULTASI & KUNJUNGI KAMI</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
            Hubungi Kami & Temukan Lokasi{' '}
            <span className="text-red-600">
              SUPERMARKET BAHAN BANGUNAN MULUR 1
            </span>
          </h2>

          <p className="text-slate-600 text-sm md:text-base mt-2">
            Konsultasikan rencana renovasi atau proyek Anda secara online melalui WhatsApp, atau kunjungi langsung supermarket kami di Jl. Gus Dur No. 66 Jombang.
          </p>
        </div>

        {/* Main Grid: Form Left, Info & Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Form Konsultasi Cepat WA */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-900 text-white p-6 sm:p-8 md:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Fast Response WhatsApp
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mt-1">
                Formulir Cek Kebutuhan & RAB
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Isi data di bawah ini untuk langsung terhubung dengan Customer Service kami di WhatsApp: <strong className="text-amber-400">{STORE_INFO.phone}</strong>
              </p>

              <form onSubmit={handleSendWa} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Pak Hendra / Ibu Linda"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812-xxxx-xxxx"
                      value={telepon}
                      onChange={(e) => setTelepon(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 placeholder-slate-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Kebutuhan Material Utama
                    </label>
                    <select
                      value={kategori}
                      onChange={(e) => setKategori(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    >
                      <option value="Granit & Keramik Lantai">Granit & Keramik Lantai</option>
                      <option value="Cat Oplos Mesin Tinting Digital (Dulux/Indaco)">Cat Oplos Mesin Tinting</option>
                      <option value="Kunci, Smart Lock & Hardware (UniKey/Evomab)">Kunci, Smart Lock & Hardware</option>
                      <option value="Sanitaryware, Shower & Water Heater (Wasser/Roca/Viessmann)">Sanitary & Water Heater</option>
                      <option value="Power Tools & Mesin (Bosch/Makita/Modern)">Power Tools & Mesin Kerja</option>
                      <option value="Semen & Mortar Instan (AM Mortar)">Semen & Mortar Instan</option>
                      <option value="Pipa PVC & Pompa Air (Trilliun/Shimizu)">Pipa PVC & Pompa Air</option>
                      <option value="Paket Lengkap Bangun Rumah Baru / Ruko">Paket Lengkap Bangun Rumah</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Wilayah Pengiriman (Kecamatan)
                    </label>
                    <select
                      value={kecamatan}
                      onChange={(e) => setKecamatan(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    >
                      {kecamatanJombang.map((kec) => (
                        <option key={kec} value={kec}>
                          {kec}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Catatan Kebutuhan / Pertanyaan
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Contoh: Butuh granit 60x60 motif putih 40 dus, cat Dulux Weathershield putih 2 pail, antar ke Peterongan."
                    value={catatan}
                    onChange={(e) => setCatatan(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 placeholder-slate-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-sm md:text-base text-white bg-red-600 hover:bg-red-700 transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Kirim Konsultasi ke WhatsApp CS</span>
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  Data Anda aman dan pesan akan otomatis terbuka di aplikasi WhatsApp.
                </p>
              </form>
            </div>
          </div>

          {/* Right Column: Contact Details & Google Maps */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Address */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-red-100 text-red-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Alamat Toko</h4>
                </div>
                <p className="text-xs text-slate-700 font-medium">
                  {STORE_INFO.address}
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  (Jalan protokol utama, akses luas untuk truk & kendaraan pribadi)
                </p>
              </div>

              {/* Card 2: Operating Hours */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-amber-100 text-amber-700 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Jam Operasional</h4>
                </div>
                <p className="text-xs text-slate-700 font-medium">
                  {STORE_INFO.operatingHours.weekday}
                </p>
                <p className="text-xs text-slate-700 font-medium mt-0.5">
                  {STORE_INFO.operatingHours.sunday}
                </p>
                <span className="inline-block mt-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  ● Buka Setiap Hari
                </span>
              </div>

              {/* Card 3: Customer Service */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Customer Service</h4>
                </div>
                <p className="text-base font-extrabold text-red-600 font-display">
                  {STORE_INFO.phone}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Telepon & WhatsApp Aktif
                </p>
              </div>

              {/* Card 4: Pengiriman */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-blue-100 text-blue-700 shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Layanan Ekspedisi</h4>
                </div>
                <p className="text-xs text-slate-700 font-semibold">
                  Armada Pribadi Toko
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  Didukung JNE Express & Indah Cargo
                </p>
              </div>
            </div>

            {/* Google Maps Container */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-bold text-white">
                    Peta Lokasi: Jl. Gus Dur No. 66 Jombang
                  </span>
                </div>

                <a
                  href={STORE_INFO.gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Petunjuk Arah Rute</span>
                </a>
              </div>

              {/* Map Embed Simulation / Interactive Map */}
              <div className="relative aspect-[16/9] w-full bg-slate-200">
                <iframe
                  title="Google Maps Supermarket Bahan Bangunan Mulur 1 Jombang"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.456382103525!2d122.2270!3d-7.5540!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e783ff55848569b%3A0x6b8f3ffc8bc1!2sJl.%20KH.%20Abdurrahman%20Wahid%20(Gus%20Dur)%2C%20Jombang%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>

                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md p-2.5 rounded-xl shadow-lg border border-slate-200 pointer-events-none">
                  <p className="text-xs font-extrabold text-slate-900">SUPERMARKET BAHAN BANGUNAN MULUR 1</p>
                  <p className="text-[10px] text-slate-600">Jl. Gus Dur No. 66 Jombang</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
