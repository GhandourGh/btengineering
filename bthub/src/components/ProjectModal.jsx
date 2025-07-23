import React from 'react'

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null
  // No need to render <scrollToTop/> here. Remove this line.

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
          <div className="flex items-center mb-4">
            <span className="text-gray-600 flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#CFA386]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {project.location}
            </span>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Project Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                This engineering project in {project.location} showcases our expertise in delivering innovative solutions. 
                The project involved comprehensive planning, design, and execution phases, 
                resulting in a successful completion that exceeded client expectations. 
                Our team worked closely with stakeholders to ensure all requirements were met 
                while maintaining the highest standards of quality and safety.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Project Highlights</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Comprehensive engineering design and planning</li>
                <li>Advanced quality assurance and safety protocols</li>
                <li>Timely project delivery within budget constraints</li>
                <li>Stakeholder collaboration and communication</li>
                <li>Sustainable and innovative engineering solutions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Engineering Services</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Structural Engineering</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Project Management</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Quality Control</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Site Supervision</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Technical Documentation</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex space-x-4">
            <button className="bg-[#CFA386] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#ac906e] transition-all duration-300">
              View Details
            </button>
            <button 
              onClick={onClose}
              className="border border-[#CFA386] text-[#CFA386] px-6 py-2 rounded-lg font-semibold hover:bg-[#CFA386] hover:text-white transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default ProjectModal 