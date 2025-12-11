<<<<<<< HEAD
/* eslint-disable no-unused-vars */
=======
>>>>>>> 8746ec86588a0c0c04669cf2a8d446d8769825e8
import React, { useState } from 'react'
import './ACcomp.css'
import vidloc from './tre photos/vidloc.gif'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Contus = () => {
      const [formData, setFormData] = useState({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
      });

      
  
      const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
      };
  
      const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Form Data:", formData);
          setFormData({ name: "", email: "", message: "", phoneNumber: "" });
          axios.post('http://localhost:3000/cont', formData)
          .then((res) => {toast.success('Submitted succesfully')})
          .catch(error => toast.error('Error submitting form'))
      };
  
      return (
          <div className="contact-container">
            <ToastContainer/>
              <div>
                  <h2>Contact US</h2>
                  <p> <i className="fas fa-map-marker-alt"></i> #1256, Museum Road, Noida, Uttar Pradesh, India</p>
                  <p> <i className="fas fa-phone-alt"></i> Phone: +91 701234589</p>
                  <p> <i className="fas fa-envelope"></i>     Email:tejasnexas@gmail.com</p>
  
              </div>
              <div className="contact-form">
                  <h2>Send Us a Message</h2>
                  <form onSubmit={handleSubmit}>
                      <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                      />
                      <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                          required
                      />
                      <input
                          type="number"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="Your Phone Number"
                          required
                      />
                      <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your Message"
                          rows={5}
                          cols={45}
                          required
                      ></textarea>
                      <button type="submit">Send Message</button>
                  </form>
              </div>
            <div className="locvid">
                <img src={vidloc} alt="" />
            </div>
          </div>
      );
  };

export default Contus

