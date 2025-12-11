<<<<<<< HEAD
/* eslint-disable no-unused-vars */
=======
>>>>>>> 8746ec86588a0c0c04669cf2a8d446d8769825e8
import React from 'react'
import Teja from './tre photos/Teja.jpg'
import Bhoomika from './tre photos/Bhoomika.jpg'
import Divya from './tre photos/Divya.jpg'
import Prathima from './tre photos/Prathima.jpg'
import Harshitha from './tre photos/Harshitha.jpg'
import Saad from './tre photos/Saad.jpg'
import umar from './tre photos/umar.jpg'
import Chotu from './tre photos/Chotu.jpg'
import Faseha from './tre photos/Faseha.jpg'
import prajwal from './tre photos/prajwal.jpg'

const Emp = () => {

    // let data=[
    //     {id:1,name:"John",desig:'CEO',url:''},
    //     {id:2,name:"Anna",desig:'mob',url:''},
    //     {id:2,name:"Peter",desig:'mob',url:''},
    //     {id:4,name:"Linda",desig:'man',url:''},
    //     {id:5,name:"Tom",desig:'man',url:''},
    //     {id:6,name:"Lily",desig:'man',url:''},
    //     {id:7,name:"Jack",desig:'emp',url:''},
    //     {id:8,name:"Rose",desig:'emp',url:''},
    //     {id:9,name:"Mike",desig:'emp',url:''},
    //     {id:10,name:"Emma",desig:'emp',url:''},
    // ]

  return (
    <div className='employe'>
      <div className="empcon">
        <p id='cpy'>About treasures</p>
        <div className="ceo" id='emp'>
            <img src={Teja} alt="ceo" />
            <p>Teja</p>
            <label>Founder</label>
        </div>
        <div className="mob">
            <div className="mob1" id='emp'>
                <img src={prajwal} alt="mob" />
                <p>Prajwal</p>
                <label>CEO</label>
            </div>
            <div className="mob2" id='emp'>
                <img src={Saad} alt="mob" />
                <p>Saad</p>
                <label>Board Member</label>
            </div>
        </div>
        <div className="man">
            <div className="man1" id='emp'>
                <img src={Divya} alt="manager" />
                <p>Divya</p>
                <label>Board Member</label>
            </div>
            <div className="man2" id='emp'>
                <img src={Harshitha} alt="manager" />
                <p>Harshitha</p>
                <label>Board Member</label>
            </div>
            <div className="man3" id='emp'>
                <img src={Chotu} alt="manager" />
                <p>Chotu</p>
                <label>Board Member</label>
            </div>
        </div>
        <div className="emp">
            <div className="emp1" id='emp'>
                <img src={umar} alt="Manager" />
                <p>Umar</p>
                <label>Board Member</label>
            </div>
            <div className="emp2" id='emp'>
                <img src={Faseha} alt="Manager" />
                <p>Faseeha</p>
                <label>Board Member</label>
            </div>
            <div className="emp3" id='emp'>
                <img src={Prathima} alt="Manager" />
                <p>Prathima</p>
                <label>Board Member</label>
            </div>
            <div className="emp4" id='emp'>
                <img src={Bhoomika} alt="Manager" />
                <p>Bhomika</p>
                <label>Board Member</label>
            </div>
        </div>
        <div id='more'><p>More... </p></div>
      </div>
    </div>
  )
}

export default Emp
