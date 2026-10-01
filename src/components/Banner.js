'use client'
import { useEffect, useRef, useState } from "react";
import { FaLaptopCode } from "react-icons/fa6";
import { IoIosGitMerge } from "react-icons/io";
import { RiRobot3Line } from "react-icons/ri";
import { Space_Grotesk } from "next/font/google";
 
const nameFont = Space_Grotesk({ subsets: ["latin"], weight: ["700"], display: "swap" });


const SERVICES = [
  {
    title: "Full-stack development",
    text: "Crafting modern, scalable web experiences.",
    icon: FaLaptopCode,
  },
  {
    title: "AI engineering",
    text: "Building intelligent, AI-powered solutions.",
    icon: RiRobot3Line,
  },
  {
    title: "Open source",
    text: "Learning, building, and contributing.",
    icon: IoIosGitMerge,
  },
];

const FACTS = [
  { value: "WSO2", label: "Internship" },
  { value: "UoM", label: "BSc (Hons) in IT" },
  { value: "9+", label: "Projects & open source" },
];

export const Banner = () => {
  const videoRef = useRef(null);
  const [showBubble, setShowBubble] = useState(false);

  const handleTimeUpdate = (e) => {
    const t = e.currentTarget.currentTime;
    setShowBubble(t > 1.0 && t < 4.0);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  const replayWave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => { });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <header className="hero-head">
          <h1 className={`hero-name ${nameFont.className}`}>Sachini Sahasra</h1>
          <div className="hero-rule" />
        </header>

        <div className="hero-grid">
          <div className="hero-col hero-services">
            <h2>What I do</h2>
            {SERVICES.map((s) => (
              <div className="hero-service" key={s.title}>
                <div className="hero-service-head">
                  <span className="hero-icon" aria-hidden="true">
                    <s.icon size={22} color="#C4B5FD" />
                  </span>
                  <h3>{s.title}</h3>
                </div>
                <p>{s.text}</p>
              </div>
            ))}
          </div>

          <div className="hero-photo">
            <div className="hero-avatar-wrap">
              <div className="hero-avatar">
                <video
                  ref={videoRef}
                  poster="/avatar-poster.jpg"
                  autoPlay muted playsInline preload="auto"
                  onMouseEnter={replayWave}
                  onClick={replayWave}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={() => setShowBubble(false)}
                  aria-label="Sachini's 3D avatar waving hello"
                >
                  <source src="/avatar-wave.webm" type="video/webm" />
                  <source src="/avatar-wave.mp4" type="video/mp4" />
                </video>
              </div>

              <div className={`hero-bubble ${showBubble ? "is-visible" : ""}`} aria-hidden="true">
               Hey! Welcome in
              </div>
            </div>
          </div>

          <div className="hero-col hero-about">
            <h2>Software &amp; AI Engineer </h2>
            <p>IT graduate from the University of Moratuwa, passionate about full-stack development and AI engineering.</p>
            <div className="hero-actions">
              <a className="hero-cta" href="#connect">Hire me</a>
              <a className="hero-link" href="#projects">See my work</a>
            </div>
            <div className="hero-facts">
              {FACTS.map((f) => (
                <div key={f.label}>
                  <div className="hero-fact-value">{f.value}</div>
                  <div className="hero-fact-label">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};