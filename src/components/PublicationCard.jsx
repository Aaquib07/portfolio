import React from 'react'
import House from '../assets/projects.avif'
import { Link } from 'react-router-dom'

const PublicationCard = ({ publication }) => {
  return (
    <div className='flex flex-col bg-rose-200 dark:bg-emerald-900 max-w-sm rounded-lg overflow-hidden shadow-lg m-4 p-4 transition hover:scale-110 duration-300 ease-in-out'>
        <img src={House} alt="" className='w-fit object-cover rounded-lg' style={{ height: '150px', width: "auto" }} />
        <div className="flex flex-col flex-grow px-6 py-4">
            <div className="font-bold text-xl mb-2 dark:text-slate-200">
                {publication.title}
            </div>
            <div className="font-bold text-xl mb-2 dark:text-slate-200">
                Publication: {publication.publisher}
            </div>
            <ul className="list-disc text-gray-700 dark:text-slate-200 text-base flex-grow">
                {publication.description.map((desc, index) => <li key={index}>{desc}</li>)}
            </ul>
        </div>
        <div className="flex justify-center px-6 pt-4 pb-2">
            <Link to={publication.paperLink} target='_blank' rel='noopener noreferrer' className='flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out animate-pulse hover:scale-105'>
                <p>Publication Link</p>
            </Link>
        </div>
    </div>
  )
}

export default PublicationCard