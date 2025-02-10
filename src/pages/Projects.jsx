import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (  
        <Container>
            <p>Here are projects I have completed so far. Click on each to learn more!</p>
            <Row>
                <ProjectCard
                    title={"Rocket Ship"}
                    description={"Using xxx, xxx, and xxx, I was able to build a rocket ship which was able to fly."}
                    technologies={["Python", "React", "Others"]}
                />
                <ProjectCard
                    title={"Title 2"}
                    description={"Description 2"}
                    technologies={["Python", "React", "Others"]}
                />
            </Row>
        </Container>
    );
}

export default Projects;