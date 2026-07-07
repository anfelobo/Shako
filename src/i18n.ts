import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en/common.json'
import es from './locales/es/common.json'

const detectorOptions = {
  order: ['localStorage', 'navigator', 'htmlTag'],
  lookupLocalStorage: 'app-language',
  caches: ['localStorage'],
  checkWhitelist: true,
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      es: { common: es },
    },
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    ns: ['common'],
    defaultNS: 'common',
    detection: detectorOptions,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  })

if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language || 'es'
}

i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng
  }
})

export default i18n
