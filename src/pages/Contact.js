import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Section from "../components/Section";

function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <Section>
            <h2>Contact</h2>
            <p>
              GitHub Profile<br />
              <a href="https://github.com/Winyumi" target="_blank" rel="noopener noreferrer">
                https://github.com/Winyumi
              </a>
            </p>
            <p>
              LinkedIn Profile<br />
              <a href="https://www.linkedin.com/in/winson-quon-8a657913b/" target="_blank" rel="noopener noreferrer">
                https://www.linkedin.com/in/winson-quon-8a657913b/
              </a>
            </p>
            <hr />
            <p>
              <Link to="assets/etc/Winson Quon - Resume 2019-11-16.pdf" target="_blank">
                View my resume
              </Link>
            </p>
          </Section>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
