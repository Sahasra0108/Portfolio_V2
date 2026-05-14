'use client'
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";
import contact from "../assets/img/contact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import address from "../assets/img/icons8-map-marker-64.png";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
useEffect(() => {
  AOS.init({
    duration: 800,
    once: false,    
  });
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const templateParams = {
      firstName: formDetails.firstName,
      lastName: formDetails.lastName,
      email: formDetails.email,
      phone: formDetails.phone,
      message: formDetails.message,
    };

    emailjs
      .send(
        "service_ixribd4",
        "template_8ikxfyt",
        templateParams,
        "F5EdV2_om4p7q4m2e"
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonText("Send");
          setFormDetails(formInitialDetails);
          setStatus({ success: true, message: "Message sent successfully" });
        },
        (error) => {
          console.log(error.text);
          setButtonText("Send");
          setStatus({
            success: false,
            message: "Something went wrong, please try again later.",
          });
        }
      );
  };

  return (
    <div data-aos="fade-up" data-aos-mirror="true">
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} sm={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div className="detailssection">
                    <h2>Get In Touch</h2>

                    <p className="detailsp">
                      <FontAwesomeIcon icon={faEnvelope} className="icon" />{" "}
                      <strong>Email: </strong>sachini.sahasra@gmail.com
                    </p>
                    <p className="detailsp">
                      <FontAwesomeIcon icon={faPhone} className="icon" />{" "}
                      <strong>Phone: </strong> +94 786 779 000
                    </p>
                    <p className="detailsp">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                      <strong>Address :</strong>Bandaragama,Sri Lanka
                    </p>

                    <a
                      href="https://www.linkedin.com/in/sachini-sahasra"
                     
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faLinkedin}  className="socialicon"/>
                    </a>
                    <a
                      href="https://github.com/Sahasra0108"
                       
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub}  className="socialicon" />
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col size={12} md={6} sm={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  );
};
