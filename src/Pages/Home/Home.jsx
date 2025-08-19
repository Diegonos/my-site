import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import immagineSito from "../../assets/immagineSito.jpg";
import cvIta from "../../assets/Diego_Nosari_CV_ita.pdf";
import cvEng from "../../assets/Diego_Nosari_CV_eng.pdf";
import { FaLinkedin, FaFileDownload, FaGithub, FaGoodreads } from 'react-icons/fa'; 

function Home() {
    const { t } = useTranslation();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleDownloadCV = (lang) => {
        let cvUrl = lang === 'italiano' ? cvIta : cvEng;
        window.open(cvUrl, '_blank');
        setDropdownOpen(false);
    };

    return (
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between h-full text-gray-800">
            <div className="lg:h-full flex flex-col justify-start items-center lg:ml-14">
                <img
                    src={immagineSito}
                    alt="MyImage"
                    className="rounded-xl mt-8 lg:mt-12 w-auto h-auto max-h-60 max-w-full"
                />
                <div className="mt-4 flex flex-row items-center">
                    <a href="https://www.goodreads.com/user/show/191215811-diego" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-lighter">
                        <FaGoodreads size={32} />
                    </a>
                    <a href="https://www.linkedin.com/in/diego-nosari/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-lighter ml-4">
                        <FaLinkedin size={32} />
                    </a>
                    <a href="https://github.com/Diegonos/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-lighter ml-4">
                        <FaGithub size={32} />
                    </a>
                </div>
                <div className="relative mt-3">
                    <button onClick={toggleDropdown} className="flex items-center text-primary hover:text-primary-lighter">
                        <FaFileDownload size={20} className="mr-1" />
                        {t('home.downloadCV')}
                    </button>
                    {dropdownOpen && (
                        <ul className="absolute bg-white shadow-md rounded mt-1 w-40">
                            <li onClick={() => handleDownloadCV('italiano')} className="cursor-pointer px-4 py-2 hover:bg-gray-100">{t('home.italianCV')}</li>
                            <li onClick={() => handleDownloadCV('english')} className="cursor-pointer px-4 py-2 hover:bg-gray-100">{t('home.englishCV')}</li>
                        </ul>
                    )}
                </div>
                <p className="mt-4">{t('profile.contacts')}</p>
                <a href="mailto:diego_nos@hotmail.it" className="mt-2 text-primary hover:text-primary-lighter font-bold">
                    diego_nos@hotmail.it
                </a>
            </div>
            <div className="w-full lg:w-2/3 p-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 lg:mb-16">{t('profile.title')}</h1>
                <p className="text-xl mb-8 lg:mr-40">{t('home.profession')}</p>
                <p className="text-xl mb-8 lg:mr-40">{t('home.profession2')}</p>
                <p className="text-xl mb-8 lg:mr-40">{t('home.profession3')}</p>
            </div>
        </div>
    );
}

export default Home;
