import React from "react";
import {
  FaMagnifyingGlass,
  FaLightbulb,
  FaFileLines,
  FaGear,
  FaChartColumn,
  FaArrowRight,
} from "react-icons/fa6";

import "./Strategy.scss";

const Strategy = () => {
  const strategies = [
    {
      id: "01",
      title: "Discover",
      description:
        "An intro call to understand your goals, followed by research on your industry, audience and region.",
      icon: <FaMagnifyingGlass />,
      theme: "blue",
    },
    {
      id: "02",
      title: "Strategize",
      description:
        "A plan built around your business, not a template.",
      icon: <FaLightbulb />,
      theme: "purple",
    },
    {
      id: "03",
      title: "Propose",
      description:
        "A clear scope with pricing customised to you.",
      icon: <FaFileLines />,
      theme: "teal",
    },
    {
      id: "04",
      title: "Build Together",
      description:
        "We start the next working day with clear KPIs, and nothing goes live without your approval.",
      icon: <FaGear />,
      theme: "purple",
    },
    {
      id: "05",
      title: "Review & Report",
      description:
        "Reviews every 2 months and a transparent report every month.",
      icon: <FaChartColumn />,
      theme: "blue",
    },
  ];

  return (
    <section className="strategy-parent parent" id="strategy">
      <div className="strategy-cont container">
        {/* SECTION HEADING */}
        <div className="strategy-heading">
          <span>HOW WE WORK WITH YOU</span>

          <h2>
            We don't just build your brand.
            <br />
            <span>We grow it with you, step by step.</span>
          </h2>
        </div>

     

        {/* FIVE-STEP PROCESS */}
        <div className="strategy-list">
          {strategies.map((item, index) => (
            <React.Fragment key={item.id}>
              <article className={`strategy-item ${item.theme}`}>
                <div className="strategy-step-top">
                  <div className="strategy-icon">
                    {item.icon}
                  </div>

                  <div className="strategy-step-heading">
                    <span className="strategy-number">
                      {item.id}
                    </span>

                    <h3>{item.title}</h3>
                  </div>
                </div>

                <p className="strategy-description">
                  {item.description}
                </p>

                <span className="strategy-timeline" />
              </article>

              {index < strategies.length - 1 && (
                <div className="strategy-connector" aria-hidden="true">
                  <span />
                  <FaArrowRight />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;