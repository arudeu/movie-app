import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export default function MovieView() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    // Fetch movie details by ID
    fetch(`https://movieapp-api-lms1.onrender.com/movies/getMovie/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch movie");
        }
        return res.json();
      })
      .then((data) => {
        setMovie(data);
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <div className="movie-view-container">
      <Card className="movie-view-card">
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>
            <strong>Director:</strong> {movie.director}
          </Card.Text>
          <Card.Text>
            <strong>Release Date:</strong> {movie.year}
          </Card.Text>
          <Button variant="primary" href="/">
            Back to Movies
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
