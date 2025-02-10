import { Container, Row, Col, Form, Button} from "react-bootstrap";

function ContactForm() {
    return (  
        <Container>
            <p>If you'd like to contact me, send a message through this form (but no guarantee that it works)!</p>
            <Form>
                {/* Row containing the first and last name, both in separate columns */}
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control type="name" placeholder="Enter name:"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control type="name" placeholder="Enter name:"/>
                        </Form.Group>
                    </Col>
                </Row>

                {/*Email and Message can take their own row. */}
                <Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email:"/>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group className="mb-3" controlId="formTextArea">
                        <Form.Label>Send a message:</Form.Label>
                        <Form.Control as={"textarea"} placeholder="Enter your message:"/>
                    </Form.Group>
                </Row>
            </Form>

            {/* Have button take a row to increase its width; clickable for mobile users */}
            <Row className="mt-2">
                <Button className="d-block mx-auto" variant="indigo-darkest">Send Message</Button>
            </Row>
        </Container>
    );
}

export default ContactForm;