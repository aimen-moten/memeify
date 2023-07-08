import React from 'react'
import logo from "./assets/logo.png"


function Navbar() {
  return (
    <header className='header' >
        <img className='header--image' src={logo}></img>
        <h1 className='header--title'>Memeify!</h1>
        <h3 className='header--project'>Unleash Your Inner Memelord!</h3>
    </header>
  )
}

export default Navbar