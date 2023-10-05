import React from 'react';
import './Testimonials.css';

export const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h2>Testimonios</h2>

      <div className='contenedores_test'>
        <div className='contenedor_test'>
          <img src="/img/star.png" alt="" />
          <h3>Alejandro Mejía</h3>
          <p>Es apasionado en lo que hace<br />
          y es muy eficaz para resolver problemas</p>
        </div>
        <div className='contenedor_test'>
          <img src="/img/star.png" alt="" />
          <h3>Cristobal Llamas</h3>
          <p>Es una excelente persona y paciente <br />
          para resolver dudas</p>
        </div>
        <div className='contenedor_test'>
          <img src="/img/star.png" alt="" />
          <h3>Luis Reyes</h3>
          <p>Es muy educado y paciente con las personas.<br />
          Considero que se muy bueno para escuchar y resolver</p>
        </div>
      </div>
    </section>
  )
}
