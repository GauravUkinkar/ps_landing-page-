import React from "react";
import {
  FaBullseye,
  FaUsers,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa6";

import "./Strategy.scss";

const Strategy = () => {
  const strategies = [
    {
      id: 1,
      title: "Tailored Strategies",
      description:
        "Solutions aligned with your business goals.",
      icon: <FaBullseye />,
    },
    {
      id: 2,
      title: "Audience-Focused",
      description:
        "Connect your brand with the right audience.",
      icon: <FaUsers />,
    },
    {
      id: 3,
      title: "Cross-Industry Experience",
      description:
        "A broad perspective across different sectors.",
      icon: <FaLightbulb />,
    },
    {
      id: 4,
      title: "Collaborative Approach",
      description:
        "Clear communication and partnership at every step.",
      icon: <FaHandshake />,
    },
  ];

  return (
    <section className="strategy-parent parent">
      <div className="strategy-cont container">

        {/* Section Heading */}
        <div className="strategy-heading">
          <span>WHY CHOOSE US</span>

          <h2>
            Your Goals. Our Strategic Approach.
          </h2>

          <p>
            We believe effective business solutions begin with understanding
            your needs. Our approach combines industry knowledge,
            customized planning, and collaboration to help you achieve
            meaningful growth.
          </p>
        </div>

        {/* Strategy Features */}
        <div className="strategy-list">
          {strategies.map((item) => (
            <div className="strategy-item" key={item.id}>

              <div className="strategy-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Strategy;