import { Container, Accordion, Row, Col } from "react-bootstrap";

function About() {
    console.log("About component renders");
    return (
        <Container className="d-flex flex-column">
            <h1 className="mb-3 text-center">Hey, I'm Vishakh!</h1>
            <div className="text-center mb-3">
                <a className="footer-url" href="">For my resume, click here.</a>
            </div>

            <Accordion defaultActiveKey="0">
                <Accordion.Item variant="indigo" eventKey="0">
                    <Accordion.Header>About Me</Accordion.Header>
                    <Accordion.Body>
                        <p>I'm a third-year student at the University of California, Irvine, majoring in Computer Science and Engineering.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>My Interests</Accordion.Header>
                    <Accordion.Body>
                        <p>My passion for computer science stems from the ability to turn my ideas into reality. I am especially interested in exploring topics like artificial intelligence, web development, and data science.</p>
                        <p>Outside of computer science, I enjoy designing digital art, reading, and mixed martial arts.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Skills and Technologies</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li><strong>Programming Languages:</strong> ... </li>
                            <li><strong>Tools:</strong> ... </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default About;
