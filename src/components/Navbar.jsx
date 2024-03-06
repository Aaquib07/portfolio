import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="flex items-center justify-between p-6 sticky top-0 bg-white z-50 border-2 border-b-blue-500">
        <Link to={'/'}>
          <h1 className="text-xl font-bold">Aaquib Asrar</h1>
        </Link>
        <div>
          <Link to={'/'} className="ml-4 text-lg hover:bg-blue-500 hover:text-white px-2 py-1 rounded transition-all duration-300">
            Home
          </Link>
          <Link to={'/about'} className="ml-4 text-lg hover:bg-blue-500 hover:text-white px-2 py-1 rounded transition-all duration-300">
            About
          </Link>
          <Link to={'/projects'} className="ml-4 text-lg hover:bg-blue-500 hover:text-white px-2 py-1 rounded transition-all duration-300">
            Projects
          </Link>
          <Link to={'/contact'} className="ml-4 text-lg hover:bg-blue-500 hover:text-white px-2 py-1 rounded transition-all duration-300">
            Contact
          </Link>
        </div>
      </div>
  );
};
export default Navbar;