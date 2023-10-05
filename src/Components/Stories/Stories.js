import React from 'react'
import './Stories.css'

const Stories = () => {
  return (
    <div className='Stories-container'>
    <div className='stories-right'>
    <div className='stories-image-one'>
    <button  className='view-stories'> View Story</button>
    </div>
    <div className='stories-image-two'>
    <button  className='view-stories'> View Story</button>
    </div>
    <div className='stories-image-three'>
    <button  className='view-stories'> View Story</button>
    </div>
        
         
        
    </div>
        <div className='stories-left'>
        <button className='all-stories'>View all stories -- </button>
        </div>
    </div>
  )
}

export default Stories