import { Container, Button} from "react-bootstrap";

function Home() {
    return (
        <Container fluid className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-dark text-white">
            <Container className="text-center">
                <h1 className="mb-3 fw-bold">Welcome to My Portfolio!</h1>
                <p className="lead">Use the buttons below to navigate. Enjoy your stay!</p>
            </Container>

            <Container className="d-grid gap-3 mt-4">
                <Button href="/" variant="light" size="lg">Home</Button>
                <Button href="/about" variant="secondary" size="lg">About</Button>
                <Button href="/projects" variant="success" size="lg">Projects</Button>
                <Button href="/contact" variant="danger" size="lg">Contact</Button>
            </Container>
        </Container>
    );
}

export default Home;
