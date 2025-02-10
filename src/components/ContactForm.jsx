import { Container, Row, Col, Form, Button} from "react-bootstrap";

function ContactForm() {
    return (  
        <Container>
            <p>If you'd like to contact me, send a message through this form (but no guarantee that it works)!</p>
            <Form>
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

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email:"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTextArea">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control as={"textarea"} placeholder="Enter your message:"/>
                </Form.Group>
            </Form>

            <Button className="d-block mx-auto">Send Message</Button>
        </Container>
    );
}

export default ContactForm;