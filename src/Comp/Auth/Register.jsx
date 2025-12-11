<<<<<<< HEAD
/* eslint-disable no-unused-vars */
=======
>>>>>>> 8746ec86588a0c0c04669cf2a8d446d8769825e8
import axios from 'axios'
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import Icon from '../Nav/Icon'
import './LR.css'

const Register = () => {

  let naviagte=useNavigate()

  let nme=useRef()
  let emid=useRef()
  let pwd=useRef()
  let phno=useRef()

    let handlesig=(e)=>{
        e.preventDefault()
<<<<<<< HEAD
        let uname = nme.current.value
=======
        let name = nme.current.value
>>>>>>> 8746ec86588a0c0c04669cf2a8d446d8769825e8
        let email = emid.current.value
        let password = pwd.current.value
        let phone = phno.current.value
        let userdata={name,email,password,phone}
<<<<<<< HEAD
        if (uname && email && password && phone) {
=======
        if (name && email && password && phone) {
>>>>>>> 8746ec86588a0c0c04669cf2a8d446d8769825e8
            axios.post(`http://localhost:3000/users`,userdata)
             .then((reset)=>{
              console.log(reset.data)
              toast.success('Registration Successfull')
              naviagte('/')
             })
        }
        else{
            toast.error('Enter all fields')
        }
    }

    

  return (
    <div className='regp'>
<<<<<<< HEAD
      <div className='icon'><div><img src="../src/assets/tn logo.jpg" alt="icon" /></div></div><br /><br /><br />
=======
      <div className='icon'><Icon/></div><br /><br /><br />
>>>>>>> 8746ec86588a0c0c04669cf2a8d446d8769825e8
      <div className="regf"><p className='lp'>Create a account <p> Sign-up for more</p></p>
      <form className='sd' onSubmit={handlesig}>
        <fieldset className='sign'>
            {/* <legend className='sleg'>Register</legend> */}
            <label htmlFor="name">Name: <input type="text" placeholder='Enter name' ref={nme}/></label>
            <label htmlFor="email">Email-id: <input type="email" placeholder='Enter email-id' ref={emid}/></label>
            <label htmlFor="password">Password: <input type="password" placeholder='Enter password' ref={pwd}/></label>
            <label htmlFor="number">Phone-no: <input type="number" placeholder='Enter number' ref={phno}/></label>
            <ToastContainer/>
            <div className="but">
            <button style={{backgroundColor:'lightgreen'}}>Register</button>
            <button style={{backgroundColor:'orange'}} type="reset">Reset</button>
            </div>
        </fieldset>
      </form>
      <p className='redirect'>Already have a account. Please  <Link to="/">Sign-in <label>&#8611;</label></Link></p>
    </div></div>
  )
}

export default Register
