'use client'
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaTrophy, FaMedal, FaUsers, FaCode, FaPaintBrush, FaGlobe } from 'react-icons/fa';
import hackmoral from "../assets/img/hackmoral.png";
import inspiher from "../assets/img/inspiher.png";
import coderush from "../assets/img/coderush.jpg";
import duothan from "../assets/img/Duothan.jpg";
import ieee from "../assets/img/ieee.png";
import idealize from "../assets/img/idealize1.jpg";
import hackelite from "../assets/img/hackelite.png";
import swoc from "../assets/img/swoc.jpg";
import festx from "../assets/img/festx.png";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";

export const Hackathons = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  const hackathons = [
    {
      id: 1,
      title: "Idealize",
      achievement: "Semi Finalist",
      team: "BitBalance",
      organization: "Inter University Designathon",
      year: "2025",
      imgUrl: idealize,
      type: "designathon",
      description: "Inter University Designathon"
    },
    {
      id: 2,
      title: "HackElite 1.0",
      achievement: "Semi Finalist",
      team: "VivalaCodes",
      organization: "Inter University Ideathon",
      year: "2024",
      imgUrl: hackelite,
      type: "ideathon",
      description: "Inter University Ideathon"
    },
    {
      id: 3,
      title: "InspiHer-Tech V2.0",
      achievement: "Semi Finalist",
      team: "VivlaLaCodes",
      organization: "Programming Hackathon",
      year: "2023",
      imgUrl: inspiher,
      type: "hackathon",
      description: "Programming Hackathon"
    },
    {
      id: 4,
      title: "Social Winter of Code",
      achievement: "Participant",
      //team: "Individual",
      organization: "Open Source Hackathon",
      year: "2026",
      imgUrl: swoc,
      type: "opensource",
      description: "Open Source Hackathon"
    },
    {
      id: 5,
      title: "Duothan 3.0",
      achievement: "Participant",
      team: "Ctrl Alt Delete",
      organization: "Inter University Buildathon",
      year: "2023",
      imgUrl: duothan,
      type: "buildathon",
      description: "Inter University Buildathon"
    },
    {
      id: 6,
      title: "Code-Rush",
      achievement: "Participant",
      team: "Vivalacodes",
      organization: "Programming Hackathon",
      year: "2024",
      imgUrl: coderush,
      type: "hackathon",
      description: "Programming Hackathon"
    },
    {
      id: 7,
      title: "FestX 5.0",
      achievement: "Participant",
      //team: "Individual",
      organization: "Inter University Designathon",
      year: "2024",
      imgUrl: festx,
      type: "designathon",
      description: "Inter University Designathon"
    },
    {
      id: 8,
      title: "Hack Moral 6.0",
      achievement: "Participant",
      //team: "Individual",
      organization: "Programming Hackathon",
      year: "2024",
      imgUrl: hackmoral,
      type: "hackathon",
      description: "Programming Hackathon"
    },

    {
      id: 9,
      title: "Idealize",
      achievement: "Participant",
      team: "Ctrl Alt Delete",
      organization: "Inter University Designathon",
      year: "2023",
      imgUrl: idealize,
      type: "designathon",
      description: "Inter University Designathon"
    },
    {
      id: 10,
      title: "IEEE Xtreme 16.0",
      achievement: "Global Participant",
      team: "Vivalacodes",
      organization: "Global Competitive Programming Hackathon",
      year: "2022",
      imgUrl: ieee,
      type: "global",
      description: "Global Competitive Programming Hackathon"
    }
  ];

  const getAchievementColor = (achievement) => {
    if (achievement === "Semi Finalist") {
      return 'linear-gradient(135deg, #f59e0b, #d97706)';
    } else if (achievement === "Global Participant") {
      return 'linear-gradient(135deg, #10b981, #059669)';
    }
    return 'linear-gradient(135deg, #8b5cf6, #6d28d9)';
  };

  const getAchievementIcon = (achievement) => {
    if (achievement === "Semi Finalist") {
      return <FaMedal />;
    } else if (achievement === "Global Participant") {
      return <FaGlobe />;
    }
    return <FaUsers />;
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'designathon':
        return <FaPaintBrush />;
      case 'ideathon':
        return <FaTrophy />;
      case 'opensource':
        return <FaCode />;
      case 'global':
        return <FaGlobe />;
      default:
        return <FaCode />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'designathon':
        return '#ec489a';
      case 'ideathon':
        return '#f59e0b';
      case 'opensource':
        return '#10b981';
      case 'global':
        return '#3b82f6';
      default:
        return '#a855f7';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  // Sort hackathons by year (descending)
  //const sortedHackathons = [...hackathons].sort((a, b) => b.year - a.year);

  return (

    <div className="hackathons-section" data-aos="fade-up" data-aos-mirror="true"
      style={{
        background: 'linear-gradient(135deg, #0a0a2a 0%, #1a1a3a 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '80px 0',
      }}
    >
      <Container>
        <section className="" id="hackathons">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
            data-aos="fade-up"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '20px'
            }}>
              Hackathons & Competitions
            </h2>
            {/* <p style={{
            fontSize: '1.2rem',
            color: '#c4b5fd',
            maxWidth: '600px',
            margin: '0 auto',
            opacity: 0.9
          }}>
            Showcasing my competitive spirit and problem-solving abilities across 10+ events
          </p> */}
          </motion.div>

          {/* Hackathons Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Row>
              {hackathons.map((hackathon) => (
                <Col md={6} lg={4} key={hackathon.id} style={{ marginBottom: '30px' }}>
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
                      height: '100%',
                      position: 'relative'
                    }}
                  >
                    {/* Achievement Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      background: getAchievementColor(hackathon.achievement),
                      padding: '8px 15px',
                      borderRadius: '50px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      color: 'white',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }}>
                      {getAchievementIcon(hackathon.achievement)}
                      <span>{hackathon.achievement}</span>
                    </div>

                    {/* Type Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      background: getTypeColor(hackathon.type),
                      padding: '8px 15px',
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      color: 'white',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }}>
                      {getTypeIcon(hackathon.type)}
                      <span style={{ textTransform: 'capitalize' }}>{hackathon.type}</span>
                    </div>

                    <div style={{ position: 'relative', overflow: 'hidden', height: '250px' }}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'relative',
                          transition: 'transform 0.5s ease'
                        }}
                      >
                        <Image
                          src={hackathon.imgUrl}
                          alt={hackathon.title}
                          fill
                          style={{
                            objectFit: 'cover'
                          }}
                        />
                      </motion.div>
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                        padding: '20px',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white' }}>
                          <FaCalendarAlt />
                          <span>{hackathon.year}</span>
                        </div>
                      </div>
                    </div>

                    <div style={{ padding: '25px' }}>
                      <h3 style={{
                        fontSize: '1.3rem',
                        fontWeight: 'bold',
                        marginBottom: '10px',
                        color: '#f3e8ff'
                      }}>
                        {hackathon.title}
                      </h3>
                      <div style={{
                        background: 'rgba(168, 85, 247, 0.2)',
                        padding: '5px 10px',
                        borderRadius: '10px',
                        marginBottom: '15px',
                        display: 'inline-block'
                      }}>
                        <span style={{ fontSize: '0.85rem', color: '#c4b5fd' }}>
                          {hackathon.organization}
                        </span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '10px'
                      }}>
                        <FaUsers size={14} color="#a855f7" />
                        <p style={{
                          color: '#c4b5fd',
                          marginBottom: '0',
                          lineHeight: '1.6',
                          fontSize: '0.9rem'
                        }}>
                          Team: {hackathon.team}
                        </p>
                      </div>
                      <p style={{
                        color: '#c4b5fd',
                        marginBottom: '0',
                        lineHeight: '1.6',
                        fontSize: '0.85rem',
                        opacity: 0.8
                      }}>
                        {hackathon.description}
                      </p>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </section>
      </Container>

      {/* Background Decoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, rgba(168,85,247,0) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, rgba(124,58,237,0) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
    </div>
  );
};