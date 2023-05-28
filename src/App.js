import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/home/Hero';

// import components

const App = () => {
  return <div>
    <Navbar />
    <Hero />
    <div style={{height: '2000px'}}></div>
  </div>;
};

export default App;
