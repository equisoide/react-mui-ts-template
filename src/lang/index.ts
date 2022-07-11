/**
 * react-i18next is a powerful internationalization framework for
 * React/ReactNative which is based on i18next.
 * Learn more: https://react.i18next.com
 */

// External imports
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Local imports
import resourcesEn from './resources.en.json';
import resourcesEs from './resources.es.json';

// Init the i18next module with the resource files
const initI18n = () => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translations: { ...resourcesEn },
        },
        es: {
          translations: { ...resourcesEs },
        },
      },
      fallbackLng: 'en',
      debug: false,
      ns: ['translations'],
      defaultNS: 'translations',
      keySeparator: false,
      interpolation: {
        escapeValue: false,
      },
    });
};

// Default export
export default initI18n;
