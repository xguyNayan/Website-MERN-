// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="left-section">
            <h2>Ryzu Academy</h2>
            <p>A leading online educational platform offering live classes to students worldwide.</p>
          </div>
          <div className="right-section">
            <nav>
              <ul>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <hr className="line" />
      <p className="copyright">&copy; 2023 Ryzu Academy</p>
    </footer>
  );
};

export default Footer;
