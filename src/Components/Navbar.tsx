import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import "../style.css";
import logo from "../images/logo.jpg";

function Navbar() {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <BootstrapNavbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <BootstrapNavbar.Brand href="#home">
                    <img src={logo} alt="logo" />
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggle-icon'><i className="fa-solid fa-bars"></i></span>
                </BootstrapNavbar.Toggle>
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? 'navbar-link active' : 'navbar-link'} onClick={() => setActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? 'navbar-link active' : 'navbar-link'} onClick={() => setActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === "projects" ? 'navbar-link active' : 'navbar-link'} onClick={() => setActiveLink("projects")}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="icons">
                            <a href="https://github.com/K-a-j-a-l"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/kajal-mittal-9b1a10214/"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/k.a.j.a.l.m.i.t.t.a.l/"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </span>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}

export default Navbar;
