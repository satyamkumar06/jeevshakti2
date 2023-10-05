import React from 'react'
import './Protecting.css'
import light from '../../assest/images/Reflactive.png'
import house from '../../assest/images/Dog house.png'
import Dive from '../../assest/images/Coat Drive.png'
import feed from '../../assest/images/Feeding Drive.png'
import beds from '../../assest/images/Tyre Beds.png'
import vacc from '../../assest/images/Vaccination.png'
const Protecting = () => {
  const Data = [
    {
      "id": 1,
      "tittle": "Reflective Lights",
      "def": "JSF strongly believes in the concept of joining hands and involving the community  effectively.",
      "image": light

    },
    {
      "id": 2,
      "tittle": "Dog Houses",
      "def": "JSF strongly believes in the concept of joining hands and involving the community  effectively.",
      "image": house
    },
    {
      "id": 3,
      "tittle": "Coat Drive",
      "def": "JSF strongly believes in the concept of joining hands and involving the community  effectively.",
      "image": Dive
    },
    {
      "id": 4,
      "tittle": "Feeding Drive",
      "def": "JSF strongly believes in the concept of joining hands and involving the community  effectively.",
      "image": feed
    }
    ,
    {
      "id": 5,
      "tittle": "Tyre Beds",
      "def": "JSF strongly believes in the concept of joining hands and involving the community  effectively.",
      "image": beds
    },
    {
      "id": 6,
      "tittle": "Vaccination",
      "def": "JSF strongly believes in the concept of joining hands and involving the community  effectively.",
      "image": vacc
    }
  ];

  const AllData = Data.map((Data) => (
    <div key={Data.id}>

    </div>
  ))


  return (
 
    <div >
      <h1 className='header-main'><span className='Prote-header'>Prote</span><span className='cting-header'>cting</span><span className='strays'> Strays</span></h1>

      <div className='protecting-container'>
        {Data.map((Current) => (
          <div className='protecting-card' key={Current.id}>

            <img className='pro-image' src={Current.image} alt='tittle' />
            <h2 className='protecting-tittle'>{Current.tittle}</h2>
            <p className='protecting-def'>{Current.def}</p>
            <button className='protecting-learn'>Learn More</button>


          </div>




        ))}
      </div>



      <button className='button-event'>View all Events </button>
    </div>
  )
}

export default Protecting