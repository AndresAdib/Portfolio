import React from 'react';
import './Services.css';
import {AiFillCheckCircle} from "react-icons/ai";

export const Services = () => {
  return (
    <section id='Services'>
      <h5>Que ofrezco?</h5>
      <h2>SERVICIOS</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Frontend</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Creo la interfaz de un sitio web o aplicación atravez de código,
                dando la estructura del sitio con HTML y creando su diseño con CSS, al igual
                que agregar caracteristicas interactivas atravez de JavaScript.
              </p>
            </li>
          </ul>
        </article>

        {/*BACKEND*/}
        <article className='service'>
          <div className='service_head'>
            <h3>Backend</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Creo la infraestructura de un sitio web y mantengo actualizada la
                información sobre la arquitectura del producto digital, sus procesos y los 
                sistemas integrados al mismo.
              </p>
            </li>
          </ul>
        </article>

        
      </div>
    </section>
  )
}
