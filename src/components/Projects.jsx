import React from 'react'
import Navbar from './Navbar'
import ProjectCard from './ProjectCard'
import Footer from './Footer'

const Projects = () => {
  const projectsList = [
    {
      id: 7,
      title: 'Brain Tumor Classification',
      description: ['Developed a web application for brain tumor classification using CNN, achieving 90% test accuracy.', ' Designed the frontend in React and backend in FastAPI, enabling real-time MRI scan analysis.', 'Applied early stopping mechanism, reaching 95% training and 94% validation accuracy.'],
      projectLink: 'https://brain-tumor-classifier.netlify.app/',
      codeLink: 'https://github.com/Aaquib07/brain-tumor-classification'
    },
    {
      id: 5,
      title: 'Summarizit',
      description: ['User-friendly web application to extract summary out of a long paragraph.', 'The frontend of the application is build using React.js and backend is implemented using Node.js and Express.js', 'Elegant UI along with seamless performance.'],
      projectLink: 'https://summarizit.netlify.app/',
      codeLink: 'https://github.com/Aaquib07/summarize-it'
    },
    {
      id: 6,
      title: 'Portfolio',
      description: ['This portfolio website is built using React.js.', 'Caching method is used to enhance the performance.', 'Dark mode feature is also included.'],
      projectLink: 'https://aaquib-asrar.netlify.app/',
      codeLink: 'https://github.com/Aaquib07/portfolio'
    },
    {
      id: 1,
      title: 'Movie Recommendation System',
      description: ['A Streamlit-based application to recommend movies to the user.', 'Content-based filtering has been applied to filter movies.', 'Cosine similarity has been used to calculate the similarity between movies.'],
      projectLink: '',
      codeLink: 'https://github.com/Aaquib07/Movie_Recommendation_System'
    },
    {
      id: 2,
      title: 'Bloggers',
      description: ['It is a Flask-based web application that let users to write blogs', 'Features include - User authentication, Profile updating, Pagination, Email confirmation to change password'],
      projectLink: '',
      codeLink: 'https://github.com/Aaquib07/Bloggers'
    },
    {
      id: 3,
      title: 'Sentiment Analysis',
      description: ['An LSTM-based deep learning model that predicts sentiment of users', 'Achieved an accuracy of around 90% on tweets of users on Twitter'],
      projectLink: '',
      codeLink: 'https://github.com/Aaquib07/Sentiment-Analysis'
    },
    {
      id: 4,
      title: 'Bookmarker',
      description: ['A command-line python application that can be used to manage your bookmarks.', 'MySQL database is used to store the bookmark data.', 'User can create, read, update and delete their bookmarks.'],
      projectLink: '',
      codeLink: 'https://github.com/Aaquib07/bookmarker'
    },
    ,
    
  ]

  return (
    <div className='h-screen'>
      <Navbar />
      <div className="flex flex-col bg-gray-100 dark:bg-zinc-900 py-10 gap-4">
        <h1 className='flex justify-center font-bold text-5xl mb-6 dark:text-slate-200'>Recent Projects</h1>
        <div className='flex justify-around flex-wrap'>
        {projectsList.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects