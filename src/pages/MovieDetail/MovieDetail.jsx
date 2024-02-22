import React from "react";
// React-Router
import { useParams } from "react-router-dom";
// Components
import Loading from "../../common/Loading/Loading";
import Error from "../../common/Error/Error";
import Banner from "../../common/Banner/Banner";
// Hooks
import { useDetailMovieQuery } from "../../hooks/useDetailMovie";
// Utils
import { numberWithCommas } from "../../utils/number";
// Style
import "./MovieDetail.style.css";
// React_Icon
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from 'react-bootstrap/Badge';
import MovieReview from "./components/MovieReview";

const MovieDetail = () => {
  // Movie Detail 주소
  const { id } = useParams();

  // Movie Detail 데이터
  const { isLoading, data, isError, error } = useDetailMovieQuery(id);

  // 로딩 처리
  if (isLoading) {
    return <Loading />;
  }

  // 에러 처리
  if (isError) {
    return <Error error={error} />;
  }

  return (
    <div className="movie_detail">
      <Banner data={data} />

      <Container>
        <Row className="infomation">
          <Col lg={6} xs={12} className="image_infomation_box">
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data && data.poster_path}`} alt="영화 포스터"/>
          </Col>

          <Col lg={6} xs={12} className="text_infomation_box">
            <ul className="genre">
              {data.genres.map((genre, index) => (
                <li key={index}>
                  <Badge bg="danger">{genre.name}</Badge>
                </li>
              ))}
            </ul>

            <div className="title">
              <h3>{data.title}</h3>
              <p>{data.overview}</p>
            </div>

            <ul className="main_info">
              <li>
                <FaStar style={{color: "yellow"}}/>
                {data.vote_average}
              </li>
              <li>
                <FaHeart style={{color: "red"}}/>
                {data.popularity}
              </li>
              <li style={{color: "red", fontStyle: "Italic"}}>{data.adult ? "Over18" : "Under18"}</li>
            </ul>

            <ul className="sub_info">
              <li>
                <Badge bg="danger">Budget</Badge>
                {numberWithCommas(data.budget)} Won
              </li>
              <li>
                <Badge bg="danger">Revenue</Badge>
                {numberWithCommas(data.revenue)} Won
              </li>
              <li>
                <Badge bg="danger">Release Date</Badge>
                {data.release_date}
              </li>
              <li>
                <Badge bg="danger">Run Time</Badge>
                {data.runtime} minutes
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <MovieReview id={id} />
    </div>
  );
};

export default MovieDetail;