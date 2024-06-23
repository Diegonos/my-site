import React from "react";
import { useTranslation } from "react-i18next";
import EduExperienceItem from "../../components/EduExperienceItem/EduExperienceItem";
import UdemyCourseItem from "../../components/UdemyCourseItem/UdemyCourseItem";
import cypressCertificate from "../../assets/UdemyCertificateCypress.pdf";

function Education() {
    const { t } = useTranslation();
    return (
        <div className="lg:pt-5 lg:px-10">
            <h2 className="text-4xl font-bold mb-4 lg:mb-14">{t('education.title')}</h2>
            <h2 className="text-3xl font-bold mb-4 lg:mb-14">{t('education.title1')}</h2>
            <ul className="flex flex-col">
                <div className="border-b border-gray-200">
                    <EduExperienceItem testo={t('education.degree1Text')} sottotesto={t('education.degree1Vote')}/>
                </div>
                <EduExperienceItem testo={t('education.degree2Text')}  />
            </ul>
            <h2 className="text-3xl font-bold mb-4 mt-14 lg:mb-14">{t('education.title2')}</h2>
            <ul className="flex flex-col">
                <UdemyCourseItem testo={"Cypress End-to-End Testing - Getting Started"} sottotesto={"Author: Maximilian Schwarzmüller"} pdfPath={cypressCertificate}/>
            </ul>
        </div>
    );
}

export default Education;
