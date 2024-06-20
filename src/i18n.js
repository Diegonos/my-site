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
          "profile.title": "Profile",
          "profile.title2": "Educational experiences",
          "home.profession": "I am a Front End Developer with 2 years of experience in the field. I have worked on several projects, gaining skills in React and Front End development in general, including testing phases with Cypress and Postman.",
          "home.profession2": "What I am most passionate about in this job is that I see it as a game and a continuous challenge to overcome obstacles. Every project represents an opportunity to improve and refine my skills, finding great satisfaction in solving complex problems and creating intuitive and engaging user experiences.",
          "home.profession3": "My goal is to continue developing my skills in a dynamic and stimulating environment, contributing to the success of projects and the growth of the company I collaborate with. I am particularly interested in new technologies and innovations in the field of web development.",

          // Aggiungi qui tutte le traduzioni per la lingua inglese
        }
      },
      it: {
        translation: {
          "profile.title": "Profilo",
          "profile.title2": "Esperienze formative",
          "home.profession": "Sono un Front End Developer con 2 anni di esperienza nel settore. Ho lavorato su diversi progetti, acquisendo competenze in React e nello sviluppo Front End in generale, comprese le fasi di testing con Cypress e Postman.",
          "home.profession2": "Ciò che mi appassiona di più di questo lavoro è il fatto che lo interpreto come un gioco e una sfida continua a superare ostacoli. Ogni progetto rappresenta un'opportunità per migliorare e affinare le mie abilità, trovando grande soddisfazione nel risolvere problemi complessi e nel creare esperienze utente intuitive e coinvolgenti.",
          "home.profession3": "Il mio obiettivo è continuare a sviluppare le mie competenze in un ambiente dinamico e stimolante, contribuendo al successo dei progetti e alla crescita dell'azienda con cui collaboro. Sono particolarmente interessato a nuove tecnologie e innovazioni nel campo dello sviluppo web.",
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
