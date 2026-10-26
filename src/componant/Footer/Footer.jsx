import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLocationDot,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

import logo from "../../assets/logo.png";
import "./Footer.scss";

const Footer = () => {
  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Our Work", link: "#work" },
    { name: "Contact", link: "#contact" },
  ];

  const services = [
    "PR, Branding & Marketing",
    "Business Consultancy",
    "Medical & Wellness Tourism",
    "Corporate & Healthcare Events",
    "Real Estate Consultancy",
    "Venture Capital",
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/",
      label: "LinkedIn",
    },
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/",
      label: "Facebook",
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/",
      label: "Twitter",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/",
      label: "Instagram",
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/",
      label: "YouTube",
    },
  ];

  return (
    <footer className="footer-parent parent">
      <div className="footer-cont container">

        {/* Company Information */}
        <div className="footer-company">
          <a href="#home" className="footer-logo">
            <img src={logo} alt="Pandoza Solutions" />
          </a>

          <p className="footer-tagline">
            Business Consulting | Marketing | Global Opportunities
          </p>

          <p className="footer-description">
            We help businesses build stronger brands, explore new
            opportunities, and achieve meaningful growth.
          </p>

          <div className="footer-socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            {quickLinks.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column footer-services">
          <h3>Our Services</h3>

          <ul>
            {services.map((service) => (
              <li key={service}>
                <a href="#contact">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-column footer-contact" id="footer-contact">
          <h3>Contact Us</h3>

          <div className="footer-contact-item">
            <FaLocationDot className="contact-icon" />

            <a
              href="https://maps.google.com/?q=214-216,10+Biz+Park,Viman+Nagar,Pune"
              target="_blank"
              rel="noopener noreferrer"
            >
              214–216, 10 Biz Park,
              <br />
              Near Symbiosis Law College,
              <br />
              Airport Road, Viman Nagar,
              <br />
              Pune – 411014
            </a>
          </div>

          <div className="footer-contact-item">
            <FaEnvelope className="contact-icon" />

            <a href="mailto:info@pandozasolutions.com">
              info@pandozasolutions.com
            </a>
          </div>

          <div className="footer-contact-item">
            <FaPhone className="contact-icon" />

            <a href="tel:+918149096492">
              +91 81490 96492
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-cont container">

          <p>
            © 2024 Pandoza Solutions. All rights reserved.
          </p>

          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>

            <span className="footer-divider">|</span>

            <a href="/terms-and-conditions">
              Terms &amp; Conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;