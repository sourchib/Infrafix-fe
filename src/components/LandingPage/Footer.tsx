import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center mb-4">
            <img src="/src/assets/landingpage/LogoInfrafix.png" alt="INFRAFIX Logo" className="h-10 mr-2" />
            <span className="text-xl font-bold text-white"></span>
          </div>
          <p className="text-sm">Layanan Pelaporan Infrastruktur Warga</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Tentang</a></li>
            <li><a href="#" className="hover:text-white">Bantuan</a></li>
            <li><a href="#" className="hover:text-white">Kebijakan Privasi</a></li>
            <li><a href="#" className="hover:text-white">Syarat & Ketentuan</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Sosial Media</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8 text-center text-sm border-t border-gray-700 pt-8">
        <p>&copy; 2025 INFRAFIX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
