import React from 'react';
import img1 from "../assets/imgs/img1.png";

function Hero() {
  return (
<>
<div className='container2'>
  <div className="left-block">
  <p className='title'>Hi, I am John, <br></br>Creative Technologist</p>
  <p className='description'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
   Velit officia consequat duis enim velit mollit.
   Exercitation veniam consequat sunt nostrud amet.</p>
  <br></br><br></br>
  <button className='btn1'>Download Resume</button>
  </div>
  <div className="right-block">
  <div className='inner-cont'>
  <img className='img1' src={img1} alt='error!'/>
  </div>
  </div>
  </div>
</>
  );
}

export default Hero;