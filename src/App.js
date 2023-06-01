import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Skills from './components/home/Skills';
import PSection from './components/projects/PSection';
import Blog from './components/blogs/Blog';

const App = () => {
  return <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <PSection />
    <Blog />
    <div style={{height: '2000px'}}></div>
  </div>;
};

export default App;
