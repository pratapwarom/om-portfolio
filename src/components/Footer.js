import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Om Pratapwar • All rights reserved</p>
      <p>🕉️ Radhe Radhe</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/ompratapwar2908" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="pratapwarom@gmail.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;
