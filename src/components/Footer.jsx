import React from 'react';
import { FaLinkedinIn, FaGithub, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const linkedInURL = 'https://www.linkedin.com/in/aaquib-asrar/'
    const githubURL = 'https://github.com/Aaquib07'
    const leetcodeURL = 'https://leetcode.com/Aaquib_16/'
  return (
    <div className="bg-slate-800 dark:bg-black text-white p-4 bottom-0">
      <div className="mx-auto flex justify-between px-4 items-center">
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
          <Link to={leetcodeURL} target='_blank' className="mx-2">
            <FaCode className="hover:text-gray-400" />
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