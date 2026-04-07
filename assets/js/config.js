const CONFIG = {
  brandName: 'Avis Oto Koç',
  tagline: 'Kurumsal Araç Kiralama Deneyimi',
  phone: '905054954124',
  displayPhone: '905054954124',
  whatsappBaseMessage: 'Merhaba, araç kiralama hakkında bilgi almak istiyorum.',
  heroImage: 'assets/hero.png',
  categoryOrder: ['Ekonomik','Orta Segment','Üst Segment','SUV','Premium SUV','Elektrikli','Ticari / VIP'],
  navigationItems: [
    { label: 'Ana Sayfa', href: '#home', icon: 'fas fa-home' },
    { label: 'Filo', href: '#vehicles', icon: 'fas fa-car-side' },
    { label: 'Kurumsal Ayrıcalıklar', href: '#advantages', icon: 'fas fa-shield-alt' },
    { label: 'Rezervasyon', href: '#contact', icon: 'fas fa-phone-alt' }
  ],
  features: [
    { title: 'Tam Kasko Güvencesi', description: 'Filomuzdaki tüm araçlar aktif kasko ve yol güvence süreçleriyle teslim edilir.', icon: 'fas fa-shield-alt', color: 'text-avis-red' },
    { title: 'Kurumsal Teslim Standartı', description: 'Araç iç temizlik, ekspertiz ve teslim kontrol listesiyle profesyonel sunum.', icon: 'fas fa-clipboard-check', color: 'text-avis-red' },
    { title: '7/24 İletişim & Destek', description: 'Rezervasyon öncesi ve sonrası süreçlerde tek hattan hızlı koordinasyon.', icon: 'fas fa-headset', color: 'text-avis-red' },
    { title: 'Sınırsız KM Seçenekleri', description: 'Uzun yol ve şehir dışı kullanımlar için esnek kilometre politikası.', icon: 'fas fa-infinity', color: 'text-avis-red' }
  ],
  stats: [
    { value: '50+', label: 'Aktif Araç' },
    { value: '7/24', label: 'Destek Hattı' },
    { value: 'Kurumsal', label: 'Teslim Standardı' },
    { value: 'Premium', label: 'Filo Sunumu' }
  ],
  vehicles: [
  {
    "id": 1,
    "name": "Volkswagen Polo",
    "category": "Ekonomik",
    "price": "₺1.650",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/vw-polo.webp",
    "alt": "Volkswagen Polo kiralık araç",
    "features": [
      "Apple CarPlay",
      "Geri Görüş Kamerası",
      "Şerit Takip",
      "Hız Sabitleyici"
    ]
  },
  {
    "id": 2,
    "name": "Toyota Yaris",
    "category": "Ekonomik",
    "price": "₺1.690",
    "year": "2024",
    "fuel": "Hibrit",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/toyota-yaris.webp",
    "alt": "Toyota Yaris kiralık araç",
    "features": [
      "Hibrit Sürüş",
      "Geri Park Sensörü",
      "Dokunmatik Ekran",
      "Yakıt Tasarrufu"
    ]
  },
  {
    "id": 3,
    "name": "Skoda Fabia",
    "category": "Ekonomik",
    "price": "₺1.725",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/skoda-fabia.webp",
    "alt": "Skoda Fabia kiralık araç",
    "features": [
      "LED Farlar",
      "Bluetooth",
      "Şehir İçi Konfor",
      "Düşük Tüketim"
    ]
  },
  {
    "id": 4,
    "name": "Ford Fiesta",
    "category": "Ekonomik",
    "price": "₺1.750",
    "year": "2023",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/ford-fiesta.webp",
    "alt": "Ford Fiesta kiralık araç",
    "features": [
      "SYNC Ekran",
      "Park Sensörü",
      "Yokuş Kalkış",
      "Dijital Klima"
    ]
  },
  {
    "id": 5,
    "name": "Renault Clio",
    "category": "Ekonomik",
    "price": "₺1.790",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/renault-clio.webp",
    "alt": "Renault Clio kiralık araç",
    "features": [
      "Multimedya Ekran",
      "Geri Görüş Kamerası",
      "Eco Mod",
      "USB-C Bağlantı"
    ]
  },
  {
    "id": 6,
    "name": "Hyundai i20",
    "category": "Ekonomik",
    "price": "₺1.825",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/hyundai-i20.webp",
    "alt": "Hyundai i20 kiralık araç",
    "features": [
      "Dokunmatik Ekran",
      "Hız Limitleyici",
      "LED Gündüz Farı",
      "Konfor Paketi"
    ]
  },
  {
    "id": 7,
    "name": "Renault Taliant",
    "category": "Ekonomik",
    "price": "₺1.850",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/renault-taliant.webp",
    "alt": "Renault Taliant kiralık araç",
    "features": [
      "Geniş Bagaj",
      "Yakıt Verimliliği",
      "Cruise Control",
      "Park Desteği"
    ]
  },
  {
    "id": 8,
    "name": "Honda City",
    "category": "Ekonomik",
    "price": "₺1.890",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/honda-city.webp",
    "alt": "Honda City kiralık araç",
    "features": [
      "Geniş İç Hacim",
      "Kamera",
      "Anahtarsız Çalıştırma",
      "Klima"
    ]
  },
  {
    "id": 9,
    "name": "Citroen C-Elysee",
    "category": "Ekonomik",
    "price": "₺1.925",
    "year": "2023",
    "fuel": "Dizel",
    "transmission": "Manuel",
    "seats": "5",
    "image": "assets/cars/citroen-celysee.webp",
    "alt": "Citroen C-Elysee kiralık araç",
    "features": [
      "Ekonomik Dizel",
      "Geniş Bagaj",
      "USB/Bluetooth",
      "Klima"
    ]
  },
  {
    "id": 10,
    "name": "Hyundai Accent Blue",
    "category": "Ekonomik",
    "price": "₺1.950",
    "year": "2023",
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/hyundai-accent.webp",
    "alt": "Hyundai Accent Blue kiralık araç",
    "features": [
      "Konforlu Süspansiyon",
      "Düşük Yakıt",
      "Park Sensörü",
      "Bluetooth"
    ]
  },
  {
    "id": 11,
    "name": "Fiat Linea",
    "category": "Ekonomik",
    "price": "₺1.975",
    "year": "2022",
    "fuel": "Dizel",
    "transmission": "Manuel",
    "seats": "5",
    "image": "assets/cars/fiat-linea.webp",
    "alt": "Fiat Linea kiralık araç",
    "features": [
      "Geniş Bagaj",
      "Ekonomik Kullanım",
      "ABS",
      "Klima"
    ]
  },
  {
    "id": 12,
    "name": "Fiat Egea",
    "category": "Ekonomik",
    "price": "₺1.990",
    "year": "2024",
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/Fiat-egea.webp",
    "alt": "Fiat Egea kiralık araç",
    "features": [
      "Geri Görüş Kamerası",
      "CarPlay",
      "Hız Sabitleme",
      "Konfor Paketi"
    ]
  },
  {
    "id": 13,
    "name": "Ford Focus",
    "category": "Orta Segment",
    "price": "₺2.090",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/ford-focus.webp",
    "alt": "Ford Focus kiralık araç",
    "features": [
      "Ford CoPilot",
      "LED Stoplar",
      "Multimedya",
      "Şerit Takip"
    ]
  },
  {
    "id": 14,
    "name": "Renault Megane Sedan",
    "category": "Orta Segment",
    "price": "₺2.150",
    "year": "2024",
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/Renault-megane.webp",
    "alt": "Renault Megane Sedan kiralık araç",
    "features": [
      "Dijital Gösterge",
      "Geniş İç Hacim",
      "Park Asistanı",
      "Anahtarsız Giriş"
    ]
  },
  {
    "id": 15,
    "name": "Renault Megane HB",
    "category": "Orta Segment",
    "price": "₺2.175",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/renault-megane-hactback.webp",
    "alt": "Renault Megane HB kiralık araç",
    "features": [
      "Sport Paket",
      "LED Far",
      "Dokunmatik Ekran",
      "Bluetooth"
    ]
  },
  {
    "id": 16,
    "name": "Honda Civic",
    "category": "Orta Segment",
    "price": "₺2.250",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/honda-civic.webp",
    "alt": "Honda Civic kiralık araç",
    "features": [
      "Adaptif Cruise",
      "Kamera",
      "Geniş Kabin",
      "Apple CarPlay"
    ]
  },
  {
    "id": 17,
    "name": "Hyundai Elantra",
    "category": "Orta Segment",
    "price": "₺2.290",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/hyundai-elantra.webp",
    "alt": "Hyundai Elantra kiralık araç",
    "features": [
      "Dijital Kokpit",
      "Şerit Ortalama",
      "Isıtmalı Koltuk",
      "Kablosuz Şarj"
    ]
  },
  {
    "id": 18,
    "name": "Toyota Corolla Hybrid",
    "category": "Orta Segment",
    "price": "₺2.350",
    "year": "2024",
    "fuel": "Hibrit",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/toyota-corolla-hybrid.webp",
    "alt": "Toyota Corolla Hybrid kiralık araç",
    "features": [
      "Hibrit Motor",
      "Toyota Safety Sense",
      "CarPlay",
      "Sessiz Sürüş"
    ]
  },
  {
    "id": 19,
    "name": "Volkswagen Golf",
    "category": "Orta Segment",
    "price": "₺2.390",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/vw-Golf.webp",
    "alt": "Volkswagen Golf kiralık araç",
    "features": [
      "IQ Light",
      "Dijital Cockpit",
      "Travel Assist",
      "CarPlay"
    ]
  },
  {
    "id": 20,
    "name": "Audi A3",
    "category": "Orta Segment",
    "price": "₺2.490",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/audi-a3.webp",
    "alt": "Audi A3 kiralık araç",
    "features": [
      "Virtual Cockpit",
      "LED Far",
      "Sürüş Modları",
      "Premium İç Mekan"
    ]
  },
  {
    "id": 21,
    "name": "BMW 320d",
    "category": "Üst Segment",
    "price": "₺2.890",
    "year": "2024",
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/bmw-320d.webp",
    "alt": "BMW 320d kiralık araç",
    "features": [
      "Mild Hybrid",
      "Sürüş Asistanı",
      "Deri Koltuk",
      "Navigasyon"
    ]
  },
  {
    "id": 22,
    "name": "BMW 420i Gran Coupe",
    "category": "Üst Segment",
    "price": "₺3.190",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/bmw-420i.webp",
    "alt": "BMW 420i Gran Coupe kiralık araç",
    "features": [
      "Gran Coupe Tasarım",
      "Harman Kardon",
      "360 Kamera",
      "M Sport"
    ]
  },
  {
    "id": 23,
    "name": "Audi A6",
    "category": "Üst Segment",
    "price": "₺3.350",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/audi-a6.webp",
    "alt": "Audi A6 kiralık araç",
    "features": [
      "Matrix LED",
      "Virtual Cockpit Plus",
      "Deri Döşeme",
      "Adaptif Cruise"
    ]
  },
  {
    "id": 24,
    "name": "Mercedes CLA 200",
    "category": "Üst Segment",
    "price": "₺3.450",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/mercedes-cla200.webp",
    "alt": "Mercedes CLA 200 kiralık araç",
    "features": [
      "MBUX",
      "Ambiyans Aydınlatma",
      "Geri Görüş Kamerası",
      "AMG Paket"
    ]
  },
  {
    "id": 25,
    "name": "Mercedes E 200",
    "category": "Üst Segment",
    "price": "₺3.890",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/mercedes-e200.webp",
    "alt": "Mercedes E 200 kiralık araç",
    "features": [
      "Executive Konfor",
      "360 Kamera",
      "Burmester",
      "Adaptif Sürüş"
    ]
  },
  {
    "id": 26,
    "name": "BMW 520i",
    "category": "Üst Segment",
    "price": "₺3.990",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/bmw-520i.webp",
    "alt": "BMW 520i kiralık araç",
    "features": [
      "Executive Lounge",
      "Head-Up Display",
      "Deri Koltuk",
      "Premium Ses"
    ]
  },
  {
    "id": 27,
    "name": "Volkswagen Passat",
    "category": "Üst Segment",
    "price": "₺2.650",
    "year": "2024",
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/Vw-Passat.webp",
    "alt": "Volkswagen Passat kiralık araç",
    "features": [
      "Business Paket",
      "Geniş Bagaj",
      "Adaptif Cruise",
      "Dijital Panel"
    ]
  },
  {
    "id": 28,
    "name": "Passat Variant",
    "category": "Üst Segment",
    "price": "₺2.790",
    "year": "2024",
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/vw-Passat-Stationwagon.webp",
    "alt": "Passat Variant kiralık araç",
    "features": [
      "Station Bagaj",
      "Aile Konforu",
      "Travel Assist",
      "CarPlay"
    ]
  },
  {
    "id": 29,
    "name": "Ford Mondeo",
    "category": "Üst Segment",
    "price": "₺2.590",
    "year": "2023",
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/ford-mondeo.webp",
    "alt": "Ford Mondeo kiralık araç",
    "features": [
      "Business Sedan",
      "Geniş İç Hacim",
      "Klima",
      "Hız Sabitleyici"
    ]
  },
  {
    "id": 30,
    "name": "Skoda Superb",
    "category": "Üst Segment",
    "price": "₺2.690",
    "year": "2024",
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/skoda-superb.webp",
    "alt": "Skoda Superb kiralık araç",
    "features": [
      "Executive Arka Diz Mesafesi",
      "Bagaj Hacmi",
      "Dijital Gösterge",
      "Kamera"
    ]
  },
  {
    "id": 31,
    "name": "Ford Puma",
    "category": "SUV",
    "price": "₺2.490",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/ford-puma.webp",
    "alt": "Ford Puma kiralık araç",
    "features": [
      "Crossover Konfor",
      "Megabox",
      "Geri Kamera",
      "SYNC 4"
    ]
  },
  {
    "id": 32,
    "name": "Audi Q2",
    "category": "SUV",
    "price": "₺2.590",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/audi-q2.webp",
    "alt": "Audi Q2 kiralık araç",
    "features": [
      "Compact SUV",
      "Virtual Cockpit",
      "LED Farlar",
      "Park Asistanı"
    ]
  },
  {
    "id": 33,
    "name": "Volkswagen T-Roc",
    "category": "SUV",
    "price": "₺2.650",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/vw-trock.webp",
    "alt": "Volkswagen T-Roc kiralık araç",
    "features": [
      "SUV Konfor",
      "Dijital Kokpit",
      "CarPlay",
      "Geri Kamera"
    ]
  },
  {
    "id": 34,
    "name": "Honda CR-V",
    "category": "SUV",
    "price": "₺2.790",
    "year": "2024",
    "fuel": "Hibrit",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/honda-crv.webp",
    "alt": "Honda CR-V kiralık araç",
    "features": [
      "Hibrit SUV",
      "Honda Sensing",
      "Geniş Bagaj",
      "Panoramik Tavan"
    ]
  },
  {
    "id": 35,
    "name": "Audi Q5",
    "category": "SUV",
    "price": "₺3.390",
    "year": "2024",
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/audi-q5.webp",
    "alt": "Audi Q5 kiralık araç",
    "features": [
      "Quattro",
      "Matrix LED",
      "Elektrikli Bagaj",
      "Premium Kabin"
    ]
  },
  {
    "id": 36,
    "name": "Hyundai Tucson",
    "category": "SUV",
    "price": "₺2.890",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/hyundai-tucson.webp",
    "alt": "Hyundai Tucson kiralık araç",
    "features": [
      "Bluelink",
      "Geniş Ekran",
      "Şerit Takip",
      "Kablosuz Şarj"
    ]
  },
  {
    "id": 37,
    "name": "Jaecoo J7",
    "category": "SUV",
    "price": "₺2.950",
    "year": "2025",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/jaecoo-j7.webp",
    "alt": "Jaecoo J7 kiralık araç",
    "features": [
      "Yeni Nesil SUV",
      "360 Kamera",
      "Panoramik Cam Tavan",
      "Akıllı Sürüş"
    ]
  },
  {
    "id": 38,
    "name": "Chery Omoda 5",
    "category": "SUV",
    "price": "₺2.990",
    "year": "2025",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/chery-omoda5.webp",
    "alt": "Chery Omoda 5 kiralık araç",
    "features": [
      "Modern Tasarım",
      "360 Görüş",
      "Dijital Kokpit",
      "Konfor Paket"
    ]
  },
  {
    "id": 39,
    "name": "Chery Tiggo Pro 8",
    "category": "SUV",
    "price": "₺3.190",
    "year": "2025",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "7",
    "image": "assets/cars/Chery-tiggopro8.webp",
    "alt": "Chery Tiggo Pro 8 kiralık araç",
    "features": [
      "7 Kişilik",
      "Panoramik Tavan",
      "Elektrikli Koltuk",
      "360 Kamera"
    ]
  },
  {
    "id": 40,
    "name": "BMW X5",
    "category": "Premium SUV",
    "price": "₺4.990",
    "year": "2024",
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/bmw-x5.webp",
    "alt": "BMW X5 kiralık araç",
    "features": [
      "xDrive",
      "Panoramik Tavan",
      "Harman Kardon",
      "Masajlı Koltuk"
    ]
  },
  {
    "id": 41,
    "name": "Range Rover Velar",
    "category": "Premium SUV",
    "price": "₺5.490",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/range-rover-velar.webp",
    "alt": "Range Rover Velar kiralık araç",
    "features": [
      "Terrain Response",
      "Meridian Ses",
      "360 Kamera",
      "Lüks Kabin"
    ]
  },
  {
    "id": 42,
    "name": "Range Rover Sport",
    "category": "Premium SUV",
    "price": "₺6.290",
    "year": "2024",
    "fuel": "Benzin",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/range-rover-sport.webp",
    "alt": "Range Rover Sport kiralık araç",
    "features": [
      "Sport Dynamics",
      "Air Suspension",
      "Meridian",
      "Executive Tasarım"
    ]
  },
  {
    "id": 43,
    "name": "BYD Seal",
    "category": "Elektrikli",
    "price": "₺3.290",
    "year": "2025",
    "fuel": "Elektrik",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/byd-seal.webp",
    "alt": "BYD Seal kiralık araç",
    "features": [
      "Tam Elektrikli",
      "Hızlı Şarj",
      "Uzun Menzil",
      "Panoramik Cam Tavan"
    ]
  },
  {
    "id": 44,
    "name": "Tesla Model Y",
    "category": "Elektrikli",
    "price": "₺4.490",
    "year": "2025",
    "fuel": "Elektrik",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/Tesla.webp",
    "alt": "Tesla Model Y kiralık araç",
    "features": [
      "Autopilot",
      "Premium İç Mekan",
      "Uzun Menzil",
      "Cam Tavan"
    ]
  },
  {
    "id": 45,
    "name": "Porsche Taycan",
    "category": "Elektrikli",
    "price": "₺7.990",
    "year": "2024",
    "fuel": "Elektrik",
    "transmission": "Otomatik",
    "seats": "4",
    "image": "assets/cars/porche-taycan.webp",
    "alt": "Porsche Taycan kiralık araç",
    "features": [
      "Performans EV",
      "Sport Chrono",
      "Premium Ses",
      "Hızlı Şarj"
    ]
  },
  {
    "id": 46,
    "name": "Megane E-Tech",
    "category": "Elektrikli",
    "price": "₺3.090",
    "year": "2025",
    "fuel": "Elektrik",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/megane-tech.webp",
    "alt": "Megane E-Tech kiralık araç",
    "features": [
      "Elektrikli Hatchback",
      "Google Built-In",
      "Hızlı Şarj",
      "Dijital Panel"
    ]
  },
  {
    "id": 47,
    "name": "Ford Tourneo Custom",
    "category": "Ticari / VIP",
    "price": "₺3.590",
    "year": "2024",
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "seats": "8",
    "image": "assets/cars/ford-custom.webp",
    "alt": "Ford Tourneo Custom kiralık araç",
    "features": [
      "VIP Taşımacılık",
      "Geniş Kabin",
      "Bağımsız Klima",
      "Konfor Koltukları"
    ]
  },
  {
    "id": 48,
    "name": "Volkswagen Caravelle",
    "category": "Ticari / VIP",
    "price": "₺3.890",
    "year": "2024",
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "seats": "8",
    "image": "assets/cars/vw-caravella.webp",
    "alt": "Volkswagen Caravelle kiralık araç",
    "features": [
      "VIP Dizilim",
      "USB Şarj",
      "Arka Klima",
      "Geniş Bagaj"
    ]
  },
  {
    "id": 49,
    "name": "Mercedes Vito Tourer",
    "category": "Ticari / VIP",
    "price": "₺3.990",
    "year": "2024",
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "seats": "9",
    "image": "assets/cars/vito-cclass.webp",
    "alt": "Mercedes Vito Tourer kiralık araç",
    "features": [
      "9 Kişilik",
      "Uzun Yol Konforu",
      "Arka Kamera",
      "Yol Bilgisayarı"
    ]
  },
  {
    "id": 50,
    "name": "Fiat Doblo",
    "category": "Ticari / VIP",
    "price": "₺2.290",
    "year": "2024",
    "fuel": "Dizel",
    "transmission": "Manuel",
    "seats": "5",
    "image": "assets/cars/fiat-doblo.webp",
    "alt": "Fiat Doblo kiralık araç",
    "features": [
      "Yükleme Hacmi",
      "Ekonomik Kullanım",
      "Klima",
      "Bluetooth"
    ]
  },
  {
    "id": 51,
    "name": "Volkswagen Caddy",
    "category": "Ticari / VIP",
    "price": "₺2.490",
    "year": "2024",
    "fuel": "Dizel",
    "transmission": "Otomatik",
    "seats": "5",
    "image": "assets/cars/vw-caddy.webp",
    "alt": "Volkswagen Caddy kiralık araç",
    "features": [
      "Şehir İçi Ticari",
      "Kayar Kapı",
      "Park Sensörü",
      "Dijital Gösterge"
    ]
  },
  {
    "id": 52,
    "name": "Ford Courier",
    "category": "Ticari / VIP",
    "price": "₺2.190",
    "year": "2024",
    "fuel": "Dizel",
    "transmission": "Manuel",
    "seats": "5",
    "image": "assets/cars/ford-courrier.webp",
    "alt": "Ford Courier kiralık araç",
    "features": [
      "Pratik Kullanım",
      "Yükleme Alanı",
      "Klima",
      "Bluetooth"
    ]
  },
  {
    "id": 53,
    "name": "Renault Express",
    "category": "Ticari / VIP",
    "price": "₺2.140",
    "year": "2024",
    "fuel": "Dizel",
    "transmission": "Manuel",
    "seats": "5",
    "image": "assets/cars/renault-express.webp",
    "alt": "Renault Express kiralık araç",
    "features": [
      "Ticari Pratiklik",
      "Geniş Hacim",
      "Ekonomik Dizel",
      "Yol Bilgisayarı"
    ]
  }
]
};

const footerLinks = [
  { label: 'Ana Sayfa', href: '#home' },
  { label: 'Araç Filosu', href: '#vehicles' },
  { label: 'Kurumsal Ayrıcalıklar', href: '#advantages' },
  { label: 'Hızlı Rezervasyon', href: '#contact' }
];
