import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets.js'

// CountUp component
const CountUp = ({ end, duration = 0.5, suffix = '' }) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const increment = end / (duration * 90)
    let frame = 0
    const animate = () => {
      frame++
      start += increment
      if (start < end) {
        setCount(Math.floor(start))
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    animate()
    // eslint-disable-next-line
  }, [end, duration])
  return <span>{count}{suffix}</span>
}

export const Header = () => {
  return (
    <>
      <div
        className='relative min-h-[120vh] w-full flex items-center justify-center overflow-hidden bg-no-repeat bg-cover bg-center'
        style={{
          backgroundImage: `url(${assets.header_img})`,
          aspectRatio: '16/9',
          minHeight: '120vh',
        }}
        id='Header'
      >
        <div className='container mx-auto flex flex-col items-center justify-center h-full gap-4 sm:gap-4 text-center mt-25 px-2 sm:px-4 md:px-8'>
          <h1
            className='font-arial text-3xl sm:text-xl md:text-7xl lg:text-5xl font-bold text-white'
            style={{
              textShadow: '0 2px 12px #000, 0 1px 0 #000'
            }}
          >
            Welcome to Bachir Taha - Engineering Hub
          </h1>
          <p
            className='text-sm sm:text-xl text-white border-b-2 border-[#CFA386]'
            style={{
              textShadow: '0 1px 8px #000'
            }}
          >
            Shaping the Future with Smart Engineering — Est. 1993.
          </p>
          <div className='flex gap-2 sm:gap-4 mt-7 sm:mt-4 mb-2 sm:mb-4'>
            <button className='bg-white text-black px-6 sm:px-8 py-2.5 sm:py-2 rounded-full font-semibold border-2 border-[#CFA386] transition-all duration-300 shadow-[0_0_8px_0_#CFA386] hover:bg-[#CFA386] hover:text-white hover:scale-105 transform text-xs sm:text-base'>
              <a href='#Projects'>Projects</a>
            </button>
            <button className='bg-[#CFA386] text-white px-6 sm:px-8 py-2.5 sm:py-2 rounded-full font-semibold transition-all duration-300 hover:bg-[#CFA386] hover:scale-105 transform text-xs sm:text-base'>
              <a href='#Contact'>Contact Us</a>
            </button>
          </div>
          <div className='flex gap-3 mt-7 sm:gap-4 mb-3 sm:mb-6'>
            <div className='bg-black/40 border border-[#CFA386] rounded-xl px-8 sm:px-6 py-2 sm:py-4 flex flex-col items-center shadow-lg'>
              <span className='text-lg sm:text-2xl font-bold text-[#CFA386]'><CountUp end={30} duration={2.2} suffix='+' /></span>
              <span className='text-white text-xs font-semibold'>YEARS</span>
            </div>
            <div className='bg-black/40 border border-[#CFA386] rounded-xl px-8 sm:px-6 py-2 sm:py-4 flex flex-col items-center shadow-lg'>
              <span className='text-lg sm:text-2xl font-bold text-[#CFA386]'><CountUp end={800} duration={1} suffix='+' /></span>
              <span className='text-white text-xs font-semibold'>PROJECTS</span>
            </div>
            <div className='bg-black/40 border border-[#CFA386] rounded-xl px-8 sm:px-6 py-2 sm:py-4 flex flex-col items-center shadow-lg'>
              <span className='text-lg sm:text-2xl font-bold text-[#CFA386]'><CountUp end={100} duration={2} suffix='+' /></span>
              <span className='text-white text-xs font-semibold'>AWARDS</span>
            </div>
          </div>
          {/* Companies we've worked with */}
          <div className="flex flex-col items-center mt-10 w-full">
            <span
              className="text-gray-300 text-xs sm:text-base mb-2 sm:mb-4 tracking-wide uppercase font-semibold"
              style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.55)'
              }}
            >
              Companies we've worked with
            </span>
            <div className="grid grid-cols-3 gap-y-2 sm:gap-y-4 gap-x-11 sm:gap-x-6 w-full max-w-xs sm:max-w-md mx-auto">
              {/* Top row: 3 companies */}
              <div className="flex flex-col items-center justify-center">
                <img src={assets.c1} alt="Solidere logo" className="w-20 h-20 sm:w-16 sm:h-16 object-contain mx-auto mb-2" />
                <span
                  className="text-white text-xs sm:text-base font-bold text-center whitespace-nowrap"
                  style={{
                    textShadow: '0 2px 8px rgba(0,0,0,0.55)'
                  }}
                >
                  Solidere
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={assets.c2} alt="Dar Al-Handasah logo" className="w-20 h-20 sm:w-16 sm:h-16 object-contain mx-auto mb-2" />
                <span
                  className="text-white text-xs sm:text-base font-bold text-center whitespace-nowrap"
                  style={{
                    textShadow: '0 2px 8px rgba(0,0,0,0.55)'
                  }}
                >
                  Dar Al-Handasah
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={assets.c3} alt="Khatib & Alami logo" className="w-20 h-20 sm:w-16 sm:h-16 object-contain mx-auto mb-2" />
                <span
                  className="text-white text-xs sm:text-base font-bold text-center whitespace-nowrap"
                  style={{
                    textShadow: '0 2px 8px rgba(0,0,0,0.55)'
                  }}
                >
                  Khatib & Alami
                </span>
              </div>
              {/* Bottom row: 3 companies */}
              <div className="flex flex-col items-center justify-center">
                <img src={assets.c4} alt="Arab Contractors logo" className="w-20 h-20 sm:w-16 sm:h-16 object-contain mx-auto mb-2" />
                <span
                  className="text-white text-xs sm:text-base font-bold text-center whitespace-nowrap"
                  style={{
                    textShadow: '0 2px 8px rgba(0,0,0,0.55)'
                  }}
                >
                  LIU
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={assets.c5} alt="El Seif Eng. logo" className="w-20 h-20 sm:w-16 sm:h-16 object-contain mx-auto mb-2" />
                <span
                  className="text-white text-xs sm:text-base font-bold text-center whitespace-nowrap"
                  style={{
                    textShadow: '0 2px 8px rgba(0,0,0,0.55)'
                  }}
                >
                  El Seif Eng.
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={assets.c6} alt="Man Enterprise logo" className="w-20 h-20 sm:w-16 sm:h-16 object-contain mx-auto mb-2" />
                <span
                  className="text-white text-xs sm:text-base font-bold text-center whitespace-nowrap"
                  style={{
                    textShadow: '0 2px 8px rgba(0,0,0,0.55)'
                  }}
                >
                  معاً نحو غد أفضل
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        :root {
          --accent: #CFA386;
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        :root {
          --accent: #CFA386;
          --accent-hover: #ac906e;
        }
      `}</style>
    </>
  )
}
export default Header
