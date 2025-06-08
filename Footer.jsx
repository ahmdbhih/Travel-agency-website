import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'من نحن', href: '/about' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'الوجهات', href: '/destinations' },
    { name: 'اتصل بنا', href: '/contact' }
  ];
  
  const destinations = [
    { name: 'مراكش', href: '/destinations/marrakech' },
    { name: 'فاس', href: '/destinations/fes' },
    { name: 'شفشاون', href: '/destinations/chefchaouen' },
    { name: 'الصحراء', href: '/destinations/desert' },
    { name: 'الصويرة', href: '/destinations/essaouira' }
  ];
  
  const services = [
    { name: 'حجز الفنادق', href: '/services/hotels' },
    { name: 'تذاكر الطيران', href: '/services/flights' },
    { name: 'الجولات السياحية', href: '/services/tours' },
    { name: 'النقل', href: '/services/transport' },
    { name: 'التأشيرات', href: '/services/visas' }
  ];

  return (
    <footer className="footer">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* معلومات الشركة */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">
              وكالة السفريات المغربية
            </h3>
            <p className="mb-4 text-gray-300">
              شريكك الموثوق لاستكشاف جمال المغرب. نقدم تجارب سفر استثنائية ولا تُنسى في جميع أنحاء المملكة المغربية.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-2" />
                <span>مراكش، المغرب</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={16} className="mr-2" />
                <span>+212 5XX-XXXXXX</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2" />
                <span>info@moroccantravel.com</span>
              </div>
            </div>
          </div>
          
          {/* روابط سريعة */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">روابط سريعة</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* الوجهات */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">الوجهات الشائعة</h3>
            <ul className="space-y-2">
              {destinations.map((destination, index) => (
                <li key={index}>
                  <Link
                    to={destination.href}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {destination.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* الخدمات */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">خدماتنا</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* وسائل التواصل الاجتماعي */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300">
                © {currentYear} وكالة السفريات المغربية. جميع الحقوق محفوظة.
              </p>
            </div>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 text-gray-300 transition-colors hover:bg-primary hover:text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 text-gray-300 transition-colors hover:bg-primary hover:text-white"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 text-gray-300 transition-colors hover:bg-primary hover:text-white"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 text-gray-300 transition-colors hover:bg-primary hover:text-white"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* روابط إضافية */}
        <div className="mt-4 border-t border-gray-700 pt-4">
          <div className="flex flex-col items-center justify-center space-y-2 text-sm text-gray-400 md:flex-row md:space-x-4 md:space-y-0 rtl:space-x-reverse">
            <Link to="/privacy" className="hover:text-white">
              سياسة الخصوصية
            </Link>
            <span className="hidden md:inline">|</span>
            <Link to="/terms" className="hover:text-white">
              شروط الاستخدام
            </Link>
            <span className="hidden md:inline">|</span>
            <Link to="/sitemap" className="hover:text-white">
              خريطة الموقع
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

