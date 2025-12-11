// import axios from 'axios'
// import React, { useState } from 'react'
// import { toast, ToastContainer } from 'react-toastify'

// const Bcreate = () => {

//     let [bikdet,setBikdet]=useState()
//     let [bikedata,setBikedata]=useState({
//         comp:'',
//         bname:'',
//         etype:'',
//         ftype:'',
//         price:'',
//         sheight:'',
//         torque:'',
//         mil:'',
//         abs:'',
//         review:''
//     })

//     let handlechange=(e)=>{
//         // e.preventDefault()
//         let {name,value}=e.target;
//         setBikedata({...bikedata,[name]:value})
//     }

//     let{comp,bname,etype,ftype,price,sheight,torque,mil,abs,review}=bikedata    

//     let handlesub=(e)=>{
//         e.preventDefault()
//         // let{comp,bname,etype,ftype,price,sheight,torque,mil,abs,review}=bkdt
//         // let bkdata={...bikedata};
//         // console.log(bkdata)
//         if (comp && bname && etype && ftype && price && sheight && torque && mil && abs && review){
//             axios.post(`http://localhost:3000/bdata`,bikedata)
//             .then((res)=>{
//                setBikdet(res.data) 
//                toast.success('Bike-Details Created')
//             })
//             .catch((err)=>{
//                 toast.err('Enter all fields')
//             })
//         }
//     }


//   return (
//     <div>
//       <form className='sd' onSubmit={handlesub}>
//         <fieldset className='sign'>
//             <ToastContainer/>
//             <label>Select Company: 
//                 <select value={comp} name='comp' onChange={handlechange} id="course">
//                     <option >Select</option>
//                     <option value="India Yamaha Motors (IYM)">India Yamaha Motors (IYM)</option>
//                     <option value="TVS Motor Company (TVS)">TVS Motor Company (TVS)</option>
//                     <option value="Honda Motorcycle and Scooter India (HMSI)">Honda Motorcycle and Scooter India (HMSI)</option>
//                     <option value="Suzuki Motorcycle India Pvt. Ltd. ( SMIPL)">Suzuki Suzuki Motorcycle India Pvt. Ltd. ( SMIPL)</option>
//                     <option value="Bajaj Auto Ltd">Bajaj Auto Ltd</option>
//                     <option value="Hero MotoCorp">Hero MotoCorp</option>
//                     <option value="Royal Enfield">Royal Enfield</option>
//                 </select>
//             </label>
//             <label>Bike-name: <input type="text" name='bname' placeholder='Bike-name ' value={bname} onChange={handlechange}/></label>
//             <label>Engine-type: <input type="text" name='etype' placeholder='Engine-type' value={etype} onChange={handlechange}/></label>
//             <label>Fuel-type: <input type="text" name='ftype' placeholder='Fuel-type' value={ftype} onChange={handlechange}/></label>         
//             <label>Seat-height: <input type="text" name='sheight' placeholder='Seat-height' value={sheight} onChange={handlechange}/></label>
//             <label>Torque: <input type="text" name='torque' placeholder='Torque' value={torque} onChange={handlechange}/></label>
//             <label>Mileage: <input type="text" name='mil' placeholder='Mileage' value={mil} onChange={handlechange}/></label>
//             <label>ABS: <input type="text" name='abs' placeholder='ABS' value={abs} onChange={handlechange}/></label>
//             <label>Price: <input type="text" name='price' placeholder='Price' value={price} onChange={handlechange}/></label>
//             <label>Review: <input type="number" name='review' placeholder='Review' value={review} onChange={handlechange}/></label>
//             <div className="but">
//             <button style={{backgroundColor:''}}>Create</button>
//             <button type='reset' style={{backgroundColor:''}}>Reset</button></div>
//         </fieldset>
//       </form>
//     </div>
//   )
// }

// export default Bcreate


import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const Bcreate = () => {

    let navigate=useNavigate()
    let [compname,setCompname]=useState([])
    // eslint-disable-next-line no-unused-vars
    let [bikdet,setBikdet]=useState()
    let [bikedata,setBikedata]=useState({
        comp:'',
        bname:'',
        etype:'',
        ftype:'',
        price:'',
        sheight:'',
        torque:'',
        mil:'',
        abs:'',
        review:'',
        bikeimg:''
    })

    let handlechange=(e)=>{
        // e.preventDefault()
        let {name,value}=e.target;
        setBikedata({...bikedata,[name]:value})
    }

    axios.get(`http://localhost:3000/compdata`)
    .then((res)=>{
        // console.log(res.data); 
        setCompname(res.data)})

    let{comp,bname,etype,ftype,price,sheight,torque,mil,abs,review,bikeimg}=bikedata    

    let handlesub=(e)=>{
        e.preventDefault()
        // let{comp,bname,etype,ftype,price,sheight,torque,mil,abs,review}=bkdt
        // let bkdata={...bikedata};
        // console.log(bkdata)
        if (comp && bname && etype && ftype && price && sheight && torque && mil && abs && review){
            axios.post(`http://localhost:3000/bdata`,bikedata)
            .then((res)=>{
               setBikdet(res.data) 
               toast.success('Bike-Details Created')
               navigate('/bcard')
            })
            // eslint-disable-next-line no-unused-vars
            .catch((err)=>{
                toast.err('Enter all fields')
            })
        }
    }


  return (
    <div className='bikecp'><br /><div  className='bk'>Create Bike-Details</div>
      <div className="bikef">
      <form className='sd' onSubmit={handlesub}>
        <fieldset className='sign'>
            <ToastContainer/>
            <label>Company: 
                <select value={comp} name='comp' onChange={handlechange} id="course">
                    <option >Select</option>
                    {compname.map((name,id)=>(
                    <option key={id} value={name.cname}>{name.cname}</option>
                    ))}
                </select>
            </label>
            <label>Bike-name: <input type="text" name='bname' placeholder='Bike-name ' value={bname} onChange={handlechange}/></label>
            <label>Engine-type: <input type="text" name='etype' placeholder='Engine-type' value={etype} onChange={handlechange}/></label>
            <label>Fuel-type: <input type="text" name='ftype' placeholder='Fuel-type' value={ftype} onChange={handlechange}/></label>         
            <label>Seat-height: <input type="text" name='sheight' placeholder='Seat-height' value={sheight} onChange={handlechange}/></label>
            <label>Torque: <input type="text" name='torque' placeholder='Torque' value={torque} onChange={handlechange}/></label>
            <label>Mileage: <input type="text" name='mil' placeholder='Mileage' value={mil} onChange={handlechange}/></label>
            <label>ABS: <input type="text" name='abs' placeholder='ABS' value={abs} onChange={handlechange}/></label>
            <label>Price: <input type="text" name='price' placeholder='Price' value={price} onChange={handlechange}/></label>
            <label>Review: <input type="number" name='review' placeholder='Review' value={review} onChange={handlechange}/></label>
            <label>Bike-img: 
                {/* <input type="file" name='bikeimg' value={bikeimg} onChange={handlechange}/> || */}
            <input type="" placeholder='Image url' name='bikeimg' value={bikeimg} onChange={handlechange}/></label>
            <div className="but">
            <button style={{backgroundColor:'green'}}>Create</button>
            <button type='reset' style={{backgroundColor:'orange'}}>Reset</button></div>
        </fieldset>
      </form>
    </div><br /><br /><br /><br /><br /></div>
  )
}

export default Bcreate
