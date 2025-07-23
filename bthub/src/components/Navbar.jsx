import React, { useState } from 'react'
import { assets } from '../assets/assets.js'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <div className="absolute top-0 left-0 w-full z-10 mg-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 md:px-20 lg:px-32">
        <img
          src={assets.logo}
          alt="logo"
          className="transition-all duration-300 cursor-pointer hover:bg-[#CFA386] rounded-full w-40 h-20"
        />
        <div
          className="absolute left-0 bottom-0 w-full h-[0.1rem] bg-[#CFA386] rounded-full md:h-[0.1rem] mb-4"
          aria-hidden="true"
        ></div>
        <ul className="hidden md:flex gap-7 text-white justify-end">
          <a
            href="#Header"
            className="cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 transform"
            style={{ color: 'var(--textPrimary)' }}
          >
            Home
          </a>
          <a
            href="#About"
            className="cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 transform"
            style={{ color: 'var(--textPrimary)' }}
          >
            About
          </a>
          <a
            href="#Projects"
            className="cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 transform"
            style={{ color: 'var(--textPrimary)' }}
          >
            Projects
          </a>
          <a
            href="#Courts"
            className="cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 transform"
            style={{ color: 'var(--textPrimary)' }}
          >
            Sports
          </a>
          <a
            href="#Contact"
            className="cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 transform"
            style={{ color: 'var(--textPrimary)' }}
          >
            Contact Us
          </a>
        </ul>
        {/*         <button className="hidden md:block px-8 py-2 rounded-full font-semibold transition-all duration-300 border-2 border-[#CFA386] text-[#CFA386] bg-transparent shadow-[0_0_8px_0_#CFA386] hover:bg-[#CFA386] hover:text-white hover:scale-105 transform">
          Sign up
        </button> */}
        
        <img
          src={assets.menu_icon}
          alt="menu"
          className="w-6 h-6 cursor-pointer md:hidden shadow-lg"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-[#CFA386] transition-all duration-300 ${
          showMobileMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <img
            src={assets.logo}
            alt="logo"
            className="cursor-pointer"
          />
          <img
            src={assets.cross_icon}
            alt="close"
            className="w-12 h-12 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>
        <ul className="flex flex-col items-center mt-5 px-5 text-xl font-medium gap-12">
          <a  onClick={() => setShowMobileMenu(false)} href="#Header" className="px-4 py-2 rounded-full inline-block text-white"> Home</a>
          <a  onClick={() => setShowMobileMenu(false)}href="#About" className="px-4 py-2 rounded-full inline-block text-white"> About</a>
          <a  onClick={() => setShowMobileMenu(false)}href="#Projects" className="px-4 py-2 rounded-full inline-block text-white"> Projects</a>
          <a  onClick={() => setShowMobileMenu(false)}href="#Courts" className="px-4 py-2 rounded-full inline-block text-white"> Sports</a>
          <a  onClick={() => setShowMobileMenu(false)}href="#Contact" className="px-4 py-2 rounded-full inline-block text-white"> Contact Us</a>
        </ul>
      </div>
      <style>{`
          :root {
            --accent: #CFA386;
          }
        `}</style>

        
    </div>
  )
}

export default Navbar