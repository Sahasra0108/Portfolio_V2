import { Col } from "react-bootstrap";
import ButtonInCard from "./Button";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <div className="proj-img">
        <img src={imgUrl} className="uniform-img" />
      </div>
        <div className="proj-txtx">
          <span>{description}</span>
        <ButtonInCard link={link} text="View Project" />
        </div>
      </div>
      <h4 className="projecttitle">{title}</h4>
    </Col>
  );
};
