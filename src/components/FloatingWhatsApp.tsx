import React, { useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import { MessageCircle, X, ChevronRight, Sparkles, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    {
      title: 'Tanya Ketersediaan Stok',
      desc: 'Cek stok keramik, semen, cat, atau tools',
      text: 'Halo Admin MULUR 1, saya ingin cek ketersediaan stok barang...'
    },
    {
      title: 'Konsultasi Cat Oplos Tinting',
      desc: 'Pilihan ribuan warna Dulux & Indaco',
      text: 'Halo Admin MULUR 1, saya ingin konsultasi kode warna cat mesin tinting...'
    },
    {
      title: 'Estimasi Pengiriman Proyek',
      desc: 'Kirim armada toko ke alamat Anda di Jombang',
      text: 'Halo Admin MULUR 1, saya ingin tanya estimasi jadwal pengiriman ke lokasi saya...'
    }
  ];

  const handleOpenWa = (customText?: string) => {
    const text = customText || 'Halo Admin MULUR 1 Jombang, saya ingin konsultasi bahan bangunan...';
    window.open(`https://wa.me/${STORE_INFO.phoneClean}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-200 text-slate-900">
          {/* Header */}
          <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white">
                  <MessageCircle className="w-5 h-5 fill-white text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight text-white">CS SUPERMARKET MULUR 1</h4>
                <p className="text-[11px] text-emerald-400 font-medium">Online • Respon Cepat</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-2.5">
            <p className="text-xs text-slate-600 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs leading-relaxed">
              Halo! Selamat datang di <strong className="text-slate-800">Supermarket Bahan Bangunan Mulur 1 Jombang</strong>. Ada yang bisa kami bantu seputar material bangunan Anda hari ini?
            </p>

            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">
                Pilih Bantuan Cepat:
              </p>
              {quickMessages.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOpenWa(item.text)}
                  className="w-full p-2.5 rounded-xl bg-white hover:bg-red-50 border border-slate-200 hover:border-red-200 transition-all text-left flex items-center justify-between group"
                >
                  <div>
                    <p className="text-xs font-bold text-slate-800 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </p>
                    <p className="text-[10px] text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-red-500 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Direct CTA */}
          <div className="p-3 bg-white border-t border-slate-200">
            <button
              onClick={() => handleOpenWa()}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <Send className="w-3.5 h-3.5 fill-white" />
              <span>Buka Chat WhatsApp Sekarang</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 p-3.5 sm:px-4 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-xl shadow-green-600/30 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
        aria-label="Chat WhatsApp CS Mulur 1"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        <MessageCircle className="w-6 h-6 fill-white" />

        <span className="hidden sm:inline-block font-bold text-xs">
          CS Mulur 1
        </span>
      </button>
    </div>
  );
};
