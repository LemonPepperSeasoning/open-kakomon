import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

const lngs = {
    en: {nativeName: "English"},
    jp: {naviveName: "Japanese"}
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
        en:{
            translation:{
                "title": "langugage in English",
                "search_title": "Search for University Exam Papers"
            }
        },
        jp: {
            translation: {
                "title": "langugage in Japanese",
                "search_title": "大学の名前を調べてみよう。"
            }
        }
    },
    
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },

    detection: {
        order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

        // cache user language on
        caches: ['localStorage', 'cookie'],
    }
  });