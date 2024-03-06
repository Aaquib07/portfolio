import React from 'react'
import { Link } from 'react-router-dom'
import House from '../assets/house.jpeg'

const ProjectCard = ({ project }) => {
  return (
    <div className='max-w-sm h-max rounded overflow-hidden shadow-lg m-4 p-4'>
        <img src={House} alt="" className='w-fit' />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
                {project.title}
            </div>
            <p className="text-gray-700 text-base">
                {project.description}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <Link to={project.projectLink} target='_blank' rel='noopener noreferrer' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 mr-2'>
                View Project
            </Link>
            <Link to={project.codeLink} target='_blank' rel='noopener noreferrer' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-all duration-300'>
                View Code
            </Link>
        </div>
    </div>
  )
}

export default ProjectCard