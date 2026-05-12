import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import girl from "../assets/img/girl.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Hi! I'm Sachini Sahasra"
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
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
  };

  return (
    <section className="banner" id="home">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate__animated animate__fadeIn" : ""}
            >
              {/* <h2>Welcome to my Portfolio</h2> */}

              <center>
                <h2>
                  {" "}
                  <span
                    className="txt-rotate"
                    dataPeriod="1000"

                  >
                    <span className="wrap">{text}</span>
                  </span>
                </h2>
              </center>

              <h1 className="animated-line-text">
                Full Stack Developer{" "} <br />
                UI & UX Designer.
              </h1>
              {/* <p>
                Dedicated and enthusiastic IT undergraduate student passionate
                about technology and problem-solving. Engaging in projects,
                internships, and extracurricular activities, hackathons, and
                university tech clubs.
              </p> */}
            </div>
          )}
        </TrackVisibility>
        <spline-viewer
          url="https://prod.spline.design/23OwDtGUhdCNwFS9/scene.splinecode"
          style={{ paddingLeft: "50px" }}
        ></spline-viewer>



      </Container>
      <div className="description-panel-wrapper" data-aos="zoom-in"   data-aos-delay="1500"
        data-aos-duration="2500"  data-aos-offset="200">
        <div className="description-panel">
          <div className="description">
            <p
              data-aos="fade-up"
              data-aos-delay="2000"
              data-aos-duration="600"
              data-aos-offset="200"
              className="text">
              Dedicated and enthusiastic IT undergraduate passionate about technology, design, innovation,
              and problem-solving.</p><br />
              <p
              data-aos="fade-up"
              data-aos-delay="2400"
              data-aos-duration="900"
              className="text">
              Actively involved in projects, hackathons, and university tech clubs to continually expand my skills and creativity.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};




