import React from "react";
import { useState, useEffect } from "react";
// React-Router
import { useSearchParams } from "react-router-dom";
// Components
import Loading from "../../common/Loading/Loading";
import Error from "../../common/Error/Error";
import Sort from "./components/Sort";
import MovieCard from "../../common/MovieCard/MovieCard";
import Pagination from "./components/Pagination";
// Hooks
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
// Style
import "./Movies.style.css";
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Movies = () => {
  // Movie-Related state
  const [movieData, setMovieData] = useState(null);

  // Query Value
  const [query, setQuery] = useSearchParams();

  const keyword = query.get("q");

  // Custom Page
  const [page, setPage] = useState(1);

  // Movie Data Search
  const { isLoading, data, isError, error } = useSearchMovieQuery({ keyword, page });

  // Movie Related useEffect
  useEffect(() => {
    if (data) {
      setMovieData(data);
    }
  }, [data]);

  // Loading Spinner
  if (isLoading) {
    return <Loading />;
  }

  // Error Handling
  if (isError) {
    return <Error error={error} />;
  }

  return (
    <Container>
      <Sort data={data} setMovieData={setMovieData} />

      <Row className="movie_list">
        {movieData && movieData.results.map((movie, index) => (
          <Col key={index} lg={2} md={4} sm={6} xs={12}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>

      <Pagination data={data} page={page} setPage={setPage} />
    </Container>
  );
};

export default Movies;