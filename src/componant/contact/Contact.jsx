import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaCalendarDays,
  FaArrowRight,
  FaMessage,
} from "react-icons/fa6";

import "./Contact.scss";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Replace this with your backend API or email service.
    console.log("Contact Form Submission:", data);

    alert("Thank you! Your message has been submitted.");
    form.reset();
  };

  return (
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

                <option value="Business Consultancy">
                  Business Consultancy
                </option>

                <option value="Medical & Wellness Tourism">
                  Medical & Wellness Tourism
                </option>

                <option value="Corporate & Healthcare Events">
                  Corporate & Healthcare Events
                </option>

                <option value="Real Estate Consultancy">
                  Real Estate Consultancy
                </option>

                <option value="Venture Capital">
                  Venture Capital
                </option>

                <option value="Other">Other</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="contact-textarea-group">
              <textarea
                name="message"
                placeholder="Tell us where you are and where you want to be... *"
                aria-label="Tell us about your requirements"
                rows="4"
                required
              />
            </div>

            {/* SUBMIT */}
            <button type="submit" className="contact-submit-btn">
              <span>Send Message</span>
              <FaArrowRight />
            </button>

            <p className="contact-form-note">
              Your information is safe with us. We'll only use it to
              respond to your enquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;