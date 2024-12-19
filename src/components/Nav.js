import React, { useState, useEffect } from 'react'
import '../css/nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {

  const logo = require('../images/logo.pdf');

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setActive(!active);
  }

  return (
        <section className="nav-container">
          <header className="header">
              <Link className="logo-wrapper" to="/">
                <img src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1710364465/lark/Lark_in_Ennis_nj3rg0.png" alt="" className="logo"/>
              </Link>
              {/* <div className="menu-icon" onClick={toggleDropdown}>
                <div className={`flipper ${isOpen ? 'flipped' : ''}`}>
                  <div className="front">
                    <img className="flipper-image" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1710369712/lark/Gold_Hamburger_npiig2.png" alt="Visible"/>
                  </div>
                  <div className="back">
                    <img className="flipper-image" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1710369716/lark/Gold_X_tu8iz1.png" alt="Hidden"/>
                  </div>
                </div>
              </div> */}
              <div className='desktop-wrapper'>
                {/* <Link to='/register' className="desktop-icon">Sign Up</Link>
                <Link to='/artists' className="desktop-icon">Instructors</Link>
                <Link to='/information' className="desktop-icon">Info</Link>
                <Link to='./FAQ' className="desktop-icon">FAQ</Link> */}
              </div>
          </header>
          {/* <nav className="nav">
            <div className={isOpen ? "dropdown visible" : "dropdown invisible"}>
              <Link to="/register" className={!active ? "nav-link inactive" : "nav-link active"} onClick={toggleDropdown}>Sign Up</Link>
              <Link to="/artists" className={!active ? "nav-link inactive" : "nav-link active"} onClick={toggleDropdown}>Meet the Instructors</Link>
              <Link to="/information" className={!active ? "nav-link inactive" : "nav-link active"} onClick={toggleDropdown}>More Info</Link>
              <Link to="/FAQ" className={!active ? "nav-link inactive" : "nav-link active"} onClick={toggleDropdown}>FAQ</Link>
              <a href="https://www.facebook.com/lark.in.ennis" className={!active ? "nav-link inactive" : "nav-link active"} onClick={toggleDropdown}>Join Our Facebook</a>
            </div>
          </nav> */}
        </section>
  )
}
