import React from 'react';
import { social } from '../../data';

function Socials() {
  return (
    <ul className='fixed left-0 top-0 h-full flex flex-col justify-center items-center space-y-6'>
      {social.map((item, index) => {
        return (
          <li className='flex justify-center items-center text-white' key={index}>
            <a
              className='text-4xl transition duration-300 ease-in-out hover:text-accent'
              href={item.href}
            >
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Socials;
