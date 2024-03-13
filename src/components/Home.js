import React from 'react'
import '../css/home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  window.scrollTo(0, 0);
  
  return (
    <section className='container'>
      <div className="title-container">
        <img src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1710363470/lark/Lark_in_Ennis_gold_fssxkj.png" alt="" className="main-title"/>
        <div className="title-image-container">
          <img src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1710267488/lark/IMG_2470_pzs7iz.jpg" className="title-image"/>
          <div className="title-overlay"/>
        <div className="title-text">IRELAND'S PREMIER ADULT MUSIC CAMP</div>
        </div>
      </div>
      <div className="main-navigation">
        <div className="main-navigation-container">
          <div className="main-navigation-title">SIGN UP</div>
          <div className="main-navigation-blurb">Be one of the first to sign<br/>up while spots are available.</div>
          <Link className="main-button-wrapper" to="/register">
            <button className="main-navigation-button">Register</button>
          </Link>
        </div>
        <div className="main-navigation-container">
          <div className="main-navigation-title">MEET THE<br/>INSTRUCTORS</div>
          <div className="main-navigation-blurb">Check out the instructors who will guide you on your musical journey.</div>
          <Link className="main-button-wrapper" to="/artists">
            <button className="main-navigation-button">The Team</button>
          </Link>
        </div>
        <div className="main-navigation-container">
          <div className="main-navigation-title">CAMP INFO</div>
          <div className="main-navigation-blurb">Find information about the camp,<br/>venue, dates, and events.</div>
          <Link className="main-button-wrapper" to="/information">
            <button className="main-navigation-button">Information</button>
          </Link>
        </div>
      </div>
      <div className="lower-blurb-container">
        <div className="lower-blurb-title">
          Lark in Ennis aims to be the premier summer camp in Ireland for adult players of traditional Irish music
        </div>
        <div className="lower-blurb-text">
          For the first year we're running Lark as a proof of concept and will be keeping enrollment and classes small enough to give instructors time to advice students on their best path forward.  Additional support will come from a nightly session trail tailored to intermediate skill levels and a lunchtime series of talks about aspects of playing traditional Irish music.  An instructor concert as well as daily 'secret concerts' will further expose attendees to the best of traditional Irish music.
        </div>
      </div>
      <div className="bottom-div"/>
    </section>
  )
}
