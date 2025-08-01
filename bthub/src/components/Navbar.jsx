import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets.js'

const NAV_LINKS = [
  { href: '#Header', label: 'Home' },
  { href: '#About', label: 'About' },
  { href: '#Courts', label: 'Padel' },
  { href: '#Projects', label: 'Projects' },
  { href: '#Contact', label: 'Contact Us' },
]

const NavbarLink = ({ href, label, onClick, className = '', ...props }) => (
  <li>
    <a
      href={href}
      onClick={onClick}
      className={`cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-[#CFA386]  ${className}`}
      style={{ color: 'var(--textPrimary)' }}
      tabIndex={0}
      {...props}
    >
      {label}
    </a>
  </li>
)

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50) // Hide navbar after 50px scroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent background scroll when mobile menu is open
  React.useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [showMobileMenu])

  return (
    <nav className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
      isScrolled 
        ? 'md:-translate-y-full' 
        : 'md:translate-y-0'
    } bg-gradient-to-b from-black/90 via-black/60 to-transparent shadow-none`}>
      <div className="container mx-auto flex justify-between items-center px-4 py-3 md:px-16 lg:px-28 mb-5">
        <a href="#Header" tabIndex={0} aria-label="Go to Home">
          <img
            src={assets.logo}
            alt="Bachir Taha Engineering Hub logo"
            className="transition-all duration-300 cursor-pointer rounded-full w-36 h-22 sm:w-40 sm:h-20"
            loading="lazy"
          />
        </a>
        <ul className="hidden md:flex gap-10 text-white items-center">
          {NAV_LINKS.map(link => (
            <NavbarLink key={link.href} href={link.href} label={link.label} />
          ))}
        </ul>
        <button
          className="md:hidden p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#CFA386] bg-black/30"
          aria-label="Open menu"
          onClick={() => setShowMobileMenu(true)}
        >
          <img
            src={assets.menu_icon}
            alt="Open navigation menu"
            className="w-7 h-7"
            loading="lazy"
          />
        </button>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-30 bg-black/80 backdrop-blur-md transition-all duration-300 md:hidden flex flex-col ${
          showMobileMenu ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        aria-modal={showMobileMenu}
        role="dialog"
      >
        <div className="flex justify-between items-center p-6 border-b border-white/20">
          <img
            src={assets.logo}
            alt="Bachir Taha Engineering Hub logo"
            className="w-32 h-16 object-contain"
            loading="lazy"
          />
          <button
            className="p-2 rounded-full hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close menu"
            onClick={() => setShowMobileMenu(false)}
          >
            <img
              src={assets.cross_icon}
              alt="Close navigation menu"
              className="w-8 h-8"
              loading="lazy"
            />
          </button>
        </div>
        <ul className="flex flex-col items-center mt-12 px-8 text-xl font-semibold gap-8">
          {NAV_LINKS.map(link => (
            <NavbarLink
              key={link.href}
              href={link.href}
              label={link.label}
              onClick={() => setShowMobileMenu(false)}
              className="text-white w-full text-center py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-200 border border-transparent hover:border-white/20"
              style={{ color: '#fff' }}
            />
          ))}
        </ul>
        <div className="mt-auto p-6 text-center bg-black/40 border-t border-white/10">
          <p className="text-white/80 text-sm font-medium">Bachir Taha Engineering Hub</p>
          <p className="text-white/60 text-xs mt-1">Since 1993</p>
        </div>
      </div>
      <style>{`
        :root {
          --accent: #CFA386;
          --textPrimary: #fff;
        }
      `}</style>
    </nav>
  )
}

export default Navbar