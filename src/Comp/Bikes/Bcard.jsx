/* eslint-disable no-unused-vars */
// import axios from 'axios'
// import React, { useState } from 'react'
// import './Bcard.css'


// const Bcard = () => {

//   let [bdata, setBdata] = useState([])
//   let [companyimg, setCompanyimg] = useState([])

//   axios.get(`http://localhost:3000/compdata`)
//   .then((res)=>{
//     // console.log(res.data);
//     setCompanyimg(res.data)
//     // console.log(companyimg.length);
//     })

//   axios.get(`http://localhost:3000/bdata`)
//   .then((res)=>{setBdata(res.data)})

//   let buttons = [];
//   for (let i = 0; i < companyimg.length; i++) {
//     buttons.push(<button onClick={handleclick} key={i} value={compname} className="bbutc">{companyimg[i].cname}</button>);
//   }

//   let handleclick=(e)=>{
//     let val=e.target.value;

//   }

//   return (
//     <div>
//       <p className='bike'>Bikes You can buy....</p>
//       <div className="bikesel">
//         <button className="bbuta">All</button>
//         {buttons}        
//       </div><br /><br /><br />
//       <div className="bdcard">
//         {bdata.map((dt,id)=>(
//           <div key={id} className="bccard">
//             <div className="bimg">
//               <h3>{dt.comp}</h3>
//             {/* {companyimg.map((img,id)=>{
//               console.log("comp=",img.cname,"bike=",dt.comp)
//               if (img.cname===dt.comp) {
//                 <img src={img.compimg} alt={dt.comp} />
//               }
//               else{<img key={id} src="" alt={dt.comp} />}
//               })} */}
//               <img src={dt.bikeimg} alt={dt.bname} />
//               <h1>{dt.bname}</h1>
//             </div>
//             <div className="bdet">
//               <div className="det1">
//                 <p>Engine-Type: {dt.etype} cc</p>
//                 <p>Fuel-Type: {dt.ftype}</p>
//                 <p>Seat-height: {dt.sheight} m</p>
//                 <p>Torque: {dt.torque}Nm</p>
//               </div>
//               <div className="det2">
//                 <p>Price: ₹{dt.price}</p>
//                 <p>Mileage: {dt.mil} kmpl</p>
//                 <p>ABS: {dt.abs}</p>
//                 <p>Review: {dt.review} stars</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Bcard

//---------------------------------------

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Bcard.css'
import { Link } from 'react-router-dom'

const Bcard = () => {
  let [bdata, setBdata] = useState([])
  let [companyimg, setCompanyimg] = useState([])
  let [selectedCompany, setSelectedCompany] = useState("All")

  // Fetch company and bike data once when the component mounts
  useEffect(() => {
    axios.get(`http://localhost:3000/compdata`)
      .then((res) => setCompanyimg(res.data))
      .catch((err) => console.log(err));

    axios.get(`http://localhost:3000/bdata`)
      .then((res) => setBdata(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Function to handle button click
  let handleclick = (e) => {
    setSelectedCompany(e.target.value);
  };

  // Filter bikes based on selected company
  let filteredBikes = selectedCompany === "All" 
    ? bdata 
    : bdata.filter((bike) => bike.comp === selectedCompany);

  return (
    <div>
      <p className='bike'>Bikes You Can Buy...</p>

      {/* Buttons for filtering */}
      <div className="bikesel">
        <button className="bbuta" onClick={() => setSelectedCompany("All")}>All</button>
        {companyimg.map((company, index) => (
          <button key={index} className="bbutc" onClick={handleclick} value={company.cname} style={{ backgroundColor: selectedCompany === company.cname ? 'lightblue' : '' }}>
            {company.cname.split(" ")[0]}
          </button>
        ))}
      </div>
      <br /><br /><br />

      {/* Bike Cards */}
      <div className="bdcard">
        {filteredBikes.length > 0 ? (filteredBikes.map((dt, id) => (
          <div key={id} className="bccard">
            <div className="bimg">
              <h3>{dt.comp}</h3>
              <img src={dt.bikeimg} alt={dt.bname} />
              <h1>{dt.bname}</h1>
            </div>
            <div className="bdet">
              <div className="det1">
                <p>Engine-Type: {dt.etype} cc</p>
                <p>Fuel-Type: {dt.ftype}</p>
                <p>Seat-height: {dt.sheight} m</p>
                <p>Torque: {dt.torque}Nm</p>
              </div>
              <div className="det2">
                <p>Price: ₹{dt.price}</p>
                <p>Mileage: {dt.mil} kmpl</p>
                <p>ABS: {dt.abs}</p>
                <p>Review: {dt.review} stars</p>
                
              </div>
            </div>
          </div>
        ))): (
          <h2>😅 Soon it will be updated 😅</h2>
        )}
      </div>
      <button className='createb'><Link to="/bcreate">+ Create Bikes</Link></button>
    </div>
  )
}

export default Bcard;
