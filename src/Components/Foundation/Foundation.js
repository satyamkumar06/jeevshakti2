import React from 'react'
import './Foundation.css'
import mainlogo from '../../assest/images/Logo Main.png'
const Foundation = () => {
  return (
    <div className='foundation-container'>
     
        <div className='foundation-left'>
        <h1><span className='jeevshakti-tittle'>JeevSh</span><span className='akti'>akti </span> <span className='foundation-tittle'>Foundation</span></h1>
        <p>Jeevshakti Foundation registered as a charitable Trust in May 2017, with its main objectives that encompass animal care and welfare.
         The Foundation is also registered and recognized for the benefits of tax exemption under section 80 G of the Income tax Act 1961.</p>
        </div>
        <div className='foundation-right'>
        <img className='mainlogo1' src={mainlogo} alt='main-logo' />
        </div>
    </div> 
  )
}

export default Foundation