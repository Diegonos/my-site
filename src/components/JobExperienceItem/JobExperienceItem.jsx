import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const JobExperienceItem = ({ testo, sottotesto, tags, desc }) => {
    return (
        <li className="flex items-start py-4 ">
            <div className="flex-none flex items-center justify-start h-full">
                <FaBriefcase size={20} className="mr-2 mt-1" />
            </div>
            <div className="ml-4">
                <div className="text-lg mb-1">{testo}</div> 
                <div className="text-sm text-primary-lighter mb-1">{sottotesto}</div> 
                <div className="text-base text-primary mb-3">{desc}</div> 
                <div className="flex flex-wrap gap-2"> 
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-primary text-white px-2 py-1 rounded-full text-xs">{tag}</span> 
                    ))}
                </div>
            </div>
        </li>
    );
};

export default JobExperienceItem;
