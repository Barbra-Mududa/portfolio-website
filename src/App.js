import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Skills from './components/home/Skills';

const App = () => {
  return <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <div style={{height: '2000px'}}></div>
  </div>;
};

export default App;
