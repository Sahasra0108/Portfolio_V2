'use client'
import React, { useEffect } from "react";
import balika from "../assets/img/balika.jpeg";
import uom from "../assets/img/uom.jpeg";
import { Container, Row, Col } from "react-bootstrap";
import education from "../assets/img/education.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export const Education = () => {
  useEffect(() => {
  AOS.init({
    duration: 800,
    once: false,   
  });
}, []);

  return (
    <div data-aos="fade-up" data-aos-mirror="true" >
    <section className="" id="education">
      <Container>
        <Row className="align-items-center">
          <h2 className="h21">Education</h2>
          <Col size={12} lg={6} md={6} sm={6}>
            <Image src={education} className="img1" alt="Girl with book" />
          </Col>
          <Col size={12} lg={6} md={12} sm={12}>
            <div className="padding">
              <Container className="py-5">
                <div data-aos="fade-left">
                  <ul className="timeline-with-icons">
                    <li className="timeline-item mb-5">
                      <span className="timeline-icon">
                        <Image
                          src={uom}
                          alt="Icon"
                          style={{ width: "60px", height: "60px" }}
                        />
                      </span>
                      <h5 className="fw-bold">
                        {" "}
                        B.Sc.(Hons.) in Information Technology
                      </h5>
                      <p className="light-text">
                        University of Moratuwa
                      </p>
                      <p>2022-Present</p>
                    </li>
                    <li className="timeline-item mb-5">
                      <span className="timeline-icon">
                        <Image
                          src={balika}
                          alt="Icon"
                          style={{ width: "60px", height: "60px" }}
                        />
                      </span>
                      <h5 className="fw-bold">
                        G.C.E Advanced Level Examination
                      </h5>
                      <p>
                        Panadura Balika Maha Vidyalaya
                      </p>
                      <p >2020</p>
                      <p >Z-score:1.65</p>
                    </li>
                    <li className="timeline-item mb-5">
                      <span className="timeline-icon">
                        <Image
                          src={balika}
                          alt="Icon"
                          style={{ width: "60px", height: "60px" }}
                        />
                      </span>
                      <h5 className="fw-bold">
                        {" "}
                        G.C.E Ordinary Level Examination
                      </h5>
                      <p>
                        Panadura Balika Maha Vidyalaya
                      </p>
                      <p>2016</p>
                      <p>9 As</p>
                    </li>
                  </ul>
                </div>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  );
};
