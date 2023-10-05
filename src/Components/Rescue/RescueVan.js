import React from 'react'
import "./RescueVan.css"
import van from '../../assest/images/rescuevan.png'
const RescueVan = () => {
  return (
    <>
    <div className='Rescue-header-tittle'>
    <h1><span className='Rescue-header'>JSF R</span><span className='rescue-tittle-escue'>escue</span><span className='rescue-header-van'> Van</span></h1>
    </div>
    <div className='Rescue-container'>
    <div className='rescue-left'>
    <div className='rescue-left-paragraph'>
    <p className='rescue-para'>Introducing Jeevshakti Rescue Van, your trusted  companion in times of pet emergencies and transportation needs. 
    🌟Our rescue van comes equipped with double AC, ensuring your furry friend's comfort throughout the journey.</p>
    </div>
    <button className='call-rescue'>Call Rescue Van</button>

    </div>
    <div className='rescue-right'>
    <div className='rescue-right-list'>
    <ul>
        <li>Sanitized</li>
        <li>Fully Ventilated</li>
        <li>Comfortable</li> 
    </ul>
    </div>
    
    <img className='van-image' src={van} alt='rescue-van' />

    </div>

    </div>
    </>
  )
}

export default RescueVan