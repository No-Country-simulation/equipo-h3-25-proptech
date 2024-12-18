import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../assets';
import useAuthStore from '../../store/authStore';

const Links = ({userLogged}: { userLogged: boolean }) => {
  console.log(userLogged)
  return <>
    <Link to="/financiamiento">Financiamiento</Link>
    <Link to="/inversion">Inversión</Link>
    <Link to="/usuarios">Usuarios</Link>
    <Link to="/ayuda">Ayuda</Link>
    <Link to="/acerca-de">Acerca de</Link>
    <div className="flex gap-4">
      {!userLogged && <Link to="/login" className="py-2 px-5 rounded-xl bg-primary-400 text-white text-center">Login</Link>}
      {userLogged && <Link to="/dashboard" className="py-2 px-5 rounded-xl bg-white text-black text-center">Dashboard</Link>}
    </div>
  </>
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { userLogged } = useAuthStore.getState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between p-5 px-10 mx-auto bg-neutral-900 sticky top-0 backdrop-blur-md z-50 text-white">
      <Link to="/">
        <img src={logo} alt="Logo" className="w-16 h-16" />
      </Link>

      <nav className={` ${isMenuOpen ? 'flex ' : 'hidden'} absolute right-1 pt-24 top-1 flex-col gap-7 items-right space-x-4 p-10 text-right bg-neutral-800 md:hidden rounded-xl backdrop-blur-md z-50`}>
        <Links userLogged={userLogged}/>
      </nav>

      <nav className="hidden md:flex items-center space-x-4 lg:gap-10  xl:gap-20">
        <Links userLogged={userLogged}/>
      </nav>

      <div className="md:hidden absolute right-1 top-1 h-5/6 aspect-square z-50">
        <button type='button' title="Toggle Menu" onClick={toggleMenu} className="w-full h-full text-white flex items-center justify-center rounded-xl focus:outline-none hover:bg-neutral-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 aspect-square" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div className="absolute left-0 -bottom-1 bg-gradient-yellow w-full h-1"></div>
    </header>
  );
};

export default Header;
