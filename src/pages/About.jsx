import { Container, Image, Row, Col} from "react-bootstrap";

function About() {
    console.log("About component renders");
    return (
            <Container className="d-flex">
                <Row className="gap-2">
                    <Col>
                        <h1>Hey, I'm Vishakh!</h1>
                        <p>I'm a third year student at the University of Califorina, Irvine, and I'm majoring in Computer Science and Engineering.</p>
                        <p>My passion from computer science stems from the ability to turn my ideas into a reality. I am passionate in exploring topics like xxx, xxx, and xxx.</p>
                        <p>Outside of computer science, I am passionate in designing digital arts, reading, mixed martial arts. If you'd like to talk, let's connect!</p>
                    </Col>
                </Row>
            </Container>
    );
}

export default About;
