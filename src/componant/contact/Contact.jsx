import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaArrowRight,
  FaMessage,
} from "react-icons/fa6";

import "./Contact.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwm0LQk9L0sp-dB3jyPHju7thUV-Wg06XmSayePeixOcY1DKKZPOUTNHAZv_O1Aj33a/exec";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const THANK_YOU_URL =
    "https://marketing.pandozasolutions.com/thank-you-enquiryformone";

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

      // Redirect only after successful submission
      window.location.href = THANK_YOU_URL;
    } catch (error) {
      console.error("Contact form submission error:", error);

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
      <section className="contact-parent parent" id="contact">
        <div className="contact-cont container">
          {/* LEFT CONTENT */}
          <div className="contact-content">
            <span className="contact-eyebrow">LET'S TALK</span>

            <h2>
              No trust, no sale.
              <br />
              <span>Let's build yours.</span>
            </h2>

            <p className="contact-description">
              Ready to be the business everyone trusts online?
              Tell us where you are and where you want to be.
              We'll map the way together.
            </p>

            {/* CONTACT DETAILS */}
            <div className="contact-details">
              <a
                href="tel:+918007265039"
                className="contact-detail-item"
              >
                <span className="contact-detail-icon phone-icon">
                  <FaPhone />
                </span>

                <span>+91 80072 65039</span>
              </a>

              <a
                href="mailto:info@pandozasolutions.com"
                className="contact-detail-item"
              >
                <span className="contact-detail-icon email-icon">
                  <FaEnvelope />
                </span>

                <span>info@pandozasolutions.com</span>
              </a>

              <a
                href="https://wa.me/918007265039"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail-item"
              >
                <span className="contact-detail-icon whatsapp-icon">
                  <FaWhatsapp />
                </span>

                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* RIGHT CONTACT FORM */}
          <div className="contact-form-card" id="contact-form">
            <div className="contact-form-heading">
              <div className="contact-form-title-icon">
                <FaMessage />
              </div>

              <div>
                <h3>Send Us a Message</h3>

                <p>
                  Fill out the form and we'll get back to you as soon
                  as possible.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              {/* NAME */}
              <div className="contact-input-group">
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
              <div className="contact-input-group">
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
              <div className="contact-input-group">
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
              <div className="contact-input-group contact-select-group">
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

              {/* MESSAGE */}
              <div className="contact-textarea-group">
                <textarea
                  name="message"
                  placeholder="Tell us where you are and where you want to be... *"
                  aria-label="Tell us about your requirements"
                  rows="4"
                  maxLength={5000}
                  required
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="contact-submit-btn"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting ? "Submitting..." : "Send Message"}
                </span>

                {!isSubmitting && <FaArrowRight />}
              </button>

              <p className="contact-form-note">
                Your information is safe with us. We'll only use it to
                respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;