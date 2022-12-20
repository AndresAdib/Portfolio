import React from 'react';
import './About.css';
import {MdOutlineSchool} from 'react-icons/md';
import {AiFillCar} from 'react-icons/ai';
import {BsFillHouseFill} from 'react-icons/bs';


export const About = () => {
  return (
    <section id='About'>
      <h5>Un poco</h5>
      <h2>Sobre Mi</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src='/img/Henry.png' alt="About_Image" />
          </div>
        </div>
      
      <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
          <MdOutlineSchool className='about_icon'/>
            <h5>Experiencia</h5>
            <small>HENRY</small>
          </article>
   
          <article className='about_card'>
          <AiFillCar className='about_icon'/>
            <h5>Experiencia</h5>
            <small>NISSAN</small>
          </article>

          <article className='about_card'>
          <BsFillHouseFill className='about_icon'/>
            <h5>Experiencia</h5>
            <small>HABI</small>
          </article>
        </div>
        <p>
            Me dedique al área de las ventas en Nissan Torres Corzo y en HABI, brindando
            atención a los clientes para garantizar su compra. Despues de eso, decidí aprender
            programación para poder dedicarme profesionalmente a este ramo.
          </p>

          <a href="#Contact" className='btn btn-primary'>Contactame</a>
        </div>
      </div>
    </section>
  )
}
