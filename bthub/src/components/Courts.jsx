import React, { useState } from 'react'
import padelImg from '../assets/Padel.jpg'
import footballImg from '../assets/Football.jpg'

const COURT_DETAILS = {
  padel: {
    title: 'Padel Courts',
    description: 'We design and build world-class padel courts, from foundation to finishing. Our team handles everything: site prep, surfacing, fencing, lighting, and more. Whether for clubs, schools, or private clients, we deliver premium quality and durability.',
    image: padelImg,
  },
  football: {
    title: 'Football Courts',
    description: 'Our football courts are engineered for performance and safety. We manage construction from the ground up, including drainage, turf, goals, and lighting. We build for all levels, from community pitches to professional training grounds.',
    image: footballImg,
  },
}

const Courts = () => {
  const [modal, setModal] = useState(null)

  return (
    <section className="w-full py-12 px-3 md:px-12 flex flex-col items-center" id='Courts'>
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center animate-fade-in-up">Sports Court Construction</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
        {/* Padel Court Card */}
        <div
          className="relative group flex-1 min-w-[260px] max-w-xl cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
          onClick={() => setModal('padel')}
        >
          <img src={COURT_DETAILS.padel.image} alt="Padel Court" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white text-xl sm:text-2xl font-bold tracking-wide text-center px-4">PADEL</span>
          </div>
        </div>
        {/* Football Court Card */}
        <div
          className="relative group flex-1 min-w-[260px] max-w-xl cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
          onClick={() => setModal('football')}
        >
          <img src={COURT_DETAILS.football.image} alt="Football Court" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white text-xl sm:text-2xl font-bold tracking-wide text-center px-4">FOOTBALL</span>
          </div>
        </div>
      </div>
      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-xl max-w-lg w-full mx-4 p-8 relative shadow-2xl">
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 bg-[#CFA386] text-white rounded-full p-2 shadow hover:bg-[#ac906e] transition"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={COURT_DETAILS[modal].image} alt={COURT_DETAILS[modal].title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-[#CFA386]">{COURT_DETAILS[modal].title}</h3>
            <p className="text-gray-700 mb-2 text-base leading-relaxed">{COURT_DETAILS[modal].description}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Courts 