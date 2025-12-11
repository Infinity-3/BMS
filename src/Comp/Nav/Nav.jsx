<<<<<<< HEAD
// /* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
=======
>>>>>>> 8746ec86588a0c0c04669cf2a8d446d8769825e8
import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Icon from './Icon'
<<<<<<< HEAD
import axios from 'axios'

const Nav = () => {

  let handlelog=()=>{
    axios.get(`http://localhost:3000/log`)
    .then((res) => {
      res.data
    })
  }

=======

const Nav = () => {
>>>>>>> 8746ec86588a0c0c04669cf2a8d446d8769825e8
  return (
    <div className='nav'>
      <Icon/>
      <ul>
        {/* <li></li> */}
        <li><Link to='/cm'>Company</Link></li>
        <li><Link to='/bcard'>Bike</Link></li>
        <li><Link to='/about'>About Us</Link></li>
<<<<<<< HEAD
        <li><Link to="/" onClick={handlelog}>Logout</Link></li>
=======
        <li><Link to="/">Logout</Link></li>
>>>>>>> 8746ec86588a0c0c04669cf2a8d446d8769825e8
      </ul>
    </div>
  )
}

export default Nav
