import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const EducationalExperienceItem = ({ testo, sottotesto, tags }) => {
    return (
        <li className="flex items-center">
            {/* Icona */}
            <div className="flex-none flex items-center justify-center h-full">
                <FaBriefcase size={20} className="mr-2" />
            </div>
            {/* Testo, sottotesto e tags */}
            <div className="ml-4 w-4/5 md:w-auto">
                {/* Testo principale */}
                <p className="text-lg mb-2">{testo}</p>
                {/* Sottotesto */}
                <p className="text-primary-lighter mb-2">{sottotesto}</p>
                {/* Tags */}
                <div className="flex space-x-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-primary text-white px-2 py-1 rounded-full text-sm">{tag}</span>
                    ))}
                </div>
            </div>
        </li>
    );
};

export default EducationalExperienceItem;
