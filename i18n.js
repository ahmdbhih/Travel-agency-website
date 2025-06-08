import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ar: {
        translation: {
          // سيتم تحميل الترجمات لاحقاً
        }
      },
      en: {
        translation: {
          // سيتم تحميل الترجمات لاحقاً
        }
      },
      es: {
        translation: {
          // سيتم تحميل الترجمات لاحقاً
        }
      },
      zh: {
        translation: {
          // سيتم تحميل الترجمات لاحقاً
        }
      }
    }
  });

export default i18n;

