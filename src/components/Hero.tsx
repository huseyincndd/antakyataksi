import React from 'react';
import Image from 'next/image';
import { FaPhone, FaShieldAlt, FaClock, FaMapMarkedAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen pt-20">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Unsplash'ten çekilen Antakya veya taksi temalı görsel */}
          <div className="w-full h-full relative">
            <Image 
              src="https://idsb.tmgrup.com.tr/ly/uploads/images/2024/11/28/356975.jpg"
              alt="Antakya Taksi Hizmeti" 
              fill
              quality={100}
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-20" /> {/* Gradient overlay */}
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-30 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            <span className="text-yellow-500">Antakya</span>&apos;nın Güvenilir Taksi Hizmeti
          </h1>
          
          <p className="text-xl text-gray-200 mb-8">
            7/24 profesyonel şoförlerimiz ve konforlu araçlarımızla Antakya&apos;nın her noktasına güvenli ve hızlı ulaşım sağlıyoruz.
          </p>
          
          {/* CTA Button - Phone Number Highlight */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-12">
            <a 
              href="tel:+905321234567" 
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              <FaPhone className="animate-pulse" />
              <span className="text-xl">0532 123 45 67</span>
            </a>
            <span className="text-gray-300 text-lg">Hemen bizi arayın!</span>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
              <FaShieldAlt className="text-yellow-500 text-2xl" />
              <div>
                <h3 className="text-white font-semibold">Güvenilir Hizmet</h3>
                <p className="text-gray-400 text-sm">Deneyimli ve profesyonel sürücüler</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
              <FaClock className="text-yellow-500 text-2xl" />
              <div>
                <h3 className="text-white font-semibold">7/24 Hizmet</h3>
                <p className="text-gray-400 text-sm">Günün her saati hizmetinizdeyiz</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
              <FaMapMarkedAlt className="text-yellow-500 text-2xl" />
              <div>
                <h3 className="text-white font-semibold">Tüm Antakya</h3>
                <p className="text-gray-400 text-sm">Şehrin her noktasına ulaşım</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <svg 
          className="w-6 h-6 text-white"
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 