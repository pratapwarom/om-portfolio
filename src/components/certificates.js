import React from "react";
import "./Certificates.css";

function Certificates() {
  return (
    <section className="certificates" id="certificates" data-aos="fade-up">
      <h2 className="section-title">My Certificates</h2>
      <p className="section-subtitle">
        A few certifications and achievements I’ve earned during my learning journey.
      </p>

      <div className="certificate-grid">

        {/* Coursera Certificate */}
        <div className="certificate-card" data-aos="zoom-in" data-aos-delay="100">
          <div className="certificate-thumb"></div>
          <h3>Backend Development & API Creation</h3>
          <p>
            Successfully completed an online course authorized by <strong>Packt</strong> and offered through{" "}
            <strong>Coursera</strong> on backend development and API creation.
          </p>
          <a
            href="Coursera certificate backend development and api creation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="view-btn"
          >
            👁️ View Certificate
          </a>
        </div>

        {/* Deloitte Certificate */}
        <div className="certificate-card" data-aos="zoom-in" data-aos-delay="200">
          <div className="certificate-thumb"></div>
          <h3>Data Analytics Job Simulation</h3>
          <p>
            Completed the <strong>Deloitte</strong> virtual internship in Data Analytics via{" "}
            <strong>The Forage</strong>, gaining insights into forensic technology and business analysis.
          </p>
          <a
            href="deloitte certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="view-btn"
          >
            👁️ View Certificate
          </a>
        </div>

        {/* Python Certificate */}
        <div className="certificate-card" data-aos="zoom-in" data-aos-delay="300">
          <div className="certificate-thumb"></div>
          <h3>Python 3.4.3 Training</h3>
          <p>
            Successfully completed <strong>Python 3.4.3</strong> training conducted by{" "}
            <strong>IIT Bombay</strong> under the Spoken Tutorial Project, organized at{" "}
            <strong>MIT Art Design & Technology University, Pune</strong>.
          </p>
          <a
            href="OM-PRATAPWAR-Participant-Certificate (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="view-btn"
          >
            👁️ View Certificate
          </a>
        </div>

      </div>
    </section>
  );
}

export default Certificates;
