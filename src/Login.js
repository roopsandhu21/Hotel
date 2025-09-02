import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import bgImage from "./bg.jpg"; 
import Navbar from './Navbar';

import "./App.css";


function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", formData.email, formData.password);
    } else {
      console.log("Signing up with:", formData);
    }
  };

  return (
    <div
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    position: "relative",
    color: "black",
    
  }}

>
  <Navbar/>
            {/* You can add content here if needed */}

      {/* Centered Card */}
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card
          className="auth-card p-4 shadow-lg"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <h3 className="text-center mb-3">
            {isLogin ? "Login" : "Sign Up"}
          </h3>
          <Form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="contact"
                    placeholder="Enter contact number"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </>
            )}

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          </Form>

          <div className="text-center mt-3">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <Button variant="link" onClick={() => setIsLogin(false)}>
                  Sign Up
                </Button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Button variant="link" onClick={() => setIsLogin(true)}>
                  Login
                </Button>
              </>
            )}
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default AuthPage;
