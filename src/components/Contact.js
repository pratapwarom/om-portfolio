import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact"data-aos="flip-left">
      <h2>Contact Me</h2>
      <form
        action="https://formspree.io/f/mvgrqeeq"  // Replace with real ID
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="_replyto" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
