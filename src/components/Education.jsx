import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Education = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 dark:bg-zinc-900 flex justify-center items-center h-screen">
        <div className="bg-rose-200 dark:bg-emerald-900 shadow-lg rounded-lg p-6 mb-6 max-w-lg">
          <h2 className="text-2xl dark:text-white font-bold mb-4">Education</h2>
          <div className="mb-4">
            <h3 className="text-slate-200 dark:text-slate-300 text-lg font-semibold mb-2">University of Example</h3>
            <p className="text-gray-600 dark:text-slate-300 mb-2">Bachelor of Science in Computer Science</p>
            <p className="text-gray-600 dark:text-slate-300 mb-2">Major: Computer Science</p>
            <p className="text-gray-600 dark:text-slate-300">Relevant Coursework: Data Structures, Algorithms, Web Development</p>
          </div>
        </div>
      </div>
    <Footer />
    </div>
  );;
};

export default Education;
