import React, { useState } from 'react';
import { FAQS, STORE_INFO } from '../data/storeData';
import { HelpCircle, ChevronDown, MessageCircle, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Semua Pertanyaan' },
    { id: 'pemesanan', label: 'Pemesanan & Proyek' },
    { id: 'pengiriman', label: 'Pengiriman & Armada' },
    { id: 'produk', label: 'Produk & Mesin Tinting' },
    { id: 'pembayaran', label: 'Pembayaran' },
  ];

  const filteredFaqs = filterCategory === 'all'
    ? FAQS
    : FAQS.filter(f => f.category === filterCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-red-600" />
            <span>TANYA JAWAB UMUM (FAQ)</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
            Pertanyaan Seputar Pemesanan & Layanan{' '}
            <span className="text-red-600">
              SUPERMARKET BAHAN BANGUNAN MULUR 1
            </span>
          </h2>

          <p className="text-slate-600 text-sm md:text-base mt-2">
            Temukan jawaban cepat seputar armada pengiriman toko, mesin tinting cat, pembelian grosir/proyek, dan metode belanja.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
                filterCategory === cat.id
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-slate-200 shadow-xs overflow-hidden transition-all duration-200 hover:border-slate-300"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-red-600 transition-colors"
                >
                  <span className="text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-red-50 text-red-600 rotate-180 border border-red-100' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 rounded-3xl bg-slate-900 text-white p-6 sm:p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Punya Pertanyaan Lain yang Belum Terjawab?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Customer Service kami siap membantu Anda dengan ramah setiap hari dari jam 07.30 - 17.00 WIB.
            </p>
          </div>

          <a
            href={`https://wa.me/${STORE_INFO.phoneClean}?text=Halo%20Admin%20MULUR%201%20Jombang%2C%20saya%20punya%20pertanyaan%20spesifik%20mengenai%20pemesanan%20material...`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center gap-2 shadow-md shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat CS Langsung: {STORE_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
