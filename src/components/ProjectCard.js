import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={link}>
        <div className="proj-imgbx" style={{height: "90%", marginBottom: 10}}>
          <img src={imgUrl} style={{width: "100%", height: "100%"}} />
          <div className="proj-txtx" style={{color: "white"}}>
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
