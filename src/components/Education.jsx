import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 dark:bg-zinc-900 flex flex-col items-center gap-10 min-h-screen py-10">
        <motion.h1 
          className='dark:text-slate-200 text-5xl font-bold mb-12 text-center'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h1>
        <div className="flex flex-wrap justify-around gap-10 w-full px-4">
          <motion.div 
            className="bg-rose-200 dark:bg-emerald-900 shadow-lg rounded-lg p-10 w-96"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.18 }}
          >
            <h3 className="text-gray-800 dark:text-slate-300 text-2xl font-semibold mb-4">
              Indian Institute of Engineering Science and Technology, Shibpur
            </h3>
            <p className="text-gray-600 dark:text-slate-300 text-xl mb-4">
              Bachelor of Technology
            </p>
            <p className="text-gray-600 dark:text-slate-300 text-xl mb-4">
              Computer Science
            </p>
            <p className="text-gray-600 dark:text-slate-300 text-xl">
              Duration: 2020 to 2024
            </p>
          </motion.div>
          <motion.div 
            className="bg-rose-200 dark:bg-emerald-900 shadow-lg rounded-lg p-10 w-96"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.18 }}
          >
            <h3 className="text-gray-800 dark:text-slate-300 text-2xl font-semibold mb-4">
              Relevant Coursework
            </h3>
            <ul className="list-disc pl-5">
              <li className="text-gray-600 dark:text-slate-300">Data Structures</li>
              <li className="text-gray-600 dark:text-slate-300">Algorithms</li>
              <li className="text-gray-600 dark:text-slate-300">Machine Learning</li>
              <li className="text-gray-600 dark:text-slate-300">Artificial Intelligence</li>
              <li className="text-gray-600 dark:text-slate-300">Database Management System</li>
              <li className="text-gray-600 dark:text-slate-300">Operating Systems</li>
              <li className="text-gray-600 dark:text-slate-300">Computer Networks</li>
            </ul>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Education;
