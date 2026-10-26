import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./Hook.scss";

const Hook = () => {
  return (
    <section className="hook-parent parent" id="contact-cta">
      <div className="hook-cont container">
        <div className="hook-content">
          <span className="hook-subtitle">
            READY TO TAKE YOUR BRAND TO THE NEXT LEVEL?
          </span>

          <h2>Let’s Build New Opportunities Together</h2>

          <p>
            Every successful initiative starts with a conversation. Our team
            is ready to understand your goals and help you plan the right
            strategy for your business.
          </p>

          <div className="hook-buttons">
            <a href="#contact" className="hook-btn hook-btn-primary">
              Get a Free Consultation
              <FaArrowRight />
            </a>

            <a href="#services" className="hook-btn hook-btn-secondary">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hook;