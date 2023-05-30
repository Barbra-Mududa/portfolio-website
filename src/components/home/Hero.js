import React from 'react'
import WomanImage from '../../assets/img/s-pic.jpeg'
import '../style.css'

const Hero = () => {
  return (
    <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover
    lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
        <div className='container mx-auto h-full'>
            <div className='flex items-center h-full pt-8'>
              <div className='flex-1 flex-col items-center items-start'>
                <p id='intro-txt' className='text-lg text-accent mb-[22px]'>Hey, I'm Barbra 👋</p>
                <h1 id='intro' className='text-4xl leading-[44px] md:text-5xl md:leading-light 
                lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px'>
                  I Build & Design <br/>Web Interfaces.
                </h1>
                <p id='intro-txt' className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[1000px] text-lg text-center lg:text-left'>
                I am a skilled full-stack developer specializing in frontend web development and design, dedicated to creating exceptional digital experiences.                </p>
                <button id='btn' className='btn btn-md bg-accent hover:bg-accent-hover text-white font-bold py-2 px-4 rounded'>Work with me</button>
              </div>
              <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
                <img id='my-pic' src={WomanImage} alt=''/>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
