import React from 'react';
import { FaFacebook, FaXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <>
      <div id="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4 style={{fontSize:'1.2rem', fontWeight:'bold'}}>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 style={{fontSize:'1.2rem', fontWeight:'bold'}}>Help</h4>
            <ul>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Return Policy</li>
              <li>Track Order</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 style={{fontSize:'1.2rem', fontWeight:'bold'}}>Shop</h4>
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 style={{fontSize:'1.2rem', fontWeight:'bold'}}>Legal</h4>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="footer-section social">
            <h4 style={{fontSize:'1.2rem', fontWeight:'bold'}}>Follow Us</h4>
            <div>
              <a className="fa" href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
              <a className="fa" href="https://twitter.com" aria-label="X (Twitter)"><FaXTwitter /></a>
              <a className="fa" href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
              <a className="fa" href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '20px', letterSpacing: '2px' }}>
          © 2034 MK CREATORS
        </p>
      </div>

      <a href="#top" className="back" title="Back to top">
        ↑
      </a>
    </>
  );
}
