import React from 'react';
import fb from '../assets/imgs/fb.svg';
import insta from '../assets/imgs/insta.svg';
import twitter from '../assets/imgs/twitter.svg';
import linkedin from '../assets/imgs/Linkedin.svg';
import Copyrights from '../assets/imgs/Copyright ©2020 All rights reserved.svg';

function Hero3(){
    return(
    <>
    <div className='container5'>
    <div className='social-icons'>
    <img src={fb} alt='error' className='fb'></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <img src={insta} alt='error' className='ig'></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <img src={twitter} alt='error' className='twt'></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <img src={linkedin}alt='error' className='li'></img>
    </div>
    <br></br><br></br>
    <div className='copyright-img'>
    <img src={Copyrights} alt='error'></img>
    </div><br></br>
    </div>
    </>
    );
}

export default Hero3;