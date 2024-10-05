import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/twp.png";
import projImg2 from "../assets/img/postit.png";
import projImg3 from "../assets/img/yowl.png";
import projImg4 from "../assets/img/nestjs.png";
import projImg5 from "../assets/img/dashboard.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Trello WordPress",
      description: "Vuejs & WordPress REST API",
      link: "https://github.com/Brandon22030/Trello-WordPress",
      imgUrl: projImg1,
    },
    {
      title: "Post it",
      description: "Vuejs",
      link: "https://github.com/Brandon22030/post-it",
      imgUrl: projImg2,
    },
    {
      title: "YOWL",
      description: "Vuejs laravel docker mysql",
      link: "https://github.com/Brandon22030/yowl",
      imgUrl: projImg3,
    },
    {
      title: "My Show time",
      description: "nestjs & mongoDB",
      link: "https://github.com/Brandon22030/myShowTime",
      imgUrl: projImg4,
    },
    {
      title: "My Dashboard",
      description: "Nestjs & Reactjs",
      link: "https://github.com/Brandon22030/myDashboard",
      imgUrl: projImg5,
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Throughout my career as a fullstack developer, I have had
                    the opportunity to work on diverse and dynamic projects that
                    demonstrate my ability to build comprehensive solutions
                    across both frontend and backend technologies. Each project
                    showcases different aspects of my expertise, from designing
                    user-friendly interfaces to implementing robust server-side
                    logic and seamless API integrations. Below are a few
                    selected projects that highlight my skills in web and mobile
                    development, database management, and fullstack application
                    design.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          As a passionate fullstack developer, I've tackled a
                          variety of exciting projects, each challenging me to
                          push the boundaries of my technical expertise. Whether
                          building from scratch or enhancing existing systems, I
                          focus on creating efficient, scalable, and
                          user-centered applications. From mobile apps to
                          full-fledged web platforms, every project has
                          contributed to sharpening my skills in
                          problem-solving, design, and development. Below are
                          some highlights of my work, reflecting my commitment
                          to delivering high-quality, impactful solutions.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="r"></img>
    </section>
  );
}
