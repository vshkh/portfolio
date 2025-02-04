import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <img src="https://i.imgur.com/BbGzLPy.png" 
            width="30"  
            height="30" 
            className="d-inline-block align-top"
            alt="Vishakh's Site Logo"/>
        <span className="h3 m-2 text-pr">Vishakh's World</span>
        </Navbar.Brand>
        <Navbar.Collapse/>
      </Container>
    </Navbar>
  );
}

export default BasicExample;