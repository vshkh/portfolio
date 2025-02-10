import { Row, Col } from "react-bootstrap";

function Footer() {
    return ( 
        <footer className=" text-center mt-5 py-3 bg-dark text-light">
            <Row className="gap-1">
                <Col><strong>© 2024 Vishakh</strong></Col>
                <Col><a href="https://github.com/vshkh">https://github.com/vshkh</a></Col>
                <Col><a href="https://www.linkedin.com/in/vishakhm/">https://www.linkedin.com/in/vishakhm/</a></Col>
            </Row>
        </footer>
     );
}

export default Footer;