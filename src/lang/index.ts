// react-i18next is a powerful internationalization framework for
// React / React Native which is based on i18next.
// Learn more: https://react.i18next.com
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resourcesEn from './resources.en.json';
import resourcesEs from './resources.es.json';

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

export default initI18n;
