import React from 'react';
import './Contact.css';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => (
  <section className="contact-section" id="contact">
    <h2 className="contact-heading">Contact</h2>
    <p className="contact-subtitle">Let’s connect! Reach out through any platform below:</p>

    <ul className="contact-list">
      <li>
        <FaEnvelope className="contact-icon" />
        <span>Email:</span>
        <a href="mailto:awadhooths16@gmail.com">awadhooths16@gmail.com</a>
      </li>
      <li>
        <FaInstagram className="contact-icon" />
        <span>Instagram:</span>
        <a href="https://instagram.com/awadhoothsk" target="_blank" rel="noopener noreferrer">@awadhoothsk</a>
      </li>
      <li>
        <FaLinkedin className="contact-icon" />
        <span>LinkedIn:</span>
        <a href="https://www.linkedin.com/in/awadhoothskulkarni/" target="_blank" rel="noopener noreferrer">
          awadhoothskulkarni
        </a>
      </li>
    </ul>
  </section>
);

export default Contact;
