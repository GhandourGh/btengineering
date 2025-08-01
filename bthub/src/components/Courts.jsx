import React, { useState, useEffect } from 'react'
import padelImg from '../assets/Padel.jpg'
import footballImg from '../assets/Football.jpg'
import { assets } from '../assets/assets.js'

const PADEL_FEATURES = [
  'Professional court specifications',
  'Premium materials & workmanship',
  'Fast installation (2-3 weeks)',
  '30+ years engineering expertise',
  'Competitive pricing',
  'Post-installation support'
]

const PADEL_IMAGES = [
  { 
    src: padelImg, 
    alt: "Professional Padel Court 1",
    title: "Premium Padel Courts",
    description: "Professional construction & installation"
  },
  { 
    src: assets.padel1, 
    alt: "Professional Padel Court 2",
    title: "World-Class Facilities",
    description: "International standard courts"
  },
  { 
    src: assets.padel2, 
    alt: "Professional Padel Court 3",
    title: "Custom Court Design",
    description: "Tailored to your specifications"
  }
]

const Courts = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-change images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % PADEL_IMAGES.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16" id='Courts'>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-black">
            Professional <span className="text-[#CFA386]">Padel Court</span> Construction
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we deliver world-class padel courts with engineering precision and premium quality. 
            Trust our 30+ years of experience for your perfect court.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Padel Courts Showcase */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl  overflow-hidden bg-transparent">
              
              {/* Padel Court Image Carousel */}
              <div className="relative h-70 overflow-hidden rounded-xl">
                {PADEL_IMAGES.map((image, index) => (
                  <img 
                    key={index}
                    src={image.src} 
                    alt={image.alt} 
                    className={`absolute inset-0 w-full h-full object-cover object-center scale-130 transition-all duration-1000 ${
                      index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h4 className="text-3xl sm:text-4xl mb-4 drop-shadow-lg transition-all duration-1000">
                      {PADEL_IMAGES[currentImageIndex].title}
                    </h4>
                    <p className="text-white/90 text-lg sm:text-2xl transition-all duration-1000">
                      {PADEL_IMAGES[currentImageIndex].description}
                    </p>
                  </div>
                </div>
                
                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                  {PADEL_IMAGES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-5 h-5 transition-all duration-300 ${
                        index === currentImageIndex ? 'opacity-100 scale-110' : 'opacity-50 scale-100'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    >
                      <img 
                        src={assets.ball} 
                        alt="Navigation indicator" 
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="p-6 bg-gradient-to-r from-[#CFA386] to-[#ac906e] text-white flex flex-col items-center justify-center rounded-t-xl mt-2">
                <h4 className="text-xl font-bold mb-2">Ready to Build Your Dream Court?</h4>
                <p className="text-white/90 mb-4 text-center">Get a free consultation and quote for your padel court project.</p>
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('Contact')
                    if (contactSection) {
                      contactSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      })
                    }
                  }}
                  className="bg-white text-[#CFA386] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 ">
              <h3 className="text-2xl font-bold text-black mb-6">Why Choose Bachir Taha for Your Padel Court?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PADEL_FEATURES.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img src={assets.ball} alt="Feature icon" className="w-5 h-5 opacity-100" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-[#CFA386]/10 rounded-lg border border-[#CFA386]/20">
                <p className="text-[#CFA386] font-semibold text-center text-2xl">
                  "من الرخصة للمفتاح"  From license to key
                </p>
                <p className="text-gray-600 text-center mt-2 text-sm">
                  Complete solutions from start to finish
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-5">
          {/* Mobile: Combined single card */}
          <div className="md:hidden bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="grid grid-cols-3 gap-10 text-center">
              <div>
                <div className="text-2xl font-bold text-[#CFA386] mb-1">50+</div>
                <div className="text-gray-600 text-sm font-semibold">Courts Built</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#CFA386] mb-1">2-3</div>
                <div className="text-gray-600 text-sm font-semibold">Weeks</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#CFA386] mb-1">100%</div>
                <div className="text-gray-600 text-sm font-semibold">Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Desktop: Separate cards */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100">
              <div className="text-3xl font-bold text-[#CFA386] mb-2">50+</div>
              <div className="text-gray-600 font-semibold">Padel Courts Built</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100">
              <div className="text-3xl font-bold text-[#CFA386] mb-2">2-3</div>
              <div className="text-gray-600 font-semibold">Weeks Installation</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100">
              <div className="text-3xl font-bold text-[#CFA386] mb-2">100%</div>
              <div className="text-gray-600 font-semibold">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courts 