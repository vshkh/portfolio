import React from 'react';
import { Button, Container } from 'react-bootstrap';

function Hero() {
  return (
    <section className="bg-primary text-white text-center py-5">
      <Container>
        <h1 className="display-4 fw-bold">Welcome to Vishakh's World</h1>
        <p className="lead my-4">
          Here is my portfolio site, showcasing projects I Have worked on in the last few years.
        </p>
        <Button variant="light" size="lg" href="#projects">
          View My Work
        </Button>
      </Container>
    </section>
  );
}

export default Hero;