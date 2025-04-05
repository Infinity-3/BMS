import axios from 'axios'
import React, { useState } from 'react'
import './Comp.css'

const Comp = () => {

  let[compcard,setCompcard]=useState([])

  axios.get(`http://localhost:3000/compdata`)
  .then((res)=>{setCompcard(res.data)})
  // .catch((err)=>{})

  // let {cname,desc,complogo}=compcard

  return (
    <div className='compcard' id='compcard'>
      <center><p id='ch'>We deal with ...</p></center>
      {/* <center><div className="h1"><h1>Our Company Collections are...</h1></div></center> */}
      <div className="containerc">
    {compcard.map((card,id)=>(
      <div key={id} className="ccompcard">
        <div className="fcompcard">
          <img src={card.complogo} alt={`img ${card.cname}`} />
          {/* <div className="compimg"></div> */}
        </div>
        <div className="icompcard">
          <img src={card.compimg} alt={`img ${card.cname}`} />
          <p className="compname">{card.cname}</p>
          <label className="compdesc">{card.desc}</label>
        </div>
      </div>
    ))}
        </div>
        
    <br /><br /><br />  
    </div>
  )
}

export default Comp
