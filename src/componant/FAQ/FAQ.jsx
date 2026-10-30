
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import "./FAQ.scss";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "What services does Pandoza Solutions offer?",
      answer:
        "Pandoza Solutions offers web development, digital marketing, PR and branding, and content and design services to help businesses strengthen their online presence and grow their brand.",
    },
    {
      question: "How can digital marketing help my business grow?",
      answer:
        "Our digital marketing strategies include SEO, social media marketing, SMO, and GEO to help improve your online visibility, reach your target audience, and generate quality leads.",
    },
    {
      question: "Do you build custom websites for businesses?",
      answer:
        "Yes, we develop customized business websites, e-commerce stores, and CRM solutions tailored to your business goals, brand identity, and customer needs.",
    },
    {
      question: "Can you help build my brand identity?",
      answer:
        "Absolutely! We provide branding support, logo design, brand guidelines, PR, and creative content to help your business establish a consistent and recognizable identity.",
    },
    {
      question: "How do I get started with Pandoza Solutions?",
      answer:
        "Getting started is simple. Book a free strategy call with our team to discuss your business goals, challenges, and requirements. We'll help you identify the right solutions for your brand.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <section className="faq-parent parent" id="faq">
      <div className="faq-cont container">
        <div className="faq-heading">
          <span className="faq-tag">YOUR GROWTH, OUR EXPERTISE</span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Everything you need to know about our services and how we
            help your business grow.
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>

                <span className="faq-icon">
                  <FaChevronDown />
                </span>
              </button>

              <div
                className="faq-answer"
                id={`faq-answer-${index}`}
                hidden={activeIndex !== index}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default FAQ;