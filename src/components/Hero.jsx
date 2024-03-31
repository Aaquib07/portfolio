import React from 'react';
import TypeWriterText from './TypeWriterText';
import { Link } from 'react-router-dom';
import HelloRobot from '../assets/hi-robot.gif';

const Hero = () => {
    return (
        <div className="bg-gray-100 text-gray-800 dark:bg-zinc-900 dark:text-slate-200 h-screen flex flex-wrap gap-20 items-center justify-center p-8">
          <div className="flex flex-col justify-start items-start px-8">
            <div className="bg-rose-200 dark:bg-emerald-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-xl p-8 my-4 transition hover:scale-110 duration-300 ease-in-out">
            <h1 className="text-5xl font-bold mb-4">
              Hello World.
            </h1>
            <h1 className="text-4xl font-bold mb-4">
              I'm <TypeWriterText text={'Aaquib Asrar.'} />
            </h1>
                <ul className="list-disc pl-5 text-gray-600 marker:text-color-red py-2">
                <li>
                    <p className="text-lg dark:text-slate-300">
                    I'm a passionate developer ready to tackle new challenges.
                    </p>
                </li>
                <li>
                    <p className="text-lg dark:text-slate-300">
                    I am a highly motivated individual with exceptional teamwork skills.
                    </p>
                </li>
                <li>
                    <p className="text-lg dark:text-slate-300">
                    My calm and hardworking nature allows me to tackle any challenge with ease.
                    </p>
                </li>
                <li>
                    <p className="text-lg dark:text-slate-300">
                    I believe in the power of perseverance and never give up until I achieve my goals.
                    </p>
                </li>
                </ul>
            </div>
            <div className="flex gap-8 mt-8">
              <Link to={'/about'}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out animate-pulse hover:scale-105">
                  More About Me
                </button>
              </Link>
              <Link to={'/projects'}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out animate-pulse hover:scale-105">
                  View Projects
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src={HelloRobot} alt="" height={500} width={250} />
          </div>
        </div>
      );
};

export default Hero;
