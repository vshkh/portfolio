import { Container, Row, Col } from "react-bootstrap";

// params: title (string), description (string), technologies (list of strings), isInDev (bool)
import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (  
        <Container>
            <p>Here are projects I have completed so far. Click on each to learn more!</p>
            {/* Add a grid to align different projects */}
            <Row>
                <ProjectCard
                    title={"Portfolio Site"}
                    description={"To make a site and display my current/future projects, I used React to create a portfolio page. Also using Bootstrap to develop the components and Express to host the backend."}
                    technologies={["HTML/CSS/Javascript", "React"]}
                    isInDev={false}
                />
                <ProjectCard
                    title={"Boxing Stance Guide"}
                    description={"Using OpenCV, Mediapipe, and NumPy, I programmed a small tool that helps you maintain the high guard (a guard most commonly used in Muay Thai), alerting you when you dropped your hands."}
                    technologies={["Python", "Mediapipe", "Computer Vision"]}
                />
                <ProjectCard
                    title={"Work in Progress"}
                    description={"..."}
                    technologies={["Coming Soon"]}
                />
            </Row>
        </Container>
    );
}

export default Projects;