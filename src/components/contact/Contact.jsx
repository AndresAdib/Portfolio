import React from 'react';
import './Contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

export const Contact = () => {
  return (
    <section id='Contact'>
      <h5>¿Más información?</h5>
      <h2>Contactame</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>jandresmendeza@gmail.com</h5>
            <a href="mailto:jandresmendeza@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Andres Mendez Adib</h5>
            <a href="https://m.me/andres.mendezadib/" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+52 444-483-7006</h5>
            <a href="https://api.whatsapp.com/send?phone=+524444837006" target='_blank'>Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form action=''>
          <input type="text" name='name' placeholder='Nombre completo' required />
          <input type="email" name='email' placeholder='Tu email' required />
          <textarea name="message" rows="7" placeholder='Tu mensaje' required></textarea>
          <button type='submit' className='btn btn-primay'>Send message</button>
        </form>
      </div>
    </section>
  )
}
