import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Section from "../components/Section";

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Section>
            <h2>About Me</h2>
            <img src="assets/images/portrait.jpg" alt="My Portrait" width="180" className="float-sm-left" />
            <p>
              My name is Winson Quon. Once you get to know me, feel free to just call me Win. I'm a graphic and web designer, digital artist, and now an aspiring full stack web developer.
            </p>
            <p>
              I studied Graphic Design at Seneca College. Lately, I have been gradually mastering the power of Excel throughout my current career. I have always been interested in coding in one way or another since my high school days. My goal is to apply my learnings to my current job and when time allows, create a fun interactive website for my community of artists and hobbyists.
            </p>
            <p>
              Speaking of hobbies, I enjoy drawing, gaming, and occasionally composing music. I'm no professional by any means&mdash;just following my feelings.
            </p>
          </Section>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
