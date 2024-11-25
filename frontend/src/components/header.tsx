import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {


  return (
    <header className="flex items-center justify-between p-5 px-10 mx-auto bg-gray-300/20 sticky top-0 backdrop-blur-md z-50">
      <Link to="/">
        <img src={logo} alt="Logo" className="w-36 min-w-36" />
      </Link>
      <nav className="flex items-center space-x-4">
        <Link to="/financiamiento" className="" >Financiamiento </Link>
        <Link to="/inversiones" >inversiones </Link>
        <Link to="/usuarios" >Usuarios </Link>
        <Link to="/ayuda" >Ayuda </Link>
        <Link to="/acerca-de" >Acerca de </Link>
        <Link to="/login" className="py-2 px-5 rounded-xl bg-brand-light text-shadow-2xl text-white" > Login </Link>
      </nav>
    </header>
  );
};

export default Header;