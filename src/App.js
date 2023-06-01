import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Skills from './components/home/Skills';
import Projects from './components/projects/Projects';
import Blog from './components/blogs/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Blog />
    <Contact />
    <Footer />
  </div>;
};

export default App;
