import React from 'react';
import './Portfolio.css';

export const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h2>PORTAFOLIO</h2>

      <div className='páginas'>
        <div className='página'>
          <a href="https://transom.com.mx/" target='_blank'>
            <img src="/img/transom.png" alt="" className='imagen'/>
            <h4>TRANSOM</h4>
          </a>
        </div>
        <div className='página'>
          <a href="https://tecnolika.com/" target='_blank'>
            <img src="/img/tecnolika.png" alt="" className='imagen'/>
            <h4>TECNOLIKA</h4>
          </a>
        </div>
        <div className='página'>
          <a href="https://operaria.co/" target='_blank'>
            <img src="/img/operaria.png" alt="" className='imagen'/>
            <h4>OPERARIA</h4>
          </a>
        </div>
      </div>

      <div className='páginas'>
        <div className='página'>
          <a href="https://fabrico.mx/" target='_blank'>
            <img src="/img/fabrico.png" alt="" className='imagen'/>
            <h4>FABRICO</h4>
          </a>
        </div>
        <div className='página'>
          <a href="https://iamorigin.com.mx/" target='_blank'>
            <img src="/img/iamorigin.png" alt="" className='imagen'/>
            <h4>IAMORIGIN</h4>
          </a>
        </div>
        <div className='página'>
          <a href="https://grupotransforma.mx/" target='_blank'>
            <img src="/img/grupotransforma.png" alt="" className='imagen'/>
            <h4 className='contenedor'>GRUPO TRANSFORMA</h4>
          </a>
        </div>
      </div>
    </section>
  )
}
