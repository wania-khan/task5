import React from 'react';
import img2 from '../components/imgs/img2.png';
import img3 from '../components/imgs/img3.png';
import img4 from '../components/imgs/img4.png';

function Hero2(){
    return(
        <>
      <div className='container4'>
      <p className='p3'>Featured works</p>
      <div className='inner-container'>
        {/* Block1 */}
        <div className='block1'>
        <div className='block1-img'>
        <img className='img2' src={img2} alt='error!'/>
        </div>
        <div className='block1-text'>
        <span className='sp9'>Designing Dashboards</span>
        <br></br>
       <span className='disc'>2020</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className='sp10'>Dashboard</span>
        <br></br>
       <span className='sp11'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
       Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
        </div>
        </div>
        <br></br>
        <hr className='hr'></hr>
        {/* Block2 */}
        <div className='block2'>
        <div className='block-img'>
        <img className='img2' src={img3} alt='error!'/>
        </div>
        <div className='block-text'>
        <span className='sp9'>Vibrant Portraits of 2020</span>
        <br></br>
       <span className='disc'>2018</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className='sp10'>Illustration</span>
        <br></br>
       <span className='sp11'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
       Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
        </div>
        </div>
        <br></br>
        <hr className='hr'></hr>
        {/* Block3 */}
        <div className='block3'>
        <div className='block-img'>
        <img className='img2' src={img4} alt='error!'/>
        </div>
        <div className='block-text'>
        <span className='sp9'>36 Days of Malayalam type</span>
        <br></br>
       <span className='disc'>2018</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className='sp10'>Typography</span>
        <br></br>
       <span className='sp11'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
       Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
        </div>
        </div>  
        <br></br>   
        <hr className='hr'></hr>   
      </div>
      </div>
        </>
    );
}

export default Hero2;