'use client'
import { Container, Row, Col, Button } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import wgerImg from "../assets/img/Wager.png";
import nutrivigilImg from "../assets/img/Nutrivigil.png";
import groqtalesImg from "../assets/img/GroqTales.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { MdArrowForward, MdClose } from 'react-icons/md';
import Image from "next/image";

export const OpenSource = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  const contributions = [
    {
      id: 1,
      title: "Wger – Open Source Workout Manager",
      shortDesc: "Unified frontend exercise search UI with ingredients UI in React",
      description: `Wger is a free, open source web application that helps users manage personal workouts, weight, and diet plans. It is widely used by fitness enthusiasts and developers worldwide.

My Contributions:
- Unified the frontend exercise search UI with the ingredients UI, creating a consistent and intuitive search experience across the application.
- Implemented collapsible search options to reduce visual clutter and improve usability.
- Added local storage persistence so user search preferences are saved between sessions.
- Implemented language filtering allowing users to search exercises by their preferred language.
- Added category filtering enabling users to narrow down exercises by muscle group or type.
- Implemented exact name match search for faster, more precise results.

Impact:
This contribution improved the overall search experience for thousands of Wger users by making the UI consistent, faster, and more user-friendly.`,
      imgUrl: wgerImg,
      github: "https://github.com/wger-project/react/pull/1235",
      //prLink: "https://github.com/wger-project/react/pull/1235",
      technologies: ["React"],
      category: "fitness",
      type: "Feature Contributor",
      date: "2026",
      //owner: "wger-project",
      //repo: "react"
    },
    {
      id: 2,
      title: "Nutrivigil – AI-Powered Nutrition Analysis",
      shortDesc: "Built voice input pipeline and AI-driven healthy swaps feature",
      description: `Nutrivigil is an AI-powered nutrition analysis web application that helps users track, understand, and improve their dietary habits through intelligent analysis and recommendations.

My Contributions:
- Built a complete voice input pipeline using the Web Speech API, enabling users to log meals and ask health queries entirely by voice.
- Implemented live transcription so users can see their speech converted to text in real time.
- Added auto-silence detection to automatically stop recording when the user finishes speaking, creating a seamless hands-free experience.
- Implemented multilingual support allowing users from different language backgrounds to interact with the app in their native language.
- Enabled AI voice responses so the app can speak back health insights and dietary advice to the user.
- Developed the AI-driven Healthy Swaps feature which analyzes a user's dietary verdict and suggests safe, healthier food alternatives automatically.

Impact:
These contributions significantly improved accessibility and usability of Nutrivigil, making nutrition tracking possible for users who prefer voice interaction or have difficulty typing.`,
      imgUrl: nutrivigilImg,
      github: "https://github.com/Gagan021-5/Nutrivigil.git",
      //prLink: "https://github.com/Gagan021-5/Nutrivigil.git",
      technologies: ["React", "Node.js", "Web Speech API", "AI/ML"],
      category: "health",
      type: "Feature Contributor",
      date: "2025",
      //owner: "Gagan021-5",
      //repo: "Nutrivigil"
    },
    {
      id: 3,
      title: "GroqTales – AI-Powered NFT Story Generator on Monad",
      shortDesc: "Migrated profile system to dynamic Web3 architecture with MongoDB",
      description: `GroqTales is an AI-powered NFT story generator built on the Monad blockchain that creates unique, AI-generated stories and mints them as NFTs, combining creative AI with Web3 technology.

My Contributions:
- Migrated the entire profile system from static hardcoded mock data to a fully dynamic, database-driven architecture.
- Integrated MongoDB as the persistent data store for real-time user statistics, activity history, and profile information.
- Implemented wallet-based identity using Monad wallet addresses as the unique identifier for each user, replacing traditional username/password authentication.
- Built dynamic user profile pages that display real-time data including stories created, NFTs minted, and wallet activity.
- Ensured seamless connection between the Web3 wallet layer and the MongoDB data layer for a consistent user experience.

Impact:
This migration transformed GroqTales from a static demo into a production-ready Web3 application with real persistent user data, enabling the platform to scale to real users with genuine blockchain identity.`,
      imgUrl: groqtalesImg,
      github: "https://github.com/IndieHub25/GroqTales/pull/276",
      //prLink: "https://github.com/IndieHub25/GroqTales/pull/276",
      technologies: ["Node.js", "MongoDB" ],
      category: "web3",
      type: "Feature Contributor",
      date: "2026",
      //owner: "IndieHub25",
      //repo: "GroqTales"
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
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="projects-section" style={{
      background: 'linear-gradient(135deg, #0d0d1a 0%, #1a0a2e 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 0'
    }}>
      <Container>
        <section id="opensource">

          {/* Header */}
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
              Open Source Contributions
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#c4b5fd',
              maxWidth: '600px',
              margin: '0 auto',
              opacity: 0.9
            }}>
              Giving back to the community through meaningful open source work
            </p>
          </motion.div>

          {/* Cards Grid — 3 columns like Projects but smaller */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Row className="justify-content-center">
              {contributions.map((contribution, index) => (
                <Col md={4} key={contribution.id} style={{ marginBottom: '30px' }}>
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
                      cursor: 'pointer',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    onClick={() => setSelectedProject(contribution)}
                  >
                    {/* Image area — same as Projects.js */}
                    <div style={{
                      position: 'relative',
                      overflow: 'hidden',
                      height: '220px'
                    }}>
                      <Image
                        src={contribution.imgUrl}
                        alt={contribution.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      {/* Type badge */}
                      <div style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                        padding: '4px 12px',
                        borderRadius: '50px',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        color: 'white',
                        zIndex: 1
                      }}>
                        {contribution.type}
                      </div>
                      {/* Repo badge */}
                      
                    </div>

                    {/* Content */}
                    <div style={{
                      padding: '25px',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        marginBottom: '10px',
                        color: '#f3e8ff',
                        lineHeight: '1.4'
                      }}>
                        {contribution.title}
                      </h3>
                       

                      {/* Tech tags */}
                      <div style={{
                        display: 'flex',
                        gap: '8px',
                        flexWrap: 'wrap',
                        marginBottom: '20px'
                      }}>
                        {contribution.technologies.map((tech, idx) => (
                          <span key={idx} style={{
                            background: 'rgba(168, 85, 247, 0.2)',
                            padding: '4px 12px',
                            borderRadius: '50px',
                            fontSize: '0.75rem',
                            color: '#c4b5fd'
                          }}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <Button
                          style={{
                            background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '50px',
                            fontWeight: '600',
                            fontSize: '0.85rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(contribution);
                          }}
                        >
                          View Details <MdArrowForward />
                        </Button>
                        <Button
                          href={contribution.github}
                          target="_blank"
                          style={{
                            background: 'transparent',
                            border: '2px solid #a855f7',
                            padding: '10px 20px',
                            borderRadius: '50px',
                            fontWeight: '600',
                            fontSize: '0.85rem',
                            color: '#a855f7',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub /> GitHub
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>

           
        </section>
      </Container>

      {/* Modal — identical to Projects.js */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
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
              {/* Close Button */}
              <Button
                style={{
                  position: 'absolute',
                  top: '20px', right: '20px',
                  background: 'rgba(168, 85, 247, 0.3)',
                  border: 'none',
                  width: '40px', height: '40px',
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

              {/* Modal Image */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '400px'
              }}>
                <Image
                  src={selectedProject.imgUrl}
                  alt={selectedProject.title}
                  fill
                  style={{
                    objectFit: 'contain',
                    borderRadius: '30px 30px 0 0'
                  }}
                />
              </div>

              {/* Modal Content */}
              <div style={{ padding: '40px' }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {selectedProject.title}
                </h2>

               
                {/* Description */}
                <div style={{
                  color: '#c4b5fd',
                  lineHeight: '1.8',
                  marginBottom: '30px',
                  fontSize: '1rem',
                  whiteSpace: 'pre-line'
                }}>
                  {selectedProject.description}
                </div>

                {/* Technologies */}
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

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
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
                    <FaGithub /> View on GitHub
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        right: 0, bottom: 0,
        opacity: 0.3,
        pointerEvents: 'none',
        width: '500px', height: '500px'
      }}>
        <Image
          src={colorSharp2}
          alt=""
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
};