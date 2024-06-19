import React from "react";
import { useTranslation } from "react-i18next";
import immagineSito from "../../assets/immagineSito.jpg";

function Home() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-row items-start justify-between h-full text-gray-800">
            <div className="h-full flex justify-end items-start ml-14">
                <img
                    src={immagineSito}
                    alt="Mia Foto"
                    className="rounded-lg mt-8 mr-8 w-auto h-auto max-h-60 max-w-full"
                />
            </div>
            <div className="w-full p-8">
                <h1 className="text-4xl font-bold mb-4">{t('home.title')}</h1>
                <p className="text-lg mb-8">{t('home.profession')}</p>
            </div>
        </div>
    );
}

export default Home;
