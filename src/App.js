import './App.css';
import React from 'react';
import Hero from './assets/components/hero.js';
import Hero1 from './assets/components/hero1.js';
import img2 from './assets/imgs/img2.png';
import img3 from './assets/imgs/img3.png';
import img4 from './assets/imgs/img4.png';

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
   <p className='p3'  style={{textAlign: 'left'}}>Featured works</p>
    {/* ------Fourth Section------ */}
    
    <br></br><br></br><br></br>
    {/* ------Fifth Section------ */}
    <div className='container7'>
  <div className='social-icons'>
    
  </div>
</div>
  </div>
  );
}

export default App;
