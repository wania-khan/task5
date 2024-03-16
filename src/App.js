import './App.css';
import React from 'react';
import img1 from './imgs/img1.png';
function App() {
  return (
    <div className="App">
    <div className='div1'>
    <span className='sp1'> <b>Works&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></span>
    <span className='sp2'><b>Blog&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></span>
    <span className='sp3'><b>Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></span>
    </div>
    <br></br><br></br><br></br>
    <br></br><br></br><br></br>
    
    <div className='div2'>
    <p className='p1'>Hi, I am John, Creative Technologist</p>
    <p className='p2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
       <img className='img1' src={img1} alt='error!'/>
    </div>
    <button className='btn1' style={{
      borderRadius: '2px',
      border: 'solid 2px #FF6464',
      background: '#FF6464',
      color: '#FFFFFF',
      width: '208px',
      height: '47px',
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center',
      marginLeft: '10%'
      }}>Download Resume</button>
    <br></br><br></br><br></br><br></br><br></br>
    <div className='div3' style={{width: '100%'}}>
      <span className='sp4'>Recent Posts</span>
      <span className='sp5'>View All</span>
      <div className='div3a'>
      <div className='3a.1'>
      Making a design system from scratch<br></br>
      12 Feb 2020

      </div>
      <div className='3a.2'></div>
    </div>
    </div>  
    </div>
  );
}

export default App;
