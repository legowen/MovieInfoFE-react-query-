import React from "react";
// components
import Loading from "../../../../common/Loading/Loading";
import Error from "../../../../common/Error/Error";
import MovieSlide from "../../../../common/MovieSlide/MovieSlide";
// Hooks
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
// constants
import { responsive } from "../../../../constants/responsive";
// Bootstrap
import Container from "react-bootstrap/Container";

const PopularMovieSlide = () => {
  // Data
  const { isLoading, data, isError, error } = usePopularMoviesQuery();

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
      <MovieSlide title="Popular Movies" movies={data && data.results} responsive={responsive} />
    </Container>
  );
};

export default PopularMovieSlide;