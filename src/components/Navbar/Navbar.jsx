import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa'; // Importa l'icona delle tre lineette

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-primary p-4">
      <div className="flex justify-between items-center px-4">
        <Link className="text-white text-xl font-bold ml-5" to="/my-site">Diego Nosari</Link>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="navbar-toggler focus:outline-none">
            <FaBars className="text-white" size={24} />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-12 bg-white shadow-lg rounded-lg p-4">
              <LanguageSelector />
              <div className="mt-4">
                <Link onClick={toggleMenu} className="text-gray-800 text-lg block py-2 hover:text-blue-200 transition duration-300" to="/my-site/">{t('profile.title')}</Link>
                <Link onClick={toggleMenu} className="text-gray-800 text-lg block py-2 hover:text-blue-200 transition duration-300" to="/my-site/jobs">{t('jobs.title')}</Link>
                <Link onClick={toggleMenu} className="text-gray-800 text-lg block py-2 hover:text-blue-200 transition duration-300" to="/my-site/education">{t('education.title')}</Link>
              </div>
            </div>
          )}
        </div>
        <div className="hidden lg:flex space-x-4 mr-5 items-center">
          <LanguageSelector />
          <div className="flex space-x-4">
            <Link className="text-white text-lg px-3 py-2 hover:text-blue-200 transition duration-300" to="/my-site/">{t('profile.title')}</Link>
            <Link className="text-white text-lg px-3 py-2 hover:text-blue-200 transition duration-300" to="/my-site/jobs">{t('jobs.title')}</Link>
            <Link className="text-white text-lg px-3 py-2 hover:text-blue-200 transition duration-300" to="/my-site/education">{t('education.title')}</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
