import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Resume from '../assets/Resume.pdf'
import { Link } from 'react-router-dom'

const About = () => {

  return (
    <div>
      <Navbar />
        <div className='bg-gray-100 text-gray-800 dark:bg-zinc-900 h-screen py-10 px-6'>
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            <h2 className='dark:text-slate-200 text-5xl font-bold mb-6 flex justify-center'>
              About Me
            </h2>
            <div className="bg-rose-200 dark:bg-emerald-900 dark:text-slate-300 shadow-lg rounded-lg p-6 transition hover:scale-110 duration-300 ease-in-out">
              <ul className="list-disc space-y-2 pl-5">
                <li className="text-lg">
                  Proficient in multiple programming languages including <b>Python</b>, <b>C</b>, <b>C++</b>, and <b>JavaScript</b>, with a strong emphasis on clean and efficient code development.
                </li>
                <li className="text-lg">
                  Extensive experience in JavaScript frameworks such as <b>React.js</b> for building interactive user interfaces, <b>Express.js</b> for backend development, and NodeJS for scalable server-side applications
                </li>
                <li className="text-lg">
                  Well-versed in Python frameworks including <b>Flask</b>, <b>Django</b>, and <b>FastAPI</b>, adept at crafting robust web applications with a focus on performance and scalability.
                </li>
                <li className="text-lg">
                  Deeply skilled in machine learning libraries like <b>TensorFlow</b>, <b>PyTorch</b>, <b>Scikit-learn</b>, and <b>Seaborn</b>, facilitating the creation of advanced models for data analysis and predictive analytics.
                </li>
                <li className="text-lg">
                  Proficient in relational databases (<b>MySQL</b>, <b>SQLite</b>) and NoSQL databases (<b>MongoDB</b>).
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Link to={Resume} download={'Resume_Aaquib_Asrar.pdf'} target='_blank'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out animate-pulse hover:scale-105'>Download Resume</button>
              </Link>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default About