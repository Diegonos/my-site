import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="bg-primary p-4">
      <div className="flex justify-between items-center px-4">
        <Link className="text-white text-xl font-bold ml-5" to="/">Diego Nosari</Link>
        <div className="block lg:hidden">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="hidden lg:flex space-x-4 mr-5 ">
          <LanguageSelector />
          <Link className="text-white text-lg px-3 py-2 hover:text-blue-200 transition duration-300" to="/my-site/">{t('profile.title')}</Link>
          <Link className="text-white text-lg px-3 py-2 hover:text-blue-200 transition duration-300" to="/my-site/about">About</Link>
          <Link className="text-white text-lg px-3 py-2 hover:text-blue-200 transition duration-300" to="/my-site/services">Services</Link>
          <Link className="text-white text-lg px-3 py-2 hover:text-blue-200 transition duration-300" to="/my-site/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
