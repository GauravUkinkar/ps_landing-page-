
import React from "react";
import "./Footer.scss";
import { SiWhatsapp } from "react-icons/si";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  const phoneNumber = "8007265039"; 

  return (
    <div className="footer-bottom parent">
      <div className="footer-bottom-cont container">
        <p>© 2026 Pandoza Solutions. All rights reserved.</p>

        <div className="static-buttons">
          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${phoneNumber}`}
            className="whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
          >
            <SiWhatsapp />
          </a>

          {/* Call Button */}
          <a
            href={`tel:+${phoneNumber}`}
            className="contact-btn"
            aria-label="Call us"
          >
            <IoCall />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;