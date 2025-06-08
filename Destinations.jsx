import React, { useState } from 'react';
import { Star, ArrowRight, ArrowLeft } from 'lucide-react';

const Destinations = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const destinations = [
    {
      id: 1,
      name: 'مراكش',
      image: '/src/assets/images/IDc4vMJFjHRH.jpg',
      category: 'cities',
      price: '3500',
      duration: '4 أيام',
      rating: 4.8
    },
    {
      id: 2,
      name: 'الصحراء الكبرى',
      image: '/src/assets/images/Vz0KD3BzDuom.jpg',
      category: 'desert',
      price: '5000',
      duration: '3 أيام',
      rating: 4.9
    },
    {
      id: 3,
      name: 'شفشاون',
      image: '/src/assets/images/MAC7Iaj4nTgr.jpg',
      category: 'cities',
      price: '2800',
      duration: '3 أيام',
      rating: 4.7
    },
    {
      id: 4,
      name: 'فاس',
      image: '/src/assets/images/qef8dgbvMOd1.jpg',
      category: 'cities',
      price: '3200',
      duration: '4 أيام',
      rating: 4.6
    },
    {
      id: 5,
      name: 'الريف',
      image: '/src/assets/images/R4vNpt4i3Hw2.jpg',
      category: 'mountains',
      price: '4000',
      duration: '5 أيام',
      rating: 4.5
    },
    {
      id: 6,
      name: 'الصويرة',
      image: '/src/assets/images/s2DwmWuMrvPS.jpg',
      category: 'coast',
      price: '3800',
      duration: '4 أيام',
      rating: 4.7
    }
  ];
  
  const filteredDestinations = activeTab === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeTab);
  
  const categories = [
    { id: 'all', label: 'جميع الوجهات' },
    { id: 'cities', label: 'المدن التاريخية' },
    { id: 'desert', label: 'الصحراء' },
    { id: 'mountains', label: 'الجبال' },
    { id: 'coast', label: 'الساحل' }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="destinations">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">وجهاتنا السياحية</h2>
          <p className="section-subtitle">
            اكتشف أجمل الوجهات السياحية في المغرب
          </p>
        </div>
        
        {/* تصفية الوجهات */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                activeTab === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* عرض الوجهات */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map(destination => (
            <div key={destination.id} className="destination-card hover-lift">
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="destination-image hover-scale"
                />
                <div className="absolute top-4 right-4 rounded-full bg-white px-3 py-1 text-sm font-semibold text-primary shadow-md">
                  {destination.duration}
                </div>
              </div>
              <div className="destination-content">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {destination.name}
                  </h3>
                  <div className="flex items-center">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-700 dark:text-gray-300">
                      {destination.rating}
                    </span>
                  </div>
                </div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-lg font-bold text-primary">
                    {destination.price} درهم
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    للشخص الواحد
                  </div>
                </div>
                <button className="w-full rounded-md bg-primary py-2 text-white transition-colors hover:bg-primary/90">
                  عرض التفاصيل
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* أزرار التنقل */}
        <div className="mt-12 flex justify-center space-x-4 rtl:space-x-reverse">
          <button className="rounded-full border border-gray-300 p-3 text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
            <ArrowRight size={20} />
          </button>
          <button className="rounded-full border border-gray-300 p-3 text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
            <ArrowLeft size={20} />
          </button>
        </div>
        
        {/* دعوة للعمل */}
        <div className="mt-12 text-center">
          <button className="btn-primary">
            عرض جميع الوجهات
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;

