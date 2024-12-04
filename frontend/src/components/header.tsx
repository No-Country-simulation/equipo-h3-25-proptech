import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('lalala', isMenuOpen)
  };

  const closeMenu = (e: MouseEvent) => {
    if (e.target instanceof Element && !e.target.closest('.menu') && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // useEffect(() => {
  //   if (isMenuOpen) {
  //     document.addEventListener('click', closeMenu);
  //   } else {
  //     document.removeEventListener('click', closeMenu);
  //   }
  //   return () => {
  //     document.removeEventListener('click', closeMenu);
  //   };
  // }, [isMenuOpen]);

  return (
    <header className="flex items-center justify-between p-5 px-10 mx-auto bg-neutral-900 sticky top-0 backdrop-blur-md z-50 text-white">
      <Link to="/">
        <img src={logo} alt="Logo" className="w-36 min-w-36" />
      </Link>
      <nav className={` ${isMenuOpen ? 'flex ' : 'hidden'} absolute right-1 pt-20 top-1 flex-col gap-4 items-right space-x-4 p-10 text-right bg-neutral-800 md:hidden rounded-xl backdrop-blur-md z-50`}>
        <Link to="/financiamiento">Financiamiento</Link>
        <Link to="/inversiones">Inversiones</Link>
        <Link to="/usuarios">Usuarios</Link>
        <Link to="/ayuda">Ayuda</Link>
        <Link to="/acerca-de">Acerca de</Link>
        <Link to="/login" className="py-2 px-5 rounded-xl bg-primary-400 text-white text-center">Login</Link>
      </nav>

      <nav className="hidden md:flex items-center space-x-4">
        <Link to="/financiamiento">Financiamiento</Link>
        <Link to="/inversiones">Inversiones</Link>
        <Link to="/usuarios">Usuarios</Link>
        <Link to="/ayuda">Ayuda</Link>
        <Link to="/acerca-de">Acerca de</Link>
        <Link to="/login" className="py-2 px-5 rounded-xl bg-primary-400 text-white">Login</Link>
      </nav>


      <div className="md:hidden absolute right-1 top-1 h-5/6 aspect-square z-50">
        <button type='button' onClick={toggleMenu} className="w-full h-full text-white flex items-center justify-center rounded-xl focus:outline-none hover:bg-neutral-700">
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



// import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.svg';

// const Header = () => {


//   return (
//     <header className="relative flex items-center justify-between p-5 px-10 mx-auto bg-gray-300/20 sticky top-0 backdrop-blur-md z-50">
//       <Link to="/">
//         <img src={logo} alt="Logo" className="w-36 min-w-36" />
//       </Link>
//       <nav className="hidden md:flex items-center space-x-4">
//         <Link to="/financiamiento"  >Financiamiento </Link>
//         <Link to="/inversiones"  >inversiones </Link>
//         <Link to="/usuarios"  >Usuarios </Link>
//         <Link to="/ayuda"  >Ayuda </Link>
//         <Link to="/acerca-de"  >Acerca de </Link>
//         <Link to="/login" className="py-2 px-5 rounded-xl bg-primary-400  text-white" > Login </Link>
//       </nav>

//        <div className="md:hidden absolute right-0 top-0 h-full aspect-square">
//         <button className="w-full h-full text-black flex items-center justify-center focus:outline-none hover:bg-primary-400 ">
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-8 aspect-square " fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;