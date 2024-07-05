import { NODE_ENV } from "@/configs/config";
import i18n from "i18next";
import LanguageDtector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";
import {en} from '@/features/multi-language/translations/en'
import {fa} from '@/features/multi-language/translations/fa'

const resources = {
  en: en,
  fa: fa,
};

// @ts-ignore
//const getUserLanguage = () => window.navigator?.userLanguage || window.navigator.language;
//console.log(getUserLanguage());
i18n
.use(LanguageDtector)
.use(initReactI18next)
.init({
  debug: NODE_ENV === 'development',
  lng: 'en',
  //initImmediate: false,
  //resources,
  resources: {},
  keySeparator: false,
  interpolation: {
    escapeValue: false // react already safes from xss
  },
  //fallbackLng: 'en',
  returnObjects: true,
  //reloadResources: true,
  
});

export default i18n;