import React from "react";
import { useState } from "react";
// Hooks
import { useMovieGenreQuery } from "../../../hooks/useMovieGenre";
// Bootstrap
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Sort = ({ data, setMovieData }) => {
  // Popularity-Related state
  const [popularSort, setPopularSort] = useState(null);
  
  // Genre-Related state
  const [genreSort, setGenreSort] = useState(null);

  // Movie Genre Data
  const { data: genreData } = useMovieGenreQuery();

  // Most Popular
  const filterMovieByPopular = () => {
    const popularResults = data && data.results.sort(function (a, b) {
      return b.popularity - a.popularity;
    });

    setMovieData({ ...data, results: popularResults });

    setPopularSort("Most Popular");
  };

  // Least Popular
  const filterMovieByUnPopular = () => {
    const unPopularResults = data && data.results.sort(function (a, b) {
      return a.popularity - b.popularity;
    });

    setMovieData({ ...data, results: unPopularResults });

    setPopularSort("Least Popular");
  };

  // Genre Filter
  const filterMovieByGenre = (genre) => {
    const genreResults = data && data.results.filter((movie) => {
      return movie.genre_ids.includes(genre.id);
    });

    setMovieData({ ...data, results: genreResults });

    setGenreSort(genre.name);
  };

  return (
    <div className="dropdown_list">
      <div>
        <DropdownButton title={popularSort === null ? "sorting criteria" : popularSort} variant="danger">
          <Dropdown.Item onClick={filterMovieByPopular}>Most Popular</Dropdown.Item>
          <Dropdown.Item onClick={filterMovieByUnPopular}>Least Popular</Dropdown.Item>
        </DropdownButton>
      </div>
      <div>
        <DropdownButton title={genreSort === null ? "Genre Search" : genreSort} variant="danger">
          {genreData && genreData.map((genre, index) => (
            <Dropdown.Item key={index} onClick={() => filterMovieByGenre(genre)}>{genre.name}</Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    </div>
  );
};

export default Sort;