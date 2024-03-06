import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const linkedInURL = 'https://www.linkedin.com/in/aaquib-asrar/'
    const githubURL = 'https://github.com/Aaquib07'
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">Aaquib Asrar</h3>
          <p className="text-sm">Creating a better web, one pixel at a time.</p>
        </div>
        <div className="flex gap-4">
          <Link to={linkedInURL} target='_blank' className="mx-2">
            <FaLinkedinIn className="hover:text-blue-600" />
          </Link>
          <Link to={githubURL} target='_blank' className="mx-2">
            <FaGithub className="hover:text-gray-400" />
          </Link>
        </div>
      </div>
      <div className="text-center py-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Aaquib Asrar. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;