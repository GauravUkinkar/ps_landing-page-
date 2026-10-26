import React from "react";
import {
  FaArrowRight,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaClipboardList,
  FaLock,
} from "react-icons/fa";

import "./Hero.scss";

const Hero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log("Consultation Request:", data);

    alert("Thank you! Your consultation request has been submitted.");
    e.target.reset();
  };

  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "25+", label: "Happy Clients" },
    { number: "6+", label: "Business Verticals" },
    { number: "4+", label: "Countries" },
  ];

  return (
    <section className="hero-parent parent" id="home" >
      <div className="hero-cont container">

        {/* Left Content */}
        <div className="hero-content">
          <span className="hero-tagline">
            STRATEGIC MARKETING & BUSINESS SOLUTIONS
          </span>

          <h1>
            Grow Your Brand
            <br />
            Expand Your
            <br />
            <span>Opportunities</span>
          </h1>

          <p className="hero-description">
            We help businesses build stronger brands, reach the right
            audience, and discover new opportunities through strategic
            marketing and tailored business solutions.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="hero-btn primary-btn">
              Get a Free Consultation
              <FaArrowRight />
            </a>

            <a href="#services" className="hero-btn secondary-btn">
              Explore Our Services
            </a>
          </div>

          {/* Statistics */}
          <div className="hero-stats">
            {stats.map((item, index) => (
              <div className="stat-item" key={index}>
                <h3>{item.number}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hero-visual">
          <div className="hero-image">
            <img
              src="/images/hero-business.png"
              alt="Business professional helping a client grow their business"
            />
          </div>
        </div>

        {/* Consultation Form */}
        <div className="consultation-card" id="contact">
          <h2>
            Let's Talk About
            <br />
            Growing Your Business
          </h2>

          <p className="form-description">
            Tell us about your goals and our team will get in touch
            to discuss the right strategy for your business.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <FaUser />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                aria-label="Full Name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-field">
              <FaEnvelope />
              <input
                type="email"
                name="email"
                placeholder="Business Email"
                aria-label="Business Email"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-field">
              <FaPhone />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                aria-label="Phone Number"
                autoComplete="tel"
                required
              />
            </div>

            <div className="form-field">
              <FaBuilding />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                aria-label="Company Name"
                autoComplete="organization"
                required
              />
            </div>

            <div className="form-field select-field">
              <FaClipboardList />

              <select
                name="service"
                defaultValue=""
                aria-label="Service you're interested in"
                required
              >
                <option value="" disabled>
                  Service You're Interested In
                </option>
                <option value="Digital Marketing">
                  Digital Marketing
                </option>
                <option value="Branding">
                  Branding & Identity
                </option>
                <option value="Web Development">
                  Website Design & Development
                </option>
                <option value="SEO">
                  SEO & Online Visibility
                </option>
                <option value="Business Consulting">
                  Business Consulting
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            <textarea
              name="requirements"
              placeholder="Tell Us About Your Requirements"
              aria-label="Tell us about your requirements"
              rows="3"
              required
            />

            <button type="submit" className="form-submit-btn">
              Request a Consultation
              <FaArrowRight />
            </button>

            <div className="form-security">
              <FaLock />
              <span>Your information is safe with us.</span>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Hero;