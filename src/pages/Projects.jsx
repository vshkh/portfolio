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
                    title={"Rocket Ship"}
                    description={"Using xxx, xxx, and xxx, I was able to build a rocket ship which was able to fly."}
                    technologies={["Python", "React", "Others"]}
                    isInDev={false}
                />
                <ProjectCard
                    title={"Improve Teaching Web App"}
                    description={"To make a tool that aids people with improving their explantion, I programmed this using xxx, xxx, and xxx."}
                    technologies={["LangChain", "React", "LLMs"]}
                />
            </Row>
        </Container>
    );
}

export default Projects;