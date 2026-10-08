import { BrandItem, ProductItem, ProjectItem, TestimonialItem, FaqItem } from '../types';

export const STORE_INFO = {
  name: 'MULUR 1',
  fullName: 'SUPERMARKET BAHAN BANGUNAN MULUR 1',
  tagline: 'SUPERMARKET BAHAN BANGUNAN TERLENGKAP SEKABUPATEN JOMBANG',
  subtitle: 'One Stop Solution Shopping Kebutuhan Bangunan & Renovasi Rumah Anda',
  address: 'Jl. Gus Dur No. 66, Kabupaten Jombang, Jawa Timur 61413',
  gmapsUrl: 'https://maps.google.com/?q=Jl.+Gus+Dur+No.66+Jombang+Jawa+Timur',
  gmapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.197904838612!2d122.2270!3d-7.5540!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e783ff55848569b%3A0x6b8f3ffc8bc1!2sJl.%20KH.%20Abdurrahman%20Wahid%20(Gus%20Dur)%2C%20Jombang%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
  phone: '0821-4333-8988',
  phoneClean: '6282143338988',
  email: 'cs@mulur1jombang.com',
  operatingHours: {
    weekday: 'Senin - Sabtu: 07.30 - 17.00 WIB',
    sunday: 'Minggu: 07.30 - 15.00 WIB',
    status: 'Buka Setiap Hari'
  },
  deliveryPartners: [
    {
      name: 'Armada Toko Mulur 1',
      type: 'Pengiriman Pribadi',
      desc: 'Armada Truk & Pick-Up Toko Mulur 1 siap antar pesanan langsung ke lokasi proyek / rumah di seluruh pelosok Kabupaten Jombang dengan aman & cepat.',
      badge: 'Prioritas & Cepat',
      highlight: true
    },
    {
      name: 'JNE Express',
      type: 'Ekspedisi Nasional',
      desc: 'Layanan kirim aksesoris pintu, kunci digital, kran sanitary, mata bor, dan perkakas ringan dengan resi terpercaya.',
      badge: 'Paket Ringan & Cepat',
      highlight: false
    },
    {
      name: 'Indah Logistik Cargo',
      type: 'Kargo Berat & Besar',
      desc: 'Pengiriman muatan bervolume besar, palet keramik, sanitaryware, atau pengiriman ke luar wilayah Jombang dengan tarif hemat.',
      badge: 'Muatan Volume Besar',
      highlight: false
    }
  ],
  stats: [
    { value: '15.000+', label: 'Item Produk Terlengkap', detail: 'Dari struktur hingga dekorasi' },
    { value: '20+', label: 'Brand Mitra Resmi', detail: 'Principal langsung bergaransi' },
    { value: '21', label: 'Kecamatan Terjangkau', detail: 'Armada pribadi se-Kab. Jombang' },
    { value: '10.000+', label: 'Konsumen & Proyek', detail: 'Rumah tinggal, ruko, instansi' }
  ]
};

export const BRANDS: BrandItem[] = [
  {
    id: 'dulux',
    name: 'Dulux',
    category: 'cat',
    tagline: "Let's Colour & Mesin Tinting Digital",
    logoBg: '#0F2C59',
    textColor: '#FFFFFF',
    accentColor: '#0085FF',
    description: 'Cat dinding premium berteknologi tinggi dengan ribuan pilihan warna akurat melalui mesin tinting digital resmi Mulur 1.',
    badge: 'Mesin Tinting Resmi',
    popularProducts: ['Dulux Weathershield Powerflexx', 'Dulux Catylac Interior', 'Dulux EasyClean']
  },
  {
    id: 'indaco',
    name: 'Indaco Paints',
    category: 'cat',
    tagline: 'Now For Tomorrow & Ramah Lingkungan',
    logoBg: '#1B5E20',
    textColor: '#FFFFFF',
    accentColor: '#4CAF50',
    description: 'Pelopor cat ramah lingkungan dengan daya tutup prima, tahan cuaca tropis, dan formula anti-lumut.',
    badge: 'Principal Partner',
    popularProducts: ['Belazo Maxima', 'Envi Cat Tembok', 'Envi Anti Karat']
  },
  {
    id: 'envi',
    name: 'Envi',
    category: 'cat',
    tagline: 'Cat Ramah Lingkungan Berkualitas',
    logoBg: '#FBC02D',
    textColor: '#1A1A1A',
    accentColor: '#F57F17',
    description: 'Pilihan cat dinding, kayu, dan besi dengan formula bebas merkuri, aroma lembut, serta warna cerah tahan lama.',
    badge: 'Eco Friendly',
    popularProducts: ['Envi Cat Tembok Eksterior', 'Envi Cat Kayu & Besi', 'Envi Plamur']
  },
  {
    id: 'belazo',
    name: 'Belazo',
    category: 'cat',
    tagline: 'Live Your Style',
    logoBg: '#7B1FA2',
    textColor: '#FFFFFF',
    accentColor: '#AB47BC',
    description: 'Cat dekoratif premium dengan hasil akhir mewah, washable, serta perlindungan maksimal untuk hunian elegan.',
    badge: 'Premium Finish',
    popularProducts: ['Belazo Matt Interior', 'Belazo Roof Paint', 'Belazo Woodstain']
  },
  {
    id: 'infiniti',
    name: 'Infiniti Granite Tile',
    category: 'keramik',
    tagline: 'Luxury Porcelain & Granite Slabs',
    logoBg: '#1A237E',
    textColor: '#FFFFFF',
    accentColor: '#3949AB',
    description: 'Granit homogen premium dengan motif marmer alam, kilap glazur sempurna, dan kekuatan tekan ekstra tinggi.',
    badge: 'Best Seller Granit',
    popularProducts: ['Infiniti 60x60 Glazed Polished', 'Infiniti 60x120 Calacatta', 'Infiniti Matte Surface']
  },
  {
    id: 'platinum',
    name: 'Platinum Ceramics',
    category: 'keramik',
    tagline: 'Perfecto White Body Ceramics',
    logoBg: '#212121',
    textColor: '#FFFFFF',
    accentColor: '#E53935',
    description: 'Pilihan keramik lantai dan dinding terkemuka Indonesia dengan presisi ukuran tinggi dan corak variatif.',
    badge: 'Top Brand',
    popularProducts: ['Platinum 50x50 Marble Look', 'Platinum White Body 60x60', 'Platinum Wall Tiles']
  },
  {
    id: 'eleganza',
    name: 'Eleganza Tile',
    category: 'keramik',
    tagline: 'USA Quality Tile & Italian Design',
    logoBg: '#37474F',
    textColor: '#FFFFFF',
    accentColor: '#78909C',
    description: 'Koleksi keramik dan granit berstandar mutu internasional dengan sentuhan desain Italia yang modern.',
    badge: 'Italian Inspired',
    popularProducts: ['Eleganza Luxury 60x120', 'Eleganza Rustic Matte', 'Eleganza Subway Tiles']
  },
  {
    id: 'unikey',
    name: 'UniKey',
    category: 'hardware',
    tagline: 'Designing for Safety',
    logoBg: '#D32F2F',
    textColor: '#FFFFFF',
    accentColor: '#FFCDD2',
    description: 'Kunci pintu mekanik dan digital, handle set stainless SUS-304, serta engsel berstandar keamanan maksimal.',
    badge: 'Safety First',
    popularProducts: ['UniKey Mortise Lock SUS-304', 'UniKey Handle Lever Modern', 'UniKey Gembok Heavy Duty']
  },
  {
    id: 'evomab',
    name: 'Evomab',
    category: 'hardware',
    tagline: 'Door Lock & Smart Home Equipment',
    logoBg: '#0D47A1',
    textColor: '#FFFFFF',
    accentColor: '#42A5F5',
    description: 'Solusi kunci pintar (smart door lock biometric), aksesoris pintu kaca, sliding door, dan perlengkapan jendela.',
    badge: 'Smart Living',
    popularProducts: ['Evomab Smart Digital Door Lock', 'Evomab Pull Handle Marmer', 'Evomab Door Closer']
  },
  {
    id: 'wasser',
    name: 'Wasser',
    category: 'sanitary',
    tagline: 'Water. Comfort. Solutions.',
    logoBg: '#00695C',
    textColor: '#FFFFFF',
    accentColor: '#26A69A',
    description: 'Solusi sanitari lengkap, kran air kuningan tebal anti bocor, shower set elegan, dan pompa booster air.',
    badge: 'Anti Bocor',
    popularProducts: ['Wasser Faucet Kuningan', 'Wasser Rain Shower Set', 'Wasser Pompa Booster']
  },
  {
    id: 'roca',
    name: 'Roca',
    category: 'sanitary',
    tagline: 'European Luxury Bathroom Experience',
    logoBg: '#1E293B',
    textColor: '#FFFFFF',
    accentColor: '#38BDF8',
    description: 'Brand sanitary global asal Spanyol yang menghadirkan kloset duduk hemat air, wastafel keramik, dan bathtub elegan.',
    badge: 'Global Luxury',
    popularProducts: ['Roca One Piece Toilet', 'Roca Art Basin', 'Roca Wall Hung Sanitary']
  },
  {
    id: 'viessmann',
    name: 'Viessmann',
    category: 'sanitary',
    tagline: 'Water Heater & Water Purifier Jerman',
    logoBg: '#D84315',
    textColor: '#FFFFFF',
    accentColor: '#FF8A65',
    description: 'Teknologi pemanas air listrik & gas berstandar Jerman dengan efisiensi energi tinggi dan sistem proteksi berlapis.',
    badge: 'German Engineering',
    popularProducts: ['Viessmann Electric Storage Heater', 'Viessmann Instant Gas Heater', 'Viessmann Water Purifier']
  },
  {
    id: 'artugo',
    name: 'Artugo',
    category: 'sanitary',
    tagline: 'Kitchen Sink & Built-in Appliances',
    logoBg: '#18181B',
    textColor: '#FFFFFF',
    accentColor: '#F59E0B',
    description: 'Wastafel cuci piring (kitchen sink) berbahan stainless tebal nano-coating, kran fleksibel, dan perlengkapan dapur.',
    badge: 'Modern Kitchen',
    popularProducts: ['Artugo Nano Black Sink 1 & 2 Bowl', 'Artugo Pull Out Kitchen Faucet', 'Artugo Cooker Hood']
  },
  {
    id: 'am',
    name: 'AM Mortar',
    category: 'semen',
    tagline: 'Perekat Keramik & Waterproofing Terpercaya',
    logoBg: '#FBC02D',
    textColor: '#000000',
    accentColor: '#E65100',
    description: 'Semen instan perekat granit AM 40/42, pengisi nat tahan lumut AM 50/53, dan pelapis kedap air AM 100.',
    badge: 'Kualitas Nomor 1',
    popularProducts: ['AM 42 Perekat Granit', 'AM 53 Pengisi Nat Keramik', 'AM 100 Waterproofing Pelapis']
  },
  {
    id: 'meval',
    name: 'Meval',
    category: 'tools',
    tagline: 'Lighting & Electrical Products',
    logoBg: '#000000',
    textColor: '#FFFFFF',
    accentColor: '#FFD600',
    description: 'Lampu LED hemat energi, downlight plafon, lampu sorot proyek, serta peralatan instalasi listrik bersertifikat SNI.',
    badge: 'Garansi Resmi',
    popularProducts: ['Meval LED Bulb Extra Terang', 'Meval Slim Downlight Plafon', 'Meval Floodlight IP65']
  },
  {
    id: 'trilliun',
    name: 'Trilliun',
    category: 'plumbing',
    tagline: 'Pipa PVC & Fitting Berkualitas SNI',
    logoBg: '#1565C0',
    textColor: '#FFFFFF',
    accentColor: '#64B5F6',
    description: 'Pipa saluran air bersih dan pembuangan, talang air lengkung, dan sambungan pipa fitting berstandar kuat anti getas.',
    badge: 'Kuat & Tebal',
    popularProducts: ['Pipa PVC Trilliun Pure SNI', 'Talang PVC Trilliun', 'Fitting Pipa AW / D']
  },
  {
    id: 'bosch',
    name: 'Bosch',
    category: 'tools',
    tagline: 'Heavy Duty Professional Power Tools',
    logoBg: '#0A3161',
    textColor: '#FFFFFF',
    accentColor: '#E10600',
    description: 'Mesin bor impact, gerinda tangan, rotary hammer, dan meteran laser berpresisi tinggi untuk tukang dan kontraktor.',
    badge: 'Professional Tools',
    popularProducts: ['Bosch Gerinda GWS 060', 'Bosch Impact Drill GSB 550', 'Bosch Rotary Hammer GBH']
  },
  {
    id: 'makita',
    name: 'Makita',
    category: 'tools',
    tagline: 'Brand New Genuine Product Tools',
    logoBg: '#007B88',
    textColor: '#FFFFFF',
    accentColor: '#00B4D8',
    description: 'Peralatan pertukangan legendaris dari Jepang dengan motor bertenaga tangguh untuk pengerjaan konstruksi berat.',
    badge: 'Jepang Asli 100%',
    popularProducts: ['Makita Circular Saw 5800NB', 'Makita Cordless Drill Driver', 'Makita Mesin Ketam Pasah']
  },
  {
    id: 'shimizu',
    name: 'Shimizu',
    category: 'plumbing',
    tagline: 'Bintangnya Pompa Air Indonesia',
    logoBg: '#C62828',
    textColor: '#FFFFFF',
    accentColor: '#FFEB3B',
    description: 'Pompa air sumur dangkal, semi-jet, hingga jet pump sumur dalam dengan gulungan tembaga murni 100% dan garansi motor 3 tahun.',
    badge: 'Garansi 3 Tahun',
    popularProducts: ['Shimizu PS-128 BIT', 'Shimizu Semi Jet 108 BIT', 'Shimizu Jet Pump PC-260 BIT']
  },
  {
    id: 'rinnai',
    name: 'Rinnai',
    category: 'sanitary',
    tagline: 'Kompor Gas & Water Heater Unggulan',
    logoBg: '#B71C1C',
    textColor: '#FFFFFF',
    accentColor: '#FFFFFF',
    description: 'Peralatan memasak dan water heater dengan teknologi pembakaran api tornado efisien serta bodi stainless anti karat.',
    badge: 'Standard Jepang',
    popularProducts: ['Rinnai Kompor Gas 2 Tungku Stainless', 'Rinnai Kompor Tanam Kaca', 'Rinnai Water Heater Gas']
  }
];

export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: 'p1',
    name: 'Granit Infiniti Calacatta Gold 60x60 cm (Glazed Polished)',
    brand: 'Infiniti Granite Tile',
    category: 'Granit & Keramik Lantai',
    categorySlug: 'keramik',
    image: '/src/assets/images/cat.jpg',
    specs: ['Ukuran: 60 x 60 cm', 'Isi per dus: 4 keping (1.44 m²)', 'Finishing: High Glazed Mirror Finish', 'Tahan gores & noda kopi/minyak'],
    unit: 'Dus',
    isPopular: true,
    isBestSeller: true,
    description: 'Granit homogen kilap mewah motif marmer Carrara Italia dengan serat emas halus. Cocok untuk ruang tamu, lobi, dan ruang keluarga idaman.'
  },
  {
    id: 'p2',
    name: 'Cat Oplos Mesin Dulux Weathershield Powerflexx (Tinting Digital)',
    brand: 'Dulux',
    category: 'Cat Eksterior & Tinting',
    categorySlug: 'cat',
    image: '/src/assets/images/granit.jpg',
    specs: ['Teknologi Stay Clean & Elastomeric', 'Tersedia ribuan kode warna di mesin oplos', 'Tahan cuaca ekstrem hingga 8 tahun', 'Anti retak rambut & anti lumut'],
    unit: 'Galon 2.5 L & Pail 20 L',
    isPopular: true,
    isTinting: true,
    description: 'Cat eksterior premium pelindung dinding luar rumah. Dapat di-oplos langsung di Toko Mulur 1 dengan mesin tinting digital berakurasi komputer.'
  },
  {
    id: 'p3',
    name: 'Evomab Smart Biometric Door Lock E-Series (WiFi & Fingerprint)',
    brand: 'Evomab',
    category: 'Kunci Pintu & Smart Home',
    categorySlug: 'kunci',
    image: '/src/assets/images/pengiriman.jpg',
    specs: ['5 Akses: Sidik Jari, PIN, Kartu RFID, App WiFi, Kunci Fisik', 'Bahan Zinc Alloy anti karat', 'Alarm anti bobol & auto lock', 'Baterai tahan 8-12 bulan'],
    unit: 'Set Lengkap',
    isPopular: true,
    description: 'Keamanan rumah modern masa kini. Buka pintu cukup dengan sentuhan sidik jari atau kontrol jarak jauh lewat smartphone Anda.'
  },
  {
    id: 'p4',
    name: 'Wasser Rain Shower Column System Stainless SUS-304',
    brand: 'Wasser',
    category: 'Sanitaryware & Shower',
    categorySlug: 'sanitary',
    image: '/src/assets/images/cat.jpg',
    specs: ['Tiang kolom shower stainless SUS-304', 'Head shower lebar diameter 22 cm', 'Hand shower 3 mode semprotan lembut', 'Mixer air panas & dingin presisi'],
    unit: 'Set Kolom',
    isPopular: true,
    description: 'Sensasi mandi air hangat bak hotel bintang lima. Dibuat dari material kuningan dan stainless tebal bergaransi kebocoran.'
  },
  {
    id: 'p5',
    name: 'Bosch Mesin Gerinda Tangan GWS 060 Professional (4 Inch)',
    brand: 'Bosch',
    category: 'Power Tools & Mesin',
    categorySlug: 'tools',
    image: '/src/assets/images/granit.jpg',
    specs: ['Daya Listrik: 670 Watt', 'Kecepatan tanpa beban: 12.000 rpm', 'Diameter batu gerinda: 100 mm (4")', 'Desain ergonomis & ventilasi pendingin optimal'],
    unit: 'Unit Box',
    isPopular: true,
    isBestSeller: true,
    description: 'Gerinda tangan paling tangguh dan awet untuk memotong besi, keramik, menghaluskan las, serta pengerjaan pertukangan proyek.'
  },
  {
    id: 'p6',
    name: 'Semen AM 42 Perekat Ubin Granit Tile Homogen 25 Kg',
    brand: 'AM Mortar',
    category: 'Semen & Mortar Instan',
    categorySlug: 'semen',
    image: '/src/assets/images/cat.jpg',
    specs: ['Kemasan: Sak 25 Kg', 'Daya Rekat Ekstra Kuat untuk Granit', 'Mencegah ubin meledak (popping)', 'Praktis cukup dicampur air bersih'],
    unit: 'Sak 25 Kg',
    isPopular: false,
    description: 'Perekat ubin berbahan dasar semen dengan aditif polimer khusus. Dirancang spesial untuk pemasangan homogeneous tile & batu alam.'
  },
  {
    id: 'p7',
    name: 'Pompa Air Otomatis Shimizu PS-128 BIT Gulungan Tembaga Murni',
    brand: 'Shimizu',
    category: 'Pompa Air & Plumbing',
    categorySlug: 'pompa',
    image: '/src/assets/images/pengiriman.jpg',
    specs: ['Daya Output: 125 Watt', 'Daya Hisap Maksimal: 9 Meter', 'Total Head: 33 Meter', 'Thermal Protector & Saklar Otomatis Presisi'],
    unit: 'Unit',
    isPopular: true,
    description: 'Pompa air sumur dangkal otomatis terfavorit di Jombang. Suara halus, debit air deras, dan garansi resmi motor 3 tahun.'
  },
  {
    id: 'p8',
    name: 'Viessmann Pemanas Air Listrik Vitowell Comfort 15L & 30L',
    brand: 'Viessmann',
    category: 'Water Heater & Purifier',
    categorySlug: 'sanitary',
    image: '/src/assets/images/cat.jpg',
    specs: ['Teknologi Ceratech anti karat tanki', 'Sistem pengaman ELCB proteksi kebocoran listrik', 'Insulasi PU busa rapat tahan panas lebih lama', 'Hemat listrik & temperatur dapat diatur'],
    unit: 'Unit Lengkap',
    isPopular: false,
    description: 'Pemanas air standar teknologi rekayasa Jerman untuk kenikmatan mandi air hangat yang aman bagi seluruh anggota keluarga.'
  },
  {
    id: 'p9',
    name: 'Pipa PVC Trilliun Pure SNI AW & D Series (Panjang 4 Meter)',
    brand: 'Trilliun',
    category: 'Pipa & Plumbing',
    categorySlug: 'pipa',
    image: '/src/assets/images/cat.jpg',
    specs: ['Standar Mutu SNI & Bebas Timbal (Lead Free)', 'Tersedia ukuran 1/2" hingga 8"', 'Dinding pipa ulet tebal tidak mudah pecah', 'Higienis untuk air minum keluarga'],
    unit: 'Batang 4M',
    isPopular: false,
    description: 'Pipa PVC kualitas unggul ramah lingkungan untuk instalasi air bersih bertekanan tinggi maupun saluran air buangan limbah rumah tangga.'
  },
  {
    id: 'p10',
    name: 'Cat Ramah Lingkungan Envi Cat Tembok Interior & Eksterior',
    brand: 'Envi',
    category: 'Cat & Pelapis',
    categorySlug: 'cat',
    image: '/src/assets/images/granit.jpg',
    specs: ['Tanpa tambahan timbal & merkuri', 'Daya sebar luas hingga 10-12 m²/kg', 'Cepat kering & tidak berbau menyengat', 'Banyak pilihan warna cerah'],
    unit: 'Kaleng 5 Kg & Pail 25 Kg',
    isPopular: true,
    description: 'Pilihan bijak untuk hunian keluarga sehat. Menghadirkan warna segar dengan harga yang ramah di kantong.'
  },
  {
    id: 'p11',
    name: 'Keramik Platinum Perfecto 50x50 cm Marmer Series',
    brand: 'Platinum',
    category: 'Granit & Keramik Lantai',
    categorySlug: 'keramik',
    image: '/src/assets/images/cat.jpg',
    specs: ['Ukuran: 50 x 50 cm', 'Isi per dus: 4 keping (1.0 m²)', 'Glasur glossy halus tahan noda', 'Cocok untuk lantai kamar, teras & ruang tamu'],
    unit: 'Dus',
    isPopular: true,
    isBestSeller: true,
    description: 'Keramik bodi putih kuat bermotif marmer alami yang memberikan kesan ruangan bersih, luas, dan menawan.'
  },
  {
    id: 'p12',
    name: 'Handle Pintu Set UniKey SUS-304 Modern Minimalis',
    brand: 'UniKey',
    category: 'Kunci & Hardware',
    categorySlug: 'kunci',
    image: '/src/assets/images/pengiriman.jpg',
    specs: ['Plat & Tuas Stainless Steel SUS-304 murni', 'Body kunci (Mortise lock) silinder kuningan anti karat', 'Desain minimalis modern', 'Garansi mekanik 5 tahun'],
    unit: 'Set Box',
    isPopular: false,
    description: 'Perlindungan utama pintu depan rumah Anda. Teruji tahan karat di segala cuaca dengan putaran mekanis yang halus.'
  }
];

export const SUPPLIED_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Perumahan Griya Indah Asri Jombang',
    category: 'Perumahan',
    location: 'Kecamatan Diwek, Jombang',
    materials: ['Granit Infiniti 60x60', 'Semen AM 42', 'Cat Dulux Weathershield', 'Sanitary Wasser'],
    image: '/src/assets/images/cat.jpg',
    description: 'Penyediaan material struktur dan finishing untuk 120 unit rumah tapak tipe 45 dan 60 di kawasan Diwek Jombang.',
    year: '2024 - 2025'
  },
  {
    id: 'proj-2',
    title: 'Kawasan Ruko Modern Sentra Gus Dur',
    category: 'Ruko & Komersial',
    location: 'Jl. Gus Dur, Jombang Kota',
    materials: ['Kaca & Smart Lock Evomab', 'Keramik Platinum 60x60', 'Pipa Trilliun SNI', 'Cat Envi Eksterior'],
    image: '/src/assets/images/pengiriman.jpg',
    description: 'Suplai berkala material ruko bisnis 3 lantai di pusat koridor protokol kota Jombang dengan armada kirim tepat waktu.',
    year: '2024'
  },
  {
    id: 'proj-3',
    title: 'Renovasi Gedung Asrama & Aula Pesantren Terkemuka',
    category: 'Fasilitas Ibadah',
    location: 'Kecamatan Peterongan, Jombang',
    materials: ['Granit Eleganza', 'Kran & Wudhu Station Wasser', 'Lampu Meval LED', 'AM Mortar Nat AM 53'],
    image: '/src/assets/images/cat.jpg',
    description: 'Pengadaan sanitari tempat wudhu higienis dan lantai granit aula serbaguna pondok pesantren dengan diskon khusus mitra yayasan.',
    year: '2023 - 2024'
  },
  {
    id: 'proj-4',
    title: 'Hunian Villa Tropis Modern Mojowarno',
    category: 'Hunian Pribadi',
    location: 'Kecamatan Mojowarno, Jombang',
    materials: ['Water Heater Viessmann', 'Sanitary Roca Premium', 'Cat Oplos Dulux Tinting', 'UniKey SUS-304'],
    image: '/src/assets/images/granit.jpg',
    description: 'Penyediaan interior kelas atas mencakup sanitaryware Eropa dan water heater Jerman untuk villa pribadi seluas 450 m².',
    year: '2025'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Bpk. Bambang Sudiro, S.T.',
    role: 'Kontraktor & Pimpinan Proyek',
    companyOrArea: 'CV Bangun Mandiri Perkasa (Jombang)',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Sebagai kontraktor yang sering menangani proyek perumahan di Jombang, Mulur 1 adalah rekanan terbaik kami. Barangnya lengkap sekali dari semen sampai smart lock. Pengiriman armada truknya selalu tepat waktu langsung turun di lapangan tanpa repot.',
    projectSupplied: 'Proyek Perumahan 45 Unit di Diwek',
    verifiedBadge: 'Kontraktor Terverifikasi'
  },
  {
    id: 'testi-2',
    name: 'Ibu Hj. Siti Rahmawati',
    role: 'Pemilik Rumah Tinggal',
    companyOrArea: 'Kepanjen, Jombang Kota',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Belanja di Supermarket Bahan Bangunan Mulur 1 nyaman sekali, tempatnya bersih dan pelayanannya sangat ramah. Saya konsultasi warna cat ruang tamu dibantu oplos pakai mesin tinting Dulux, warnanya pas persis seperti contoh brosur. Terima kasih Mulur 1!',
    projectSupplied: 'Renovasi Rumah Tinggal 2 Lantai',
    verifiedBadge: 'Konsumen Retail'
  },
  {
    id: 'testi-3',
    name: 'Pak Slamet Riyadi',
    role: 'Mandor & Kepala Tukang Berpengalaman',
    companyOrArea: 'Perak, Jombang',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Power tools Bosch sama Makita di Mulur 1 asli 100% ada kartu garansi resminya. Pipa Trilliun dan semen AM Mortar selalu fresh dari pabrik. Kalau barang mendesak kurang di proyek, tinggal chat WA CS 0821-4333-8988, langsung dikirim pick up armada.',
    projectSupplied: 'Pembangunan Ruko 3 Pintu',
    verifiedBadge: 'Mandor Langganan'
  },
  {
    id: 'testi-4',
    name: 'Ir. Dedy Pratama, IAI',
    role: 'Arsitek & Desainer Interior',
    companyOrArea: 'Studio Rancang Jombang & Surabaya',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Pilihan granit Infiniti dan keramik Platinum di Mulur 1 sangat up-to-date dengan tren arsitektur terkini. Sanitari Roca dan Viessmann juga tersedia ready stock di Jombang tanpa harus inden jauh-jauh ke Surabaya.',
    projectSupplied: 'Desain Hunian Mewah & Kafe',
    verifiedBadge: 'Arsitek Profesional'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'pemesanan',
    question: 'Bagaimana cara pemesanan bahan bangunan secara online di Mulur 1?',
    answer: 'Pemesanan sangat mudah! Anda cukup menghubungi Customer Service kami via WhatsApp di nomor 0821-4333-8988. Kirimkan daftar barang atau foto kebutuhan yang dicari. Tim kami akan mengecek stok, menghitungkan estimasi harga/RAB, dan memproses invoice serta jadwal pengirimannya.'
  },
  {
    id: 'faq-2',
    category: 'pengiriman',
    question: 'Bagaimana sistem pengiriman barang belanjaan saya ke lokasi?',
    answer: 'Kami menyediakan 3 opsi pengiriman utama: (1) Armada Pengiriman Pribadi Supermarket Mulur 1 (Truk & Mobil Pick-up) melayani langsung ke depan rumah atau lokasi proyek di seluruh wilayah Kabupaten Jombang dan sekitarnya; (2) JNE Express untuk paket perlengkapan ringan, kunci, dan aksesoris; (3) Indah Logistik Cargo untuk pengiriman pesanan partai besar ke luar kota.'
  },
  {
    id: 'faq-3',
    category: 'produk',
    question: 'Apakah tersedia layanan Mesin Tinting / Oplos Cat Digital?',
    answer: 'Ya, Supermarket Bahan Bangunan Mulur 1 memiliki mesin tinting digital resmi terkomputerisasi untuk brand Dulux dan Indaco Paints. Anda bisa memilih ribuan variasi warna interior maupun eksterior dengan tingkat akurasi warna 100% sesuai katalog resmi dalam waktu hanya beberapa menit saja.'
  },
  {
    id: 'faq-4',
    category: 'produk',
    question: 'Apakah semua produk yang dijual di Mulur 1 dijamin original dan bergaransi?',
    answer: '100% Dijamin Original. Mulur 1 adalah distributor dan supermarket rekanan resmi dari brand-brand ternama seperti Bosch, Makita, Dulux, Indaco, Wasser, Roca, Viessmann, Infiniti, Platinum, Evomab, UniKey, AM Mortar, Shimizu, dan Rinnai. Setiap pembelian power tools, water heater, dan pompa dilengkapi kartu garansi resmi pabrikan.'
  },
  {
    id: 'faq-5',
    category: 'pemesanan',
    question: 'Apakah melayani pembelian untuk kontraktor, proyek borongan, atau kebutuhan instansi?',
    answer: 'Tentu saja! Kami memiliki divisi B2B dan Proyek yang melayani pesanan partai besar dengan skema harga khusus kontraktor, termin pembayaran fleksibel (S&K berlaku), dan prioritas pengiriman armada rutin langsung ke titik proyek.'
  },
  {
    id: 'faq-6',
    category: 'pemesanan',
    question: 'Di mana alamat persis Supermarket Mulur 1 dan apa saja jam operasionalnya?',
    answer: 'Kami berlokasi di jalan protokol paling strategis: Jl. Gus Dur No. 66, Kabupaten Jombang (sangat mudah diakses dengan area parkir luas untuk mobil dan truk pembeli). Buka setiap hari: Senin s/d Sabtu pukul 07.30 - 17.00 WIB, dan Minggu pukul 07.30 - 15.00 WIB.'
  },
  {
    id: 'faq-7',
    category: 'pembayaran',
    question: 'Apa saja metode pembayaran yang diterima?',
    answer: 'Kami menerima pembayaran tunai di kasir toko, transfer antar bank (BCA, Mandiri, BRI, BNI), QRIS instan, kartu debit/kredit, serta invoice resmi untuk instansi atau kontraktor rekanan.'
  }
];

export const GALLERY_ITEMS = [
  {
    title: 'Fasad Supermarket Bahan Bangunan Mulur 1 Jombang',
    category: 'Eksterior & Toko',
    image: '/src/assets/images/web_gambar_depan.png',
    desc: 'Lokasi strategis di Jl. Gus Dur No. 66 Jombang dengan akses mudah, display terbuka, dan parkir luas.'
  },
  {
    id: 'gal-2',
    title: 'Armada Pengiriman Mandiri Toko',
    category: 'Armada Logistik',
    image: '/src/assets/images/cat.jpg',
    desc: 'Armada truk & pick-up siap meluncur mengirim material ke pelosok 21 kecamatan di Kabupaten Jombang.'
  },
  {
    id: 'gal-3',
    title: 'Showroom Granit & Keramik Mewah',
    category: 'Interior & Display',
    image: '/src/assets/images/cat.jpg',
    desc: 'Area pamer ribuan motif granit Infiniti, keramik Platinum, dan display sanitari modern Wasser & Roca.'
  },
  {
    id: 'gal-4',
    title: 'Mesin Tinting Cat Oplos Digital & Tools',
    category: 'Layanan Toko',
    image: '/src/assets/images/granit.jpg',
    desc: 'Fasilitas pencampuran cat digital Dulux & Indaco serta etalase perkakas resmi Bosch & Makita.'
  }
];
