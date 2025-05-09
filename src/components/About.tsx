import React from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const About = () => {
  const advantages = [
    "Profesyonel ve deneyimli sürücüler",
    "Modern ve bakımlı araç filosu",
    "7/24 kesintisiz hizmet",
    "Uygun fiyatlandırma politikası",
    "Güvenli ve konforlu yolculuk",
    "Dakik ve hızlı hizmet"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden">
              {/* Unsplash'ten çekilen taksi görseli */}
              <Image
                src="https://idsb.tmgrup.com.tr/ly/uploads/images/2024/11/28/356975.jpg"
                alt="Antakya Taksi Filosu"
                fill
                className="object-cover rounded-lg"
              />
              
              {/* Yellow accent - decorative element */}
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-yellow-500 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-500 rounded-lg -z-10"></div>
            </div>
            
            {/* Stats */}
            <div className="absolute bottom-8 right-8 bg-white dark:bg-gray-900 shadow-xl p-6 rounded-lg grid grid-cols-2 gap-4 w-64">
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-500">15+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Yıllık Deneyim</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-500">20+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Araç Filosu</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-500">7/24</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Hizmet</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-500">1000+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Mutlu Müşteri</p>
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Antakya'nın Güvenilir Taksi Durağı
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mb-6"></div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              2005 yılından bu yana Antakya'da hizmet veren taksi durağımız, müşteri memnuniyetini ön planda tutarak kaliteli hizmet sunmaya devam ediyor. Modern araç filomuz ve profesyonel sürücülerimizle şehrin her noktasına güvenli ulaşım sağlıyoruz.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Misyonumuz, yolcularımızın güvenliğini ve konforunu en üst düzeyde tutarak, dakik ve profesyonel hizmet sunmaktır. Vizyonumuz ise Antakya'nın en güvenilir ve tercih edilen taksi durağı olmaktır.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Neden Bizi Tercih Etmelisiniz?
              </h3>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FaCheck className="text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a 
              href="tel:+905321234567" 
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              <span>Hemen Arayın</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 