import React from 'react'
import './Foundation2.css'
import about from '../../assest/images/about.png'
const Foundation2 = () => {
  return (
    <div className='foundation2-container'>
        <div className='foundation2-left'>
            <img className='about-image' src={about} alt='About-us'/>
            
        </div>
        <div className='foundation2-right'>
        <h1><span className='About-style'>About Us </span></h1>
            <p>JSF strongly believes in the concept of joining hands and involving the community so as to sensitize people to the needs of society.
             Our eyes and ears on the road are the local milk vendors, dhobis, fruit sellers, guards,
              shopkeepers and last but not the least, underprivileged children. This amazing band of people is effectively providing selfless care 
              to all creatures big and small!</p>
              <p><span className='learn-more'>Learn</span><span className='more'> more</span></p>
        </div>
        
    </div>
  )
}

export default Foundation2