import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const About = () => {

  const resumeURL = 'https://drive.google.com/file/d/1Oo374m8cHlDiR7uzo5oDWFlAolwIiQpQ/view?usp=sharing'

  return (
    <div>
      <Navbar />
      <div className='bg-gray-100 text-gray-800 dark:bg-zinc-900 h-screen py-10 mobile:py-6 tablet:py-10 px-6'>
        <div className="max-w-4xl mx-auto flex flex-col desktop:gap-4 mobile:gap-2 tablet:gap-6">
          <h2 className='dark:text-slate-200 text-5xl tablet:text-5xl mobile:text-3xl font-bold mb-6 mobile:mb-2 tablet:mb-8 flex justify-center'>
            About Me
          </h2>
          <div className="bg-rose-200 dark:bg-emerald-900 dark:text-slate-300 shadow-lg rounded-lg desktop:p-6 tablet:p-6 mobile:p-2 transition hover:scale-110 duration-300 ease-in-out">
            <ul className="list-disc desktop:space-y-1 mobile:space-y-1 pl-5">
              <li className="desktop:text-lg tablet:text-xl">
                Proficient in multiple programming languages including <b>Python</b>, <b>C</b>, <b>C++</b>, and <b>JavaScript</b>, with a strong emphasis on clean and efficient code development.
              </li>
              <li className="desktop:text-lg tablet:text-xl">
                Extensive experience in JavaScript frameworks such as <b>React.js</b> for building interactive user interfaces, <b>Express.js</b> for backend development, and <b>Node.js</b> for scalable server-side applications
              </li>
              <li className="desktop:text-lg tablet:text-xl">
                Well-versed in Python frameworks including <b>Flask</b>, <b>Django</b>, and <b>FastAPI</b>, adept at crafting robust web applications with a focus on performance and scalability.
              </li>
              <li className="desktop:text-lg tablet:text-xl">
                Deeply skilled in machine learning libraries like <b>TensorFlow</b>, <b>PyTorch</b>, <b>Scikit-learn</b>, and <b>Seaborn</b>, facilitating the creation of advanced models for data analysis and predictive analytics.
              </li>
              <li className="desktop:text-lg tablet:text-xl">
                Proficient in relational databases (<b>MySQL</b>, <b>SQLite</b>) and NoSQL databases (<b>MongoDB</b>).
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Link to={resumeURL} target='_blank'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold desktop:py-3 desktop:px-6 mobile:py-2 mobile:px-4 tablet:py-4 tablet:px-8 tablet:text-xl desktop:text-lg tablet:mt-8 rounded-full focus:outline-none focus:shadow-outline  duration-300 ease-in-out hover:scale-105'>View Resume</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
