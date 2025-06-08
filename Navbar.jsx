import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // التحقق من التمرير لتغيير مظهر القائمة
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // تبديل الوضع المظلم
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          وكالة السفريات المغربية
        </Link>

        {/* قائمة للشاشات الكبيرة */}
        <div className="nav-links">
          <Link to="/" className="nav-link">
            الرئيسية
          </Link>
          <Link to="/about" className="nav-link">
            من نحن
          </Link>
          <Link to="/services" className="nav-link">
            خدماتنا
          </Link>
          <Link to="/destinations" className="nav-link">
            الوجهات
          </Link>
          <Link to="/contact" className="nav-link">
            اتصل بنا
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {/* زر تبديل الوضع المظلم */}
          <button
            onClick={toggleDarkMode}
            className="rounded-full p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* زر الحجز */}
          <Link to="/booking" className="nav-button">
            احجز الآن
          </Link>

          {/* زر القائمة للشاشات الصغيرة */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* القائمة المنسدلة للشاشات الصغيرة */}
      {isOpen && (
        <div className="absolute left-0 right-0 z-20 bg-white px-4 py-2 shadow-md dark:bg-gray-900 md:hidden">
          <div className="flex flex-col space-y-4 py-4">
            <Link
              to="/"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              الرئيسية
            </Link>
            <Link
              to="/about"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              من نحن
            </Link>
            <Link
              to="/services"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              خدماتنا
            </Link>
            <Link
              to="/destinations"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              الوجهات
            </Link>
            <Link
              to="/contact"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              اتصل بنا
            </Link>
            <Link
              to="/booking"
              className="nav-button w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              احجز الآن
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

