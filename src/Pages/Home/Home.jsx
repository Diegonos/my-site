import React from "react";
import { useTranslation } from "react-i18next";
import immagineSito from "../../assets/immagineSito.jpg";
import { FaLinkedin } from 'react-icons/fa'; 
import EducationalExperienceItem from "../../components/EducationalExperienceItem/EducationalExperienceItem";

function Home() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between h-full text-gray-800">
            <div className="lg:h-full flex flex-col justify-start items-center lg:ml-14">
                <img
                    src={immagineSito}
                    alt="Mia Foto"
                    className="rounded-xl mt-8 lg:mt-0 w-auto h-auto max-h-60 max-w-full"
                />
                <div className="mt-4 flex flex-col lg:flex-row lg:items-center">
                    <a href="https://www.linkedin.com/in/tuo-profilo" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light">
                        <FaLinkedin size={32} />
                    </a>
                </div>
                <p className="mt-4">Contatti:</p>
                <a href="mailto:diego_nos@hotmail.it" className="mt-2 text-primary hover:text-primary-light font-bold">
                    diego_nos@hotmail.it
                </a>
            </div>
            <div className="w-full lg:w-2/3 p-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t('profile.title')}</h1>
                <p className="text-lg mb-8">{t('home.profession')}</p>
                <p className="text-lg mb-8">{t('home.profession2')}</p>
                <p className="text-lg mb-8">{t('home.profession3')}</p>
                <h2 className="text-3xl font-bold mb-4">{t('profile.title2')}</h2>
                <ul className="flex flex-col">
                    <EducationalExperienceItem testo={"Questa è una prova di testo"} sottotesto={"Questa è una prova di sottotesto"} tags={["test1", "test2"]}/>
                    <EducationalExperienceItem testo={"Questa è una prova di testo"} sottotesto={"Questa è una prova di sottotesto"} tags={["test1", "test2"]}/>
                    <EducationalExperienceItem testo={"Questa è una prova di testo"} sottotesto={"Questa è una prova di sottotesto"} tags={["test1", "test2"]}/>
                </ul>
            </div>
        </div>
    );
}

export default Home;
