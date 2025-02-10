import { Container, Image, Row, Col} from "react-bootstrap";

function About() {
    console.log("About component renders");
    return (
        <Container fluid className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-dark text-white">

            <Container className="d-flex">
                <Row className="gap-2">
                    <Col>
                        <h1>Hey, I'm Vishakh!</h1>
                        <p>I'm a third year student at the University of Califorina, Irvine, and I'm majoring in Computer Science and Engineering.</p>
                        <p>My greatest interests are in xxx, xxx, and xxx.</p>
                        <p>Outside of computer science, I am passionate in designing digital arts, reading, mixed martial arts. If you'd like to talk, let's connect!</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default About;
