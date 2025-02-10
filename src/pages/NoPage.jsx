import { Container, Alert } from "react-bootstrap";

function NoPage() {
    console.log("Home component renders");
    return (
        
        <Container>
            <Alert variant="danger">Oops, looks like you stumbled across an unidentfied page. Maybe this page ... never existed?</Alert>
            <iframe className="d-block mx-auto" width="560" height="315" src="https://www.youtube.com/embed/xjSVPLfrVm4?si=hSTUyQnym-kHyvXG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Container>
    );
}

export default NoPage

