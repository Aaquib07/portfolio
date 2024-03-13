import React from 'react'
import { Link } from 'react-router-dom'
import House from '../assets/projects.avif'

const ProjectCard = ({ project }) => {
  return (
    <div className='flex flex-col bg-white dark:bg-slate-700 max-w-sm rounded-lg overflow-hidden shadow-lg m-4 p-4' style={{ minHeight: "100%" }}>
        <img src={House} alt="" className='w-fit object-cover' style={{ height: '150px', width: "auto" }} />
        <div className="flex flex-col flex-grow px-6 py-4">
            <div className="font-bold text-xl mb-2 dark:text-slate-200">
                {project.title}
            </div>
            <ul className="list-disc text-gray-700 dark:text-slate-200 text-base flex-grow">
                {project.description.map((desc, index) => <li key={index}>{desc}</li>)}
            </ul>
        </div>
        <div className="flex justify-center px-6 pt-4 pb-2">
            {/* <Link to={project.projectLink} target='_blank' rel='noopener noreferrer' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 mr-4'>
                View Project
            </Link> */}
            <Link to={project.codeLink} target='_blank' rel='noopener noreferrer' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out animate-pulse'>
                GitHub Code
            </Link>
        </div>
    </div>
  )
}

export default ProjectCard