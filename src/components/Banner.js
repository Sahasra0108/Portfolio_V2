'use client'
import { useState, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300);
  const [index, setIndex] = useState(1);
  const [showSpline, setShowSpline] = useState(false); // ✅ ADD THIS

  const toRotate = ["Hi! I'm Sachini Sahasra"];
  const period = 2000;

  useEffect(() => {
    setDelta(300 - Math.random() * 100);
  }, []);

  // ✅ Load Spline after 2 seconds — page loads fast first
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpline(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  }, [loopNum, isDeleting, text, toRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <div style={{ textAlign: "center" }}>
                <h2>
                  <span className="txt-rotate" data-period="1000">
                    <span className="wrap">{text}</span>
                  </span>
                </h2>
              </div>
              <h1 className="animated-line-text">
                Full Stack Developer{" "}<br />
                UI & UX Designer.
              </h1>
            </div>
          )}
        </TrackVisibility>

        {/* ✅ Spline loads after 2 seconds */}
        <div style={{
          width: "100%",
          height: "600px",
          position: "relative"
        }}>
          {showSpline ? (
            // ✅ Show actual Spline
            <spline-viewer
              url="https://prod.spline.design/23OwDtGUhdCNwFS9/scene.splinecode"
              style={{ width: "100%", height: "100%", display: "block" }}
            />
          ) : (
            // ✅ Show placeholder while waiting
            <div style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(168, 85, 247, 0.05)",
              borderRadius: "20px",
              border: "1px solid rgba(168, 85, 247, 0.1)"
            }}>
              <div style={{
                textAlign: "center",
                color: "#a855f7",
                opacity: 0.6
              }}>
                <div style={{
                  width: "50px",
                  height: "50px",
                  border: "3px solid #a855f7",
                  borderTop: "3px solid transparent",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                  margin: "0 auto 15px"
                }} />
                <p style={{ fontSize: "0.9rem" }}>Loading 3D Scene...</p>
              </div>
            </div>
          )}
        </div>
      </Container>

      <div
        className="description-panel-wrapper"
        data-aos="zoom-in"
        data-aos-delay="1500"
        data-aos-duration="2500"
        data-aos-offset="200"
      >
        <div className="description-panel">
          <div className="description">
            <p
              data-aos="fade-up"
              data-aos-delay="2000"
              data-aos-duration="600"
              data-aos-offset="200"
              className="text"
            >
              Dedicated and enthusiastic IT undergraduate passionate about
              technology, design, innovation, and problem-solving.
            </p>
            <br />
            <p
              data-aos="fade-up"
              data-aos-delay="2400"
              data-aos-duration="900"
              className="text"
            >
              Actively involved in projects, hackathons, and university tech
              clubs to continually expand my skills and creativity.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Spinner animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};