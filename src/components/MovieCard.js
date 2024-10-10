import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Card className="apple-style-card mb-4">
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.year}</Card.Text>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>{movie.director}</Card.Text>
        <Button as={Link} to={`/movies/${movie._id}`} className="apple-btn">
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}
