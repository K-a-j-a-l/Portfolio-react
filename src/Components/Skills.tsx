import { Nav } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function Skills() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
  return (
    <section className="skill" id="skills">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>My expertise lies in crafting robust and scalable web applications using the MERN (MongoDB, Express.js, React, and Node.js) stack. In addition to my MERN stack skills, I bring a wealth of experience with Java Server Pages (JSPs) and Java Swings with Oracle Database. </p>
                    <Nav variant="pills" defaultActiveKey="first" className="skillNav">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Skills</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Carousel responsive={responsive} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <h5>Frontend Development</h5>
                        </div>
                        <div className="item">
                            <h5>Backend Development</h5>
                        </div>
                        <div className="item">
                            <h5>Database Management</h5>
                        </div>
                        <div className="item">
                            <h5>API Development & Collaboration</h5>
                        </div>
                        <div className="item">
                            <h5>Full Stack Development</h5>
                        </div>
                        <div className="item">
                            <h5>Code Optimization</h5>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
