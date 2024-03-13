import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaCode, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser'

const Contact = () => {

  const linkedInURL = 'https://www.linkedin.com/in/aaquib-asrar/'
  const githubURL = 'https://github.com/Aaquib07'
  const leetcodeURL = 'https://leetcode.com/Aaquib_16/'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      const data = await response.text()
      if (response.ok) {
        alert('Your message has been sent successfully!')
      }
      else {
        throw new Error(data)
      }
    } catch (error) {
      alert('Failed to send message. Please try again later.')
      console.error('Error:', error)
    }
  };

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_zowqlpc', 'template_3mtogg6', e.target, {
      publicKey: 'IpDDvQ-sCCoDRusfZ'
    }).then(() => { console.log('Message sent') }, (error) => { console.log(error) })
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-around items-center h-screen bg-gray-100">
        <div className='w-full max-w-lg p-6 flex bg-white rounded-lg shadow-xl'>
          <div className="w-1/2 p-4">
            <h2 className="text-gray-800 font-bold text-2xl mb-4">Social Profiles</h2>
            <ul className='flex flex-col gap-4'>
              <li>
                <Link to={githubURL} target='_blank' rel='noopener noreferrer' className='text-gray-500 hover:text-gray-700 flex items-center gap-2'>
                  <FaGithub /> <span>GitHub</span>
                </Link>
              </li>
              <li>
                <Link to={linkedInURL} target='_blank' rel='noopener noreferrer' className='text-gray-500 hover:text-gray-700 flex items-center gap-2'>
                  <FaLinkedin /> <span>LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link to={leetcodeURL} target='_blank' rel='noopener noreferrer' className='text-gray-500 hover:text-gray-700 flex items-center gap-2'>
                  <FaCode /> <span>LeetCode</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <form onSubmit={sendEmail} className="w-full max-w-lg p-6 bg-white rounded-lg shadow-xl">
          <h1 className='text-gray-800 font-bold text-4xl flex justify-center mb-4'>
            Connect with Me
          </h1>
          <p className='text-gray-600 text-lg mb-4 flex justify-center'>
            Let's get connected to build a better world!
          </p>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name <span className='text-red-500'>*</span></label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email <span className='text-red-500'>*</span></label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message <span className='text-red-500'>*</span></label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300">
              Send
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
