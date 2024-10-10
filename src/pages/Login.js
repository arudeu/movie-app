import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Notyf } from "notyf";

export default function Login() {
  const notyf = new Notyf();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://movieapp-api-lms1.onrender.com/users/login`, {
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
        if (data.access !== undefined) {
          console.log(data.access);

          // Stores the token of the authenticated user in the local storage
          // Syntax: localStorage.setItem('propertyName', value)
          localStorage.setItem("token", data.access);

          // Clear input fields after submission
          setEmail("");
          setPassword("");

          notyf.success(`You are now logged in`);
        } else if (data.message === "Incorrect email or password") {
          notyf.error(`Incorrect email or password`);
        } else {
          notyf.error(`${email} does not exist`);
        }
      });
  };

  return (
    <div className="auth-container">
      <Card className="auth-card p-4">
        <h2 className="text-center mb-4">Login</h2>
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
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
}
