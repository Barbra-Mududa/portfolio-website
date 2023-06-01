import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Skills from './components/home/Skills';
import Blog from './components/blogs/Blog';
import Projects from './components/projects/Projects';

const App = () => {
  return <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Blog />
  </div>;
};

export default App;
