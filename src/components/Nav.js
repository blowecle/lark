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
                <img src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1706987644/lark/logo_v52gof.png" alt="" className="logo"/>
              </Link>
              <div className="menu-icon" onClick={toggleDropdown}>
                {!isOpen ? <i className="fas fa-bars nav-icon"></i> : <i className="fas fa-times nav-icon"></i>}
              </div>
          </header>
          <nav className="nav">
            <div className={isOpen ? "dropdown visible" : "dropdown invisible"}>
              <Link to="/register" className={!active ? "nav-link inactive" : "nav-link active"} onClick={toggleDropdown}>Sign Up</Link>
              <Link to="/artists" className={!active ? "nav-link inactive" : "nav-link active"} onClick={toggleDropdown}>Meet the Instructors</Link>
              <Link to="/information" className={!active ? "nav-link inactive" : "nav-link active"} onClick={toggleDropdown}>More Info</Link>
              <Link to="/FAQ" className={!active ? "nav-link inactive" : "nav-link active"} onClick={toggleDropdown}>FAQ</Link>
              <a href="https://www.facebook.com/lark.in.ennis" className={!active ? "nav-link inactive" : "nav-link active"} onClick={toggleDropdown}>Join Our Facebook</a>
            </div>
          </nav>
        </section>
  )
}
