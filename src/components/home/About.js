import React from 'react'
import Image from '../../assets/img/my-pic.jpeg'
import '../style.css'

const About = () => {
  return (
    <section className='section bg-secondary'id='about'>
      <div className='container mx-auto'>
        {/* <div className='flex flex-col xl:flex" gap-24'>
          <img id='s-pic' className='object-cover h-full w-[460px] md:mx-auto lg:mx-0 rounded-2xl' 
          src={Image} alt=''/>
        </div> */}
        <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
          <div className='flex flex-col'>
            <h2 className='text-6xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about
            relative before:absolute before::opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
              Barbra Mududa
            </h2>
            <p className='mb-4 text-2xl text-accent'>Web Developer</p>
            <hr className='mb-8' opacity-5/>
            <p className='mb-8 text-2xl'>As an ambitious and enthusiastic software developer, I strive to create interactive and practical platforms that solve current challenges. With my experience and expertise, I build robust and user-friendly applications, providing innovative solutions for businesses and individuals. Let me create the perfect tool for you.</p>
          </div>
          <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>Contact Me</button>
        </div>
      </div>
    </section>
  )
}

export default About