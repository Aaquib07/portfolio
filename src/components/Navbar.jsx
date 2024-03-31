import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { DarkModeContext } from "../context/DarkModeContext";
import { IoSunnyOutline } from "react-icons/io5";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const handleToggle = () => {
    toggleDarkMode();
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="flex items-center justify-between p-6 sticky top-0 bg-white dark:bg-black dark:text-white z-50 border-b-2 border-b-blue-500 dark:border-b-2 dark:border-b-slate-700">
      <div className="flex justify-center items-center gap-8">
        <Link to={'/'}>
          <h1 className="text-2xl font-bold">Aaquib Asrar</h1>
        </Link>
        {darkMode ? <IoSunnyOutline className="cursor-pointer" onClick={handleToggle} /> : <FaMoon className="cursor-pointer" onClick={handleToggle} />}
      </div>
      <div>
        <NavLink to={'/'} className="ml-4 text-lg hover:bg-blue-500 hover:text-white px-2 py-1 rounded transition hover:scale-105 duration-300 ease-in-out">
          Home
        </NavLink>
        <NavLink to={'/about'} className="ml-4 text-lg hover:bg-blue-500 hover:text-white px-2 py-1 rounded transition hover:scale-105 duration-300 ease-in-out">
          About
        </NavLink>
        <NavLink to={'/projects'} className="ml-4 text-lg hover:bg-blue-500 hover:text-white px-2 py-1 rounded transition hover:scale-105 duration-300 ease-in-out">
          Projects
        </NavLink>
        <NavLink to={'/education'} className="ml-4 text-lg hover:bg-blue-500 hover:text-white px-2 py-1 rounded transition hover:scale-105 duration-300 ease-in-out">
          Education
        </NavLink>
        <NavLink to={'/contact'} className="ml-4 text-lg hover:bg-blue-500 hover:text-white px-2 py-1 rounded transition hover:scale-105 duration-300 ease-in-out">
          Contact
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;