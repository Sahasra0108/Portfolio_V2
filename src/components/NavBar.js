'use client'
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          {/* <img src={logo} alt="Logo" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
             <Nav.Link href="#opensource" className={activeLink === 'opensource' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('opensource')}>Contributions</Nav.Link>
            <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
            <Nav.Link href="#hackathons" className={activeLink === 'hackathons' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('hackathons')}>Hackathons</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <a href="#connect">
              <button className="vvd"><span>Hire Me</span></button>
            </a>
            <a href="/Sachini_Sahasra_Software_Engineer.pdf" target="_blank" rel="noopener noreferrer">
              <button className="vvd"><span>Get CV</span></button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}