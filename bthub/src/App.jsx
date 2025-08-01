import React, { useState, useEffect } from 'react'

import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'
import ScrollToTop from './components/ScrollToTop'
import ProgressBar from './components/ProgressBar'
import Footer from './components/Footer'
import Courts from './components/Courts'
import Navbar from './components/Navbar'
// import WhyChooseUs from './components/WhyChooseUs'


const App = () => {
  const [pageProgress, setPageProgress] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // Simulate page loading progress
    const timer = setTimeout(() => setPageProgress(100), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='w-full overflow-hidden'>
      <ProgressBar progress={pageProgress} isVisible={pageProgress < 100} />
      
      <Navbar/>
      <div className='my-0'><Header/></div>
      
      <div className='my-10'><About/></div>
      {/* <div className='my-12'><WhyChooseUs/></div> */}
      <hr className='border-0 h-0.5 bg-[#CFA386] opacity-20 rounded-full w-full max-w-6xl mx-auto' />
      <div className='my-10'><Courts/></div>
      <hr className='border-0 h-0.5 bg-[#CFA386] opacity-20 rounded-full w-full max-w-6xl mx-auto' />
      <div className='my-10'><Projects/></div>
      <hr className='border-0 h-0.5 bg-[#CFA386] opacity-20 rounded-full w-full max-w-6xl mx-auto' />
      <div className='my-10'><Testimonials/></div>
      <hr className='border-0 h-0.5 bg-[#CFA386] opacity-20 rounded-full w-full max-w-6xl mx-auto' />
      <div className='my-12'><ContactUs/></div>
      <Footer/>
      <ScrollToTop/>
      
    </div>
  )
}

export default App