import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  isLink?: boolean;
  linkHref?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, content, isLink = false, linkHref = '' }) => {
  return (
    <div className="flex gap-4 items-start mb-6">
      <div className="bg-yellow-500 text-black p-3 rounded-full flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg text-white">{title}</h3>
        {isLink ? (
          <a href={linkHref} className="text-gray-400 hover:text-yellow-500 transition-colors">
            {content}
          </a>
        ) : (
          <p className="text-gray-400">{content}</p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            İletişim
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            7/24 hizmet veren taksi durağımıza aşağıdaki iletişim bilgilerinden ulaşabilirsiniz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">
              İletişim Bilgilerimiz
            </h3>
            
            <ContactInfo 
              icon={<FaPhone />}
              title="Telefon Numarası"
              content="0532 123 45 67"
              isLink={true}
              linkHref="tel:+905321234567"
            />
            
            <ContactInfo 
              icon={<FaEnvelope />}
              title="E-posta Adresi"
              content="info@antakyataksi.com"
              isLink={true}
              linkHref="mailto:info@antakyataksi.com"
            />
            
            <ContactInfo 
              icon={<FaMapMarkerAlt />}
              title="Durak Adresi"
              content="Antakya Merkez Mahallesi, Atatürk Caddesi, No: 123, Hatay"
            />
            
            <ContactInfo 
              icon={<FaClock />}
              title="Çalışma Saatleri"
              content="7 gün 24 saat hizmetinizdeyiz"
            />
            
            <div className="mt-8">
              <a 
                href="tel:+905321234567" 
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                <FaPhone />
                <span>Şimdi Arayın</span>
              </a>
            </div>
          </div>
          
          {/* Map */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg h-full">
            <h3 className="text-2xl font-bold text-white mb-6">
              Bize Ulaşın
            </h3>
            
            {/* Google Maps iframe */}
            <div className="w-full h-80 rounded-lg overflow-hidden mb-6 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25811.15368556846!2d36.15952!3d36.23278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152fb0c44d639fb3%3A0xd8df9fa1bfc17a06!2sAntakya%2C%20Hatay%20Merkez%2FHatay!5e0!3m2!1str!2str!4v1726889012345!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{border: 0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Antakya Merkez Harita"
              ></iframe>
            </div>
            
            <p className="text-gray-400">
              Haritada gösterilen konumumuzdan 7/24 taksi hizmetimize ulaşabilirsiniz. İhtiyacınız olduğunda tek bir telefon kadar uzaktayız.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 