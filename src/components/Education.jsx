import React, { useRef } from 'react'
import { EDUCATION } from '../constants';

const Education = () => {
    const educationRef = useRef(null);
  return (
    <section ref={educationRef} className='py-16' id="education">
      <div className='mx-auto max-w-full w-3/4 px-4'>
        <h2 className='mb-8 text-center text-3xl font-medium lg:text-4xl'> Education</h2>
        <div className=" flex flex-col space-y-8">
          {EDUCATION.map((education)=>(
            <div key={education.id} className=' rounded-xl border border-purple-300/20 p-6'>
              <h3 className='mb-2 text-lg font-bold lg:text-2xl'>{education.degree}</h3>
              <h4 className='text-lg font-semibold lg:text-xl'>{education.institution}</h4>
              <p className='text-sm lg:text-base italic'>{education.duration}</p>
              <p className='mt-2'>{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
