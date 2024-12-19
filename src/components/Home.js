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
            <div className="grant-banner">
              Lark in Ennis is excited to return for a second year.  Registration begins soon.  Check back for more information.
            </div>
        <div className="main-navigation-container">
          <div className="date-wrapper">
            <div className="dates"
            style={{
              marginTop: "1.5rem",
              marginBottom: "1rem"
            }}
            >Lark in Ennis 2025: 29 June to 4 July</div>
          </div>
          {/* <div className="main-navigation-title">SIGN UP</div>
          <div className="main-navigation-blurb">Be one of the first to sign<br/>up while spots are available.</div>
          <Link className="main-button-wrapper" to="/register">
            <button className="main-navigation-button">Register</button>
          </Link> */}
        </div>
        {/* <div className="main-navigation-container">
          <div className="main-navigation-title">MEET THE<br/>INSTRUCTORS</div>
          <div className="main-navigation-blurb">Check out the instructors who will guide you on your musical journey.</div>
          <Link className="main-button-wrapper" to="/artists">
            <button className="main-navigation-button">The Team</button>
          </Link>
        </div> */}
        {/* <div className="main-navigation-container">
          <div className="main-navigation-title">CAMP INFO</div>
          <div className="main-navigation-blurb">Find information about the camp,<br/>venue, dates, and events.</div>
          <Link className="main-button-wrapper" to="/information">
            <button className="main-navigation-button">Information</button>
          </Link>
        </div> */}
      </div>
      <div className="lower-blurb-container">
        <div className="lower-blurb-title">
          Lark in Ennis is the premier summer camp in Ireland for adult players of traditional Irish music
        </div>
        <div className="lower-blurb-text">
        As Lark enters its second year, we’re building on the success of the first by continuing to prioritize personalized guidance for students. Plans include expanding opportunities for intermediate players through tailored nightly sessions and offering engaging talks on various aspects of traditional Irish music during lunchtime. Attendees can also look forward to more performances, including an instructor concert and daily 'secret concerts,' celebrating the vibrant tradition of Irish music.
        </div>
      </div>
      <div className="bottom-div"/>
    </section>
  )
}
