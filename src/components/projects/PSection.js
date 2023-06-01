import React from 'react'
import Projects from './Projects'

const PSection = () => {
  return (
    <section id='main' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col  items-center text-center'>
          <h2 className='section-title before:content-experience relative before:absolute before:opacity-40 
          before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>
            My Projects
          </h2>
          <p className='sub-title'>I am thrilled to showcase a blend of my individual strengths and remarkable collaborative ventures with other skilled developers.</p>
        </div>
        <Projects />
      </div>
    </section>
  )
}

export default PSection