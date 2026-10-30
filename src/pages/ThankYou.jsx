
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowRight,
  FaHome,
} from "react-icons/fa";
import "./ThankYou.scss";

const thankYouContent = {
  "/thank-you-headrform": {
    title: "Thank You for Reaching Out!",
    description:
      "Your enquiry has been received successfully. Our team will review your requirements and contact you soon.",
  },

  "/thank-you-enquiryformone": {
    title: "Thank You for Your Enquiry!",
    description:
      "Thank you for your interest in Pandoza Solutions. We look forward to helping your business grow.",
  },

  "/thank-you-footerform": {
    title: "We've Received Your Message!",
    description:
      "Your message is important to us. Our team will get in touch with you as soon as possible.",
  },
};

const ThankYou = () => {
  const location = useLocation();

  const content =
    thankYouContent[location.pathname] ||
    thankYouContent["/thank-you-headrform"];

  return (
    <main className="thank-you-page">
      <div className="thank-you-glow thank-you-glow-one"></div>
      <div className="thank-you-glow thank-you-glow-two"></div>

      <div className="thank-you-card">
        <div className="thank-you-icon">
          <FaCheckCircle />
        </div>

        <span className="thank-you-tag">
          PANDOZA SOLUTIONS
        </span>

        <h1>{content.title}</h1>

        <p>{content.description}</p>

        <div className="thank-you-divider"></div>

        <span className="thank-you-note">
          Building trust. Growing businesses.
        </span>

        <Link to="/" className="thank-you-home-btn">
          <FaHome />
          <span>Back to Home</span>
          <FaArrowRight className="thank-you-arrow" />
        </Link>
      </div>
    </main>
  );
};

export default ThankYou;