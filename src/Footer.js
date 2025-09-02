import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <Container>
        <Row className="mb-4">
          {/* Subscribe Section */}
          <Col md={4}>
            <h6 className="text-uppercase">Subscribe for Latest Updates</h6>
            <Form className="d-flex mt-3">
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                className="me-2"
              />
              <Button variant="secondary">Subscribe</Button>
            </Form>
          </Col>

          {/* Booking & Customer Support */}
          <Col md={4}>
            <h6 className="text-uppercase">For Bookings Contact</h6>
            <p className="mb-1">1-800-111-825</p>
            <p className="mb-3">reservations@ihcltata.com</p>

            <h6 className="text-uppercase">Customer Support</h6>
            <p className="mb-1">contacttaj@tajhotels.com</p>
            <p>website.feedback@tajhotels.com</p>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <h6 className="text-uppercase">Quick Links</h6>
            <Row>
              <Col xs={6}>
                <ul className="list-unstyled">
                  <li>Hotels</li>
                  <li>Dining</li>
                  <li>Wellness</li>
                  <li>Timeless Weddings</li>
                  <li>Event Venues</li>
                  <li>Taj Magazine</li>
                  <li>Sitemap</li>
                  <li>HSBC Taj Credit Card</li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul className="list-unstyled">
                  <li>About Taj</li>
                  <li>Holidays</li>
                  <li>Offers</li>
                  <li>Gifting</li>
                  <li>NeuPass</li>
                  <li>Epicure</li>
                  <li>Taj Blog</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Social Media */}
        <Row className="text-center mb-4">
          <h6 className="text-uppercase">Connect With Us</h6>
          <div className="d-flex justify-content-center gap-3 mt-2">
            <a href="/" className="text-light">
              <FaFacebookF />
            </a>
            <a href="/" className="text-light">
              <FaTwitter />
            </a>
            <a href="/" className="text-light">
              <FaInstagram />
            </a>
            <a href="/" className="text-light">
              <FaYoutube />
            </a>
            <a href="/" className="text-light">
              <FaLinkedinIn />
            </a>
          </div>
        </Row>

        {/* Brands */}
        <Row className="text-center my-4">
          <h6 className="text-uppercase">Our Brands</h6>
          <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">
            <span>Taj</span>
            <span>SeleQtions</span>
            <span>Vivanta</span>
            <span>Ginger</span>
            <span>Tree of Life</span>
            <span>ama Stays & Trails</span>
            <span>Qmin</span>
            <span>IHCL</span>
          </div>
        </Row>

        {/* Bottom Line */}
        <Row>
          <Col className="text-center">
            <hr className="border-secondary" />
            <p className="mb-0">
              © 2025 The Indian Hotels Company Limited. All Rights Reserved.
            </p>
            <div className="mt-2">
              <small>
                Corporate | Pressroom | Work With Us | Terms of Service | Best
                Rate Guarantee FAQ | Privacy Policy | Cookies Policy
              </small>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;