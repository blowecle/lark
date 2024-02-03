import React from 'react'
import '../css/home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  window.scrollTo(0, 0);
  
  return (
    <section className='container'>
      <div className="blurb-container">
        <p className="blurb">
        “Lark in Ennis aims to be the premier adult summer music camp in Ireland for intermediate adult players of Irish Traditional Music. For this first year we're running it as a proof of concept and keeping enrollment and classes very small so instructors have lots of time to advise students on their best path forward to improving and refining their approach to playing. Additional support will come from a nightly session trail tailored to intermediate skill levels and a lunchtime series of talks about aspects of playing Traditional Irish Music. An Instructor Concert as well as daily “secret concerts” will further expose attendees to the best of Irish Traditional Music.
        </p>
      </div>
      <div className="button-container">
        <Link to="/artists">
          <button className="button">Meet the Instructors</button>
        </Link>
        <Link to="/register"> 
          <button className="button">Register Interest</button>
        </Link>
        <Link to="/conduct"> 
          <button className="button">Code of Conduct</button>
        </Link>
        <a href="https://www.facebook.com/lark.in.ennis/" target="_blank" rel="noreferrer">
          <button className="button">Join Our Facebook</button>
        </a>
      </div>
    </section>
  )
}
