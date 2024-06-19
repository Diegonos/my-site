import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Chiude il dropdown dopo la selezione della lingua
  };

  return (
    <div className="relative">
      <button
        className="bg-languageSelector text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-1 mt-1"
        style={{ minWidth: '80px' }}
        onClick={() => setIsOpen(!isOpen)} // Cambia lo stato di apertura del dropdown
      >
        <span>{i18n.language.toUpperCase()}</span>
        <svg
          className="w-4 h-4 fill-current text-white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute bg-white rounded-lg shadow-lg mt-2 py-1 w-20">
          <li>
            <button
              className="w-full px-4 py-2 text-left hover:bg-blue-100 focus:outline-none"
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
          </li>
          <li>
            <button
              className="w-full px-4 py-2 text-left hover:bg-blue-100 focus:outline-none"
              onClick={() => changeLanguage('it')}
            >
              IT
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
