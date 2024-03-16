import './App.css';
import React from 'react';
import img1 from './imgs/img1.png';
function App() {
  return (
    <div className="App">
  {/* ------First Section------ */}
  <div className='container1'>
    <div className='container1a'><span className='sp1'><b>Works&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></span>
  <span className='sp2'><b>Blog&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></span>
  <span className='sp3'><b>Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></span></div>
  </div>
  <br></br>
  {/* ------Second Section------ */}
  <div className='container2'>
  <div className="left-block">
  <p className='p1'>Hi, I am John, Creative Technologist</p>
  <p className='p2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
  <br></br><br></br>
  <button className='btn1'>Download Resume</button>
  </div>
  <div className="right-block">
  <img className='img1' src={img1} alt='error!'/>
  </div>
  </div>
  {/* ------Third Section------ */}
  <div className='container3'>
  <div className='div33'>
      <span className='sp4'>Recent Posts</span>
      <span className='sp5'>View All</span>
      </div>
   <div className='container3a'>
    <div className='left-block1'>
    <span className='sp6'>Making a design system from scratch</span><br></br><br></br>
      <span className='sp7'><span className='sp7a'>12 Feb 2020 </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className='sp7b'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className='sp7c'>Design, Pattern </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span><br></br><br></br>
      <span className='sp8'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
       Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
    </div>
    <div className='right-block1'>

    </div>
   </div>
  </div>
    </div>
  );
}

export default App;
