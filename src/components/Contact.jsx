import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div id="contactss">

      <div className="contact-card">

        <h2>📞 Contact Us</h2>
        <p>We would love to hear from you</p>

        <input type="text" placeholder="👤 Enter Your Name" />

        <input type="email" placeholder="✉️ Enter Your Email" />

        <input type="text" placeholder="📋 Subject" />

        <textarea
          cols="30"
          rows="5"
          placeholder="💬 Write your message..."
        ></textarea>

        <button>Send Message</button>

      </div>

    </div>
  )
}

export default Contact