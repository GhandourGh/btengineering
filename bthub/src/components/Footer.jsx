import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/95 backdrop-blur-sm text-white">
      <div className="container mx-auto px-6 py-12 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={assets.logo} 
                alt="Bachir Taha Engineering Hub" 
                className="h-20 w-auto mr-23 sm:mx-0 mx-auto sm:block block"
                style={{ display: 'block' }}
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading engineering firm delivering innovative solutions with over 30 years of experience. 
              We specialize in comprehensive engineering services, ensuring quality, reliability, and client satisfaction.
            </p>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a href="https://www.instagram.com/bt.engineeringhub?utm_source=ig_web_button_share_sheet&igsh=MXQ3MHVuNXhmNXFobQ==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#CFA386] transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1-5.25 5.25A5.25 5.25 0 0 1 12 6.75zm0 1.5a3.75 3.75 0 1 0 3.75 3.75A3.75 3.75 0 0 0 12 8.25zm5.5-.75a1 1 0 1 1-1 1a1 1 0 0 1 1-1z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#CFA386] transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#CFA386] transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#Header" className="text-gray-300 hover:text-[#CFA386] transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#About" className="text-gray-300 hover:text-[#CFA386] transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="#Projects" className="text-gray-300 hover:text-[#CFA386] transition-colors duration-200">Projects</a>
              </li>
              <li>
                <a href="#Contact" className="text-gray-300 hover:text-[#CFA386] transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Structural Engineering</span>
              </li>
              <li>
                <span className="text-gray-300">Project Management</span>
              </li>
              <li>
                <span className="text-gray-300">Site Supervision</span>
              </li>
              <li>
                <span className="text-gray-300">Quality Control</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#CFA386] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-300">West Beqaa, Kamed el louz, Main Street</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#CFA386] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+96103639948" className="text-gray-300 hover:text-[#CFA386] transition-colors duration-200">+961 03-639-948</a>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#CFA386] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@btengineeringhub.com" className="text-gray-300 hover:text-[#CFA386] transition-colors duration-200">info@btengineeringhub.com</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Bachir Taha - Engineering Hub. All rights reserved. | Est. 1993
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 