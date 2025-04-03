import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';

const translations = {
  en: { login: "Login", register: "Register", connect: "Connect to Best Server" },
  de: { login: "Anmelden", register: "Registrieren", connect: "Mit bestem Server verbinden" },
  hi: { login: "लॉगिन", register: "रजिस्टर", connect: "सर्वश्रेष्ठ सर्वर से कनेक्ट करें" }
};

const i18n = new I18n(translations);
i18n.locale = Localization.locale;
i18n.fallbacks = true;

export { i18n };
