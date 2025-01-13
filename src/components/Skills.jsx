import React, { useRef } from 'react'
import { SKILLS } from '../constants';

const Skills = () => {
    const skillsref = useRef(null);
  return (
    <section ref={skillsref} className='py-16' id="skills">
      <div className='px-4'>
        <h2 className=' mb-8 text-center text-3xl font-medium lg:text-4xl'>
            Skills
        </h2>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4'>
            {SKILLS.map((skills,index)=>(
                <div key={index} className='flex flex-col items-center text-center'>
                    <div className='mb-4'>{skills.icon}</div>
                    <div className='mb-2 text-lg font-medium lg:text-xl'>{skills.name}</div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
