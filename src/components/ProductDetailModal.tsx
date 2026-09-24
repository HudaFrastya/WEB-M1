import React from 'react';
import { ProductItem } from '../types';
import { STORE_INFO } from '../data/storeData';
import { X, MessageCircle, CheckCircle2, ShieldCheck, Truck, Sparkles } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const waProductUrl = `https://wa.me/${STORE_INFO.phoneClean}?text=Halo%20Admin%20MULUR%201%2C%20saya%20tertarik%20dengan%20produk%20*${encodeURIComponent(product.name)}*%20(${encodeURIComponent(product.brand)}).%20Berapa%20harga%20terbaik%20dan%20apakah%20stoknya%20ready%3F`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {product.brand}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-xs text-slate-300 font-medium">
              {product.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start">
            <div className="sm:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="sm:col-span-7 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {product.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center gap-2 pt-1 text-xs">
                <span className="font-semibold text-slate-500">Satuan Jual:</span>
                <span className="font-bold text-slate-800 bg-slate-100 px-2.5 py-0.5 rounded-lg border border-slate-200">
                  {product.unit}
                </span>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              Spesifikasi & Keunggulan Produk:
            </h4>
            <ul className="space-y-1.5">
              {product.specs.map((sp, idx) => (
                <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{sp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guarantee Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% Produk Asli & Bergaransi Pabrik</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <Truck className="w-4 h-4 text-red-600 shrink-0" />
              <span>Bisa Dikirim Armada Supermarket Mulur 1</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Kembali
          </button>

          <a
            href={waProductUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-red-600 hover:bg-red-700 transition-all shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Pesan / Cek Harga Spesial via WA</span>
          </a>
        </div>

      </div>
    </div>
  );
};
