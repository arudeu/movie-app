import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

export default function AppNavbar() {
  const { user } = useContext(UserContext);
  return (
    <Navbar expand="lg" className="apple-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          Moviely
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {user.isAdmin === true ? (
              <Nav.Link as={NavLink} to="/admin" exact="true">
                Admin
              </Nav.Link>
            ) : (
              ""
            )}
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
