import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaCode, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Contact = () => {
  const linkedInURL = 'https://www.linkedin.com/in/aaquib-asrar/'
  const githubURL = 'https://github.com/Aaquib07'
  const leetcodeURL = 'https://leetcode.com/Aaquib_16/'

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 dark:bg-zinc-900 min-h-screen py-10">
        <div className="flex flex-col items-center">
          <h1 className="desktop:text-5xl dark:text-white font-bold tablet:text-5xl mobile:text-3xl tablet:mb-4">"United We Stand, Divided We Fall"</h1>
          <p className="desktop:text-2xl text-gray-800 dark:text-slate-200 tablet:text-3xl mobile:text-lg">So, let's get connected and Stand Together</p>
        </div>
        <div className='flex mobile:flex-col tablet:flex-col justify-around items-center desktop:mt-10 mobile:mt-10 tablet:mt-28'>
          <div className="bg-rose-200 dark:bg-emerald-900 shadow-lg rounded-lg p-10 w-full max-w-lg transition tablet:hover:scale-110 desktop:hover:scale-110 duration-300 ease-in-out mb-8 tablet:mb-20">
            <h2 className="text-gray-800 dark:text-slate-300 desktop:text-3xl tablet:text-4xl font-bold mb-4">Social Profiles</h2>
            <div className='flex flex-col'>
              <Link to={githubURL} target='_blank' rel='noopener noreferrer' className='text-gray-500 dark:text-slate-300 hover:text-gray-700 flex items-center gap-2 transition duration-300 tablet:hover:scale-105 desktop:hover:scale-105'>
                <FaGithub />
                <span className='desktop:text-lg mobile:text-lg tablet:text-2xl'>GitHub</span>
              </Link>
              <Link to={linkedInURL} target='_blank' rel='noopener noreferrer' className='text-gray-500 dark:text-slate-300 hover:text-gray-700 flex items-center gap-2 transition duration-300 tablet:hover:scale-105 desktop:hover:scale-105'>
                <FaLinkedin />
                <span className='desktop:text-lg mobile:text-lg tablet:text-2xl'>LinkedIn</span>
              </Link>
              <Link to={leetcodeURL} target='_blank' rel='noopener noreferrer' className='text-gray-500 dark:text-slate-300 hover:text-gray-700 flex items-center gap-2 transition duration-300 tablet:hover:scale-105 desktop:hover:scale-105'>
                <FaCode />
                <span className='desktop:text-lg mobile:text-lg tablet:text-2xl'>LeetCode</span>
              </Link>
            </div>
          </div>
          <div className="bg-rose-200 dark:bg-emerald-900 shadow-lg rounded-lg p-10 w-full max-w-lg transition tablet:hover:scale-105 desktop:hover:scale-105 duration-300 ease-in-out">
            <h2 className="text-gray-800 dark:text-slate-300 desktop:text-3xl tablet:text-4xl font-bold mb-4">Drop a Mail</h2>
            <p className='text-gray-800 dark:text-slate-300 desktop:text-lg mobile:text-lg tablet:text-2xl mb-2'>Let's get connected to build a better world!</p>
            <Link to={'mailto:aaquibasrar4@gmail.com'} className='flex items-center text-gray-500 text-base gap-2 dark:text-slate-300 hover:text-gray-700 transition duration-300 tablet:hover:scale-105 desktop:hover:scale-105'>
              <MdOutlineEmail />
              <span className='desktop:text-lg mobile:text-lg tablet:text-2xl'>aaquibasrar4@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
