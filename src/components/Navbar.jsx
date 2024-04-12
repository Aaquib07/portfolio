import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { DarkModeContext } from "../context/DarkModeContext";
import { IoSunnyOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const [ showMenu, setShowMenu ] = useState(false)
  const handleToggle = () => {
    toggleDarkMode();
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }

  const handleMenuToggle = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="flex items-center justify-between w-full p-6 sticky top-0 bg-white dark:bg-black dark:text-white z-50 border-b-2 border-b-blue-500 dark:border-b-2 dark:border-b-slate-700">
      <div className="flex justify-center items-center gap-8">
        <Link to={'/'}>
          <h1 className="text-2xl font-bold">Aaquib Asrar</h1>
        </Link>
        {darkMode ? <IoSunnyOutline className="cursor-pointer" onClick={handleToggle} /> : <FaMoon className="cursor-pointer" onClick={handleToggle} />}
      </div>
      <div className="hidden desktop:flex">
        <NavLink to={'/'} className="ml-4 text-lg hover:bg-blue-500 hover:text-white px-2 py-1 rounded">
          Home
        </NavLink>
        <NavLink to={'/about'} className="ml-4 text-lg hover:bg-blue-500 hover:text-white px-2 py-1 rounded">
          About
        </NavLink>
        <NavLink to={'/projects'} className="ml-4 text-lg hover:bg-blue-500 hover:text-white px-2 py-1 rounded">
          Projects
        </NavLink>
        <NavLink to={'/education'} className="ml-4 text-lg hover:bg-blue-500 hover:text-white px-2 py-1 rounded">
          Education
        </NavLink>
        <NavLink to={'/contact'} className="ml-4 text-lg hover:bg-blue-500 hover:text-white px-2 py-1 rounded">
          Contact
        </NavLink>
      </div>
      <div className="desktop:hidden">
        <GiHamburgerMenu className="cursor-pointer text-xl" onClick={handleMenuToggle} />
        {showMenu && (
          <div>
            <div className="flex flex-col justify-center items-center gap-2 text-xl tablet:text-7xl h-screen w-full absolute top-0 right-0 bg-white dark:bg-black rounded shadow-md">
              <NavLink to={'/'} className='hover:bg-blue-500 hover:text-white py-10 mobile:py-4'>Home</NavLink>
              <NavLink to={'/about'} className='hover:bg-blue-500 hover:text-white py-10 mobile:py-4'>About</NavLink>
              <NavLink to={'/projects'} className='hover:bg-blue-500 hover:text-white py-10 mobile:py-4'>Projects</NavLink>
              <NavLink to={'/education'} className='hover:bg-blue-500 hover:text-white py-10 mobile:py-4'>Education</NavLink>
              <NavLink to={'/contact'} className='hover:bg-blue-500 hover:text-white py-10 mobile:py-4'>Contact</NavLink>
            </div>
            <div className="absolute top-10 right-10">
              <RxCross1 className="cursor-pointer text-4xl mobile:text-2xl" onClick={handleMenuToggle} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;