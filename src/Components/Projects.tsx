
import weather from "../images/weather1.jpg"
import blog from "../images/blog1.jpg";
import carpool from "../images/carpool1.jpg";
import netflix from "../images/Netflix1.jpg"
import cafe from "../images/cafe1.jpg";
import url from "../images/URL1.jpg";

import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const projects = [
        {
          title: "Netflix Clone",
          description: "Design & Development",
          imgUrl: netflix,
        },
        {
          title: "Blog Web Application",
          description: "Design & Development",
          imgUrl: blog,
        },
        {
          title: "Car Pooling System",
          description: "Design & Development",
          imgUrl:carpool,
        },
        {
          title: "URL Shortener",
          description: "Design & Development",
          imgUrl: url,
        },
        {
          title: "Weather Application",
          description: "Design & Development",
          imgUrl: weather,
        },
        {
          title: "Cafe Management System",
          description: "Design & Development",
          imgUrl: cafe,
        },
      ];
  return (
    <section className="project" id="projects">
        <Container className="project-bx">
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>My enthusiasm for programming extends to various domains. In Java, I've ventured into creating diverse projects, ranging from a carpooling system to a cafe management platform.</p>
                    <p>Moreover, my foray into the MERN (MongoDB, Express.js, React, Node.js) stack has led to the creation of fascinating applications. Notable among these is a Netflix clone and a blogging website.
                    </p>
                    <p>
                    In addition to these, I've built a contact manager application and URL Shortener using EJS, Node.js, Express.js, and MongoDB.
                    </p>
                    <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="first">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Projects</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    
                </Col>
            </Row>
        </Container>
      
    </section>
  )
}
