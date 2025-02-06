import { Link } from 'react-router-dom';  // Correct Link import
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Navigation() {  // Renaming to avoid conflict with the imported Navbar component
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                <img src='https://i.imgur.com/mBMuOTg.png' width='30' height='30' className='d-inline-block align-top me-2'/>
                    Vishakh
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;  // Corrected export
