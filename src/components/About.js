import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import sachiniImg from "../assets/img/ID.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {

  return (
    <div data-aos="fade-up" data-aos-mirror="true">
      <section className="project" id="about">
        <Container>
          <Row className="align-items-center justify-content-center py-4" style={{ minHeight: '100vh' }}>
            <Col md={7} className="d-flex flex-column align-items-center justify-content-center">
              <h2>Hello!</h2>
              <div className="w-100 ">
                <div className="text-gray-500 sm-text-lg dark:text-gray-400">
                  <p className="mb-4 text-justify">
                    I’m Sachini, an undergraduate in Information Technology at the University of Moratuwa, with a strong interest in Full-Stack Development and UI/UX Design. My goal is to stay at the forefront of technological advancements while continuously enhancing my skills in software development, web technologies, and user-centered design.
                  </p>
                  <p className="mb-4 text-justify">
                   I enjoy tackling challenges that drive continuous learning and growth, especially in fast-evolving environments. I am passionate about building complete digital solutions by combining intuitive UI/UX design with efficient, scalable full-stack development to create applications that are both functional and user-friendly. With strong collaboration and communication skills, I work effectively in teams to achieve shared goals while staying up to date with emerging technologies, tools, and design trends to continuously grow as a developer and designer.
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  {/* Placeholder for download CV button */}
                </div>
              </div>
            </Col>
            <Col md={5} className="d-flex flex-column align-items-center justify-content-center py-4 overflow-visible">
              <div
                className="id-card-wrapper"
                data-aos="fade-left"
                data-aos-duration="2500"
              >
                <div className="id-card-inner">
                <img src={sachiniImg} alt="mockup" className="img-fluid badge-img swing-in-element" />
                </div>
              </div>
            </Col>
          </Row>

        </Container>
        <img className="background-image-right" src={colorSharp2} alt="background" />
      </section>
    </div>
  );

};
