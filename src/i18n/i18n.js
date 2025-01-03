import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json' 
import ta from './locales/ta.json'
import hi from './locales/hi.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ta: { translation: ta },
    hi: { translation: hi },
  },
  lng: 'en',
  fallbackLng: 'en',
  debug: true, // Keep this for debugging
  interpolation: { escapeValue: false },
})

export default i18n
