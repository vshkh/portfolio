import { Alert, Card, Col, Button } from "react-bootstrap";

function ProjectCard({ title, description, technologies }) {
    return (  
        <Col>
            <Card>
                <Alert variant="danger">In Development!</Alert>
                
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="success">Read More!</Button>
                </Card.Body>
                
            </Card>
        </Col>
    );
}

export default ProjectCard;
