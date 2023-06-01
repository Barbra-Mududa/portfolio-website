import React from 'react';
import { social } from '../../data';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center space-x-6'>
          {social.map((item, index) => {
            const { href, icon } = item;
            return (
              <a href={href} key={index} className='text-white text-3xl'>
                {icon}
              </a>
            );
          })}
        </div>
        <p className='text-center mt-4'>©Copyright 2023|Barbra Mududa</p>
      </div>
    </footer>
  );
};

export default Footer;