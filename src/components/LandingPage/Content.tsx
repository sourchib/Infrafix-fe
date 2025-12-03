import React, { useEffect, useState } from 'react';

const Content: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/src/assets/landingpage/Page 1.png",
    "/src/assets/landingpage/Page 2.png",
    "/src/assets/landingpage/Page 3.png",
    "/src/assets/landingpage/Page 4.png",
    "/src/assets/landingpage/Page 5.png",
    "/src/assets/landingpage/Page 6.png",
    "/src/assets/landingpage/Page 7.png",
    "/src/assets/landingpage/Page 8.png",
    "/src/assets/landingpage/Page 9.png",
    "/src/assets/landingpage/Page 10.png",
    "/src/assets/landingpage/Page 11.png",
    "/src/assets/landingpage/Page 12.png",
    "/src/assets/landingpage/Page 13.png",
    "/src/assets/landingpage/Page 14.png",
    "/src/assets/landingpage/Page 15.png",
    "/src/assets/landingpage/Page 16.png",
  ];

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(autoPlayInterval);
  }, [slides.length]);

  const showSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <>
      {/* 2. Hero Section */}
      <section id="beranda" className="hero-gradient text-white py-20 md:py-32">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">Layanan Pelaporan Infrastruktur yang Lebih Cepat & Transparan</h1>
            <p className="text-lg md:text-xl mb-8">Aplikasi digital untuk warga melaporkan kerusakan jalan, penerangan, drainase, dan fasilitas umum.</p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300">Laporkan Sekarang</button>
              <button className="px-8 py-4 border border-white text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-blue-600 transition duration-300">Lihat Status Laporan</button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/src/assets/landingpage/desamodern.jpg" alt="Ilustrasi Kota Modern" className="max-w-full h-auto rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* 3. Key Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Manfaat Utama INFRAFIX</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-blue-500 text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Pelaporan Cepat</h3>
              <p className="text-gray-600">Kirim laporan dalam hitungan detik dengan mudah.</p>
            </div>
            {/* Benefit Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-green-500 text-5xl mb-4">👀</div>
              <h3 className="text-xl font-semibold mb-2">Pantau Status</h3>
              <p className="text-gray-600">Lihat progres penanganan laporan secara real-time.</p>
            </div>
            {/* Benefit Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-red-500 text-5xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">Lokasi Otomatis (GPS)</h3>
              <p className="text-gray-600">Deteksi titik kerusakan otomatis menggunakan GPS.</p>
            </div>
            {/* Benefit Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-purple-500 text-5xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Transparansi Pemerintah</h3>
              <p className="text-gray-600">Warga tahu proses perbaikan secara terbuka dan akuntabel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Fitur Utama (Feature Highlights) */}
      <section id="fitur" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Fitur Utama INFRAFIX</h2>
          <div className="space-y-16">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center md:even:flex-row-reverse">
              <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
                <img src="/src/assets/landingpage/kerusakan.jpeg" alt="Upload Foto Kerusakan" className="rounded-lg shadow-lg mx-auto" />
              </div>
              <div className="md:w-1/2 text-center md:text-left md:px-8">
                <div className="text-blue-500 text-4xl mb-4">📸</div>
                <h3 className="text-2xl font-semibold mb-2">Upload Foto Kerusakan</h3>
                <p className="text-gray-600">Lampirkan foto kerusakan untuk laporan yang lebih jelas dan akurat.</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row items-center md:even:flex-row-reverse">
              <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
                <img src="/src/assets/landingpage/lokasi.png" alt="Penentuan Lokasi" className="rounded-lg shadow-lg mx-auto" />
              </div>
              <div className="md:w-1/2 text-center md:text-left md:px-8">
                <div className="text-green-500 text-4xl mb-4">🗺️</div>
                <h3 className="text-2xl font-semibold mb-2">Penentuan Lokasi</h3>
                <p className="text-gray-600">Sistem akan secara otomatis menentukan lokasi laporan Anda.</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-center md:even:flex-row-reverse">
              <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
                <img src="/src/assets/landingpage/dashboardpengawas.jpg" alt="Dashboard Pengawasan Petugas" className="rounded-lg shadow-lg mx-auto" />
              </div>
              <div className="md:w-1/2 text-center md:text-left md:px-8">
                <div className="text-yellow-500 text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-semibold mb-2">Dashboard Pengawasan Petugas</h3>
                <p className="text-gray-600">Dashboard intuitif untuk petugas memantau dan mengelola laporan.</p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col md:flex-row items-center md:even:flex-row-reverse">
              <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
                <img src="/src/assets/landingpage/notifikasi.png" alt="Notifikasi Status" className="rounded-lg shadow-lg mx-auto" />
              </div>
              <div className="md:w-1/2 text-center md:text-left md:px-8">
                <div className="text-red-500 text-4xl mb-4">🔔</div>
                <h3 className="text-2xl font-semibold mb-2">Notifikasi Status</h3>
                <p className="text-gray-600">Dapatkan notifikasi real-time tentang progres laporan Anda.</p>
              </div>
            </div>
            {/* Feature 5 */}
            <div className="flex flex-col md:flex-row items-center md:even:flex-row-reverse">
              <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
                <img src="/src/assets/landingpage/laporanwarga.png" alt="Riwayat Laporan" className="rounded-lg shadow-lg mx-auto" />
              </div>
              <div className="md:w-1/2 text-center md:text-left md:px-8">
                <div className="text-purple-500 text-4xl mb-4">🧾</div>
                <h3 className="text-2xl font-semibold mb-2">Riwayat Laporan</h3>
                <p className="text-gray-600">Akses riwayat lengkap semua laporan yang pernah Anda buat.</p>
              </div>
            </div>
            {/* Feature 6 */}
            <div className="flex flex-col md:flex-row items-center md:even:flex-row-reverse">
              <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
                <img src="/src/assets/landingpage/integritas.jpeg" alt="Integrasi Dinas & Pemerintah" className="rounded-lg shadow-lg mx-auto" />
              </div>
              <div className="md:w-1/2 text-center md:text-left md:px-8">
                <div className="text-indigo-500 text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-semibold mb-2">Integrasi Dinas & Pemerintah</h3>
                <p className="text-gray-600">Terhubung langsung dengan dinas terkait untuk penanganan cepat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Cara Kerja (Workflow) – Step by Step */}
      <section id="cara-kerja" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Cara Kerja INFRAFIX</h2>
          <div className="relative flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-16">
            {/* Timeline Line (for desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2 mx-20"></div>
            {/* Timeline Line (for mobile) */}
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2 my-10"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md md:w-1/5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Buat Laporan</h3>
              <p className="text-gray-600">Mulai laporan Anda dengan mudah.</p>
            </div>
            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md md:w-1/5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Upload Foto & Lokasi</h3>
              <p className="text-gray-600">Lampirkan bukti dan tentukan lokasi.</p>
            </div>
            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md md:w-1/5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-white text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Dinas Menerima Laporan</h3>
              <p className="text-gray-600">Laporan Anda diteruskan ke dinas terkait.</p>
            </div>
            {/* Step 4 */}
            <div className="relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md md:w-1/5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white text-2xl font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Petugas Menangani</h3>
              <p className="text-gray-600">Tim lapangan segera menindaklanjuti.</p>
            </div>
            {/* Step 5 */}
            <div className="relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md md:w-1/5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500 text-white text-2xl font-bold mb-4">5</div>
              <h3 className="text-xl font-semibold mb-2">Status Terupdate ke Warga</h3>
              <p className="text-gray-600">Anda akan menerima notifikasi progres.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Dashboard Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Dashboard Petugas dan Pemerintah yang Mudah Digunakan</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">Pantau laporan masuk, tindak lanjuti, dan kelola data infrastruktur dengan cepat.</p>
          <div className="bg-white p-8 rounded-xl shadow-xl max-w-5xl mx-auto relative overflow-hidden">
            <div id="dashboard-carousel" className="flex flex-nowrap w-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {slides.map((slide, index) => (
                <img key={index} src={slide} alt={`Dashboard Mockup ${index + 1}`} className="w-full flex-shrink-0 rounded-lg shadow-lg object-cover" />
              ))}
            </div>
          </div>
          {/* <button id="prev-slide" onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 focus:outline-none">
          </button>
          <button id="next-slide" onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 focus:outline-none">
          </button> */}
        </div>
      </section>

      {/* 7. Stats / Impact Section */}
      <section id="statistik" className="py-20 hero-gradient text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Dampak INFRAFIX</h2>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat Card 1 */}
            <div className="p-6 rounded-lg">
              <div className="text-5xl font-extrabold mb-2">10K+</div>
              <p className="text-xl">Laporan Terselesaikan</p>
            </div>
            {/* Stat Card 2 */}
            <div className="p-6 rounded-lg">
              <div className="text-5xl font-extrabold mb-2">5K+</div>
              <p className="text-xl">Pengguna Aktif</p>
            </div>
            {/* Stat Card 3 */}
            <div className="p-6 rounded-lg">
              <div className="text-5xl font-extrabold mb-2">24 Jam</div>
              <p className="text-xl">Rata-rata Waktu Tindak Lanjut</p>
            </div>
            {/* Stat Card 4 */}
            <div className="p-6 rounded-lg">
              <div className="text-5xl font-extrabold mb-2">50+</div>
              <p className="text-xl">Petugas Terhubung</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Apa Kata Mereka?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg italic mb-4">"Kini melaporkan jalan rusak sangat mudah dan cepat. INFRAFIX benar-benar membantu!"</p>
              <p className="font-semibold text-blue-600">— Warga</p>
            </div>
            {/* Testimonial Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg italic mb-4">"Sangat membantu kami para petugas dinas untuk mempercepat proses perbaikan infrastruktur."</p>
              <p className="font-semibold text-green-600">— Petugas Dinas</p>
            </div>
            {/* Testimonial Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg italic mb-4">"Transparansi proses penanganan laporan sangat terjaga, meningkatkan kepercayaan publik."</p>
              <p className="font-semibold text-purple-600">— Pemerintah</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Call To Action (CTA) */}
      <section className="cta-gradient text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Mulai kontribusi untuk kota yang lebih baik.</h2>
          <button className="px-10 py-5 bg-white text-blue-600 font-semibold text-xl rounded-full shadow-lg hover:bg-gray-100 transition duration-300">Buat Laporan Sekarang</button>
        </div>
      </section>
    </>
  );
};

export default Content;
