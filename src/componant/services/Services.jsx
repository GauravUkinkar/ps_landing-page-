import React from "react";
import {
  FaCode,
  FaBullhorn,
  FaChartColumn,
  FaPalette,
  FaArrowRight,
  FaCalendarCheck,
} from "react-icons/fa6";

import "./Services.scss";

import img1 from "../../assets/pr_and_marketing.jpg";
import img2 from "../../assets/business.jpg";
import img3 from "../../assets/medical.jpg";
import img4 from "../../assets/healtcareevent.jpg";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Websites, e-commerce stores and CRM systems that convert visitors into customers.",
      icon: <FaCode />,
      image: img1,
      theme: "blue",
    },
    {
      id: 2,
      title: "PR & Branding",
      description:
        "Logos, brand guidelines and press coverage people remember.",
      icon: <FaBullhorn />,
      image: img2,
      theme: "purple",
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "Social media, SEO, GEO and SMO that put you in front of the right people.",
      icon: <FaChartColumn />,
      image: img3,
      theme: "green",
    },
    {
      id: 4,
      title: "Content & Design",
      description:
        "Presentations, company profiles, publications and merch that look as good as your work.",
      icon: <FaPalette />,
      image: img4,
      theme: "orange",
    },
  ];

  return (
    <section className="services-parent parent" id="services">
      <div className="services-cont container">
        {/* SECTION HEADING */}
        <div className="services-heading">
          <span className="services-eyebrow">WHAT WE DO</span>

          <h2>
            Everything your brand needs
            <br />
            to be <span>seen, trusted and chosen.</span>
          </h2>
        </div>

       

        {/* SERVICE CARDS */}
        <div className="services-list">
          {servicesData.map((service) => (
            <article
              className={`service-card ${service.theme}`}
              key={service.id}
            >
              <div className="service-card-background"></div>

              <div className="service-icon">
                {service.icon}
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a
                  href="#contact"
                  className="service-link"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <FaArrowRight />
                </a>
              </div>

              <div className="service-image">
                <img
                  src={service.image}
                  alt={`${service.title} service`}
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM CONTENT */}
        <div className="services-bottom">
          <h3>
            We don't just deliver services. We guide you to the smartest way to grow.
          </h3>

          <a href="#contact" className="services-cta">
            <FaCalendarCheck />
            <span>Book Your Free Strategy Call</span>
            <FaArrowRight className="cta-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;