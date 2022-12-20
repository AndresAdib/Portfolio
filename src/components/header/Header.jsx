import React from 'react';
import { CTA } from './CTA';
import './Header.css';


export const Header = () => {
  return (
    <header id='Header'>
      <div className='container header_container'>
        <h1>Jorge Andrés Méndez Adib</h1>
        <h5 className='text-light'>Front-end Developer</h5>
        <CTA />
        
        <div className='me'>
          <img src="/img/Andres.png" alt="me" />
        </div>

      </div>
    </header>
  )
}
