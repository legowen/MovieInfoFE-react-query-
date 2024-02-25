import React from "react";
// components
import Loading from "../../../../common/Loading/Loading";
import Error from "../../../../common/Error/Error";
import MovieSlide from "../../../../common/MovieSlide/MovieSlide";
// Hooks
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
// constants
import { responsive } from "../../../../constants/responsive";
// Bootstrap
import Container from "react-bootstrap/Container";

const TopRatedMovieSlide = () => {
  const { isLoading, data, isError, error } = useTopRatedMoviesQuery();

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
      <MovieSlide title="Top Rated Movies" movies={data && data.results} responsive={responsive} />
    </Container>
  );
};

export default TopRatedMovieSlide;