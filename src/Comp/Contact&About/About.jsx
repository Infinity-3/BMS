import React from 'react'
import Contus from './Contus';
import Emp from './Emp';


const About = () => {

    // const styles = {

    //     container: {
    //       maxWidth: '1200px',
    //       margin: '0 auto',
    //       padding: '20px',
    //       fontFamily: 'Arial, sans-serif',
    //     },
    //     header: {
    //       textAlign: 'center',
    //       marginBottom: '20px',
    //     },
    //     section: {
    //       marginBottom: '30px',
    //     },
    //     footer: {
    //       textAlign: 'center',
    //       marginTop: '40px',
    //       borderTop: '1px solid #ccc',
    //       paddingTop: '10px',
    //     },
    // };

  return (
    <div >
      <div className="about">
        <header>
        <center><h1>About Us</h1></center>
      </header>
      <section className="about-section">
      <div className="about-container">
        <h2>Teja’s Nexas – A Legacy of Trust and Excellence</h2>
        <p>
          With a passion for two-wheelers and a commitment to customer
          satisfaction, <strong>Teja’s Nexas</strong> has established itself as
          a premier bike showroom. We proudly offer an extensive range of
          motorcycles and scooters from the most trusted brands in the industry.
        </p>
        <p>
          Our showroom is not just about selling bikes—it’s about helping you
          find the perfect ride that matches your style, needs, and budget.
          Whether you're a first-time buyer or an experienced rider, our expert
          team is here to guide you every step of the way.
        </p>

        <div className="why-choose">
          <h3>💡 Why Choose Us?</h3>
          <ul>
            <li>✔ Authorized Dealer of Leading Brands</li>
            <li>✔ Competitive Pricing & Exclusive Offers</li>
            <li>✔ Hassle-Free Loan & Insurance Assistance</li>
            <li>✔ Expert Advice & After-Sales Support</li>
          </ul>
        </div>

        <p className="about-footer">
          We believe in building long-term relationships with our customers by
          providing <strong>quality, transparency, and exceptional service.</strong>
        </p>
      </div>
    </section>
      </div>    

      <Emp/> 
      <Contus/>
    </div>
  )
}

export default About
