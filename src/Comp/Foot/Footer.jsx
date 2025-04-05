import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="foot">
      <h1>TEJA'S NEXAS</h1>
      <hr/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta quidem nobis, distinctio esse nostrum.</p>
      <div className="soclink">
        <label>Catch us on </label>
        <button><img src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.jpg" alt="Twiiter" /></button>
        <button><img src="https://brandlogos.net/wp-content/uploads/2016/09/facebook-icon-preview-1.png" alt="Facebook" /></button>
        <button><img src="https://c.files.bbci.co.uk/C5CC/production/_89663605_instagram_logo_976.jpg" alt="Instagram" /></button>
        <button><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="Whatsapp" /></button>
      </div>
      <p>&copy; Copyrights has been reserved - 2025</p>
    </div>
  )
}

export default Footer
