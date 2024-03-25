import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { FaCode, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineEmail } from "react-icons/md";

const Contact2 = () => {
    const linkedInURL = 'https://www.linkedin.com/in/aaquib-asrar/'
    const githubURL = 'https://github.com/Aaquib07'
    const leetcodeURL = 'https://leetcode.com/Aaquib_16/'

    return (
        <div>
            <Navbar />
            <div className="flex flex-col h-screen">
                <div className='flex flex-col items-center justify-center bg-gray-100 dark:bg-zinc-900 py-10'>
                    <h1 className='text-5xl font-bold dark:text-slate-200'>"United We Stand, Divided We Fall"</h1>
                    <p className='text-2xl text-gray-800 dark:text-slate-200'>So, let's get connected and Stand Together</p>
                </div>
                <div className="flex flex-wrap gap-4 h-full justify-around items-center p-6 bg-gray-100 dark:bg-zinc-900">
                    <div className='w-full max-w-lg p-6 flex bg-rose-200 dark:bg-emerald-900 rounded-lg shadow-xl transition duration-300 hover:scale-105 ease-in-out'>
                        <div className="w-1/2 p-4">
                            <h2 className="text-gray-800 dark:text-slate-300 font-bold text-3xl mb-4">Social Profiles</h2>
                            <ul className='flex flex-col gap-4'>
                                <li>
                                    <Link to={githubURL} target='_blank' rel='noopener noreferrer' className='text-gray-500 dark:text-gray-200 hover:text-gray-700 flex items-center gap-2 transition duration-300 hover:scale-105'>
                                        <FaGithub /> <span>GitHub</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={linkedInURL} target='_blank' rel='noopener noreferrer' className='text-gray-500 dark:text-gray-200 hover:text-gray-700 flex items-center gap-2 transition duration-300 hover:scale-105'>
                                        <FaLinkedin /> <span>LinkedIn</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={leetcodeURL} target='_blank' rel='noopener noreferrer' className='text-gray-500 dark:text-gray-200 hover:text-gray-700 flex items-center gap-2 transition duration-300 hover:scale-105'>
                                        <FaCode /> <span>LeetCode</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full max-w-lg p-6 bg-rose-200 dark:bg-emerald-900 rounded-lg shadow-xl transition duration-300 hover:scale-105 ease-in-out'>
                        <div className="w-full p-4 flex flex-col gap-4">
                            <h2 className='text-gray-800 dark:text-slate-300 font-bold text-3xl'>Drop a Mail</h2>
                            <p className='text-lg text-gray-700 dark:text-slate-300'>Let's get connected to build a better world!</p>
                            <Link to={'mailto:aaquibasrar4@gmail.com'} className='flex items-center gap-2 dark:text-gray-200 transition duration-300 hover:scale-105'>
                                <MdOutlineEmail /> <span className='text-gray-500 dark:text-gray-200 hover:text-gray-700 flex items-center'>aaquibasrar4@gmail.com</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact2