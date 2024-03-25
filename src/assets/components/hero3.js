import React from 'react';
import fb from './imgs/fb.svg';
import insta from './imgs/insta.svg';
import twitter from './imgs/twitter.svg';
import linkedin from './imgs/Linkedin.svg';
import Copyrights from './imgs/Copyright ©2020 All rights reserved.svg';

function Hero3(){
    return(
    <>
    <div className='container5'>
    <div className='social-icons'>
    <img src={fb} alt='error'></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <img src={insta} alt='error'></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <img src={twitter} alt='error'></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <img src={linkedin}alt='error'></img>
    </div>
    <br></br><br></br>
    <div className='copyright-img'>
    <img src={Copyrights} alt='error'></img>
    </div>
    </div>
    </>
    );
}

export default Hero3;