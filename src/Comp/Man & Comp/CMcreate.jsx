// /* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import '../Auth/LR.css'

const CMcreate = () => {

  let [company, setCompany] = useState()
  let [compdet, setCompdet] = useState({
    cname:'',
    desc:'',
    compimg:'',
    complogo:''
  })

  let handlecchange=(e)=>{
    let {name,value}=e.target;
      setCompdet({...compdet,[name]:value})
  }

  let {cname,desc,compimg,complogo}=compdet

  let handlecsub=(e)=>{
    e.preventDefault()
    // if (cname && desc && compimg && complogo){
      axios.post(`http://localhost:3000/compdata`,compdet)
      .then((res)=>{
         setCompany(res.data) 
         toast.success('Company Created')
        //  setCompdet([])
      })
      .catch((err)=>{
          toast.err('Enter all fields')
      })
  // }
  }

  return (
    <div className='compcreate'>
      <div className='cmp'>Create Company</div>
      <div className="compf"><form className='sd' onSubmit={handlecsub}>
        <fieldset className='sign'>
            <ToastContainer/>
            <label>Company-name: <input type="text" name='cname' placeholder='Company-name' value={cname} onChange={handlecchange}/></label>
            <label>Description: <input type="text" name='desc' placeholder='Description' value={desc} onChange={handlecchange}/></label>
            <label>Image 
              {/* <input type="file" name='compimg' accept="image/*" value={compimg} onChange={handlecchange}/></label> */}
                            <input type="" placeholder='image url' name='compimg' accept="image/*" value={compimg} onChange={handlecchange}/></label>                  
            <label>Logo 
              {/* <input type="file" name='complogo' accept="image/*" value={complogo} onChange={handlecchange}/></label> */}
                            <input type="" placeholder='image url' name='complogo' accept="image/*" value={complogo} onChange={handlecchange}/></label>                  
            <div className="but">
            <button style={{backgroundColor:'green'}}>Create Company</button>
            <button type='reset' style={{backgroundColor:'orange'}}>Reset</button></div>
        </fieldset>
      </form>
    </div></div>
  )
}

export default CMcreate
