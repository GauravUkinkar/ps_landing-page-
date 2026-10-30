import React, { useState } from "react";
import { FaArrowRight, FaBars } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

import img1 from "../../assets/logo.png";
import "./Header.scss";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: "Home", to: "home" },
        { name: "Services", to: "services" },
        { name: "Our Work", to: "work" },
        { name: "FAQ", to: "faq" },
        { name: "Contact", to: "contact" },
    ];

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleNavigation = (sectionId) => {
        closeMobileMenu();

        // If we're already on the homepage, scroll to the section.
        if (location.pathname === "/") {
            if (sectionId === "home") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
                return;
            }

            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }

            return;
        }

        // Otherwise, navigate to the homepage first.
        navigate(`/#${sectionId}`);
    };

    return (
        <header className="header-parent parent">
            <div className="header-cont container">

                {/* Logo */}
                <a
                    href="/#home"
                    className="logo"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavigation("home");
                    }}
                >
                    <img src={img1} alt="Pandoza Solutions" />
                </a>

                {/* Navigation */}
                <nav className={`menu-list ${isMenuOpen ? "active" : ""}`}>
                    {menuItems.map((item) => (
                        <a
                            key={item.to}
                            href={`/#${item.to}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(item.to);
                            }}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <a
                    href="/#contact"
                    className="consultation-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavigation("contact");
                    }}
                >
                    <span>Contact Now</span>
                    <FaArrowRight />
                </a>

                {/* Mobile Menu Icon */}
                <button
                    type="button"
                    className="mobile-menu-btn"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                    onClick={toggleMobileMenu}
                >
                    <FaBars />
                </button>

            </div>
        </header>
    );
};

export default Header;