import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import s from './taj hotel.png';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap"; 

function BasicExample() {
  return (
    <div className="bhu">
      <Navbar bg="transparent" variant="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={s}
              alt="image"
              className="imged"
              style={{
                width: '100px',
                height: '50px',
                filter: 'brightness(0) invert(0)',
                paddingLeft: '10px'
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center" style={{ width: "100%", justifyContent: "flex-end" }}>
              <Nav.Link as={Link} to="/" style={{ color: 'black', fontWeight: 'bold' }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ color: 'black', fontWeight: 'bold' }}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ color: 'black', fontWeight: 'bold' }}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/login" style={{ color: 'black', fontWeight: 'bold' }}>
                Login
              </Nav.Link>

              {/* Blue Button */}
              <Button 
                variant="warning" 
                as={Link} 
                to="/"  
                className="ms-3"
                style={{ fontWeight: 'bold' }}
              >
                BOOK NOW!
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
