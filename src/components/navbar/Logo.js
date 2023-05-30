import React from 'react'
import { Link } from 'react-scroll'
import { navigation } from '../../data'
        
function Logo() {
  return (
    <nav>
        <ul className='flex space-x-8 capitalize text-[15px]' id='nav-links'>
        {navigation.map((item, index) => {
            return(
              <li className='text-white hover:text-accent
              cursor-pointer' key={index}>
              <Link to={item.href} 
              activeClass='active' 
              spy={true} 
              smooth={true}
              duration={500} 
              offset={-70} 
              className='transition-all
              duration-300'>
                {item.name}
              </Link>  
              </li>  
            )
        })}
        </ul>  
    </nav>
  )
}

export default Logo