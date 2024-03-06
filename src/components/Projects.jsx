import React from 'react'
import Navbar from './Navbar'
import ProjectCard from './ProjectCard'
import Footer from './Footer'

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This is the first project',
      projectLink: '/',
      codeLink: '/'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'This is the second project',
      projectLink: '/',
      codeLink: '/'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'This is the third project',
      projectLink: '/',
      codeLink: '/'
    }
  ]

  return (
    <div>
      <Navbar />
      <div className="h-screen flex flex-wrap justify-center">
        {projectsList.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Projects