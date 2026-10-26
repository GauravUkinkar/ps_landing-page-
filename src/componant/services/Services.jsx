import React from "react";
import {
  FaBullhorn,
  FaChartColumn,
  FaHeart,
  FaCalendarCheck,
  FaBuilding,
  FaSeedling,
  FaArrowRight,
} from "react-icons/fa6";

import "./Services.scss";
import img1 from "../../assets/pr_and_marketing.jpg"
import img2 from "../../assets/business.jpg";
import img3 from "../../assets/medical.jpg"
import img4 from "../../assets/healtcareevent.jpg"
import img5 from "../../assets/real_estate.jpg";
import img6 from "../../assets/venture.jpg"
const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "PR, Branding & Marketing",
      description:
        "Build brand awareness, strengthen your reputation, and connect with the right audience.",
      image: img1,
      icon: <FaBullhorn />,
      link: "#contact",
    },
    {
      id: 2,
      title: "Business Consultancy",
      description:
        "Strategic guidance for business setup, market research, and sustainable growth.",
      image: img2,
      icon: <FaChartColumn />,
      link: "#contact",
    },
    {
      id: 3,
      title: "Medical & Wellness Tourism",
      description:
        "Explore healthcare and wellness opportunities with tailored consultation and coordination.",
      image: img3,
      icon: <FaHeart />,
      link: "#contact",
    },
    {
      id: 4,
      title: "Corporate & Healthcare Events",
      description:
        "Plan and coordinate impactful events that bring industry experts together.",
      image: img4,
      icon: <FaCalendarCheck />,
      link: "#contact",
    },
    {
      id: 5,
      title: "Real Estate Consultancy",
      description:
        "Identify and explore real estate opportunities with a strategic approach.",
      image: img5,
      icon: <FaBuilding />,
      link: "#contact",
    },
    {
      id: 6,
      title: "Venture Capital",
      description:
        "Support promising startups and growing businesses with investment opportunities and strategic partnerships.",
      image: img6,
      icon: <FaSeedling />,
      link: "#contact",
    },
  ];

  return (
    <section className="services-parent parent" id="services">
      <div className="services-cont container">
        {/* Section Heading */}
        <div className="services-heading">
          <span>WHAT WE DO</span>
          <h2>Our Services</h2>
          <p>
            Comprehensive solutions to help your business grow.
          </p>
        </div>

        {/* Services Cards */}
        <div className="services-list">
          {servicesData.map((service) => (
            <article className="service-card" key={service.id}>
              {/* Image */}
              <div className="service-image">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />
              </div>

              {/* Icon */}
              <div className="service-icon">
                {service.icon}
              </div>

              {/* Content */}
              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a
                  href={service.link}
                  className="service-link"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <FaArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;