import React, { useState, useEffect } from 'react'
import Logo from './Logo';
import Socials from './Socials';
import Mobile from './Mobile';
import '../style.css';

function Navbar() {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      return window.scrollY > 50? setBg(true) : setBg(false);
    })
  },[])
  return (
    <header className={`${bg ? 'bg-tertiary h-20' : 'h-24'}
    flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300 
    `} id= 'navbar'>
      <div className='container mx-auto h-full flex items-center justify between' id='logo-name'> 
       <a href='#'>Barbra Mududa </a> 
      </div>
      <div className='hidden lg:block'>
        <Logo />
      </div>
      <div className='hidden lg:block'>
        <Socials />
      </div>
      <div className='lg:hidden'>
        <Mobile />
      </div>
    </header>
  )
}

export default Navbar