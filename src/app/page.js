'use client'

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Experience } from "../components/experience";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { About } from "../components/About";
import { Education } from "../components/Education";
import { Hackathons } from "../components/Hackathons";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2200 });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Hackathons />
      <Contact />
    </div>
  );
}