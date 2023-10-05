import React, { useState } from 'react'
import Logo from '../../assest/images/Logo Green Name.png'
import './Navbar.css'
import {GiHamburgerMenu} from "react-icons/gi";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
  
    <div className='container'>

    <div className='left-logo'>
    
    <img className='logo' height="93px" width="241px" src={Logo} alt='logo' />
   
    </div>
    <div className= {showMediaIcons ? "middle-nav mobile-menu-link " : "middle-nav "} >
       <p><span className='homepara'>Home </span></p>
       <p >About Us v</p>
       <p >Our Work v</p>
       <p>Events</p>
       <p>Store for Paws</p>
    </div>
    <div className='right-nav'>
    <button className='donation'>Donate</button>
    </div>
    <div className='hamburger-menu'>
    <a href='#' onClick={() => setShowMediaIcons(!showMediaIcons)}>
    <GiHamburgerMenu/>
    </a>
    </div>

    </div>
  )
}

export default Navbar