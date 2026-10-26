import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.scss";

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            quote:
                "Pandoza Solutions has been an excellent partner in our growth journey. Their strategic support and industry knowledge made a real difference.",
            name: "Business Owner",
            location: "Pune",
            initials: "BO",
        },
        {
            id: 2,
            quote:
                "Their team's professional approach and understanding of our requirements helped us achieve new opportunities in international markets.",
            name: "Healthcare Partner",
            location: "India",
            initials: "HP",
        },
        {
            id: 3,
            quote:
                "A reliable and strategic partner for our business expansion. We appreciate their commitment and industry expertise.",
            name: "Corporate Client",
            location: "UK",
            initials: "CC",
        },
        {
            id: 4,
            quote:
                "The team understood our business goals and helped us identify new opportunities with a clear and practical strategy.",
            name: "Business Consultant",
            location: "Mumbai",
            initials: "BC",
        },
        {
            id: 5,
            quote:
                "Professional communication, thoughtful planning, and a strong understanding of business needs made the collaboration valuable.",
            name: "Marketing Partner",
            location: "India",
            initials: "MP",
        },
        {
            id: 6,
            quote:
                "Pandoza Solutions brought fresh ideas and a strategic perspective to our business development initiatives.",
            name: "Business Partner",
            location: "International",
            initials: "BP",
        },
    ];

    return (
        <section className="testimonial-parent parent" id="testimonials">
            <div className="testimonial-cont container">

                {/* Section Heading */}
                <div className="testimonial-heading">
                    <span>TESTIMONIALS</span>
                    <h2>Trusted by Businesses</h2>
                    <p>
                        Our clients appreciate our strategic approach and industry expertise.
                    </p>
                </div>

                {/* Testimonials Slider */}
                <Swiper
                    slidesPerView={3}
                    spaceBetween={18}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 18,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 18,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="testimonial-swiper"
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id}>
                            <article className="testimonial-card">

                                {/* Quote Icon */}
                                <div className="testimonial-quote-icon">“</div>

                                {/* Testimonial Text */}
                                <p className="testimonial-text">
                                    {item.quote}
                                </p>

                                {/* Client Information */}
                                <div className="testimonial-client">

                                    <div
                                        className="client-avatar"
                                        aria-label={item.name}
                                    >
                                        {item.initials}
                                    </div>

                                    <div className="client-info">
                                        <h3>{item.name}</h3>
                                        <span>{item.location}</span>
                                    </div>

                                </div>

                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default Testimonial;