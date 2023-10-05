import React from 'react'
import './AboutSoul.css'
import one from '../../../assest/images/about-onedog.png'
import two from '../../../assest/images/about-twodog.png'
import choti from '../../../assest/images/choti.png'
const AboutSoul = () => {
  return (
    <div className='about-container'>
    <div >
    <h1 className='about-tittle'>Paw Prints On My Soul…</h1>
        <p  className='about-paragraph' >Driving down the roads of Punjabi Bagh one evening in July 2016, I was struck by the sight of a cowering little thing on the corner of 
        a road. Curiosity made me get out and reach towards this frail little thing lying on the side of a dumpster, petrified of seeing a human 
        approach her and too weak to make a run for it. <br/> Our eyes met and I could see the terror as well the deep pain in her’s. That was the 
        instant something came alive in me and all my resistance went away. I used a soothing tone to calm her down and saw how she tried to pick 
        herself up, but every two steps she would falter and drop down amidst bouts of vomiting and diarrhea. The poor child was shriveled in size,
         shaking in fear and weakness, a skeleton just hanging together by shreds of her skin. Coming closer to her I saw she didn’t have any 
         teeth and my own scared self felt a little safer in picking her up, knowing she won’t be able to bite me if I were to take her in the car.</p>
    </div>

    
        <div className='about-image-dog-container'>
            <img className='about-twodog' src={two} alt='twodog' />
            <img className='about-twodog' src={one} alt='onedog'/>
        </div>
    
    <div>
    <h1 className='about-second-tittle'> The instant she was in my arms, I named her “CHOTI”</h1>
    <p  className='about-paragraph' >With delicate hands I wrapped her up in my arms and took her to a nearby vet. Upon checking, the vet informed me that this dog was very 
    old and wouldn’t survive the next few days.<br/> Whether it was the tugging at my heart of those lost eyes or the euphoria of trying to save a 
    helpless being, it made me ruthless with determination and non accepting of the fact that she won’t live. I pleaded with the doctor to 
    administer her with whatever necessary medications and treatments to ensure she lives to fight another day. Each passing day she was cared 
    for, with warm milk, healthy food and a protected small shelter to recuperate. And oh boy, did she get well!! <br/> Within a few months, from an 
    old dog with only few days to live she transformed into this gutsy little spitfire, who not only would start picking up fights with the 
    other younger and more feisty dogs, she also got herself a bodyguard in the form of another stray whom we fondly named GABBAR.</p>
    </div>
    <div>
    <img className='choti-image' src={choti} alt='choti'/>
    <p  className='about-paragraph'>Gabbar was a huge, healthy dog who could rip the others in half. So, this sparky little Princess went about messing with other dogs, 
    barking at them and marking her territory knowing Gabbar would be there if things turned bad.<br/> Every other day I had to reach her to treat a 
    new wound, a cut, more scrapes here and there. Sometimes her paws would be bleeding or the skin under her legs would be coming apart or she 
    would come up with big wound just below her eyes. But she was a darling and would get all medications and first aid done easily. She was the 
    notorious one on that street!!<br/> Age finally caught up with her and on 30th Oct 2017, more than a year later after I had found her and more than 
    what she was projected to live, she breathed her last. It was a natural death for her and I’m sure she lived that last year of her life to the 
    fullest. <br/>She managed to ignite in me the thread of compassion for all living beings, especially ones like her - Alone, Homeless and Desolate… <br/>
    Choti made me see life with a whole new perspective and had it not been for her, I wouldn’t have been able to see the plight of the strays and 
    taken this new direction in life. <br/> She is the inspiration and fuel for starting “JEEVSHAKTI FOUNDATION” and for us to continue doing what we 
    do each day, every day.</p>
    </div>

    <p  className='about-last-paragraph' >SHE WAS MY BABY AND WILL ALWAYS BE…</p>

       
    </div>
  )
}

export default AboutSoul