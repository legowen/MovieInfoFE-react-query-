import React from "react";
// Style
import "./MovieCard.style.css";
// React-Router
import { useNavigate } from "react-router-dom";
// React_Icon
import { FaStar } from "react-icons/fa";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  // Movies Detail 페이지 이동
  const navigate = useNavigate();

  const goToMovieDetail = () => {
    navigate(`/movies/${movie.id}`)
  }

  // 장르 데이터 필터
  const {data: genreData} = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if(!genreData) return []

    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id)

      return genreObj.name;
    })

    return genreNameList
  }

  return (
    <div className="movie_card">
      <div className="movie_img_card" onClick={goToMovieDetail} style={{backgroundImage:"url(" +`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +")"}}>
        <div className="overlay">
          <p>{movie.overview}</p>
        </div>
      </div>

      <div className="movie_img_card_info">
        <h3>{movie.title}</h3>
        <ul>
          <li>
            <FaStar />
            {movie.vote_average}
          </li>
          <li>{movie.adult ? "Over18" : "Under18"}</li>
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;