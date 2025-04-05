import React from 'react'
// import Login from './Auth/Login'
// import Register from './Auth/Register'
import Comp from './Man & Comp/Comp'
// import Footer from './Foot/Footer'
// import Nav from './Nav/Nav'
import './Home.css'
import Services from './Contact&About/Services'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle, faMoneyBillWave, faTools, faRoad, faExchangeAlt } from "@fortawesome/free-solid-svg-icons";


const Home = () => {
  return (
    <div>
      {/* <Nav/> */}
      <div className="distri">
        <div className="ni">
          <img src="../src/assets/tn logo.jpg" alt="" />
          <h1>TEJA'S NEXAS</h1>
        </div><br />
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, rerum. Animi iure, dolor temporibus vero accusamus cumque molestiae explicabo deleniti ut, eum repellendus recusandae obcaecati eligendi accusantium architecto dolores aliquid culpa suscipit. Molestias cumque vero, inventore rem dicta impedit, amet esse quae autem illo nisi facere dolore? Voluptatibus, reiciendis cupiditate. We deal with prestigious companies like Yahama, Royal Enfield, Bajaj, Hero, Honda, TVS.</p> */}
        <section className="hmsec"><p>
          At <strong>Teja’s Nexas</strong>, we don’t just sell bikes—we deliver experiences. 
          As a leading multi-brand showroom, we bring you an exclusive collection of 
          <strong> motorcycles and scooters</strong> from top manufacturers like 
          <strong> Yamaha, TVS, Bajaj, Hero, Honda, and Royal Enfield</strong>. 
          Whether you're looking for a stylish commuter, a power-packed cruiser, 
          or an adventure-ready ride, we have the perfect match for your needs.
        </p>

        <p>
          Our commitment extends beyond sales. We offer <strong>expert guidance, easy financing, 
          seamless insurance, top-notch servicing, genuine spare parts, and exciting 
          exchange offers</strong> to ensure a hassle-free ownership experience. 
          At <strong>Teja’s Nexas</strong>, <strong>quality, trust, and customer satisfaction</strong> 
          are at the heart of everything we do.
        </p>

        <p className="cta">
          Visit us today and begin your journey with the perfect ride! 🚀🏍️
        </p></section>
      <section>
        <h1>Welcome to Teja’s Nexas</h1>
        <p>Your One-Stop Destination for Bikes & Scooters!</p>
      </section>

      <Comp/>
      {/* Why Choose Us */}
      <section className='hmsec2'>
        <h2>Why Choose Teja’s Nexas?</h2>
        <div className='ser'>
          <div>            
            <h3>Wide Range of Bikes & Scooters    <FontAwesomeIcon icon={faMotorcycle} /></h3>
            <p>Choose from fuel-efficient scooters to high-performance motorcycles.</p>
          </div>

          <div>            
            <h3>Easy Financing & Insurance <FontAwesomeIcon icon={faMoneyBillWave} /></h3>
            <p>Hassle-free loans, flexible EMI options, and insurance assistance.</p>
          </div>

          <div>            
            <h3>Certified Service & Repairs <FontAwesomeIcon icon={faTools} /></h3>
            <p>Genuine spare parts and professional bike maintenance.</p>
          </div>

          <div>            
            <h3>Test Rides Available <FontAwesomeIcon icon={faRoad} /></h3>
            <p>Experience the thrill before you buy.</p>
          </div>

          <div>
            <h3>Exchange & Buyback Offers <FontAwesomeIcon icon={faExchangeAlt} /></h3>
            <p>Get the best deals for your old bike.</p>
          </div>
        </div>
      </section><br />

      {/* Call to Action */}
      <section>
        <h2>Experience the Ride of Your Life!</h2>
        <p>Visit us today and ride home with confidence.</p>
        {/* <p>📍 Location: [Your Address] | 📞 Call: [Your Contact Number]</p> */}
      </section>
      </div>
     
      <Services/>
    </div>
  )
}

export default Home
