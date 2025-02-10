import { Link } from "react-router-dom";
import { Navbar, Nav, Container} from "react-bootstrap";

function Navigation() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="https://i.imgur.com/mBMuOTg.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-2"
                        alt="Logo"
                    />
                    <strong>Vishakh's World</strong>
                </Navbar.Brand>

                {/* Toggle Button for Mobile */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Collapsible Links */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto"> {/* Aligns links to the right */}
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
