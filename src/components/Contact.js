import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          Have a question, project idea, or collaboration in mind?  
          Fill out the form below and I’ll get back to you soon!
        </p>

        <form
          action="https://formspree.io/f/mvgrqeeq"
          method="POST"
          className="contact-form"
        >
          <div className="form-group">
            <input type="text" name="name" placeholder="Full Name" required />
          </div>

          <div className="form-group">
            <input type="email" name="_replyto" placeholder="Email Address" required />
          </div>

          <div className="form-group">
            <textarea name="message" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
