import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return ( 
        <Container fluid className="custom-footer shadow-lg">
            <footer className=" text-center py-3 text-light">
                <Row className="gap-1">
                    <Col><strong>© 2025 Vishakh</strong></Col>
                    <Col><a className="footer-url" href="https://github.com/vshkh">https://github.com/vshkh</a></Col>
                    <Col><a className="footer-url" href="https://www.linkedin.com/in/vishakhm/">https://www.linkedin.com/in/vishakhm/</a></Col>
                </Row>
        </footer>
        </Container>
     );
}

export default Footer;