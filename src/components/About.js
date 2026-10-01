'use client'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Image from "next/image";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import sachiniImg from "../assets/img/ID_Card.png";
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
                     I’m Sachini, a Full Stack Developer and a recent graduate in Information Technology from the University of Moratuwa. I build and ship web applications end to end, working across Java and Spring Boot, Python, React, Next.js, and modern databases.
                  </p>
                  <p className="mb-4 text-justify">
                  I’m particularly interested in building practical software that combines solid engineering with intelligent features. My experience includes developing full-stack applications, REST APIs, AI-powered features using LLM APIs and function calling, and machine learning solutions. I also enjoy contributing to open-source projects and exploring new technologies through hands-on projects.
                  I’m driven by curiosity, continuous learning, and the challenge of turning ideas into reliable, user-friendly digital products.
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
                <Image src={sachiniImg} alt="mockup" className="img-fluid badge-img swing-in-element" />
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


