import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { navigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import './LR.css'
import Icon from '../Nav/Icon'

const Login = () => {

  let navigate=useNavigate()

  let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')

    let handleem=(e)=>{
        setEmail(e.target.value)
    }

    let handlepw=(e)=>{
        setPassword(e.target.value)
    }

    let handlelog=(e)=>{
        e.preventDefault()
        axios.get(`http://localhost:3000/users?email=${email}&password=${password}`)
        .then((res)=>{
          console.log(res.data)
            if (res.data.length>0) {
              toast.success('Logged successfully')
              // setEmail('')
              // setPassword('')
              navigate('/home')
            } 
            else {
                // if (email===emid && password!==pwd) {
                //     toast.error('Enter correct password')
                // } else if(email!==emid && password===pwd){
                //     toast.error('Enter correct email')
                // }
                // else{
                //     toast.error('Enter correct email and password')
                // }
                toast.error('Enter correct email and password')  
            }
        })
        .catch((err)=>{console.log(err)})
        
    }

    // let handleres=()=>{
    //     setEmail('')
    //     setPassword('')
    // }

  return (
    <div className='loginp'>
      <div className='icon'><Icon/></div>
      <div className="loginf">
        
      <p className='lp'>Already have a account <p> Sign-in for more</p></p>
      <form className='sd' onSubmit={handlelog}>
        <fieldset className='sign'>
            {/* <legend className='sleg'>Login</legend> */}
            <ToastContainer/>
            <label htmlFor="email">Email-id: <input type="email" placeholder='Enter email-id' value={email} onChange={handleem} /></label>
            <label htmlFor="password">Password: <input type="password" placeholder='Enter password' value={password} onChange={handlepw}/></label>
            <div className="but">
            <button style={{backgroundColor:'lightgreen'}}>Login</button>
            <button style={{backgroundColor:'orange'}} type="reset">Reset</button></div>
        </fieldset>
      </form>
      <p className='redirect'>Don't have account. Please   <Link to="/reg">Sign-up <label>&#8611;</label></Link></p>
    </div>
    </div>
  )
}

export default Login
