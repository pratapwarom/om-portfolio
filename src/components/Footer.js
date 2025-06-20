import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Ayush Mahto • All rights reserved</p>
      <p>🕉️ Radhe Radhe</p>
      <div className="social-links">
        <a href="https://github.com/AyushMahto" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/ayushmahto0901" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:ayushmahgto849@gmail.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;
