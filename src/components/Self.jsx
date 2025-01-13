import React, { useRef } from 'react'
import { PROFILE } from "../constants/index"     
import { RiArrowRightUpLine } from '@remixicon/react';
import image from '../assets/image.jpg'
const Self = () => {
    const selfRef = useRef(null);

  return (

    <section className="flex min-h-screen flex-col items-center justify-center gap-4 lg:gap-6" rel={selfRef}>
      <div className=' mt-8 lg:mt-20'>
        <h1 className='self-title text-4xl uppercase lg:text-6xl font-semibold text-center pb-2'>{PROFILE.name}</h1>
        <h2 className='self-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-center text-2xl tracking-tighter text-transparent'>{PROFILE.role}</h2>
      </div>
      <p className='self-text max-w-2xl p-2 text-center text-xl tracking-tighter lg:text-lg'>{PROFILE.subheading}</p>
      <a href="/DhairyaResume.pdf" target='_blank' download className='self-btn mb-6 flex gap-1 rounded-full border border-pink-200/50 px-3 py-2 tracking-tighter'>
      <span>Download Resume</span>
      <RiArrowRightUpLine/>
      </a>
      <img src={image} width={400} className=' rounded-full border-4 border-purple-100/20 p-2 ' alt="Description of the image" />
  

    </section>


  )
}

export default Self
