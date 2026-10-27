import React from "react";
import {
  FaUsers,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";
import "./Hook.scss";

const Hook = () => {
  const stats = [
    {
      number: "91%",
      description: (
        <>
          of businesses win
          <br />
          their clients online
        </>
      ),
      icon: <FaUsers />,
    },
    {
      number: "93%",
      description: (
        <>
          of people judge credibility
          <br />
          by online presence
        </>
      ),
      icon: <FaShieldAlt />,
    },
    {
      number: "97%",
      description: (
        <>
          of customers trust brands
          <br />
          with a strong digital presence
        </>
      ),
      icon: <FaHandshake />,
    },
  ];

  return (
    <section className="hook-section parent" id="hook">
      <div className="hook-container container">
        <h2 className="hook-heading">
          Great business, forgettable website?
          <br />
          That's costing you more than you think.
        </h2>

        <div className="hook-stats">
          {stats.map((item, index) => (
            <div className="hook-stat-card" key={index}>
              <div className="hook-icon">
                {item.icon}
              </div>

              <div className="hook-stat-content">
                <h3>{item.number}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hook-bottom-content">
          <h3>
            We make sure they see the best, most authentic
            version of your business.
          </h3>

          <p>
            Trust becomes investment, investment becomes ROI,
            and we grow with you at every step.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hook;