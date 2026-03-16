import React from "react";
import TypeWriterText from "./TypeWriterText";
import { Link } from "react-router-dom";
import HelloRobotVideo from "../assets/hi-robot.webm";
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-900 dark:to-zinc-800 
    text-gray-800 dark:text-slate-200 min-h-screen w-full flex flex-wrap 
    tablet:flex-col items-center justify-center gap-16 px-6 py-16">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 * 0.1 }}
      >
        <div className="max-w-xl">

          <div className="bg-white/80 dark:bg-zinc-800/70 backdrop-blur-lg 
          border border-gray-200 dark:border-zinc-700 
          rounded-2xl shadow-2xl p-10 transition-transform duration-300 hover:scale-105">

            <h1 className="text-5xl font-bold mb-4">
              Hello 👋
            </h1>

            <h2 className="text-3xl font-semibold mb-6">
              I'm <span className="text-blue-600">
                <TypeWriterText text={"Aaquib Asrar"} />
              </span>
            </h2>

            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              Software Engineer passionate about building scalable web applications,
              machine learning systems, and solving complex algorithmic problems.
            </p>

            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-lg">
              <li>• Full Stack Developer (React, Node, FastAPI)</li>
              <li>• Strong foundation in Data Structures & Algorithms</li>
              <li>• Experience in Machine Learning & AI systems</li>
              <li>• Passionate about building impactful technology</li>
            </ul>

          </div>

          <div className="flex gap-6 mt-8">

            <Link to={"/skills"}>
              <button className="bg-blue-600 hover:bg-blue-700 
              text-white font-semibold px-7 py-3 rounded-full 
              shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                View Skills
              </button>
            </Link>

            <Link to={"/projects"}>
              <button className="bg-blue-600 hover:bg-blue-700 
              text-white font-semibold px-7 py-3 rounded-full 
              shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                View Projects
              </button>
            </Link>

          </div>

        </div>

      </motion.div>

      <div className="flex justify-center items-center">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-80 w-80 rounded-2xl shadow-2xl"
        >
          <source src={HelloRobotVideo} type="video/webm" />
        </video>

      </div>

    </div>
  );
};

export default Hero;