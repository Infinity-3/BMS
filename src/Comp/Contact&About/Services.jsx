// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { 
//   faMotorcycle, 
//   faTools, 
//   faHandHoldingUsd, 
//   faRoad, 
//   faCogs, 
//   faExchangeAlt 
// } from "@fortawesome/free-solid-svg-icons";

// const Services = () => {
//   return (
//     <section className="services">
//       <h2>Our Services</h2>
//       <p>
//         At <strong>Teja’s Nexas</strong>, we go beyond selling bikes—we ensure you get the best ownership experience with our comprehensive services.
//       </p>

//       <div className="services-container">
//         <div className="service-box">
//           <FontAwesomeIcon icon={faMotorcycle} className="icon" />
//           <h3>Bike Sales & Consultation</h3>
//           <p>Choose from a wide range of motorcycles and scooters with expert assistance.</p>
//         </div>

//         <div className="service-box">
//           <FontAwesomeIcon icon={faTools} className="icon" />
//           <h3>Servicing & Repairs</h3>
//           <p>Our state-of-the-art service center provides regular maintenance, genuine spare parts, and expert repairs.</p>
//         </div>

//         <div className="service-box">
//           <FontAwesomeIcon icon={faHandHoldingUsd} className="icon" />
//           <h3>Financing & Insurance</h3>
//           <p>Get easy loan approvals, EMI options, and insurance assistance to make your purchase stress-free.</p>
//         </div>

//         <div className="service-box">
//           <FontAwesomeIcon icon={faRoad} className="icon" />
//           <h3>Test Rides & Demo</h3>
//           <p>Experience the thrill before you buy! Schedule a test ride at our showroom.</p>
//         </div>

//         <div className="service-box">
//           <FontAwesomeIcon icon={faCogs} className="icon" />
//           <h3>Accessories & Customization</h3>
//           <p>Personalize your ride with high-quality accessories and modifications.</p>
//         </div>

//         <div className="service-box">
//           <FontAwesomeIcon icon={faExchangeAlt} className="icon" />
//           <h3>Exchange & Buyback Offers</h3>
//           <p>Upgrade your old bike with our exchange and buyback programs at the best prices.</p>
//         </div>
//       </div>

//       <div className="contact-info">
//         <p>
//           <strong>Your journey begins at Teja’s Nexas! Visit us today and ride home with your dream bike.</strong>
//         </p>
//         <p>📞 Call us at <a href="tel:+123456789">+123456789</a> | 📍 Visit: [Your Address]</p>
//       </div>
//     </section>
//   );
// };

// export default Services;

//-----------------------------------------------------

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMotorcycle, faTools, faHandHoldingUsd, faRoad, faCogs, faExchangeAlt } from "@fortawesome/free-solid-svg-icons";

// const Services = () => {
//   // State to toggle dark/light mode
//   const [darkMode, setDarkMode] = useState(false);

//   // Dynamic styles
//   const containerStyle = {
//     textAlign: "center",
//     padding: "50px 20px",
//     background: darkMode ? "#111" : "#f4f4f4",
//     color: darkMode ? "white" : "black",
//     transition: "0.3s",
//   };

//   const serviceBoxStyle = {
//     background: darkMode ? "#222" : "#fff",
//     color: darkMode ? "#FFD700" : "#333",
//     padding: "20px",
//     borderRadius: "10px",
//     textAlign: "center",
//     transition: "0.3s",
//     boxShadow: darkMode ? "0 4px 10px rgba(255, 215, 0, 0.2)" : "0 4px 10px rgba(0, 0, 0, 0.1)",
//   };

//   return (
//     <section style={containerStyle}>
//       <h2>Our Services</h2>
//       <button onClick={() => setDarkMode(!darkMode)} style={{ marginBottom: "20px", padding: "10px", cursor: "pointer" }}>
//         Toggle {darkMode ? "Light" : "Dark"} Mode
//       </button>

//       <div className="services-container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", maxWidth: "1200px", margin: "0 auto" }}>
//         <div style={serviceBoxStyle}>
//           <FontAwesomeIcon icon={faMotorcycle} className="icon" />
//           <h3>Bike Sales & Consultation</h3>
//           <p>Choose from a wide range of motorcycles and scooters with expert assistance.</p>
//         </div>

//         <div style={serviceBoxStyle}>
//           <FontAwesomeIcon icon={faTools} className="icon" />
//           <h3>Servicing & Repairs</h3>
//           <p>Our state-of-the-art service center provides regular maintenance, genuine spare parts, and expert repairs.</p>
//         </div>

//         <div style={serviceBoxStyle}>
//           <FontAwesomeIcon icon={faHandHoldingUsd} className="icon" />
//           <h3>Financing & Insurance</h3>
//           <p>Get easy loan approvals, EMI options, and insurance assistance to make your purchase stress-free.</p>
//         </div>

//         <div style={serviceBoxStyle}>
//           <FontAwesomeIcon icon={faRoad} className="icon" />
//           <h3>Test Rides & Demo</h3>
//           <p>Experience the thrill before you buy! Schedule a test ride at our showroom.</p>
//         </div>

//         <div style={serviceBoxStyle}>
//           <FontAwesomeIcon icon={faCogs} className="icon" />
//           <h3>Accessories & Customization</h3>
//           <p>Personalize your ride with high-quality accessories and modifications.</p>
//         </div>

//         <div style={serviceBoxStyle}>
//           <FontAwesomeIcon icon={faExchangeAlt} className="icon" />
//           <h3>Exchange & Buyback Offers</h3>
//           <p>Upgrade your old bike with our exchange and buyback programs at the best prices.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

//-----------------------------------------------------

<<<<<<< HEAD
/* eslint-disable no-unused-vars */
=======
>>>>>>> 8746ec86588a0c0c04669cf2a8d446d8769825e8
import React from "react";

const Services = () => {
  return (
    <div>
    <section className="services">
      <h2>Our Services</h2>
      <p>
        At <strong>Teja’s Nexas</strong>, we go beyond selling bikes—we ensure you get the best ownership experience with our comprehensive services.
      </p>

      <div className="services-container">
        <div className="service-box" data-icon="🏍️">
          <h3>Bike Sales & Consultation</h3>
          <p>Choose from a wide range of motorcycles and scooters with expert assistance.</p>
        </div>

        <div className="service-box" data-icon="🔧">
          <h3>Servicing & Repairs</h3>
          <p>Our state-of-the-art service center provides regular maintenance, genuine spare parts, and expert repairs.</p>
        </div>

        <div className="service-box" data-icon="💰">
          <h3>Financing & Insurance</h3>
          <p>Get easy loan approvals, EMI options, and insurance assistance to make your purchase stress-free.</p>
        </div>

        <div className="service-box" data-icon="🚦">
          <h3>Test Rides & Demo</h3>
          <p>Experience the thrill before you buy! Schedule a test ride at our showroom.</p>
        </div>

        <div className="service-box" data-icon="⚙️">
          <h3>Accessories & Customization</h3>
          <p>Personalize your ride with high-quality accessories and modifications.</p>
        </div>

        <div className="service-box" data-icon="🔄">
          <h3>Exchange & Buyback Offers</h3>
          <p>Upgrade your old bike with our exchange and buyback programs at the best prices.</p>
        </div>
      </div>

      <div className="contact-info">
        <p>
          <strong>Your journey begins at Teja’s Nexas! Visit us today and ride home with your dream bike.</strong>
        </p>
        {/* <p>📞 Call us at <a href="tel:+123456789">+123456789</a> | 📍 Visit: [Your Address]</p> */}
      </div>
    </section><br /><br /><br />
    </div>
  );
};

export default Services;
