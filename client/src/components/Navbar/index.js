import React from 'react'
import './style.css'

const Navbar = () => {
  const toTheTop = () => {
    window.scrollTo({top:0, left:0, behavior: 'smooth'})
  }

  return (
    <nav className='navbar'>
      <div className='navbar-logo' onClick={toTheTop}>BUDGET APP</div>
      
    </nav>
  )
}

export default Navbar