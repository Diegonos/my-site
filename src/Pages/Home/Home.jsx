import React from "react";
import { useTranslation } from "react-i18next";
import immagineSito from "../../assets/immagineSito.jpg";
import { FaLinkedin } from 'react-icons/fa'; // Assicurati di avere installato react-icons se non l'hai già fatto

function Home() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-row items-start justify-between h-full text-gray-800">
            <div className="h-full flex flex-col justify-start items-center ml-14">
                <img
                    src={immagineSito}
                    alt="Mia Foto"
                    className="rounded-xl mt-8 mr-8 w-auto h-auto max-h-60 max-w-full"
                />
                <a href="https://www.linkedin.com/in/tuo-profilo" target="_blank" rel="noopener noreferrer" className="mt-4 text-primary hover:text-primary-light">
                    <FaLinkedin size={32} />
                </a>
                <p className="mt-4">Contatti:</p>
                <a href="mailto:diego_nos@hotmail.it" className="mt-2 text-primary hover:text-primary-lighter font-bold ">
                    diego_nos@hotmail.it
                </a>
            </div>
            <div className="w-full p-8">
                <h1 className="text-4xl font-bold mb-4">{t('profile.title')}</h1>
                <p className="text-lg mb-8">{t('home.profession')}</p>
            </div>
        </div>
    );
}

export default Home;