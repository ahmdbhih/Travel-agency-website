import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // محاكاة عملية الاشتراك
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <section className="cta-section">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle size={64} className="text-green-500" />
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            شكراً لك!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            تم اشتراكك بنجاح في نشرتنا الإخبارية. ستصلك أحدث العروض والوجهات السياحية قريباً.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="cta-section">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
          احصل على أفضل العروض
        </h2>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
          اشترك في نشرتنا الإخبارية واحصل على خصومات حصرية وأحدث الوجهات السياحية
        </p>
        
        <form onSubmit={handleSubmit} className="mx-auto max-w-md">
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 rtl:space-x-reverse">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="أدخل بريدك الإلكتروني"
              className="form-input flex-1"
              required
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              {isLoading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              ) : (
                <>
                  <Send size={20} />
                  <span>اشترك</span>
                </>
              )}
            </button>
          </div>
        </form>
        
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          نحن نحترم خصوصيتك ولن نشارك بريدك الإلكتروني مع أطراف ثالثة
        </p>
      </div>
    </section>
  );
};

export default Newsletter;

