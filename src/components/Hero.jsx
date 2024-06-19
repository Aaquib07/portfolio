import React from 'react';
import TypeWriterText from './TypeWriterText';
import { Link } from 'react-router-dom';
import HelloRobotVideo from '../assets/hi-robot.webm'

const Hero = () => {
    return (
        <div className="bg-gray-100 text-gray-800 dark:bg-zinc-900 dark:text-slate-200 h-screen w-full flex tablet:flex-col flex-wrap tablet:gap-2 desktop:gap-20 mobile:gap-10 items-center justify-center tablet:p-8 desktop:p-8 mobile:py-1">
          <div className="flex flex-col justify-start items-start desktop:mb-10 desktop:px-2 mobile:px-1">
            <div className="bg-rose-200 dark:bg-emerald-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-xl desktop:p-8 mobile:px-4 mobile:py-1 desktop:my-4 mobile:my-1 tablet:p-8 transition hover:scale-110 duration-300 ease-in-out">
            <h1 className="desktop:text-5xl tablet:text-4xl mobile:text-3xl font-bold mb-4">
              Hello World.
            </h1>
            <h1 className="desktop:text-4xl tablet:text-3xl mobile:text-xl font-bold mb-4">
              I'm <TypeWriterText text={'Aaquib Asrar.'} />
            </h1>
                <ul className="list-disc pl-5 text-gray-600 marker:text-color-red py-2">
                <li>
                    <p className="mobile:text-lg desktop:text-lg tablet:text-xl dark:text-slate-300">
                    I'm a passionate developer ready to tackle new challenges.
                    </p>
                </li>
                <li>
                    <p className="mobile:text-lg desktop:text-lg tablet:text-xl dark:text-slate-300">
                    I am a highly motivated individual with exceptional teamwork skills.
                    </p>
                </li>
                <li>
                    <p className="mobile:text-lg desktop:text-lg tablet:text-xl dark:text-slate-300">
                    My calm and hardworking nature allows me to tackle any challenge with ease.
                    </p>
                </li>
                <li>
                    <p className="mobile:text-lg desktop:text-lg tablet:text-xl dark:text-slate-300">
                    I believe in the power of perseverance and never give up until I achieve my goals.
                    </p>
                </li>
                </ul>
            </div>
            <div className="flex tablet:w-full tablet:justify-center tablet:ml-0 gap-12 mt-8 mobile:ml-12">
              <Link to={'/about'}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold desktop:text-lg tablet:text-xl desktop:py-3 desktop:px-6 tablet:py-2 tablet:px-3 mobile:px-2 mobile:py-2 rounded-full shadow-md hover:shadow-lg duration-300 ease-in-out hover:scale-105">
                  More About Me
                </button>
              </Link>
              <Link to={'/projects'}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold desktop:text-lg tablet:text-xl desktop:py-3 desktop:px-6 tablet:py-2 tablet:px-3 mobile:px-2 mobile:py-2 rounded-full shadow-md hover:shadow-lg duration-300 ease-in-out hover:scale-105">
                  View Projects
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <video autoPlay loop muted playsInline className='desktop:h-58 desktop:w-52 tablet:h-80 tablet:w-80 mobile:h-48 mobile:w-48'>
              <source src={HelloRobotVideo} type='video/mp4' />
            </video>
          </div>
        </div>
      );
};

export default Hero;
