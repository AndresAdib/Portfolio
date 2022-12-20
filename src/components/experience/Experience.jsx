import React from 'react';
import './Experience.css';
import {BsFillPatchCheckFill} from "react-icons/bs"

export const Experience = () => {
  return (
    <section id='Experience'>
      <h5>Que habilidades tengo?</h5>
      <h2>MI EXPERIENCIA</h2>

      <div className=".container experience_container">
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience_backend'>
        <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <div> 
                <h4>Express</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}
