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
        let name = nme.current.value
        let email = emid.current.value
        let password = pwd.current.value
        let phone = phno.current.value
        let userdata={name,email,password,phone}
        if (name && email && password && phone) {
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
      <div className='icon'><Icon/></div><br /><br /><br />
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
