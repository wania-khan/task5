import './App.css';
import React from 'react';
import Hero from './components/hero.js';
import Hero1 from './components/hero1.js';
import img2 from './imgs/img2.png';
import img3 from './imgs/img3.png';
import img4 from './imgs/img4.png';

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
    <div className='container4'>
    <div className='box1'>
    <img className='img2' src={img2} alt='error!'/>
    </div>
    <div className='box2'>
     <span className='sp12'>Designing Dashboards</span>
     <br></br><br></br>
     <span className='disc'>2020</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <span className='sp13'>Dashboard</span>
     <br></br>
     <span className='sp14'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
       Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
    </div>
    </div>
    <hr className='hr'></hr>
    <br></br>
    <div className='container5'>
    <div className='box3'>
    <img className='img3' src={img3} alt='error!'/>
    </div>
    <div className='box4'>
     <span className='sp15'>Vibrant Portraits of 2020</span>
     <br></br><br></br>
     <span className='disc'>2018</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <span className='sp16'>Illustration</span>
     <br></br>
     <span className='sp17'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
       Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
    </div>
    </div>
    <hr className='hr'></hr>
    <div className='container6'>
    <div className='box5'>
    <img className='img4' src={img4} alt='error!'/>
    </div>
    <div className='box6'>
     <span className='sp18'>36 Days of Malayalam type</span>
     <br></br><br></br>
     <span className='disc'>2018</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <span className='sp19'>Typography</span>
     <br></br>
     <span className='sp20'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
       Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
    </div>
    </div>
    <hr className='hr'></hr>
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
