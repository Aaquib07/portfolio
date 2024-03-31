import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Education = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 dark:bg-zinc-900 flex flex-col gap-8 items-center min-h-screen py-10">
        <h2 className="text-5xl dark:text-white font-bold mb-4">Education</h2>
        <div className='flex flex-wrap justify-center gap-16'>
          <div className="flex flex-col justify-around bg-rose-200 dark:bg-emerald-900 shadow-lg rounded-lg p-10 max-w-lg transition hover:scale-110 duration-300 ease-in-out">
              <h3 className="text-gray-800 dark:text-slate-300 text-2xl font-semibold mb-4">Indian Institute of Engineering Science and Technology, Shibpur</h3>
              <p className="text-gray-600 dark:text-slate-300 text-xl mb-4">Bachelor of Technology</p>
              <p className="text-gray-600 dark:text-slate-300 text-xl">Major: Computer Science</p>
          </div>
          <div className="bg-rose-200 dark:bg-green-900 shadow-lg rounded-lg p-10 max-w-lg transition hover:scale-110 duration-300 ease-in-out">
            <h3 className="text-gray-800 dark:text-slate-300 text-2xl font-semibold mb-4">Relevant Coursework</h3>
            <ul className="list-disc pl-5">
              <li className="text-gray-600 dark:text-slate-300">Data Structures</li>
              <li className="text-gray-600 dark:text-slate-300">Algorithms</li>
              <li className="text-gray-600 dark:text-slate-300">Machine Learning</li>
              <li className="text-gray-600 dark:text-slate-300">Artificial Intelligence</li>
              <li className="text-gray-600 dark:text-slate-300">Database Management System</li>
              <li className="text-gray-600 dark:text-slate-300">Operating Systems</li>
              <li className="text-gray-600 dark:text-slate-300">Computer Networks</li>
            </ul>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Education;
