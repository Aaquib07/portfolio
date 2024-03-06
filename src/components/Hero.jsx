import React from 'react'
import TypeWriterText from './TypeWriterText'
import Animation from './Animation'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="bg-gray-100 text-gray-800 py-20 h-screen flex">
            <div className="flex flex-col justify-start items-start px-8">
                <h1 className="text-4xl font-bold mb-4">Hello World.</h1>
                <h1 className="text-4xl font-bold mb-4">I'm <TypeWriterText text={"Aaquib Asrar."} /></h1>
                <ul className='list-disc pl-5 mb-4 text-gray-600 marker:text-color-red py-10'>
                    <li>
                        <p className='text-lg'>I'm passionate developer ready to tackle new challenges.</p>
                    </li>
                    <li>
                        <p className='text-lg'>I am a highly motivated individual with exceptional teamwork skills.</p>
                    </li>
                    <li>
                        <p className='text-lg'>My calm and hardworking nature allow me to tackle any challenge with ease.</p>
                    </li>
                    <li>
                        <p className='text-lg'>I believe in the power of perseverance and never give up until I achieve my goals.</p>
                    </li>
                </ul>
                <div className='flex gap-8'>
                    <Link to={'/about'}>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out animate-pulse'>
                            More About Me
                        </button>
                    </Link>
                    <Link to={'/projects'}>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out animate-pulse'>
                            View Projects
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <Animation />
            </div>
        </section>
    )
}

export default Hero