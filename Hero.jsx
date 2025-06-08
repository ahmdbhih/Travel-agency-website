import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* صورة الخلفية */}
      <img
        src="/src/assets/images/MAC7Iaj4nTgr.jpg"
        alt="المغرب الساحر"
        className="hero-image"
      />
      
      {/* طبقة التغطية الشفافة */}
      <div className="hero-overlay"></div>
      
      {/* محتوى القسم الرئيسي */}
      <div className="hero-content">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
          استكشف سحر المغرب
        </h1>
        <p className="mb-8 max-w-2xl text-center text-lg md:text-xl">
          رحلات مميزة إلى أجمل الوجهات السياحية في المغرب، من المدن التاريخية إلى الصحراء الساحرة
        </p>
        
        {/* أزرار الدعوة للعمل */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 rtl:space-x-reverse">
          <button className="btn-primary">استكشف الوجهات</button>
          <button className="btn-outline">تواصل معنا</button>
        </div>
        
        {/* سهم التمرير للأسفل */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

