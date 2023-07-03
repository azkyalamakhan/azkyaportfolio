import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import df from "../assets/img/certificates/df.png";
import react from "../assets/img/certificates/react.png";
import eh from "../assets/img/certificates/eh.png";
import javascript from "../assets/img/certificates/linkedin-certificate.png";
import hcl from "../assets/img/certificates/hcl.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Certifications = () => {
  const certificates = [
    {
      title: "Foundations of Emerging Technologies",
      imgUrl: df,
    },
    {
      title: "React JS Tutorial",
      imgUrl: react,
    },
    {
      title: "Introduction to Ethical Hacking",
      imgUrl: eh,
    },
    {
      title: "JavaScript for web designers",
      imgUrl: javascript,
    },
    {
      title: "Advance PHP",
      imgUrl: hcl,
    },
  ];

  return (
    <section className="project" id="certificates">
      <h2>Certificates</h2>
      <Container>
        <Row>
          {certificates.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </Row>
      </Container>
      <img className="background-image-right" alt="Certificate" src={colorSharp2}></img>
    </section>
  );
};
