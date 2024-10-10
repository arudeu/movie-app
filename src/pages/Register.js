import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Notyf } from "notyf";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notyf = new Notyf();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    fetch(`https://movieapp-api-lms1.onrender.com/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmail("");
        setPassword("");
        notyf.success("Registered Successfully");
      });
  };

  return (
    <div className="auth-container">
      <Card className="auth-card">
        <h2 className="text-center mb-4">Register</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button className="apple-btn mt-3" type="submit" block>
            Register
          </Button>
        </Form>
      </Card>
    </div>
  );
}
