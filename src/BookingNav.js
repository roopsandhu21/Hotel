import React from "react";
import { Navbar,Container, Form, Button, Nav, Row, Col } from "react-bootstrap"; import s from './taj hotel.png'
import AuthPage from "./Login";
import { useState } from "react";
import { Modal } from "react-bootstrap";





function BookingNavbar() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-2">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="/">
  <img src={s} alt="image" className="imged" style={{ width: '100px', height: '50px', filter: 'brightness(0) invert(0)', paddingLeft: '10px' }} />
</Navbar.Brand>


        {/* Booking Form */}
        <Form className="d-flex flex-grow-1 mx-3">
          <Row className="w-100 g-2">
            <Col md>
              <Form.Select>
                <option>Taj Chia Kutir Resort & Spa</option>
                <option>Taj Palace</option>
                <option>Taj Exotica</option>
              </Form.Select>
            </Col>

            <Col md>
              <Form.Control type="date" />
            </Col>
            <Col md>
              <Form.Control type="date" />
            </Col>

            <Col md>
              <Form.Select>
                <option>1 Guest — 1 Room</option>
                <option>2 Guests — 1 Room</option>
                <option>2 Guests — 2 Rooms</option>
              </Form.Select>
            </Col>

            <Col md>
              <Form.Control placeholder="Special Code" />
            </Col>

            <Col md="auto">
              <Button variant="warning" className="fw-bold text-black">
                SEARCH
              </Button>
            </Col>
          </Row>
        </Form>

        {/* Right-side Nav */}
        <Nav>
          <Nav.Link onClick={() => setShowLogin(true)}>LOGIN / JOIN</Nav.Link>
        </Nav>
        <Modal show={showLogin} onHide={() => setShowLogin(false)}>
        <Modal.Body>
          <AuthPage />
        </Modal.Body>
      </Modal>
      </Container>
    </Navbar>
  );
}

export default BookingNavbar;
