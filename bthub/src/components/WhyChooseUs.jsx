import React from 'react'

const features = [
  {
    icon: (
      <svg className='w-8 h-8 text-[#CFA386]' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' d='M12 8v4l3 3' /><circle cx='12' cy='12' r='10' /></svg>
    ),
    title: 'Engineering Expertise',
    desc: 'Our team consists of professional engineers with extensive experience in all types of projects.'
  },
  {
    icon: (
      <svg className='w-8 h-8 text-[#CFA386]' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' /></svg>
    ),
    title: 'Quality & Reliability',
    desc: 'We adhere to the highest quality standards and use the best materials to ensure lasting results.'
  },
  {
    icon: (
      <svg className='w-8 h-8 text-[#CFA386]' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6l4 2' /></svg>
    ),
    title: 'On-Time Delivery',
    desc: 'We respect client schedules and guarantee project delivery on time.'
  },
  {
    icon: (
      <svg className='w-8 h-8 text-[#CFA386]' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'><circle cx='12' cy='12' r='10' /><path strokeLinecap='round' strokeLinejoin='round' d='M8 12l2 2 4-4' /></svg>
    ),
    title: 'Customer Satisfaction',
    desc: 'Our top priority is client satisfaction from the first consultation to project handover.'
  },
]

const WhyChooseUs = () => (
  <section className='bg-white rounded-2xl border border-[#CFA386]/30 my-12 px-4 md:px-12 py-8 md:py-16 max-w-5xl mx-auto'>
    <h2 className='text-2xl sm:text-3xl font-bold text-center mb-8 text-black'>Why Choose Us?</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
      {features.map((f, i) => (
        <div key={i} className='flex flex-col items-center text-center gap-3'>
          {f.icon}
          <h3 className='font-bold text-lg text-black'>{f.title}</h3>
          <p className='text-gray-700 text-sm'>{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
)

export default WhyChooseUs 