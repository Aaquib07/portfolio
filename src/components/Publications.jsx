import React from 'react'
import PublicationCard from './PublicationCard'
import Navbar from './Navbar'
import Footer from './Footer'

const Publications = () => {
  const publicationsList = [
    {
      id: 1,
      publisher: 'Springer',
      title: 'Stance Classification on FIFA World Cup Using Twitter Data',
      description: ['In this paper, we have tried to identify the stance of people on the FIFA World Cup 2022 from Twitter.', 'Natural language processing techniques have been used for text preprocessing.', 'Twitter text content have been classified into three stance classes of FAVOR, AGAINST, and NONE.'],
      paperLink: 'https://link.springer.com/chapter/10.1007/978-981-99-3734-9_18'
    }
  ]

  return (
    <div className='h-screen'>
      <Navbar />
      <div className="flex flex-col bg-gray-100 dark:bg-zinc-900 py-10 gap-4">
        <h1 className='flex justify-center font-bold text-5xl mb-6 dark:text-slate-200'>Recent Projects</h1>
        <div className='flex justify-center flex-wrap'>
        {publicationsList.map(publication => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Publications