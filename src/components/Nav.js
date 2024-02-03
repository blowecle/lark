import React, { useState, useEffect } from 'react'
import '../css/nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {

  // const [visible, setVisible] = useState(false)
  // const logo = require('../images/logo.pdf')

  // useEffect(() => {
  //   console.log('visible is now ' + visible)
  //   const nav = document.querySelector('.nav')

  //   if (visible) {
  //     nav.classList.add('visible')
  //     nav.classList.remove('hidden')
  //   } else {
  //     nav.classList.remove('visible')
  //     nav.classList.add('hidden')
  //   }
  // }, [visible]);

  // function setVisibility() {
  //   console.log('clicked, visible = ' + visible)
  //   setVisible(!visible)
  // }

  return (
        <header className="header">
            {/* <img src="https://cdn.icon-icons.com/icons2/3298/PNG/512/ui_menu_icon_208807.png" className="icon" onClick={setVisibility}/> */}
            <Link className="logo-wrapper" to="/">
              <img src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1706987644/lark/logo_v52gof.png" alt="" className="logo"/>
            </Link>
            {/* <div className="desktop-nav">
                <div className="desktop-link">Home</div>
                <div className="desktop-link">About</div>
                <div className="desktop-link">Contact</div>
            </div>
            <nav className="nav">
            <div className="nav-links">
                <div className="nav-link">About</div>
                <div className="nav-link">Meet the Musicians</div>
                <div className="nav-link">Register Interest</div>
            </div>
            </nav> */}
        </header>
  )
}
