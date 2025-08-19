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
          "jobs.title": "Career",
          "education.title": "Education",
          "education.title1": "Academic Titles",
          "education.title2": "Certified courses",
          "education.degree1Vote": "March 2021 - Final grade: 104",
          "profile.title": "Profile",
          "home.downloadCV": "Download CV",
          "home.englishCV": "English",
          "home.italianCV": "Italian",
          "profile.title2": "Professional experiences",
          "profile.contacts": "Contacts:",
          "profile.edalabDates": "(October 2022 - July 2023)",
          "profile.skillDates": "(August 2023 - April 2025)",
          "profile.replyConnectDates": "(April 2025 - today)",
          "profile.FMDates": "(February 2016 - March 2016)",
          "profile.edalabDesc": "In Edalab I was responsible for frontend development using React, backend development using NestJS, and database management using MongoDB.",
          "profile.skillDesc": "In Skill I am responsible for frontend development using React, sporadically backend development using Java, and testing using Cypress for frontend and Postman for backend.",
          "profile.replyDesc": "At Reply Connect, I am responsible for developing solutions in the IoT field. More specifically, at the moment my main purpose is writing a JavaScript library that summarizes and generalizes the behavior of four different applications (built with React and React Native)",
          "home.profession": "I am a Front End Developer with 3 years of experience in the field. I have worked on several projects, gaining skills in React and Front End development in general, including testing phases with Cypress and Postman.",
          "home.profession2": "What I am most passionate about in this job is that I see it as a game and a continuous challenge to overcome obstacles. Every project represents an opportunity to improve and refine my skills, finding great satisfaction in solving complex problems and creating intuitive and engaging user experiences.",
          "home.profession3": "My goal is to continue developing my skills in a dynamic and stimulating environment, contributing to the success of projects and the growth of the company I collaborate with. I am particularly interested in new technologies and innovations in the field of web development.",
          "education.degree1Text": "Bachelor's degree in Computer Science and Technology - Università di Verona",
          "education.degree2Text": "Diploma in Computer Science and Telecommunications - IIS L. Cerebotani Lonato (BS)",

        }
      },
      it: {
        translation: {
          "jobs.title": "Carriera",
          "education.title": "Formazione",
          "education.title1": "Titoli Accademici",
          "education.title2": "Corsi certificati",
          "education.degree1Vote": "Marzo 2021 - Voto: 104",
          "profile.title": "Profilo",
          "home.downloadCV": "Scarica CV",
          "home.englishCV": "Inglese",
          "home.italianCV": "Italiano",
          "profile.title2": "Esperienze professionali",
          "profile.edalabDates": "(Ottobre 2022 - Luglio 2023)",
          "profile.skillDates": "(Agosto 2023 - Aprile 2025)",
          "profile.replyConnectDates": "(Aprile 2025 - in corso)",
          "profile.FMDates": "(Febbraio 2016 - Marzo 2016)",
          "profile.edalabDesc": "In Edalab mi occupavo della gestione del frontend tramite l'utilizzo di React, dello sviluppo del backend tramite NestJS e della gestione del database tramite MongoDB",
          "profile.skillDesc": "In Skill mi occupo dello sviluppo del frontend tramite React, sporadicamente dello sviluppo del backend tramite Java e della parte di testing con Cypress per quello che riguarda il front e con Postman per quello che riguarda il back",
          "profile.replyDesc": "In Reply Connect mi occupo di sviluppare soluzioni nell’ambito dell’IoT. Più nello specifico, al momento il mio obiettivo principale è scrivere una libreria JavaScript che riassume e generalizza il comportamento di quattro diverse applicazioni (sviluppate con React e React Native).",
          "profile.contacts": "Contatti:",
          "home.profession": "Sono un Front End Developer con 3 anni di esperienza nel settore. Ho lavorato su diversi progetti, acquisendo competenze in React e nello sviluppo Front End in generale, comprese le fasi di testing con Cypress e Postman.",
          "home.profession2": "Ciò che mi appassiona di più di questo lavoro è il fatto che lo interpreto come un gioco e una sfida continua a superare ostacoli. Ogni progetto rappresenta un'opportunità per migliorare e affinare le mie abilità, trovando grande soddisfazione nel risolvere problemi complessi e nel creare esperienze utente intuitive e coinvolgenti.",
          "home.profession3": "Il mio obiettivo è continuare a sviluppare le mie competenze in un ambiente dinamico e stimolante, contribuendo al successo dei progetti e alla crescita dell'azienda con cui collaboro. Sono particolarmente interessato a nuove tecnologie e innovazioni nel campo dello sviluppo web.",
          "education.degree1Text": "Laurea triennale in Scienze e Tecnologie Informatiche - Università di Verona",
          "education.degree2Text": "Diploma in Informatica e Telecomunicazioni - IIS L. Cerebotani Lonato (BS)",

        }
      }
    },
    fallbackLng: 'en', 
    debug: true, 
    interpolation: {
      escapeValue: false, 
    },
    react: {
      wait: true,
    }
  });

export default i18n;
