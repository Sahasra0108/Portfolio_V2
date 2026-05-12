import React from 'react';
 
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiHtml5Line, RiCss3Line, RiBootstrapLine, RiTailwindCssLine, RiJavascriptLine, RiReactjsLine } from 'react-icons/ri';
import { FaJava, FaPython, FaDatabase, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiSpringboot, SiC, SiCplusplus, SiMongodb, SiScala, SiRstudio, SiOctave, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';

const techStack = [
  { icon: <RiHtml5Line className="display-3 text-orange" />, name: "HTML" },
  { icon: <RiCss3Line className="display-3 text-primary" />, name: "CSS" },
  { icon: <RiBootstrapLine className="display-3 text-purple" />, name: "Bootstrap" },
  { icon: <RiTailwindCssLine className="display-3 text-teal" />, name: "Tailwind CSS" },
  { icon: <RiJavascriptLine className="display-3 text-warning" />, name: "JavaScript" },
  { icon: <RiReactjsLine className="display-3 text-info" />, name: "React" },
  { icon: <FaJava className="display-3 text-danger" />, name: "Java" },
  { icon: <SiSpringboot className="display-3 text-success" />, name: "SpringBoot" },
  { icon: <FaPython className="display-3 text-primary" />, name: "Python" },
  { icon: <SiC className="display-3 text-primary" />, name: "C" },
  //{ icon: <SiCplusplus className="display-3 text-primary" />, name: "C++" },
  { icon: <FaDatabase className="display-3 text-secondary" />, name: "SQL" },
  { icon: <SiMongodb className="display-3 text-success" />, name: "MongoDB" },
  //{ icon: <SiScala className="display-3 text-danger" />, name: "Scala" },
  //{ icon: <SiRstudio className="display-3 text-primary" />, name: "R" },
  //{ icon: <SiOctave className="display-3 text-primary" />, name: "Octave" },
  { icon: <FaGitAlt className="display-3 text-warning" />, name: "Git" },
  { icon: <FaGithub className="display-3 text-light" />, name: "GitHub" },
  { icon: <FaFigma className="display-3 text-purple" />, name: "Figma" },
 // { icon: <SiAdobephotoshop className="display-3 text-primary" />, name: "Adobe Photoshop" },
  //{ icon: <SiAdobeillustrator className="display-3 text-warning" />, name: "Adobe Illustrator" },
];

export const Skills = () => {
  useEffect(() => {
  AOS.init({
    duration: 800,
    once: false,    
  });
}, []);
  return (
    <section className="skill" data-aos="fade-up" data-aos-mirror="true" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>These are some of the languages and technologies I have used in my projects</p>
              <div className="d-flex flex-wrap justify-content-center">
                {techStack.map((tech, index) => (
                  <div key={index} className="p-3 rounded-3 m-2 d-flex flex-column align-items-center transition-transform hover-scale">
                    {tech.icon}
                    <span className="mt-2 text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
};


