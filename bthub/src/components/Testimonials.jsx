import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='container mx-auto py-4 pt-5 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden flex flex-col items-center justify-center' id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>What Our <span className='underline underline-offset-4 decoration-1 underline font-light'>Clients Say</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Hear from our satisfied clients about their experience working with us</p>

        {/* testimonials grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'>
            {testimonialsData.map((testimonial, index) => (
                <div key={index} className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300'>
                    {/* rating stars */}
                    <div className='flex items-center mb-4'>
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className='w-5 h-5 text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
                                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                            </svg>
                        ))}
                        {[...Array(5 - testimonial.rating)].map((_, i) => (
                            <svg key={i} className='w-5 h-5 text-gray-300' fill='currentColor' viewBox='0 0 20 20'>
                                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                            </svg>
                        ))}
                    </div>

                    {/* testimonial text */}
                    <p className='text-gray-600 mb-6 leading-relaxed italic'>"{testimonial.text}"</p>

                    {/* client info */}
                    <div className='flex items-center'>
                        <img 
                            src={testimonial.image} 
                            alt={testimonial.alt} 
                            className='w-12 h-12 rounded-full object-cover mr-4'
                        />
                        <div>
                            <h3 className='font-semibold text-gray-900'>{testimonial.name}</h3>
                            <p className='text-sm text-gray-500'>{testimonial.title}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials