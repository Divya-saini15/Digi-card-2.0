// src/Hero.js
import React from 'react';
import '../hero-section/hero.css'; // Import CSS file for styling
import '../App.css';


const Hero = () => {
  return (
  <>
  <section className='ct-section'>
    <div className="main-div">
      <div id="left-hero">
        <p  id='p1' className='text-25'>DIGITAL BANKING</p>
        <h1 className="text-65">Smart Financial Services for Everyone</h1>
        <p className='text-15' id='p2'>Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button>Get started </button>
      </div>
      <div id="right-hero">

  <img  id="card1" className='card image-popup ' src="https://askproject.net/deroly/wp-content/uploads/sites/119/2022/12/cc1-1.png" alt=""/>
  
  <img id="card2" className='card image-popup ' src="https://askproject.net/deroly/wp-content/uploads/sites/119/2022/12/cc3-1.png" alt=""/>

  <img id="card3" className='card image-popup ' src="https://askproject.net/deroly/wp-content/uploads/sites/119/2022/12/cc2-1.png" alt=""/>

  </div>
  </div>
  </section>

  </>
  );
  };

export default Hero;
