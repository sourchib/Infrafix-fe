import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full glassmorphism p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/src/assets/landingpage/LogoInfrafix.png" alt="INFRAFIX Logo" className="h-8 mr-2" />
          <span className="text-xl font-bold text-white"></span>
        </div>
        <ul className="hidden md:flex space-x-6 text-white">
          <li><a href="#beranda" className="hover:text-gray-200">Beranda</a></li>
          <li><a href="#fitur" className="hover:text-gray-200">Fitur</a></li>
          <li><a href="#cara-kerja" className="hover:text-gray-200">Cara Kerja</a></li>
          <li><a href="#statistik" className="hover:text-gray-200">Statistik</a></li>
        </ul>
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 rounded-full bg-white text-blue-600 hover:bg-gray-100 transition duration-300 flex items-center">
            <i className="fas fa-user-circle mr-2 text-blue-700"></i>Masuk
          </button>
          <button className="px-4 py-2 rounded-full border border-white text-white hover:bg-white hover:text-blue-600 transition duration-300 flex items-center">
            <i className="fas fa-user-plus mr-2 text-green-300"></i>Daftar
          </button>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
