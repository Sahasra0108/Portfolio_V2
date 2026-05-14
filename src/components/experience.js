'use client'
import React from 'react';
import Image from "next/image";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import img1 from '../assets/img/experience1.jpeg';
import img2 from '../assets/img/experience2.jpeg';
import img3 from '../assets/img/experience3.jpeg';
import img4 from '../assets/img/experience4.jpeg';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export const Experience = () => {
    useEffect(() => {
  AOS.init({
    duration: 800,
    once: false,    
  });
}, []);
    return (
        <Container>
            <section className="" id="experience">
            <div className="experience" data-aos="fade-up" data-aos-mirror="true">
                <h2>Experience</h2>
                <section className="internship-container">
                    <div className="experience-content-wrapper">
                        <div className="experience-text-box">
                            <div className="heading-sticker">
                                <h3>Software Engineering Intern</h3>
                                <h4>Full Stack Devloper</h4>
                            </div>
                            <p className='para'> WSO2 · February 2025 - July 2025</p>
                            <p>
                                Completed a 6-month internship at WSO2 with the Internal Apps team, 
                                contributing to the MIS Flash Report application for the Finance team. 
                                Gained hands-on experience in enterprise integrations, financial data processing, 
                                scalable application development, and team collaboration.
                            </p>
                        </div>
                    </div>

                    {/* Scattered Images */}
                    <div className="image-collage">
                        <Image src={img1} className="photo p1" alt="Image1" />
                        <Image src={img2} className="photo p2" alt="Image2"/>
                        <Image src={img3} className="photo p3" alt="Image3" />
                        <Image src={img4} className="photo p4" alt="Image3" />
                        
                    </div>
                </section>
            </div>
            </section>
        </Container>


    );
};