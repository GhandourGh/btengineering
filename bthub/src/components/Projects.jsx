import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import ProjectModal from './ProjectModal'
const Projects = ({ onModalStateChange }) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

useEffect(() => {
    const updateMobileState = () => {
        setIsMobile(window.innerWidth < 1024)
    }
    updateMobileState()
    window.addEventListener('resize', updateMobileState)
    return () => window.removeEventListener('resize', updateMobileState)
}, [])

useEffect(() => {
    const handleKeyPress = (e) => {
        if (e.key === 'ArrowLeft') {
            previousProject()
        } else if (e.key === 'ArrowRight') {
            nextProject()
        } else if (e.key === 'Escape' && isModalOpen) {
            closeProjectModal()
        }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
}, [isModalOpen])

    const nextProject = () => {
        if (isMobile) {
            setCurrentIndex((prev) => (prev + 1) % projectsData.length)
        } else {
            // On desktop, we show 4 projects at once, so we can only move 2 positions max
            // (6 projects - 4 visible = 2 possible positions)
            setCurrentIndex((prev) => (prev + 1) % (projectsData.length - 3))
        }
    }

    const previousProject = () => {
        if (isMobile) {
            setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1))
        } else {
            // On desktop, loop back to the last valid position
            setCurrentIndex((prev) => prev === 0 ? (projectsData.length - 7) : prev - 1)
        }
    }

    const openProjectModal = (project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
        onModalStateChange && onModalStateChange(true)
    }

    const closeProjectModal = () => {
        setIsModalOpen(false)
        setSelectedProject(null)
        onModalStateChange && onModalStateChange(false)
    }

  return (
    <div className= 'container mx-auto py-0 pt-0 px-6 md:px-20 lg:px32 my-10 w-full overflow-hidden flex flex-col items-center justify-center' id='Projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 animate-fade-in-up'>Projects <span className= 'underline underline-offset-4 decoration-1 underline font-light'> Completed </span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto animate-fade-in-up animation-delay-200'>We deliver quality engineering projects on time and with reliable results </p>


        {/* slider */}
    <div className='flex items-center mb-10 w-full gap-4 align-items-center justify-center animate-fade-in-up animation-delay-400'>
        <button 
            onClick={previousProject} 
            className='w-15 h-15 bg-gray-200 p-3 rounded-full shadow-md cursor-pointer hover:bg-gray-300 hover:scale-110 transition-all duration-300 transform group' 
            aria-label='previous project'
            title='Previous project (←)'
        > 
            <img src={assets.left_arrow} alt='arrow left' />
        </button>
        <button 
            onClick={nextProject} 
            className='w-15 h-15 bg-gray-200 p-3 rounded-full shadow-md cursor-pointer hover:bg-gray-300 hover:scale-110 transition-all duration-300 transform group' 
            aria-label='next project'
            title='Next project (→)'
        >
            <img src={assets.right_arrow} alt='arrow right' />
        </button>
    </div>
    {/* project slider container */}
    <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: isMobile 
              ? `translateX(-${currentIndex * 100}%)`
              : `translateX(-${currentIndex * 25}%)`
          }}
        >
            {projectsData.map((projects, index)=>(
                <div 
                    key={index} 
                    className={`relative flex-shrink-0 ${
                        isMobile ? 'w-full' : 'w-1/4'
                    } hover:scale-105 transition-all duration-300 cursor-pointer`}
                    onClick={() => openProjectModal(projects)}
                >
                    <img src={projects.image} alt={projects.title} className='w-full h-64 object-cover rounded-lg shadow-md' />
                    <div className='absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center'>
                        <h3 className='text-white text-2xl font-light'>{projects.title} </h3>
                    </div>
                    <div className='absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2'>
                        <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                        </svg>
                    </div>
                </div> 
            ))}
        </div>
    </div>

    {/* Project Modal */}
    <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
    />

    </div>


  )
}

export default Projects