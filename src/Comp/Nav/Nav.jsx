// /* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Icon from './Icon'
import axios from 'axios'

const Nav = () => {

  let handlelog=()=>{
    axios.get(`http://localhost:3000/log`)
    .then((res) => {
      res.data
    })
  }

  return (
    <div className='nav'>
      <Icon/>
      <ul>
        {/* <li></li> */}
        <li><Link to='/cm'>Company</Link></li>
        <li><Link to='/bcard'>Bike</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to="/" onClick={handlelog}>Logout</Link></li>
      </ul>
    </div>
  )
}

export default Nav
