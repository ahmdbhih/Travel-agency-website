import React from 'react';
import { Globe, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Globe size={32} />,
      number: '500+',
      label: 'رحلة منظمة'
    },
    {
      icon: <Users size={32} />,
      number: '10,000+',
      label: 'عميل سعيد'
    },
    {
      icon: <Award size={32} />,
      number: '15+',
      label: 'سنة خبرة'
    },
    {
      icon: <Clock size={32} />,
      number: '24/7',
      label: 'دعم العملاء'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="about">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* النص التعريفي */}
          <div className="flex flex-col justify-center">
            <h2 className="section-title text-right">
              من نحن
            </h2>
            <p className="mb-6 text-lg text-gray-600 dark:text-gray-300 text-right">
              وكالة السفريات المغربية هي شركة رائدة في مجال السياحة والسفر، تأسست بهدف تقديم تجارب سفر استثنائية ولا تُنسى في جميع أنحاء المغرب. نحن نؤمن بأن السفر هو أكثر من مجرد زيارة أماكن جديدة، بل هو فرصة لاكتشاف ثقافات مختلفة وخلق ذكريات تدوم مدى الحياة.
            </p>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 text-right">
              فريقنا من الخبراء المحليين يعمل بشغف لتصميم رحلات مخصصة تناسب احتياجاتك وميزانيتك. من الجولات الثقافية في المدن التاريخية مثل فاس ومراكش، إلى المغامرات الصحراوية في الصحراء الكبرى، نحن نضمن لك تجربة أصيلة ومريحة.
            </p>
            
            {/* الإحصائيات */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 flex justify-center text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* الصورة */}
          <div className="relative">
            <img
              src="/src/assets/images/QtTbp6MlPUYX.jpg"
              alt="فريق وكالة السفريات المغربية"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 rounded-lg bg-primary p-6 text-white shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">سنة من الخبرة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

