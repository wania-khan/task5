import './App.css';
import React from 'react';
import Hero from './components/hero.js';
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
  {/* ------Second Section------ */}
  <Hero></Hero>
  {/* ------Third Section------ */}
  <div className='container3'>
  <div className='div33'>
    <div className='inner-container'>
      <div className='fluid-container'>
      <span className='sp4'>Recent Posts</span>
      <span className='sp5'>View All</span>
      </div>
        </div>
      </div>
    <div className='content-container'>
    <div className='block'>
    <span className='sp6' style={{textAlign: 'left'}}>Making a design system from scratch</span><br></br><br></br>
      <span className='sp7'><span className='sp7a'>12 Feb 2020 </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className='sp7b'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className='sp7c'>Design, Pattern </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span><br></br><br></br>
      <span className='sp8'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
       Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
    </div>
    <div className='block'>
    <span className='sp9' style={{textAlign: 'left'}}>Creating pixel perfect icons in Figma</span><br></br><br></br>
      <span className='sp10'><span className='sp10a'>12 Feb 2020 </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className='sp10b'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className='sp10c'>Figma, Icon Design</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span><br></br><br></br>
      <span className='sp11'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
       Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
    </div>
    </div>
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
