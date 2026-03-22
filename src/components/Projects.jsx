import React from 'react'
import Navbar from './Navbar'
import ProjectCard from './ProjectCard'
import Footer from './Footer'
import { motion } from 'framer-motion'

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      title: "Prioritizing Latency with Profit: A DRL-Based Admission Control for 5G Network Slices",
      description: ["Implemented Deep Q-Learning with delay-aware prioritization, cutting average admission latency by ∼25% and improving slice acceptance rate by ∼15%.", "Optimized priority-based scheduling to reduce tail latency for URLLC traffic while preserving overall throughput.", "Validated scalability via 1,000+ simulated traffic episodes, demonstrating higher profit and sustained QoS."],
      projectLink: '',
      codeLink: "https://github.com/proggyaa/MajorProject"
    },
    {
      id: 2,
      title: 'Brain Tumor Classification',
      description: ['Developed a web application for brain tumor classification using CNN, achieving 90% test accuracy.', ' Designed the frontend in React and backend in FastAPI, enabling real-time MRI scan analysis.', 'Applied early stopping mechanism, reaching 95% training and 94% validation accuracy.'],
      projectLink: 'https://brain-tumor-classifier.netlify.app/',
      codeLink: 'https://github.com/Aaquib07/brain-tumor-classification'
    },
    {
      id: 3,
      title: 'Summarizit',
      description: ['User-friendly web application to extract summary out of a long paragraph.', 'The frontend of the application is build using React.js and backend is implemented using Node.js and Express.js', 'Elegant UI along with seamless performance.'],
      projectLink: 'https://summarizit.netlify.app/',
      codeLink: 'https://github.com/Aaquib07/summarize-it'
    },
    {
      id: 4,
      title: 'Portfolio',
      description: ['This portfolio website is built using React.js.', 'Caching method is used to enhance the performance.', 'Dark mode feature is also included.'],
      projectLink: 'https://aaquib-asrar.netlify.app/',
      codeLink: 'https://github.com/Aaquib07/portfolio'
    },
    {
      id: 5,
      title: 'Movie Recommendation System',
      description: ['A Streamlit-based application to recommend movies to the user.', 'Content-based filtering has been applied to filter movies.', 'Cosine similarity has been used to calculate the similarity between movies.'],
      projectLink: '',
      codeLink: 'https://github.com/Aaquib07/Movie_Recommendation_System'
    },
    {
      id: 6,
      title: 'Bloggers',
      description: ['It is a Flask-based web application that let users to write blogs', 'Features include - User authentication, Profile updating, Pagination, Email confirmation to change password'],
      projectLink: '',
      codeLink: 'https://github.com/Aaquib07/Bloggers'
    },
    {
      id: 7,
      title: 'Sentiment Analysis',
      description: ['An LSTM-based deep learning model that predicts sentiment of users', 'Achieved an accuracy of around 90% on tweets of users on Twitter'],
      projectLink: '',
      codeLink: 'https://github.com/Aaquib07/Sentiment-Analysis'
    },
    {
      id: 8,
      title: 'Bookmarker',
      description: ['A command-line python application that can be used to manage your bookmarks.', 'MySQL database is used to store the bookmark data.', 'User can create, read, update and delete their bookmarks.'],
      projectLink: '',
      codeLink: 'https://github.com/Aaquib07/bookmarker'
    }
  ]

  return (
    <div className='h-screen'>
      <Navbar />
      <div className="flex flex-col bg-gray-100 dark:bg-zinc-900 py-10 gap-4">
        <motion.h1 
          className='dark:text-slate-200 text-5xl font-bold mb-12 text-center'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Recent Projects
        </motion.h1>
        <div className='flex flex-wrap justify-center gap-10 px-4 max-w-7xl mx-auto'>
        {projectsList.map((project, index) => (
          <motion.div
            key={project.id}
            className='w-96'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects