import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'أحمد محمد',
      location: 'الرياض، السعودية',
      rating: 5,
      text: 'تجربة رائعة ولا تُنسى! فريق وكالة السفريات المغربية كان محترفاً جداً وساعدنا في تنظيم رحلة مثالية إلى مراكش والصحراء. أنصح الجميع بالتعامل معهم.',
      image: '/src/assets/images/vC6LYSw8iLHq.jpg'
    },
    {
      id: 2,
      name: 'فاطمة الزهراء',
      location: 'الدار البيضاء، المغرب',
      rating: 5,
      text: 'خدمة ممتازة وأسعار معقولة. استمتعت كثيراً برحلة شفشاون وفاس. المرشدون السياحيون كانوا ودودين ومعرفتهم بالتاريخ والثقافة المحلية مذهلة.',
      image: '/src/assets/images/cteoepzwQ9Hw.jpg'
    },
    {
      id: 3,
      name: 'محمد العلي',
      location: 'دبي، الإمارات',
      rating: 5,
      text: 'أفضل وكالة سفريات تعاملت معها! نظموا لنا رحلة عائلية رائعة شملت الصويرة وأغادير. كل شيء كان منظماً بدقة والإقامة في الفنادق كانت مريحة جداً.',
      image: '/src/assets/images/YOzdVcYQpE3G.jpg'
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800" id="testimonials">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">آراء عملائنا</h2>
          <p className="section-subtitle">
            اكتشف ما يقوله عملاؤنا عن تجاربهم معنا
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card hover-lift">
              {/* أيقونة الاقتباس */}
              <div className="mb-4 flex justify-center">
                <Quote size={32} className="text-primary" />
              </div>
              
              {/* النجوم */}
              <div className="mb-4 flex justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* النص */}
              <p className="mb-6 text-center text-gray-600 dark:text-gray-300">
                "{testimonial.text}"
              </p>
              
              {/* معلومات العميل */}
              <div className="flex items-center justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="mr-4 text-center">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* إحصائيات العملاء */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">98%</div>
            <div className="text-gray-600 dark:text-gray-300">معدل الرضا</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">10,000+</div>
            <div className="text-gray-600 dark:text-gray-300">عميل سعيد</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">500+</div>
            <div className="text-gray-600 dark:text-gray-300">رحلة منظمة</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

