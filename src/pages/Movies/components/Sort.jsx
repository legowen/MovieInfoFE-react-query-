import React from "react";
import { useState } from "react";
// Hooks
import { useMovieGenreQuery } from "../../../hooks/useMovieGenre";
// Bootstrap
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Sort = ({ data, setMovieData }) => {
  // 인기관련 state
  const [popularSort, setPopularSort] = useState(null);
  
  // 장르관련 state
  const [genreSort, setGenreSort] = useState(null);

  // 장르 영화 데이터
  const { data: genreData } = useMovieGenreQuery();

  // 인기 많은순 기능
  const filterMovieByPopular = () => {
    const popularResults = data && data.results.sort(function (a, b) {
      return b.popularity - a.popularity;
    });

    setMovieData({ ...data, results: popularResults });

    setPopularSort("인기 많은순");
  };

  // 인기 적은순 기능
  const filterMovieByUnPopular = () => {
    const unPopularResults = data && data.results.sort(function (a, b) {
      return a.popularity - b.popularity;
    });

    setMovieData({ ...data, results: unPopularResults });

    setPopularSort("인기 적은순");
  };

  // 장르 필터링 기능
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
        <DropdownButton title={popularSort === null ? "정렬기준" : popularSort} variant="danger">
          <Dropdown.Item onClick={filterMovieByPopular}>인기 많은순</Dropdown.Item>
          <Dropdown.Item onClick={filterMovieByUnPopular}>인기 적은순</Dropdown.Item>
        </DropdownButton>
      </div>
      <div>
        <DropdownButton title={genreSort === null ? "장르별 검색" : genreSort} variant="danger">
          {genreData && genreData.map((genre, index) => (
            <Dropdown.Item key={index} onClick={() => filterMovieByGenre(genre)}>{genre.name}</Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    </div>
  );
};

export default Sort;