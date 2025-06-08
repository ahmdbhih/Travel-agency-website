import React from 'react';
import { Plane, Hotel, MapPin, Camera, Car, Utensils } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Plane size={40} />,
      title: 'حجز تذاكر الطيران',
      description: 'نوفر لك أفضل الأسعار لتذاكر الطيران الداخلية والدولية مع شركات الطيران المعتمدة.'
    },
    {
      icon: <Hotel size={40} />,
      title: 'حجز الفنادق',
      description: 'مجموعة واسعة من الفنادق والرياض التقليدية والمنتجعات الفاخرة في جميع أنحاء المغرب.'
    },
    {
      icon: <MapPin size={40} />,
      title: 'الجولات السياحية',
      description: 'جولات مصحوبة بمرشدين محليين خبراء لاستكشاف أجمل المعالم السياحية والثقافية.'
    },
    {
      icon: <Camera size={40} />,
      title: 'رحلات التصوير',
      description: 'رحلات مخصصة لعشاق التصوير لالتقاط أجمل اللحظات في المناظر الطبيعية الخلابة.'
    },
    {
      icon: <Car size={40} />,
      title: 'النقل والمواصلات',
      description: 'خدمات نقل مريحة وآمنة بسيارات حديثة مع سائقين محترفين ومرشدين سياحيين.'
    },
    {
      icon: <Utensils size={40} />,
      title: 'الجولات الغذائية',
      description: 'اكتشف النكهات الأصيلة للمطبخ المغربي مع جولات غذائية في أفضل المطاعم المحلية.'
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800" id="services">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">خدماتنا</h2>
          <p className="section-subtitle">
            نقدم مجموعة شاملة من الخدمات السياحية لضمان رحلة مثالية
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="service-card hover-lift">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* دعوة للعمل */}
        <div className="mt-12 text-center">
          <button className="btn-primary">
            اطلب استشارة مجانية
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

