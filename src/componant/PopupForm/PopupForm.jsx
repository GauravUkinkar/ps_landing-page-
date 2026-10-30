
import React, { useEffect, useState } from "react";
import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaClipboardList,
  FaArrowRight,
} from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./PopupForm.scss";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwm0LQk9L0sp-dB3jyPHju7thUV-Wg06XmSayePeixOcY1DKKZPOUTNHAZv_O1Aj33a/exec";

const THANK_YOU_URL =
  "https://marketing.pandozasolutions.com/thank-you-footerform";

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Open popup after 3 seconds on every page load.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Close popup.
  const handleClose = () => {
    if (!isSubmitting) {
      setIsOpen(false);
    }
  };

  // Close popup when clicking outside.
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Submit form data to Google Sheets.
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

      // Redirect only after successful submission.
      window.location.href = THANK_YOU_URL;
    } catch (error) {
      console.error("Popup form submission error:", error);

      toast.error(
        "We couldn't confirm your submission. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {isOpen && (
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
            <button
              type="button"
              className="popup-close"
              onClick={handleClose}
              aria-label="Close consultation form"
              disabled={isSubmitting}
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
                  <div className="popup-field">
                    <FaUser />

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

                  <div className="popup-field">
                    <FaEnvelope />

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

                  <div className="popup-field">
                    <FaPhone />

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

                  <div className="popup-field">
                    <FaClipboardList />

                    <select
                      name="service"
                      defaultValue=""
                      aria-label="Select a service"
                      required
                    >
                      <option value="" disabled>
                        Select Service *
                      </option>

                      <option value="Web Development">
                        Web Development
                      </option>

                      <option value="PR & Branding">
                        PR & Branding
                      </option>

                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>

                      <option value="Content & Design">
                        Content & Design
                      </option>
                    </select>
                  </div>

                  <textarea
                    name="message"
                    placeholder="Tell us where you are and where you want to be... *"
                    aria-label="Tell us about your requirements"
                    rows="4"
                    maxLength={5000}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="popup-submit-btn"
                  disabled={isSubmitting}
                >
                  <span>
                    {isSubmitting
                      ? "Submitting..."
                      : "Book My Free Consultation"}
                  </span>

                  {!isSubmitting && <FaArrowRight />}
                </button>

                <p className="popup-privacy">
                  Your information is safe with us.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;