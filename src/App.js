import './App.css';
import React from 'react';
import Hero from './assets/components/hero.js';
import Hero1 from './assets/components/hero1.js';
import Hero2 from './assets/components/hero2.js';
import Hero3 from './assets/components/hero3.js'

function App() {
  return (
    <div className="App">
  {/* ------First Section------ */}
  <div className='container1'>
    <div className='container1a'><span className='sp1'>Works&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <span className='sp2'>Blog&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <span className='sp3'>Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
  </div>
  <br></br><br></br>
  {/* ------Second Section------ */}
  <Hero/>
  <br></br><br></br>
  {/* ------Third Section------ */}
  <div className='container3'>
  <Hero1/>
  </div>
    {/* ------Fourth Section------ */}
    <Hero2/>
    <br></br><br></br><br></br>
    {/* ------Fifth Section------ */}
    <Hero3/>
  </div>
  );
}

export default App;
