import React, { useState } from "react";
import {
  FaArrowRight,
  FaRegCalendarCheck,
  FaMessage,
} from "react-icons/fa6";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Hero.scss";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwm0LQk9L0sp-dB3jyPHju7thUV-Wg06XmSayePeixOcY1DKKZPOUTNHAZv_O1Aj33a/exec";

const Hero = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

 
const handleSubmit = async (e) => {
  e.preventDefault();

  if (isSubmitting) return;

  const form = e.currentTarget;
  const formData = new FormData(form);

  setIsSubmitting(true);

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formData,
    });

    const result = await response.text();

    if (result.trim() !== "SUCCESS") {
      throw new Error("Google Sheets submission failed.");
    }

    // Redirect after successful submission.
    window.location.href =
      "https://marketing.pandozasolutions.com/thank-you-headrform";
  } catch (error) {
    console.error("Hero form submission error:", error);

    toast.error(
      "We couldn't confirm your submission. Please try again later."
    );
  } finally {
    setIsSubmitting(false);
  }
};

  const services = [
    "Web Development",
    "PR & Branding",
    "Digital Marketing",
    "Content & Design",
  ];

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
        newestOnTop
        closeOnClick
        pauseOnHover
      />

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
              <a href="#hero-contact-form" className="hero-btn primary-btn">
               <FaRegCalendarCheck />
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

          {/* RIGHT SIDE CONTACT FORM */}
          <div className="hero-visual">
            <div className="hero-image-glow"></div>

            <div className="hero-form-card" id="hero-contact-form">
              <div className="hero-form-heading">
                <div className="hero-form-title-icon">
                  <FaMessage />
                </div>

                <div>
                  <h3>Let's Grow Your Business</h3>
                  <p>
                    Tell us about your requirements. Our team will
                    get back to you soon.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="hero-contact-form">
                {/* NAME */}
                <div className="hero-input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    aria-label="Your name"
                    autoComplete="name"
                    maxLength={100}
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className="hero-input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    aria-label="Your email"
                    autoComplete="email"
                    maxLength={254}
                    required
                  />
                </div>

                {/* PHONE */}
                <div className="hero-input-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    aria-label="Phone number"
                    autoComplete="tel"
                    pattern="[+0-9() -]{7,20}"
                    title="Please enter a valid phone number."
                    maxLength={20}
                    required
                  />
                </div>

                {/* SERVICE */}
                <div className="hero-input-group">
                  <select
                    name="service"
                    defaultValue=""
                    aria-label="Select a service"
                    required
                  >
                    <option value="" disabled>
                      Select Service *
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="hero-input-group hero-textarea-group">
                  <textarea
                    name="message"
                    placeholder="Tell us about your requirements... *"
                    aria-label="Tell us about your requirements"
                    rows="3"
                    maxLength={5000}
                    required
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="hero-form-submit"
                  disabled={isSubmitting}
                >
                  <span>
                    {isSubmitting ? "Submitting..." : "Send Message"}
                  </span>

                  {!isSubmitting && <FaArrowRight />}
                </button>

                <p className="hero-form-note">
                  Your information is safe with us. We'll only use it
                  to respond to your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* BOTTOM CURVE */}
        <div className="hero-bottom-curve"></div>
      </section>
    </>
  );
};

export default Hero;