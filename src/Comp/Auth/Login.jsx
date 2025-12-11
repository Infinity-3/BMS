<<<<<<< HEAD
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
=======
>>>>>>> 8746ec86588a0c0c04669cf2a8d446d8769825e8
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { navigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import './LR.css'
<<<<<<< HEAD
// import Icon from '../Nav/Icon'
=======
import Icon from '../Nav/Icon'
>>>>>>> 8746ec86588a0c0c04669cf2a8d446d8769825e8

const Login = () => {

  let navigate=useNavigate()

<<<<<<< HEAD
  let [username,setUsername]=useState('username')
  let [emaill,setEmaill]=useState('')
  let [login,setLogin]=useState({})
  let [passwordl,setPasswordl]=useState('')

    let handleem=(e)=>{
        setEmaill(e.target.value)
    }

    let handlepw=(e)=>{
        setPasswordl(e.target.value)
=======
  let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')

    let handleem=(e)=>{
        setEmail(e.target.value)
    }

    let handlepw=(e)=>{
        setPassword(e.target.value)
>>>>>>> 8746ec86588a0c0c04669cf2a8d446d8769825e8
    }

    let handlelog=(e)=>{
        e.preventDefault()
<<<<<<< HEAD
        // axios.get(`http://localhost:3000/users?email=${emaill}&password=${passwordl}`)
        axios.get(`http://localhost:3000/users`)
        .then((res)=>{
          for (let i = 0; i < res.data.length; i++) {
            // if (res.data[i].email === emaill && res.data[i].password === passwordl){}
            if (res.data.length>0 && res.data[i].email === emaill && res.data[i].password === passwordl) {
              toast.success('Logged successfully')
              // setUsername(res.data[i].uname)
              setLogin(login[emaill]=true,login[username]=res.data[i].uname)
              // console.log(res.data[i].uname)
              axios.post(`http://localhost:3000/log`,login)
=======
        axios.get(`http://localhost:3000/users?email=${email}&password=${password}`)
        .then((res)=>{
          console.log(res.data)
            if (res.data.length>0) {
              toast.success('Logged successfully')
>>>>>>> 8746ec86588a0c0c04669cf2a8d446d8769825e8
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
<<<<<<< HEAD
          }
          // console.log(res.data)
            
=======
>>>>>>> 8746ec86588a0c0c04669cf2a8d446d8769825e8
        })
        .catch((err)=>{console.log(err)})
        
    }

    // let handleres=()=>{
    //     setEmail('')
    //     setPassword('')
    // }

  return (
    <div className='loginp'>
<<<<<<< HEAD
      <div className='icon'><div><img src="../src/assets/tn logo.jpg" alt="icon" /></div></div>
=======
      <div className='icon'><Icon/></div>
>>>>>>> 8746ec86588a0c0c04669cf2a8d446d8769825e8
      <div className="loginf">
        
      <p className='lp'>Already have a account <p> Sign-in for more</p></p>
      <form className='sd' onSubmit={handlelog}>
        <fieldset className='sign'>
            {/* <legend className='sleg'>Login</legend> */}
            <ToastContainer/>
<<<<<<< HEAD
            <label htmlFor="email">Email-id: <input type="email" placeholder='Enter email-id' value={emaill} onChange={handleem} /></label>
            <label htmlFor="password">Password: <input type="password" placeholder='Enter password' value={passwordl} onChange={handlepw}/></label>
=======
            <label htmlFor="email">Email-id: <input type="email" placeholder='Enter email-id' value={email} onChange={handleem} /></label>
            <label htmlFor="password">Password: <input type="password" placeholder='Enter password' value={password} onChange={handlepw}/></label>
>>>>>>> 8746ec86588a0c0c04669cf2a8d446d8769825e8
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
