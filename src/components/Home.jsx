import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'

const Home = () => {
    return (
        <div className='h-screen'>
            <Navbar />
            <Hero />
            <Footer />
        </div>
    )
}

export default Home