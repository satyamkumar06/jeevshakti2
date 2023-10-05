import React from 'react'
import doglogo from '../../assest/images/dog-pic.png'
import './HomePage.css'
const HomePage = () => {
  return (
    <div className='homepage-container'>
    
        <div className='homepage-left'>
        <h1><span className='homepage-text1' > Street animals need our protection.</span><span className='homepage-text2'> Help them today.</span> </h1>
        <button className='homepage-donation'>Make a Donation </button>
        </div>
        <div className='homepage-right'>
        <img className='dog-image' src={doglogo} alt='jeevshakti'/>
        </div>
    </div>
  )
}

export default HomePage