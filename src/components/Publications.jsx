import React from 'react'
import PublicationCard from './PublicationCard'
import Navbar from './Navbar'
import Footer from './Footer'
import { motion } from 'framer-motion'

const Publications = () => {
  const publicationsList = [
    {
      id: 1,
      publisher: 'Springer',
      title: 'Stance Classification on FIFA World Cup Using Twitter Data',
      description: ['In this paper, we have tried to identify the stance of people on the FIFA World Cup 2022 from Twitter.', 'Natural language processing techniques have been used for text preprocessing.', 'Twitter text content have been classified into three stance classes of FAVOR, AGAINST, and NONE.'],
      paperLink: 'https://link.springer.com/chapter/10.1007/978-981-99-3734-9_18'
    },
    {
      id: 2,
      publisher: "IEEE",
      title: "Prioritizing Latency with Profit: A DRL-Based Admission Control for 5G Network Slices",
      description: ["Implemented Deep Q-Learning with delay-aware prioritization, cutting average admission latency by ∼25% and improving slice acceptance rate by ∼15%.", "Optimized priority-based scheduling to reduce tail latency for URLLC traffic while preserving overall throughput.", "Validated scalability via 1,000+ simulated traffic episodes, demonstrating higher profit and sustained QoS."],
      paperLink: "https://arxiv.org/abs/2510.08769"
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
          Recent Publications
        </motion.h1>
        <div className='flex flex-wrap justify-center gap-32 px-4 max-w-7xl mx-auto'>
        {publicationsList.map((publication, index) => (
          <motion.div
            key={publication.id}
            className='w-96'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PublicationCard publication={publication} />
          </motion.div>
        ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Publications
