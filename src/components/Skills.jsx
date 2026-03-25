import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJsSquare, FaJava, FaCuttlefish, FaReact, FaNodeJs, 
  FaFlask, FaDatabase, FaBrain, FaCode 
} from 'react-icons/fa';

const Skills = () => {
  const resumeURL = 'https://drive.google.com/file/d/1sZ1aY1oE3Pedx2qoSNtaagoqpTvImpuV/view?usp=sharing'

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode className="text-3xl text-blue-500" />,
      skills: [
        { name: "Python", icon: <FaPython className="text-2xl text-yellow-500" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-2xl text-yellow-400" /> },
        { name: "Java", icon: <FaJava className="text-2xl text-red-500" /> },
        { name: "C", icon: <FaCuttlefish className="text-2xl text-blue-600" /> },
        { name: "C++", icon: <FaCuttlefish className="text-2xl text-blue-700" /> }
      ]
    },
    {
      title: "Web Development Frameworks",
      icon: <FaReact className="text-3xl text-cyan-500" />,
      skills: [
        { name: "React.js", icon: <FaReact className="text-2xl text-cyan-400" /> },
        { name: "Express.js", icon: <FaNodeJs className="text-2xl text-green-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-600" /> },
        { name: "Flask", icon: <FaFlask className="text-2xl text-gray-500" /> },
        { name: "Django", icon: <FaPython className="text-2xl text-green-700" /> },
        { name: "FastAPI", icon: <FaPython className="text-2xl text-teal-500" /> }
      ]
    },
    {
      title: "Machine Learning",
      icon: <FaBrain className="text-3xl text-purple-500" />,
      skills: [
        { name: "TensorFlow", icon: <FaBrain className="text-2xl text-orange-500" /> },
        { name: "PyTorch", icon: <FaBrain className="text-2xl text-red-600" /> },
        { name: "Scikit-learn", icon: <FaBrain className="text-2xl text-blue-500" /> },
        { name: "Hugging Face", icon: <FaBrain className="text-2xl text-yellow-500" /> },
        { name: "Reinforcement Learning", icon: <FaBrain className="text-2xl text-green-500" /> },
        { name: "Generative AI", icon: <FaBrain className="text-2xl text-pink-500" /> }
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-3xl text-green-500" />,
      skills: [
        { name: "MySQL", icon: <FaDatabase className="text-2xl text-blue-600" /> },
        { name: "SQLite", icon: <FaDatabase className="text-2xl text-gray-500" /> },
        { name: "PostgreSQL", icon: <FaDatabase className="text-2xl text-indigo-500" /> },
        { name: "MongoDB", icon: <FaDatabase className="text-2xl text-green-600" /> }
      ]
    },
    {
      title: "Systems & DevOps",
      icon: <FaCode className="text-3xl text-gray-700" />,
      skills: [
        { name: "Docker", icon: <FaCode className="text-2xl text-blue-400" /> },
        { name: "CI/CD", icon: <FaCode className="text-2xl text-green-500" /> },
        { name: "Linux / Unix", icon: <FaCode className="text-2xl text-gray-500" /> }
      ]
    },
    {
      title: "Cloud & APIs",
      icon: <FaDatabase className="text-3xl text-blue-500" />,
      skills: [
        { name: "REST APIs", icon: <FaCode className="text-2xl text-green-500" /> },
        { name: "GraphQL", icon: <FaCode className="text-2xl text-pink-500" /> },
        { name: "GCP", icon: <FaCode className="text-2xl text-yellow-500" /> }
      ]
    }
  ];

  return (
    <div>
      <Navbar />
      <div className='bg-gray-100 text-gray-800 dark:bg-zinc-900 min-h-screen py-10 px-6'>
        <div className="max-w-8xl mx-auto">
          <motion.h2 
            className='dark:text-slate-200 text-5xl font-bold mb-12 text-center'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </motion.h2>
          
          <div className="flex flex-row flex-wrap justify-center gap-8">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                className={`bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ${category.title === "Machine Learning" ? "w-[450px]" : "w-72"}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-3 dark:text-white">{category.title}</h3>
                </div>
                <div className={`grid gap-3 ${category.skills.length > 5 ? "grid-cols-2" : "grid-cols-1"}`}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      {skill.icon}
                      <span className="ml-2 text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link to={resumeURL} target='_blank'>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition-all duration-300 hover:scale-105 shadow-lg'>
                View Resume
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
