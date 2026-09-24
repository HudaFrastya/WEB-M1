export interface BrandItem {
  id: string;
  name: string;
  category: 'cat' | 'keramik' | 'sanitary' | 'hardware' | 'tools' | 'semen' | 'plumbing';
  tagline: string;
  logoBg: string;
  textColor: string;
  accentColor: string;
  description: string;
  badge?: string;
  popularProducts: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  categorySlug: 'keramik' | 'cat' | 'kunci' | 'sanitary' | 'tools' | 'pompa' | 'semen' | 'pipa' | 'atap';
  image: string;
  specs: string[];
  unit: string;
  priceNote?: string;
  isPopular?: boolean;
  isBestSeller?: boolean;
  isTinting?: boolean;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Perumahan' | 'Ruko & Komersial' | 'Fasilitas Ibadah' | 'Pendidikan' | 'Hunian Pribadi';
  location: string;
  materials: string[];
  image: string;
  description: string;
  year: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  companyOrArea: string;
  avatar: string;
  rating: number;
  text: string;
  projectSupplied: string;
  verifiedBadge?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'pemesanan' | 'pengiriman' | 'produk' | 'pembayaran';
}
