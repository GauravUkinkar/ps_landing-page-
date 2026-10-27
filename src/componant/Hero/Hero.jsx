import React from "react";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import img1 from "../../assets/heromain.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero-parent parent" id="home">
      <div className="hero-background-glow"></div>

      <div className="hero-cont container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <span className="hero-tagline">
            <span className="tagline-dot"></span>
            WEB DEVELOPMENT & DIGITAL SOLUTIONS
          </span>

          <h1>
            Your next client is
            <br />
            searching for you
            <br />
            <span>right now.</span>
          </h1>

          <h2 className="hero-subheading">
            Will they find you, and trust what they see?
          </h2>

          <p className="hero-description">
            We build the websites, brands and digital presence
            that turn curiosity into credibility, and credibility
            into revenue.
          </p>

          {/* CTA BUTTON */}
          <div className="hero-buttons">
            <a href="#contact" className="hero-btn primary-btn">
              <FaCalendarAlt />
              <span>Book Your Free Strategy Call</span>
              <FaArrowRight className="button-arrow" />
            </a>
          </div>

          {/* TRUST INDICATORS */}
          <div className="hero-trust">
            <div className="trust-avatars">
              <span className="trust-avatar avatar-one">R</span>
              <span className="trust-avatar avatar-two">A</span>
              <span className="trust-avatar avatar-three">S</span>
              <span className="trust-avatar avatar-four">M</span>
            </div>

            <div className="trust-divider"></div>

            <p>
              Trusted by <strong>25+ businesses</strong>
              <br />
              across various industries.
            </p>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-visual">
          <div className="hero-image-glow"></div>

          <div className="hero-image">
            <img
              src={img1}
              alt="Digital solutions displayed on laptop and mobile devices"
              fetchPriority="high"
            />
          </div>

          {/* FLOATING LABEL */}
          <div className="hero-floating-note">
            <span className="note-line"></span>

            <div className="note-content">
              <span>Modern</span>
              <span>Creative</span>
              <span>Reliable</span>
            </div>
          </div>

          {/* DECORATIVE ICON */}
          <div className="hero-floating-icon floating-icon-one">
            <FaArrowRight />
          </div>

          <div className="hero-floating-icon floating-icon-two">
            <span>↗</span>
          </div>
        </div>
      </div>

      {/* BOTTOM CURVE */}
      <div className="hero-bottom-curve"></div>
    </section>
  );
};

export default Hero;