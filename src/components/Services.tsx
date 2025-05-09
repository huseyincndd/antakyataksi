import React from 'react';
import Image from 'next/image';
import { 
  FaCarSide, 
  FaPlane, 
  FaCalendarAlt, 
  FaMapMarkedAlt, 
  FaUserTie, 
  FaSuitcase 
} from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-t-4 border-yellow-500">
      <div className="bg-yellow-500 text-black p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FaCarSide size={24} />,
      title: "Şehir İçi Ulaşım",
      description: "Antakya'nın her noktasına güvenilir ve konforlu ulaşım sağlıyoruz."
    },
    {
      icon: <FaPlane size={24} />,
      title: "Havalimanı Transferi",
      description: "Hatay Havalimanı'na ve havalimanından transferleriniz için 7/24 hizmetinizdeyiz."
    },
    {
      icon: <FaCalendarAlt size={24} />,
      title: "Özel Günler",
      description: "Düğün, nişan, mezuniyet gibi özel günlerinizde özel araç hizmeti sunuyoruz."
    },
    {
      icon: <FaMapMarkedAlt size={24} />,
      title: "Şehirler Arası",
      description: "Uzun mesafe yolculuklarınız için konforlu ve güvenli transfer hizmeti."
    },
    {
      icon: <FaUserTie size={24} />,
      title: "İş Seyahatleri",
      description: "İş görüşmeleriniz ve toplantılarınız için profesyonel sürücüler."
    },
    {
      icon: <FaSuitcase size={24} />,
      title: "Tur Hizmeti",
      description: "Antakya ve çevresini keşfetmek için özel tur hizmetimizden yararlanabilirsiniz."
    }
  ];

  return (
    <section id="services" className="py-20 relative bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083"
          alt="Araba Arka Plan"
          fill
          className="object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hizmetlerimiz
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Antakya&apos;nın her noktasına, her saatte kaliteli taksi hizmeti sunuyoruz. Size özel çözümlerimiz ile tanışın.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="tel:+905321234567" 
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            <span>Hizmet Almak İçin Arayın</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services; 