import { SiUdemy } from "react-icons/si";
import React from 'react';

const UdemyCourseItem = ({ testo, sottotesto, pdfPath }) => {
    const handleDownloadpdf = () => {
        window.open(pdfPath, '_blank');
    };

    return (
        <li className="flex items-start py-4 hover:text-primary-lighter hover:cursor-pointer" onClick={() => handleDownloadpdf()}>
            <div className="flex-none flex items-center justify-start h-full">
                <SiUdemy size={20} className="mr-2 mt-1" /> 
            </div>
            <div className="ml-4">
                <div className="text-lg mb-1">{testo}</div> 
                <div className="text-sm text-primary-lighter mb-1">{sottotesto}</div> 
            </div>
        </li>
    );
};

export default UdemyCourseItem;
