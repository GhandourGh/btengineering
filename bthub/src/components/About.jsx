import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto pt-10 pb-4 px-4 md:px-20 lg:px-32 w-full overflow-hidden'
    id='About'>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center w-full animate-fade-in-up">
          About <span className="underline underline-offset-4 decoration-1 font-light">Bachir Taha - Engineering Hub</span>
        </h1>
        <p className="text-lg text-black mb-5 max-w-2xl mx-auto text-center animate-fade-in-up animation-delay-400">
          Bachir Taha - Engineering Hub is a leading engineering firm that provides innovative solutions for a wide range of industries. With a focus on quality, reliability, and client satisfaction, we deliver results that exceed expectations.
        </p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20 animate-fade-in-up animation-delay-400'>
            <img src={assets.brand_img} alt='About Bachir Taha' className='w-full sm:w-1/2 max-w-lg hover:scale-105 transition-all duration-300' />
            <div className='flex flex-col items-center md:items-start my-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div className='hover:scale-105 transition-all duration-300'>
                        <p className='text-4xl font-medium text-gray-800'>30+</p>
                        <p className=''>Years of Experience</p>
                    </div>
                    <div className='hover:scale-105 transition-all duration-300'>
                        <p className='text-4xl font-medium text-gray-800'>800+</p>
                        <p className=''>Projects Delivered</p>
                    </div>
                    <div className='hover:scale-105 transition-all duration-300'>
                        <p className='text-4xl font-medium text-gray-800'>60+</p>
                        <p className=''>Team Members</p>
                    </div>
                    <div className='hover:scale-105 transition-all duration-300'>   
                        <p className='text-4xl font-medium text-gray-800'>25+</p>
                        <p className=''>Ongoing Projects</p>
                    </div>
                </div>
               
               <p className='my-10 max-w-lg'>
                Bachir Taha - Engineering Hub is a leading engineering firm that provides innovative solutions for a wide range of industries. With a focus on quality, reliability, and client satisfaction, we deliver results that exceed expectations.
               </p>
               <button className="bg-[#CFA386] text-white px-8 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-[#ac906e] hover:text-white hover:scale-105 transform">
                 <a href="#Contact">Learn More</a>
               </button>
         

            </div>

        </div>




    </div>
  )
}

export default About