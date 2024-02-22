import React from "react";
// components
import Loading from "../../../../common/Loading/Loading";
import Error from "../../../../common/Error/Error";
import MovieSlide from "../../../../common/MovieSlide/MovieSlide";
// Hooks
import { useUpcomingMoviesQuery } from "../../../../hooks/useUpcomingMovies";
// constants
import { responsive } from "../../../../constants/responsive";
// Bootstrap
import Container from "react-bootstrap/Container";

const UpcomingMovieSlide = () => {
  const { isLoading, data, isError, error } = useUpcomingMoviesQuery();

  // 로딩 처리
  if (isLoading) {
    return <Loading />;
  }
  
  // 에러 처리
  if (isError) {
    return <Error error={error} />;
  }

  return (
    <Container>
      <MovieSlide title="Upcoming Movies" movies={data && data.results} responsive={responsive} />
    </Container>
  );
};

export default UpcomingMovieSlide;