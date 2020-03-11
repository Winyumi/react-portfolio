import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Section from "../components/Section";

function Portfolio() {
  return (
    <Container>
      <Row>
        <Col>
          <Section>
            <h2>Portfolio</h2>

            <h3>Projects</h3>
            <Row>
              <Col settings="col-sm-6 col-md-4 col-lg-3">
                <a href="https://github.com/jondam1985/party-buddy" target="_blank" rel="noopener noreferrer">
                  <figure>
                    <img src="assets/images/portfolio/party-buddy.jpg" alt="Party Buddy" />
                    <figcaption>Party Buddy</figcaption>
                  </figure>
                </a>
              </Col>
              <Col settings="col-sm-6 col-md-4 col-lg-3">
                <a href="https://github.com/Winyumi/quiz-journey" target="_blank" rel="noopener noreferrer">
                  <figure>
                    <img src="assets/images/portfolio/quiz-journey.jpg" alt="Quiz Journey" />
                    <figcaption>Quiz Journey</figcaption>
                  </figure>
                </a>
              </Col>
            </Row>

            <h3>Assignments</h3>
            <Row>
              <Col settings="col-sm-6 col-md-4 col-lg-3">
                <a href="https://github.com/Winyumi/day-planner" target="_blank" rel="noopener noreferrer">
                  <figure>
                    <img src="assets/images/portfolio/day-planner.jpg" alt="Day Planner" />
                    <figcaption>Day Planner</figcaption>
                  </figure>
                </a>
              </Col>
              <Col settings="col-sm-6 col-md-4 col-lg-3">
                <a href="https://github.com/Winyumi/weather-dashboard" target="_blank" rel="noopener noreferrer">
                  <figure>
                    <img src="assets/images/portfolio/weather-dashboard.jpg" alt="Weather Dashboard" />
                    <figcaption>Weather Dashboard</figcaption>
                  </figure>
                </a>
              </Col>
              <Col settings="col-sm-6 col-md-4 col-lg-3">
                <a href="https://github.com/Winyumi/team-profile-generator" target="_blank" rel="noopener noreferrer">
                  <figure>
                    <img src="assets/images/portfolio/team-profile-generator.jpg" alt="Team Profile Generator" />
                    <figcaption>Team Profile Generator</figcaption>
                  </figure>
                </a>
              </Col>
              <Col settings="col-sm-6 col-md-4 col-lg-3">
                <a href="https://github.com/Winyumi/burger-logger" target="_blank" rel="noopener noreferrer">
                  <figure>
                    <img src="assets/images/portfolio/burger-logger.jpg" alt="Burger Logger" />
                    <figcaption>Burger Logger</figcaption>
                  </figure>
                </a>
              </Col>
            </Row>

          </Section>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
