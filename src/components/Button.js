import { Button } from 'react-bootstrap';
import "./styles.css";

const ButtonInCard = ({ link, text }) => {
  return (
    <div className="proj-btn">
      <a
        href={link}
        className="btn"
        style={{
          backgroundColor: '#ee83e5',
          color: '#fff',
          border: 'none',
          borderRadius: '0.25rem',
          padding: '0.5rem 1rem',
          textDecoration: 'none',
          display: 'inline-block',
          textAlign: 'center',
        }}
      >
        View Project
      </a>
    </div>
  );
};

export default ButtonInCard;
