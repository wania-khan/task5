import React from 'react';
import img1 from "../assets/imgs/img1.png";

function Hero() {
  return (
<>
<div className='container2'>
  <div className="left-block">
  <p className='title'>Hi, I am John, Creative Technologist</p>
  <p className='description'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
   Velit officia consequat duis enim velit mollit.
   Exercitation veniam consequat sunt nostrud amet.</p>
  <br></br>
  <button className='btn1'>Download Resume</button>
  </div>
  <div className="right-block">
  <img className='' src={img1} alt='error!'/>
  </div>
  </div>
</>
  );
}

export default Hero;