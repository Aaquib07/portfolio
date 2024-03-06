import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <div>
      <Navbar />
        <section className='bg-gray-100 text-gray-800 py-10 px-6'>
          <div className="h-screen max-w-4xl mx-auto">
            <h2 className='text-3xl font-bold mb-6'>
              About Me
            </h2>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <ul className="list-disc space-y-2 pl-5">
                <li className="text-lg">
                  Proficient in multiple programming languages including Python, C, C++, and JavaScript, with a strong emphasis on clean and efficient code development.
                </li>
                <li className="text-lg">
                  Extensive experience in JavaScript frameworks such as ReactJS for building interactive user interfaces, ExpressJS for backend development, and NodeJS for scalable server-side applications
                </li>
                <li className="text-lg">
                  Well-versed in Python frameworks including Flask, Django, and FastAPI, adept at crafting robust web applications with a focus on performance and scalability.
                </li>
                <li className="text-lg">
                  Deeply skilled in machine learning libraries like TensorFlow, PyTorch, Scikit-learn, and Seaborn, facilitating the creation of advanced models for data analysis and predictive analytics.
                </li>
                <li className="text-lg">
                  Proficient in relational databases (MySQL, SQLite) and NoSQL databases (MongoDB
                </li>
              </ul>
            </div>
          </div>
        </section>
      <Footer />
    </div>
  )
}

export default About