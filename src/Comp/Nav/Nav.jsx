import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Icon from './Icon'

const Nav = () => {
  return (
    <div className='nav'>
      <Icon/>
      <ul>
        {/* <li></li> */}
        <li><Link to='/cm'>Company</Link></li>
        <li><Link to='/bcard'>Bike</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
  )
}

export default Nav
