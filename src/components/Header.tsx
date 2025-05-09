import React from 'react';
import Link from 'next/link';
import { FaPhone, FaCarAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/90 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo will be added here - for now use a placeholder */}
          <div className="relative w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
            <FaCarAlt className="text-black text-xl" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              Antakya <span className="text-yellow-500">Taksi</span>
            </h1>
            <p className="text-xs text-gray-400">
              7/24 Güvenilir Hizmet
            </p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#home" className="text-gray-200 hover:text-yellow-500 font-medium transition-colors">
            Anasayfa
          </Link>
          <Link href="#services" className="text-gray-200 hover:text-yellow-500 font-medium transition-colors">
            Hizmetlerimiz
          </Link>
          <Link href="#about" className="text-gray-200 hover:text-yellow-500 font-medium transition-colors">
            Hakkımızda
          </Link>
          <Link href="#contact" className="text-gray-200 hover:text-yellow-500 font-medium transition-colors">
            İletişim
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 bg-yellow-500 py-2 px-4 rounded-full text-black font-medium">
            <FaPhone className="animate-pulse" />
            <span>0532 123 45 67</span>
          </div>
          
          {/* Mobile menu button - This would normally toggle a mobile menu */}
          <button className="md:hidden text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 