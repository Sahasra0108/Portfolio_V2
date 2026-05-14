'use client' 
import dynamic from 'next/dynamic';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const NavBar = dynamic(() => import('../components/NavBar').then(m => m.NavBar), { ssr: false });
const Banner = dynamic(() => import('../components/Banner').then(m => m.Banner), { ssr: false });
const About = dynamic(() => import('../components/About').then(m => m.About), { ssr: false });
const Skills = dynamic(() => import('../components/Skills').then(m => m.Skills), { ssr: false });
const Experience = dynamic(() => import('../components/experience').then(m => m.Experience), { ssr: false });
const Projects = dynamic(() => import('../components/Projects').then(m => m.Projects), { ssr: false });
const OpenSource = dynamic(() => import('../components/OpenSource').then(m => m.OpenSource), { ssr: false });
const Education = dynamic(() => import('../components/Education').then(m => m.Education), { ssr: false });
const Hackathons = dynamic(() => import('../components/Hackathons').then(m => m.Hackathons), { ssr: false });
const Contact = dynamic(() => import('../components/Contact').then(m => m.Contact), { ssr: false });

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
      <OpenSource/>
      <Education />
      <Hackathons />
      <Contact />
    </div>
  );
}