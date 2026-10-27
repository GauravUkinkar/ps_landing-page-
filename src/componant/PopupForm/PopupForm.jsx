
import React, { useEffect, useState } from "react";
import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaClipboardList,
  FaArrowRight,
} from "react-icons/fa";

import "./PopupForm.scss";

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open popup after 3 seconds on every page load.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Close popup.
  const handleClose = () => {
    setIsOpen(false);
  };

  // Close popup when clicking outside.
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log("Consultation Request:", data);

    alert("Thank you! Your consultation request has been submitted.");

    form.reset();
    handleClose();
  };

  // Render popup only when open.
  if (!isOpen) return null;

  return (
    <div
      className="consultation-popup-overlay"
      onClick={handleOverlayClick}
    >
      <div
        className="consultation-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
      >
        {/* Close Button */}
        <button
          type="button"
          className="popup-close"
          onClick={handleClose}
          aria-label="Close consultation form"
        >
          <FaTimes />
        </button>

        {/* Left Content */}
        <div className="popup-content">
          <span className="popup-tagline">
            LET'S GROW TOGETHER
          </span>

          <h2 id="popup-title">
            Ready to Grow
            <br />
            Your Business?
          </h2>

          <p>
            Let's discuss your goals and discover the right strategy
            to help your business grow.
          </p>

          <ul>
            <li>Strategic marketing solutions</li>
            <li>Branding and business development</li>
            <li>Personalized growth strategies</li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="popup-form-container">
          <h3>Book Your Free Consultation</h3>

          <p className="popup-form-description">
            Share your details and our team will contact you.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="popup-form-grid">
              {/* Full Name */}
              <div className="popup-field">
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

              {/* Email */}
              <div className="popup-field">
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

              {/* Phone Number */}
              <div className="popup-field">
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

              {/* Service */}
              <div className="popup-field ">
                <FaClipboardList />

                <select
                  name="service"
                  defaultValue=""
                  aria-label="Select a service"
                  required
                >
                  <option value="" disabled>
                    Select a Service
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

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* Requirements */}
              <textarea
                name="requirements"
                placeholder="Tell us about your business goals..."
                aria-label="Business requirements"
                rows="3"
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="popup-submit-btn">
              <span>Book My Free Consultation</span>
              <FaArrowRight />
            </button>

            <p className="popup-privacy">
              Your information is safe with us.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;