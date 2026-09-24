import React, { useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import { 
  X, 
  Calculator, 
  Layers, 
  Paintbrush, 
  MessageCircle, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

interface KalkulatorMaterialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KalkulatorMaterialModal: React.FC<KalkulatorMaterialModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'keramik' | 'cat'>('keramik');

  // State Keramik
  const [panjangRuang, setPanjangRuang] = useState<number>(4);
  const [lebarRuang, setLebarRuang] = useState<number>(5);
  const [ukuranTile, setUkuranTile] = useState<'60x60' | '50x50' | '40x40' | '30x30'>('60x60');
  const [safetyMargin, setSafetyMargin] = useState<number>(10); // 10% potongan pinggir

  // Tile coverage specs (m² per dus)
  const tileCoverage: Record<string, { m2PerDus: number; pcsPerDus: number }> = {
    '60x60': { m2PerDus: 1.44, pcsPerDus: 4 },
    '50x50': { m2PerDus: 1.00, pcsPerDus: 4 },
    '40x40': { m2PerDus: 0.96, pcsPerDus: 6 },
    '30x30': { m2PerDus: 0.99, pcsPerDus: 11 },
  };

  // State Cat
  const [panjangDinding, setPanjangDinding] = useState<number>(4);
  const [lebarDinding, setLebarDinding] = useState<number>(5);
  const [tinggiDinding, setTinggiDinding] = useState<number>(3);
  const [jumlahPintuJendela, setJumlahPintuJendela] = useState<number>(2); // perkiraan 4 m² total
  const [jumlahLapisan, setJumlahLapisan] = useState<number>(2); // 2 lapis standar

  // Kalkulasi Keramik
  const luasDasarKeramik = panjangRuang * lebarRuang;
  const luasDenganCadangan = luasDasarKeramik * (1 + safetyMargin / 100);
  const dusDibutuhkan = Math.ceil(luasDenganCadangan / tileCoverage[ukuranTile].m2PerDus);

  // Kalkulasi Cat
  // Keliling = 2 x (panjang + lebar) x tinggi
  const kelilingRuang = 2 * (panjangDinding + lebarDinding);
  const totalLuasKotor = kelilingRuang * tinggiDinding;
  const luasBukaan = jumlahPintuJendela * 2; // 2 m² per pintu/jendela
  const luasDindingBersih = Math.max(0, totalLuasKotor - luasBukaan);
  // Daya sebar cat rata-rata 10 m² / liter per lapis
  const literDibutuhkan = Math.ceil((luasDindingBersih * jumlahLapisan) / 10);
  const pail20L = Math.floor(literDibutuhkan / 20);
  const sisaLiter = literDibutuhkan % 20;
  const galon2_5L = Math.ceil(sisaLiter / 2.5);

  // WA Link Generator
  const generateWaQuote = () => {
    let msg = '';
    if (activeTab === 'keramik') {
      msg = `Halo Admin MULUR 1 Jombang, saya baru saja menghitung kebutuhan Granit/Keramik menggunakan kalkulator website:\n- Ukuran Ruangan: ${panjangRuang} x ${lebarRuang} m (${luasDasarKeramik} m²)\n- Ukuran Ubin: ${ukuranTile} cm\n- Cadangan Potongan: ${safetyMargin}%\n- Estimasi Kebutuhan: *${dusDibutuhkan} Dus*\n\nMohon info ketersediaan stok motif dan penawaran harga terbaiknya ya. Terima kasih!`;
    } else {
      msg = `Halo Admin MULUR 1 Jombang, saya menghitung kebutuhan Cat Dinding menggunakan kalkulator website:\n- Dimensi Ruangan: ${panjangDinding} x ${lebarDinding} m, tinggi ${tinggiDinding} m\n- Luas Dinding Efektif: ${luasDindingBersih} m² (${jumlahLapisan} lapis)\n- Estimasi Kebutuhan: *${literDibutuhkan} Liter* (${pail20L > 0 ? `${pail20L} Pail 20L + ` : ''}${galon2_5L} Galon 2.5L)\n\nApakah tersedia warna katalog Dulux / Indaco tinting dan berapa estimasi harganya? Terima kasih!`;
    }
    return `https://wa.me/${STORE_INFO.phoneClean}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 shadow-xs">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Kalkulator Kebutuhan Material</h3>
              <p className="text-xs text-slate-300">SUPERMARKET BAHAN BANGUNAN MULUR 1 • Estimasi Cepat & Akurat</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-slate-200 bg-slate-50 p-2 gap-2">
          <button
            onClick={() => setActiveTab('keramik')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'keramik'
                ? 'bg-red-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Hitung Granit & Keramik</span>
          </button>

          <button
            onClick={() => setActiveTab('cat')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'cat'
                ? 'bg-red-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Paintbrush className="w-4 h-4" />
            <span>Hitung Cat Tembok</span>
          </button>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {activeTab === 'keramik' ? (
            <div className="space-y-5">
              {/* Form Input Keramik */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Panjang Ruangan (Meter)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    value={panjangRuang}
                    onChange={(e) => setPanjangRuang(parseFloat(e.target.value) || 0)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Lebar Ruangan (Meter)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    value={lebarRuang}
                    onChange={(e) => setLebarRuang(parseFloat(e.target.value) || 0)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Ukuran Ubin / Granit
                  </label>
                  <select
                    value={ukuranTile}
                    onChange={(e) => setUkuranTile(e.target.value as any)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none bg-white"
                  >
                    <option value="60x60">60 x 60 cm (1.44 m²/dus)</option>
                    <option value="50x50">50 x 50 cm (1.00 m²/dus)</option>
                    <option value="40x40">40 x 40 cm (0.96 m²/dus)</option>
                    <option value="30x30">30 x 30 cm (0.99 m²/dus)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Cadangan Potongan Pinggir (%)
                  </label>
                  <select
                    value={safetyMargin}
                    onChange={(e) => setSafetyMargin(parseInt(e.target.value))}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none bg-white"
                  >
                    <option value={5}>5% (Ruangan lurus persegi sederhana)</option>
                    <option value={10}>10% (Rekomendasi standar kontraktor)</option>
                    <option value={15}>15% (Pemasangan diagonal / banyak pilar sudut)</option>
                  </select>
                </div>
              </div>

              {/* Hasil Kalkulasi Keramik */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-2">
                  Hasil Estimasi Kebutuhan
                </h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                    <p className="text-[11px] text-slate-500">Luas Bersih</p>
                    <p className="text-base sm:text-lg font-bold text-slate-900">{luasDasarKeramik.toFixed(1)} m²</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                    <p className="text-[11px] text-slate-500">+ Cadangan {safetyMargin}%</p>
                    <p className="text-base sm:text-lg font-bold text-slate-900">{luasDenganCadangan.toFixed(1)} m²</p>
                  </div>
                  <div className="bg-red-600 text-white p-3 rounded-xl shadow-xs flex flex-col justify-center">
                    <p className="text-[11px] text-white/90 font-semibold">Total Dibutuhkan</p>
                    <p className="text-lg sm:text-xl font-extrabold">{dusDibutuhkan} Dus</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Form Input Cat */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Panjang Kamar (m)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    value={panjangDinding}
                    onChange={(e) => setPanjangDinding(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Lebar Kamar (m)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    value={lebarDinding}
                    onChange={(e) => setLebarDinding(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tinggi Plafon (m)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    value={tinggiDinding}
                    onChange={(e) => setTinggiDinding(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Jumlah Pintu & Jendela
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={jumlahPintuJendela}
                    onChange={(e) => setJumlahPintuJendela(parseInt(e.target.value) || 0)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-red-500"
                  />
                  <p className="text-[10px] text-slate-500 mt-1">Mengurangi luas cat sebesar 2 m² / bukaan</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Jumlah Lapisan Cat
                  </label>
                  <select
                    value={jumlahLapisan}
                    onChange={(e) => setJumlahLapisan(parseInt(e.target.value))}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-red-500 bg-white"
                  >
                    <option value={2}>2 Lapisan (Standar cat baru/cat ulang)</option>
                    <option value={3}>3 Lapisan (Tembok baru / warna kontras)</option>
                  </select>
                </div>
              </div>

              {/* Hasil Kalkulasi Cat */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-2">
                  Hasil Estimasi Cat Tembok
                </h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                    <p className="text-[11px] text-slate-500">Luas Dinding Netto</p>
                    <p className="text-base sm:text-lg font-bold text-slate-900">{luasDindingBersih.toFixed(1)} m²</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                    <p className="text-[11px] text-slate-500">Kebutuhan Cat</p>
                    <p className="text-base sm:text-lg font-bold text-slate-900">± {literDibutuhkan} Liter</p>
                  </div>
                  <div className="bg-red-600 text-white p-3 rounded-xl shadow-xs flex flex-col justify-center">
                    <p className="text-[11px] text-white/90 font-semibold">Estimasi Kemasan</p>
                    <p className="text-xs sm:text-sm font-extrabold leading-tight">
                      {pail20L > 0 && `${pail20L} Pail (20L) + `}
                      {galon2_5L} Galon (2.5L)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p>
              Hasil perhitungan bersifat estimasi teoritis standar. Tim konsultan Supermarket Bahan Bangunan Mulur 1 siap membantu memastikan volume akurat sesuai kondisi fisik di lapangan.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Tutup
          </button>

          <a
            href={generateWaQuote()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-red-600 hover:bg-red-700 shadow-xs transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Kirim Hasil Hitungan ke WhatsApp CS</span>
          </a>
        </div>

      </div>
    </div>
  );
};
