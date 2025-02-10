import { Link } from "react-router-dom";
import { Navbar, Nav, Container} from "react-bootstrap";

function Navigation() {
    return (
        <Navbar expand="lg" className="shadow-lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Vishakh's World
                </Navbar.Brand>

                {/* Toggle Button for Mobile */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Collapsible Links */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="text-center"> {/* Aligns links to the right */}
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
