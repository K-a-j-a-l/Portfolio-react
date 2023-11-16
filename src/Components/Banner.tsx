import React, {useState ,useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate=["Full Stack Developer", "MERN Stack Developer"]
    const period = 2000;
    useEffect(() => {
        const ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
    }, [text])
    const tick = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(1000);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }
  return (
    <section className='banner' id="home">
      <Container>
        <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my portfolio</span>
                <h1>{'Hi, I\'m Kajal, '} <span className="wrap">{text}</span></h1>
                <p>
                I am a resident of Dehradun, currently enrolled in the Master of Computer Applications (MCA) program at Graphic Era Deemed To Be University, having previously earned a Bachelor's degree in Computer Science. My dedication lies in addressing intricate challenges on platforms such as LeetCode, utilizing programming languages such as Java and C++. My venture into the realms of coding and software development has been a captivating journey, revealing my profound interest and commitment to the field.
                </p>
            </Col>
            <Col xs={12} md={6} xl={5}>
            <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=740&t=st=1700057620~exp=1700058220~hmac=50fea56601885249e7b9af8e3fba8607944fd37b7eea4b9abe633a7698c7d32b" alt="headerimg" />

            </Col>
        </Row>
      </Container>
    </section>
  )
}
