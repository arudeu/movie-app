import React from "react";
import { Row, Col } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://movieapp-api-lms1.onrender.com/movies/getMovies`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data.movies);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <div>
      <h2>Featured Movies</h2>
      <Row>
        {movies.map((movie) => (
          <Col md={4} key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
