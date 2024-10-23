import React from "react";
import "./Css/contact.css"; // Ensure you create this CSS file for styles

export const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="fade-in">Get in Touch</h1>
      <p className="fade-in">We'd love to hear from you! Fill out the form below to reach us.</p>

      <form className="contact-form fade-in">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your Message" required></textarea>
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>

      <div className="contact-info fade-in">
        <h2>Contact Details</h2>
        <p>Email: info@yourcompany.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Your Street, Your City, Your Country</p>
      </div>
    </div>
  );
};
 
