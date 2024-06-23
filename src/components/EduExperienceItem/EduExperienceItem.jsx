import React from 'react';
import { GrCertificate } from "react-icons/gr";

const EduExperienceItem = ({ testo, sottotesto }) => {
    return (
        <li className="flex items-start py-4 ">
            <div className="flex-none flex items-center justify-start h-full">
                <GrCertificate size={20} className="mr-2 mt-1" /> 
            </div>
            <div className="ml-4">
                <div className="text-lg mb-1">{testo}</div> 
                <div className="text-sm text-primary-lighter mb-1">{sottotesto}</div> 
            </div>
        </li>
    );
};

export default EduExperienceItem;
