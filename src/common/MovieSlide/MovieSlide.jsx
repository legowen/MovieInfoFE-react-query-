import React from "react";
// components
import MovieCard from "../MovieCard/MovieCard";
// Style
import "./MovieSlide.style.css";
// Slide
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const MovieSlide = ({ title, movies, responsive }) => {
  return (
    <div className="home_slider">
      <h2>{title}</h2>
      <Carousel
        infinite={true}
        centerMode={true}
        responsive={responsive}
        containerClass="carousel_container pt-3"
        itemClass="carousel_movie_slider ps-2 pe-2"
      >
        {movies.map((movie, index) => (<MovieCard key={index} movie={movie} />))}
      </Carousel>
    </div>
  );
};

export default MovieSlide;