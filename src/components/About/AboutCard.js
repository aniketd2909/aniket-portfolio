import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am a Master's student in
            <span className="purple"> Computer Science</span> @Florida Tech.
            <br />I have worked as a{" "}
            <span className="purple">Software Engineer </span>
            at LTIMindtree f.k.a Mindtree Limited.
            <br />
            Currently I am working as a{" "}
            <span className="purple">Research Assistant </span>
            @Florida Tech.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
