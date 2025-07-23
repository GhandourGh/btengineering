import React from 'react'
import phoneIcon from '../assets/phone.svg'
import whatsappIcon from '../assets/whatsapp.svg'

const ContactUs = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center py-8' id='Contact'>
      <h2 className='text-xl font-bold text-center mb-4'>
        Contact <span className='relative text-[#CFA386] underline underline-offset-4 decoration-2'>Us</span>
      </h2>
      <img src={phoneIcon} alt='Phone' className='w-8 h-8 mb-4' />
      <div className='flex items-center gap-3'>
        <a href='tel:+96103639948' className='bg-[#CFA386] text-white px-6 py-2 rounded-full font-semibold text-base shadow hover:bg-[#ac906e] transition-all duration-300 hover:scale-105'>+961 03-639-948</a>
        <a href='https://wa.me/96103639948' target='_blank' rel='noopener noreferrer' aria-label='WhatsApp' className='flex items-center justify-center w-10 h-10 rounded-full bg-green-300 hover:bg-green-100 transition-all duration-300'>
          <img src={whatsappIcon} alt='WhatsApp' className='w-6 h-6' />
        </a>
      </div>
    </div>
  )
}

export default ContactUs