import React from 'react'
import { Link } from 'react-router-dom'
import House from '../assets/house.jpeg'

const ProjectCard = ({ project }) => {
  return (
    <div className='flex flex-col max-w-sm h-auto rounded overflow-hidden shadow-lg m-4 p-4' style={{ minHeight: "100%" }}>
        <img src={House} alt="" className='w-fit object-cover' style={{ height: '200px' }} />
        <div className="flex flex-col flex-grow px-6 py-4">
            <div className="font-bold text-xl mb-2">
                {project.title}
            </div>
            <ul className="list-disc text-gray-700 text-base flex-grow">
                {project.description.map((desc, index) => <li key={index}>{desc}</li>)}
            </ul>
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