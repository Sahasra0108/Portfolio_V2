import { Container, Row, Col, Button } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projImg1 from "../assets/img/centralsync.jpeg";
import projImg4 from "../assets/img/project1.jpg";
import projImg2 from "../assets/img/Pathwise.jpeg";
import projImg3 from "../assets/img/research.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaExternalLinkAlt, FaMobileAlt } from 'react-icons/fa';
import { MdArrowForward, MdClose } from 'react-icons/md';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  const projects = [
    {
      id: 1,
      title: "CentralSync - Internal Resources Management System",
      shortDesc: "Web & Mobile application for managing company internal resources",
      description: `A comprehensive web and mobile application for managing the internal resources (employee laptops, monitors, keyboards, etc.) of a company. 
      
Key Contributions:
• User Management Section: Implemented features for adding and verifying users, creating passwords, and managing user profiles with editable details.
• User Activity History Section: Developed a comprehensive history log to track and display user activities.
• Issue Reporting Section: Implemented features for users to report and manage issues related to inventory items, facilitating smooth issue resolution and tracking.

Client: Rootcode Labs`,
      imgUrl: projImg1,
      github: {
        frontend: "https://github.com/DileepaAshen2000/centralSyncFrontend.git",
        backend: "https://github.com/MaleeshaVidurath/centralSyncBackend.git",
        mobile: "https://github.com/Sahasra0108/centralSyncMobileApp.git"
      },
      //live: "https://centralsync-demo.com",
      technologies: ["React", "React Native", "Spring Boot", "MySQL", "REST API", "JWT"],
      category: "fullstack",
      client: "Rootcode Labs"
    },
    {
      id: 2,
      title: "Pathwise – AI-Powered Career Coaching Platform",
      shortDesc: "AI-powered career coaching platform for job seekers",
      description: `A web application that helps job seekers identify ideal career paths, analyze skill gaps, and prepare for interviews. The app provides personalized job recommendations, resume optimization, and interactive tools like an AI Interview Coach to support professional growth.

Features:
• AI-powered career path recommendations
• Skill gap analysis
• Resume optimization
• AI Interview Coach with real-time feedback
• Personalized job recommendations`,
      imgUrl: projImg2,
      github: {
        frontend: "https://github.com/Ravindu-Hasanka/pathwise-frontend.git",
        backend: "https://github.com/Ravindu-Hasanka/pathwise-backend.git"
      },
      live: "https://pathwise-demo.com",
      technologies: ["Next.js", "Spring Boot", "MySQL", "AI/ML", "Tailwind CSS"],
      category: "fullstack"
    },
    {
      id: 3,
      title: "Machine Vision-Based Ayurvedic Plant Identification and Health Assessment",
      shortDesc: "Research-based mobile app for Ayurvedic plant identification",
      description: `A research-based mobile application designed to automate the identification and health assessment of morphologically similar Ayurvedic medicinal plants in Sri Lanka using machine vision.

Key Contributions:
• Developed a framework to resolve morphological overlap in similar Ayurvedic plants using single-leaf image recognition
• Designed a system to assess leaf freshness and health based on moisture, fungal damage, and degradation
• Implemented machine learning models for accurate plant classification
• Created a mobile interface for field data collection and analysis`,
      imgUrl: projImg3,
      // github: {
      //   frontend: "https://github.com/ashanmwick/ayurvedic-plant-id",
      //   backend: "https://github.com/ashanmwick/ayurvedic-plant-api"
      // },
      live: "https://ayurvedic-plant-demo.com",
      technologies: ["Python", "Computer Vision"],
      category: "fullstack"
    },
    {
      id: 4,
      title: "Velosense - Advanced Bicycle Ride Tracking and Analysis System",
      shortDesc: "IoT-based cycling performance tracking system",
      description: `A system designed for both professional cyclists and daily exercisers, enabling them to track and analyze crucial performance metrics during their cycling journeys.

Key Contributions:
• Programmed the DHT22 sensor with ESP32 for humidity data collection
• Programmed the OLED display for real-time data visualization
• Developed the web platform backend for data storage and analysis
• Integrated sensor data with cloud platform for remote monitoring
• Implemented real-time performance analytics and ride history tracking`,
      imgUrl: projImg4,
      github: "https://github.com/ashanmwick/velosense.git",
      live: "https://velosense-demo.com",
      technologies: ["ATmega32", "C", "Flask", "HTML/CSS", "Firebase", "ESP32"],
      category: "iot"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="projects-section" style={{ 
      background: 'linear-gradient(135deg, #0a0a2a 0%, #1a1a3a 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 0'
    }}>
      <Container>
        <section className="" id="projects">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px'
          }}>
            Featured Projects
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#c4b5fd',
            maxWidth: '600px',
            margin: '0 auto',
            opacity: 0.9
          }}>
            Innovative solutions spanning web, mobile, and IoT technologies
          </p>
        </motion.div>

        {/* Projects Grid - All Full Width */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <div key={project.id} style={{ marginBottom: '60px' }}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                style={{
                  background: 'rgba(30, 30, 50, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedProject(project)}
              >
                <Row style={{ margin: 0, flexDirection: index % 2 === 1 ? 'row-reverse' : 'row' }}>
                  <Col md={6} style={{ padding: 0 }}>
                    <div style={{ position: 'relative', overflow: 'hidden', height: '100%', minHeight: '400px' }}>
                      <motion.img
                        src={project.imgUrl}
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '400px',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease'
                        }}
                        whileHover={{ scale: 1.05 }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                        padding: '5px 15px',
                        borderRadius: '50px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        color: 'white'
                      }}>
                        {project.category === 'fullstack' ? 'Full Stack' : 'IoT & Embedded'}
                      </div>
                      {project.client && (
                        <div style={{
                          position: 'absolute',
                          bottom: '20px',
                          left: '20px',
                          background: 'rgba(168, 85, 247, 0.9)',
                          backdropFilter: 'blur(5px)',
                          padding: '5px 15px',
                          borderRadius: '50px',
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                          color: 'white'
                        }}>
                          Client: {project.client}
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col md={6} style={{ padding: '40px' }}>
                    <h3 style={{
                      fontSize: '1.8rem',
                      fontWeight: 'bold',
                      marginBottom: '15px',
                      color: '#f3e8ff'
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      color: '#c4b5fd',
                      marginBottom: '20px',
                      lineHeight: '1.6',
                      fontSize: '1rem'
                    }}>
                      {project.shortDesc}
                    </p>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '25px' }}>
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} style={{
                          background: 'rgba(168, 85, 247, 0.2)',
                          padding: '6px 15px',
                          borderRadius: '50px',
                          fontSize: '0.8rem',
                          color: '#c4b5fd'
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                      <Button
                        style={{
                          background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                          border: 'none',
                          padding: '12px 30px',
                          borderRadius: '50px',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        View Details <MdArrowForward />
                      </Button>
                      {/* {project.github && typeof project.github === 'object' ? (
                        <Button
                          href={project.github.frontend}
                          target="_blank"
                          style={{
                            background: 'transparent',
                            border: '2px solid #a855f7',
                            padding: '12px 30px',
                            borderRadius: '50px',
                            fontWeight: '600',
                            color: '#a855f7',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub /> GitHub
                        </Button>
                      ) : (
                        project.github && (
                          <Button
                            href={project.github}
                            target="_blank"
                            style={{
                              background: 'transparent',
                              border: '2px solid #a855f7',
                              padding: '12px 30px',
                              borderRadius: '50px',
                              fontWeight: '600',
                              color: '#a855f7',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px'
                            }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGithub /> GitHub
                          </Button>
                        )
                      )} */}
                    </div>
                  </Col>
                </Row>
              </motion.div>
            </div>
          ))}
        </motion.div>
        </section>
      </Container>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(10px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              overflowY: 'auto'
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
                borderRadius: '30px',
                maxWidth: '900px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(168, 85, 247, 0.3)',
                  border: 'none',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  backdropFilter: 'blur(5px)'
                }}
                onClick={() => setSelectedProject(null)}
              >
                <MdClose size={24} color="white" />
              </Button>

              <img
                src={selectedProject.imgUrl}
                alt={selectedProject.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '30px 30px 0 0'
                }}
              />

              <div style={{ padding: '40px' }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {selectedProject.title}
                </h2>

                {selectedProject.client && (
                  <div style={{
                    background: 'rgba(168, 85, 247, 0.2)',
                    padding: '8px 15px',
                    borderRadius: '10px',
                    marginBottom: '20px',
                    display: 'inline-block'
                  }}>
                    <span style={{ color: '#c4b5fd' }}>
                      Client: {selectedProject.client}
                    </span>
                  </div>
                )}

                <div style={{
                  color: '#c4b5fd',
                  lineHeight: '1.8',
                  marginBottom: '30px',
                  fontSize: '1rem',
                  whiteSpace: 'pre-line'
                }}>
                  {selectedProject.description}
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    marginBottom: '15px',
                    color: '#f3e8ff'
                  }}>
                    Technologies Used
                  </h3>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} style={{
                        background: 'rgba(168, 85, 247, 0.2)',
                        padding: '8px 20px',
                        borderRadius: '50px',
                        color: '#c4b5fd',
                        fontWeight: '500'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  {selectedProject.github && (
                    typeof selectedProject.github === 'object' ? (
                      <>
                        <Button
                          href={selectedProject.github.frontend}
                          target="_blank"
                          style={{
                            background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                            border: 'none',
                            padding: '12px 30px',
                            borderRadius: '50px',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                          }}
                        >
                          <FaGithub /> Frontend Repo
                        </Button>
                        <Button
                          href={selectedProject.github.backend}
                          target="_blank"
                          style={{
                            background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                            border: 'none',
                            padding: '12px 30px',
                            borderRadius: '50px',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                          }}
                        >
                          <FaGithub /> Backend Repo
                        </Button>
                        {selectedProject.github.mobile && (
                          <Button
                            href={selectedProject.github.mobile}
                            target="_blank"
                            style={{
                              background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                              border: 'none',
                              padding: '12px 30px',
                              borderRadius: '50px',
                              fontWeight: '600',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px'
                            }}
                          >
                            <FaMobileAlt /> Mobile Repo
                          </Button>
                        )}
                      </>
                    ) : (
                      <Button
                        href={selectedProject.github}
                        target="_blank"
                        style={{
                          background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                          border: 'none',
                          padding: '12px 30px',
                          borderRadius: '50px',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px'
                        }}
                      >
                        <FaGithub /> View Code
                      </Button>
                    )
                  )}
                  {/* <Button
                    href={selectedProject.live}
                    target="_blank"
                    style={{
                      background: 'transparent',
                      border: '2px solid #a855f7',
                      padding: '12px 30px',
                      borderRadius: '50px',
                      fontWeight: '600',
                      color: '#a855f7',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </Button> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <img className="background-image-right" src={colorSharp2} alt="" style={{
        position: 'absolute',
        right: 0,
        bottom: 0,
        opacity: 0.3,
        pointerEvents: 'none'
      }} />
    </div>
  );
};