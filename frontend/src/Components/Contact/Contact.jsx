import React from "react";
import { FaEnvelope, FaUser, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>Contact us</span>
        </h1>

        <div className="row">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28402.122298724506!2d74.83558397590039!3d27.147942196462488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396b7995501f34b7%3A0x88832078bd56e61!2sKuchaman%20City%2C%20Rajasthan%20341508!5e0!3m2!1sen!2sin!4v1717868755552!5m2!1sen!2sin"
            width="600" 
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <form>
            <h3>Get in touch</h3>
            <div className="inputBox">
              <FaUser className="icon" />
              <input type="text" placeholder="Name" />
            </div>

            <div className="inputBox">
              <FaEnvelope className="icon" />
              <input type="email" placeholder="Email" />
            </div>

            <div className="inputBox">
              <FaPhone className="icon" />
              <input type="number" placeholder="Number" />
            </div>
            <input type="submit" value="Contact Now" className="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
