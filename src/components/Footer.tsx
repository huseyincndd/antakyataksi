import React from 'react';
import Link from 'next/link';
import { FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Antakya Taksi</h3>
            <p className="text-gray-400 mb-4">
              Antakya&apos;nın her yerinde 7/24 güvenilir, hızlı ve konforlu ulaşım için yanınızdayız.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaPhone className="text-yellow-500 mt-1" />
                <div>
                  <p className="text-white font-bold">Bizi Arayın</p>
                  <a href="tel:+905321234567" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    0532 123 45 67
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-yellow-500 mt-1" />
                <div>
                  <p className="text-white font-bold">Durak Konumu</p>
                  <p className="text-gray-400">
                    Antakya Merkez, Hatay
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <FaClock className="text-yellow-500 mt-1" />
                <div>
                  <p className="text-white font-bold">Çalışma Saatleri</p>
                  <p className="text-gray-400">
                    7/24 Hizmetinizdeyiz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Antakya Taksi. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 