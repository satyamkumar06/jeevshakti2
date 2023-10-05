import React from 'react'
import './AboutHome.css'
import trans from '../../../assest/images/imagetrans.png'
const AboutHome = () => {
  return (
    <div className='about-home-container'>
      <img className='trans-about-image' src={trans} alt='image'/>
      <h1 className='about-page-header'><span className='about-our'>Our</span><span className='about-story'>Story</span></h1>
      
    </div> 
  )
}

export default AboutHome