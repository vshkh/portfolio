import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
    return (
        <Container>
            <Container className="text-center">
                <h1 className="fw-bold">Welcome to My Portfolio!</h1>
                <p className="lead">Use the buttons below to navigate. Enjoy your stay!</p>
            </Container>

            <Container className="d-grid gap-3 mt-4">
                <Button as={Link} to="/" variant="light" size="lg">Home</Button>
                <Button as={Link} to="/about" variant="secondary" size="lg">About</Button>
                <Button as={Link} to="/projects" variant="success" size="lg">Projects</Button>
                <Button as={Link} to="/contact" variant="danger" size="lg">Contact</Button>
                <Button as={Link} to="/test" variant="info" size="lg">404</Button>
            </Container>
        </Container>
    );
}

export default Home;
