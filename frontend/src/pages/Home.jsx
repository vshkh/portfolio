import { Container, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
    return (
        <Container>
            <Container className="text-center p-2">
                <h1 className="fw-bold">Welcome to my Portfolio!</h1>
                <p className="lead">Use the buttons below to navigate. Enjoy your stay!</p>
            </Container>

            {/* Grid of large buttons to navigate from the home page */}
            <Container className="d-grid gap-3 mt-4 mb-4">
                <Button as={Link} to="/" variant="indigo-lightest" className="rounded-pill" size="lg">Home</Button>
                <Button as={Link} to="/about" variant="indigo-lighter" className="rounded-pill" size="lg">About</Button>
                <Button as={Link} to="/projects" variant="indigo" className="rounded-pill" size="lg">Projects</Button>
                <Button as={Link} to="/contact" variant="indigo-darker" className="rounded-pill" size="lg">Contact</Button>
                <Button as={Link} to="/test" variant="indigo-darkest" className="rounded-pill" size="lg">404</Button>
                <Button as={Link} to="/api-test" variant="indigo-darkestest" className="rounded-pill" size="lg">Generate a Random Image</Button>
            </Container>
        </Container>
    );
}

export default Home;
