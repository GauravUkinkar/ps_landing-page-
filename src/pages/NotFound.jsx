import React from "react";
import { Link } from "react-router-dom";
import {  FaHouse } from "react-icons/fa6";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <section className="not-found-page">
      <div className="not-found-content">
        <span className="not-found-label">PANDOZA SOLUTIONS</span>

        <h1>404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you're looking for may have been moved,
          deleted, or doesn't exist. Let's get you back on track.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="not-found-home-btn">
            <FaHouse />
            Back to Home
          </Link>

         
        </div>

      
      </div>

      <div className="not-found-decoration">
        <span className="decoration-circle circle-one"></span>
        <span className="decoration-circle circle-two"></span>
        <span className="decoration-circle circle-three"></span>
      </div>
    </section>
  );
};

export default NotFound;