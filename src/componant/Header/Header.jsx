import React from "react";
import { FaArrowRight, FaBars } from "react-icons/fa";
import img1 from "../../assets/logo.png";
import "./Header.scss";

const Header = () => {
    const menuItems = [
        { name: "Home", to: "home" },
        { name: "Services", to: "services" },
        { name: "About", to: "about" },
        { name: "Our Work", to: "work" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <header className="header-parent parent">
            <div className="header-cont container">
                {/* Logo */}
                <a href="#home" className="logo">
                    <img src={img1} alt="Pandoza Solutions" />
                </a>

                {/* Navigation */}
                <nav className="menu-list">
                    {menuItems.map((item) => (
                        <a key={item.to} href={`#${item.to}`}>
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <a href="#contact" className="consultation-btn">
                    <span>Contact Now</span>
                    <FaArrowRight />
                </a>

                {/* Mobile Menu Icon */}
                <button
                    className="mobile-menu-btn"
                    aria-label="Open navigation menu"
                    onClick={() => {
                        document
                            .querySelector(".menu-list")
                            ?.classList.toggle("active");
                    }}
                >
                    <FaBars />
                </button>
            </div>
        </header>
    );
};

export default Header;