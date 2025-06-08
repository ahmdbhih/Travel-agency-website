import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // محاكاة إرسال النموذج
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'العنوان',
      details: 'مراكش، ساحة جامع الفنا، المغرب'
    },
    {
      icon: <Phone size={24} />,
      title: 'الهاتف',
      details: '+212 5XX-XXXXXX'
    },
    {
      icon: <Mail size={24} />,
      title: 'البريد الإلكتروني',
      details: 'info@moroccantravel.com'
    },
    {
      icon: <Clock size={24} />,
      title: 'ساعات العمل',
      details: 'الاثنين - السبت: 9:00 ص - 6:00 م'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="contact">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">اتصل بنا</h2>
          <p className="section-subtitle">
            نحن هنا للإجابة على جميع استفساراتك ومساعدتك في تخطيط رحلتك المثالية
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* معلومات الاتصال */}
          <div>
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                معلومات الاتصال
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                يسعدنا الرد على استفساراتك وتقديم المساعدة في أي وقت. يمكنك التواصل معنا من خلال:
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary/10 p-3 text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {info.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* الخريطة */}
            <div className="mt-8 rounded-lg overflow-hidden">
              <img
                src="/src/assets/images/9Ld25zKNC9SX.jpg"
                alt="موقعنا على الخريطة"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          
          {/* نموذج الاتصال */}
          <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
            {isSubmitted ? (
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-green-100 p-3 text-green-500">
                    <Send size={32} />
                  </div>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  شكراً لتواصلك معنا!
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  تم استلام رسالتك بنجاح. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن.
                </p>
              </div>
            ) : (
              <>
                <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  أرسل لنا رسالة
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        الاسم الكامل
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">
                        الموضوع
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group md:col-span-2">
                      <label htmlFor="message" className="form-label">
                        الرسالة
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="form-textarea"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    ) : (
                      'إرسال الرسالة'
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

