import React from 'react'
import './Footer.css'
import logo from '../../assest/images/footer-logo.png'
import facebook from '../../assest/images/facebook.png'
import youtube from '../../assest/images/youtube.png'
import linkedin from '../../assest/images/linkedin.png'
import instagram from '../../assest/images/instagram.png'
import location from '../../assest/images/location.png'
import phone from '../../assest/images/phone.png'
const Footer = () => {
  return (
    <div className='footer-container'>
        
        <div className='footer-nav'>

        <div className='foooter-left-nav'>
        <img className='footer-logo' src={logo} alt='footer-logo'/>
        </div>

        <div className='footer-middle-nav'>
        <h1><span className='footerjeevshakti'>JeevShakti</span> <br/><span className='footer-founda'>Founda</span><span className='footer-tion'>tion</span></h1>
        </div>

        <div className='footer-right-nav'>
        <p className='footer-para'>Non Profit Organization<br/> for Animals</p>
        </div>

        </div>

        <div className='footer-hompage'>

        <div className='footer-homepage-left'>
        <h2 >Useful Links</h2>
        <p className='footer-hompage-para'>Home</p>
        <p className='footer-hompage-para' >About JSF</p>
        <p className='footer-hompage-para'>What we do</p>
        <p className='footer-hompage-para'>Store for Paws</p>
        <button className='footer-dontaion'>Make a Donation</button>
        </div>

        <div className='footer-homepage-middle'>
        <h2>Events</h2>
        <p className='footer-hompage-para'>Vaccination Drive</p>
        <p className='footer-hompage-para'>Sterilization Drive</p>
        <p className='footer-hompage-para'>Feeding Drive</p>
        <p className='footer-hompage-para'>Deworming Drive </p>
        <p className='footer-hompage-para'>Trees Plantation Drive</p>
        <p className='footer-hompage-para'>Awareness Programs</p>
        </div>

        <div className='footer-homepage-right'>
        <h2>Get in touch</h2>
        <p className='footer-hompage-para'><img className='footer-location' src={location} alt='loca'/> <span className='footer-space'>311 Pocket 3, Paschim <br/></span> <span className='footer-spaces'> Puri, Paschim Vihar,<br/></span> <span className='footer-spaces'>New Delhi,<br/></span><span className='footer-spaces'> Delhi - 110063</span></p>
        <p className='footer-hompage-para'><img className='footer-phone' src={phone}/> <span className='footer-space'> 80-76103886</span></p>
        <div className='footer-homepage-social-media'>
        <img className='footer-social-youtube' src={youtube} alt='youtube'/>
        <img className='footer-social' src={instagram} alt='instagram'/>
        <img className='footer-social' src={facebook} alt='facebook'/>
        <img className='footer-social' src={linkedin} alt='linkdin'/>
        </div>
        </div>

        </div>
        
        <p className='footer-lastline-para'>Designed by Panacee Software Solutions Pvt. Ltd.</p>
    </div>
  )
}

export default Footer