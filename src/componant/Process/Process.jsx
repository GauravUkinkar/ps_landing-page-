import React from "react";
import {
  FaMagnifyingGlass,
  FaFileLines,
  FaGear,
  FaRocket,
  FaChevronRight,
} from "react-icons/fa6";

import "./Process.scss";

const Process = () => {
  const processSteps = [
    {
      id: "01",
      title: "Understand\nYour Goals",
      description:
        "We learn about your business, challenges, and objectives.",
      icon: <FaMagnifyingGlass />,
    },
    {
      id: "02",
      title: "Identify\nOpportunities",
      description:
        "We explore suitable strategies and market opportunities.",
      icon: <FaFileLines />,
    },
    {
      id: "03",
      title: "Develop\na Plan",
      description:
        "We outline the recommended approach and next steps.",
      icon: <FaGear />,
    },
    {
      id: "04",
      title: "Move Forward\nTogether",
      description:
        "We collaborate to implement and achieve your goals.",
      icon: <FaRocket />,
    },
  ];

  return (
    <section className="process-parent parent" id="process">
      <div className="process-cont container">

        {/* Section Heading */}
        <div className="process-heading">
          <span>OUR PROCESS</span>

          <h2>A Simple Process. A Clear Direction.</h2>

          <p>
            We work closely with you to understand, plan, and implement
            the right solutions for your business.
          </p>
        </div>

        {/* Process Steps */}
        <div className="process-list">
          {processSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <article className="process-card">

                <div className="process-icon">
                  {step.icon}
                </div>

                <div className="process-content">
                  <span className="process-number">
                    {step.id}
                  </span>

                  <h3>
                    {step.title.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i === 0 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>

                  <p>{step.description}</p>
                </div>

              </article>

              {/* Arrow between cards */}
              {index < processSteps.length - 1 && (
                <div className="process-arrow" aria-hidden="true">
                  <FaChevronRight />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;