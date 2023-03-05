import React from "react";
import { FaFacebook, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="footer-layout">
        <h4>Connect with me</h4>
        <div className="footer-icon">
          <a href="https://www.facebook.com/phamthaiduong98/">
            <i className="icon">
              <FaFacebook />
            </i>
          </a>
          <a href="https://www.linkedin.com/in/thaiduong98/">
            <i className="icon">
              <FaLinkedin />
            </i>
          </a>
          <a href="mailto:thaiduong6898@gmail.com">
            <i className="icon">
              <FaEnvelope />
            </i>
          </a>
          <a href="tel:0376446977">
            <i className="icon">
              <FaPhone />
            </i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
