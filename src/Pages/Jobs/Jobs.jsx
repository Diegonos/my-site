import React from "react";
import { useTranslation } from "react-i18next";
import JobExperienceItem from "../../components/JobExperienceItem/JobExperienceItem";

function Jobs() {
    const { t } = useTranslation();
    return (
        <div className="lg:pt-5 lg:px-10">
            <h2 className="text-3xl font-bold mb-4 lg:mb-14">{t('profile.title2')}</h2>
            <ul className="flex flex-col">
                <div className="border-b border-gray-200">
                    <JobExperienceItem testo={"Frontend developer - Reply Connect - Full time"} sottotesto={t('profile.replyConnectDates')} desc={t('profile.replyDesc')} tags={["React", "React native", "Git", "Javascript", "Typescript"]}/>
                </div>
                <div className="border-b border-gray-200">
                    <JobExperienceItem testo={"Frontend developer - Skill SRL - Full time"} sottotesto={t('profile.skillDates')} desc={t('profile.skillDesc')} tags={["React", "Git", "GitLab", "CSS", "SQL", "Javascript", "Typescript", "Java", "Cypress", "Postman"]}/>
                </div>
                <div className="border-b border-gray-200">
                    <JobExperienceItem testo={"Web developer - EDALAB SRL - Part time"} sottotesto={t('profile.edalabDates')} desc={t('profile.edalabDesc')} tags={["NestJS", "React", "Full stack development", "Git", "GitLab", "CSS", "SQL", "Javascript", "Typescript", "MongoDB", "Mockoon"]}/>
                </div>
                <JobExperienceItem testo={"Backend developer and Data analyst - Elettronica FM - (Stage)"} sottotesto={t('profile.FMDates')} tags={["Databases", "SQL"]}/>
            </ul>
        </div>
    );
}

export default Jobs;
