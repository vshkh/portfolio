import { Alert, Card, Col, Button } from "react-bootstrap";

function ProjectCard({ title, description, technologies, isInDev=true}) {
    return (  
        <Col>
            <Card>
                {isInDev && <Alert variant="danger" className="text-center">In Development!</Alert>}
                {!isInDev && <Alert variant="success" className="text-center">Project is Live!</Alert>}
                
                <Card.Body>
                    <Card.Title className="text-center">{title}</Card.Title>
                    <Card.Text className="text-center">{description}</Card.Text>
                    <hr/>
                    <Card.Text className="text-center"><strong>Technologies:</strong> {technologies.join(", ")}</Card.Text>
                    {isInDev && <Button className="d-block mx-auto" variant="dark" disabled>Coming Soon...</Button>}
                    {!isInDev && <Button className="d-block mx-auto" variant="indigo-darkest">Check it out!</Button>}
                    
                </Card.Body>
                
            </Card>
        </Col>
    );
}

export default ProjectCard;
