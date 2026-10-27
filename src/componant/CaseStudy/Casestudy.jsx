import React, { useState } from "react";
import {
  FaGlobe,
  FaUsers,
  FaChartLine,
  FaStar,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import "./Casestudy.scss";

import axonImage from "../../assets/axoncare.png";
import orthoImage from "../../assets/axonic.png";
import travelImage from "../../assets/travel.png";

const caseStudies = [
  {
    id: 1,
    name: "AxonCare by Axonic Health",
    industry: "Health-tech",
    country: "India",
    result: "250+ doctors onboarded in just 2 months",
    description:
      "We were Axonic Health's business launch partner, taking AxonCare from concept to market in India. We built the brand identity and guidelines, launched two websites, and ran lead generation campaigns that brought doctors onto the platform. Marketing collaterals, video shoots, ads, email, WhatsApp and social media kept the momentum going.",
    services: [
      "Brand identity",
      "2 websites",
      "Lead generation",
      "Video and ads",
      "Email, WhatsApp and social",
    ],
    image: axonImage,
    imageAlt: "AxonCare website and digital health platform",
    theme: "blue",
  },
  {
    id: 2,
    name: "Ortho X Clinic",
    industry: "Orthopaedics",
    country: "Dubai",
    result: "300 patients through the door in the first month",
    description:
      "We launched Dr Bilal El Yawafi's clinic in Dubai with a complete digital presence. That meant a website with WhatsApp integration, bilingual content in two languages, influencer marketing, email campaigns, and brochures and videos for the clinic itself.",
    services: [
      "Website",
      "WhatsApp integration",
      "Bilingual content",
      "Influencer marketing",
      "Brochures and video",
    ],
    image: orthoImage,
    imageAlt: "Ortho X Clinic website and healthcare project",
    theme: "green",
  },
  {
    id: 3,
    name: "Travel and Taste",
    industry: "Travel agency",
    country: "Australia",
    result:
      "10+ travellers signed up for Everest preparation within a month",
    description:
      "We built the agency's online presence in Australia and popularised its signature taste-and-travel itineraries. Brand awareness campaigns, email and social media marketing brought together a group of 10+ for Everest trek preparation in a single month.",
    services: [
      "Online presence",
      "Awareness campaigns",
      "Email marketing",
      "Social media",
    ],
    image: travelImage,
    imageAlt: "Travel and Taste website and travel project",
    theme: "purple",
  },
];

const stats = [
  {
    id: 1,
    number: "3",
    label: "Countries represented",
    icon: <FaGlobe />,
    color: "blue",
  },
  {
    id: 2,
    number: "250+",
    label: "Doctors onboarded",
    icon: <FaUsers />,
    color: "green",
  },
  {
    id: 3,
    number: "300",
    label: "Patients in the first month",
    icon: <FaChartLine />,
    color: "purple",
  },
  {
    id: 4,
    number: "10+",
    label: "Travellers signed up",
    icon: <FaStar />,
    color: "orange",
  },
];

const Casestudy = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="case-study-parent parent" id="work">
      <div className="case-study-cont container">


        {/* HEADING */}
        <header className="case-study-heading">
          <span className="case-study-eyebrow">
            OUR WORK
          </span>

          <h2>
          Real businesses. Real results.

          </h2>

          <p>
            Real businesses. Real results. Discover how we help brands
            turn ambitious ideas into measurable outcomes.
          </p>
        </header>



        {/* CASE STUDY CAROUSEL */}
        <div className="case-study-carousel-wrap">
          <Swiper
            modules={[Autoplay, A11y]}
            onSwiper={setSwiper}
            onSlideChange={(instance) =>
              setActiveIndex(instance.realIndex)
            }
            slidesPerView={1}
            spaceBetween={20}
            loop
            speed={650}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            a11y={{
              prevSlideMessage: "Previous case study",
              nextSlideMessage: "Next case study",
            }}
            className="case-study-swiper"
          >
            {caseStudies.map((study) => (
              <SwiperSlide key={study.id}>
                <article
                  className={`case-study-card ${study.theme}`}
                >
                  {/* LEFT: PROJECT IMAGE */}
                  <div className="case-study-image-wrap">
                    <div className="case-study-image-frame">
                      <img
                        src={study.image}
                        alt={study.imageAlt}
                        loading="lazy"
                      />
                    </div>

                    <span className="case-image-label">
                      PROJECT {String(study.id).padStart(2, "0")}
                    </span>
                  </div>

                  {/* RIGHT: PROJECT DETAILS */}
                  <div className="case-study-details">
                    <div className="case-study-meta">
                      <span>{study.industry}</span>
                      <span className="case-meta-dot">•</span>
                      <span>{study.country}</span>
                    </div>

                    <h3 className="case-study-title">
                      {study.name}
                    </h3>

                    <div className="case-study-result">
                      <span className="case-result-icon">
                        <FaChartLine />
                      </span>

                      <h4>{study.result}</h4>
                    </div>

                    <p className="case-study-description">
                      {study.description}
                    </p>

                    <div className="case-study-services">
                      {study.services.map((service) => (
                        <span key={service}>
                          {service}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="case-study-link"
                    >
                      Discuss a similar project
                      <FaArrowRight />
                    </a>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NAVIGATION ARROWS */}
          <div className="case-study-navigation">
            <button
              type="button"
              className="case-nav-btn"
              onClick={() => swiper?.slidePrev()}
              aria-label="Previous case study"
            >
              <FaChevronLeft />
            </button>

            <span className="case-slide-count">
              <strong>
                {String(activeIndex + 1).padStart(2, "0")}
              </strong>
              <span>/</span>
              {String(caseStudies.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              className="case-nav-btn"
              onClick={() => swiper?.slideNext()}
              aria-label="Next case study"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div className="case-study-bottom">
          <div className="case-bottom-content">
            <span>HAVE A PROJECT IN MIND?</span>

            <h3>
              Your brand could be <span>next.</span>
            </h3>

            <p>
              Let's build your brand, strengthen your online presence,
              and turn your next big idea into real results.
            </p>
          </div>

          <a href="#contact" className="case-study-cta">
            Book Your Free Strategy Call
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Casestudy;