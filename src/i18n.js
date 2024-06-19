// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "home.title": "Home Page",
          "home.welcome": "Buongiorno! Welcome to my homepage..",
          "home.profession": "Buongiorno! Welcome to my homepage..",
          // Aggiungi qui tutte le traduzioni per la lingua inglese
        }
      },
      it: {
        translation: {
          "home.title": "Pagina Principale",
          "home.welcome": "Buongiorno! Benvenuti alla mia homepage..",
          "home.profession": "Sono un Front End Developer con 2 anni di esperienza nel settore. Ho lavorato su diversi progetti, acquisendo competenze in React e nello sviluppo Front End in generale, comprese le fasi di testing con Cypress e Postman. \n\n Ciò che mi appassiona di più di questo lavoro è il fatto che lo interpreto come un gioco e una sfida continua a superare ostacoli. Ogni progetto rappresenta un'opportunità per migliorare e affinare le mie abilità, trovando grande soddisfazione nel risolvere problemi complessi e nel creare esperienze utente intuitive e coinvolgenti.\n\n Il mio obiettivo è continuare a sviluppare le mie competenze in un ambiente dinamico e stimolante, contribuendo al successo dei progetti e alla crescita dell'azienda con cui collaboro. Sono particolarmente interessato a nuove tecnologie e innovazioni nel campo dello sviluppo web.",
          // Aggiungi qui tutte le traduzioni per la lingua italiana
        }
      }
    },
    fallbackLng: 'en', // Lingua di fallback nel caso in cui la lingua rilevata non sia supportata
    debug: true, // Abilita la modalità debug per i18next
    interpolation: {
      escapeValue: false, // Evita l'escape automatico dei valori
    },
    react: {
      wait: true,
    }
  });

export default i18n;
