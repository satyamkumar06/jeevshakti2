import React from 'react'
import './Achievement.css'
import aone from '../../assest/images/Aone.png'
import atwo from '../../assest/images/Atwo.png'
import athree from '../../assest/images/Athree.png'
const Achievement = () => {
  return (
    <div className='Achievements-main-container'>

    <h1> <span className='Achievements-tittle-achieve'>Achieve</span><span className='Achievements-tittle-ments' >ments <span className='year'>2023</span></span></h1>
       
        
        <div className='container-achievements'>
        <div className='left-container-A'>
        <img className='achievements-image' src={aone} alt ='Medical Rescues'/>
        <p className='achievements-three-hundred'>300+</p>
        <p className='achievements-rescue'>Medical <br/> Rescues</p>
        </div>

        <div className='middle-container-A'>
        <img className='achievements-image' src={atwo} alt ='Strays Sterilized'/>
        <p className='achievements-three-hundred'>100+</p>
        <p  className='achievements-rescue'>Strays <br/> Sterilized</p>
        </div>

        <div className='right-container-A'>
        <img className='achievements-image' src={athree} alt ='Volunteers'/>
        <p className='achievements-three-hundred'>200+</p>
        <p className='achievements-rescue'>Volunteers</p>
        </div>
        </div>

        <button className='make-doanation'>Make a Donation</button>
    </div>
  )
}

export default Achievement