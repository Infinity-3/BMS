/* eslint-disable no-unused-vars */
import React from 'react'
import Login from './Login'
import Register from './Register'
import './LRB.css'

const LR = () => {
  return (
    <div className='re'>
        <div className="lorec" id='lorecid'>
            <div className="lo-re" id='lo-re'>
                <div className="register">  <Register/></div>
                <div className="swappage"></div>
                <div className="login"><p>Already have a account. Login for sign-up</p><Login/></div>
            </div>
            
        </div> 
        
    </div>
  )
}

export default LR
