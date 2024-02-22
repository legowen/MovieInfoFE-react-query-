import React from "react";
import { useState } from "react";
// components
import Loading from "../../../../common/Loading/Loading";
import Error from "../../../../common/Error/Error";
// Hooks
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import { useMovieVideoQuery } from "../../../../hooks/useMovieVideo";
// Style
import "./HomeBanner.style.css";
// Bootstrap
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// Youtube
import YouTube from 'react-youtube';

const HomeBanner = () => {
  // 모달 관련 state
  const [lgShow, setLgShow] = useState(false);

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  // 데이터
  const { isLoading, data, isError, error } = usePopularMoviesQuery();

  // Movie Video 데이터
  const { data: videoData } = useMovieVideoQuery(data && data.results[0].id);

  // 로딩 처리
  if (isLoading) {
    return <Loading />;
  }

  // 에러 처리
  if (isError) {
    return <Error error={error} />;
  }

  return (
    <div
      className="home_banner"
      style={{backgroundImage:"url("+`https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data && data.results[0].poster_path}`+")"}}>
      <Container className="home_banner_text">
        <h2>{data && data.results[0].title}</h2>
        <p>{data && data.results[0].overview}</p>
        <Button onClick={() => setLgShow(true)} className="video_btn btn btn-danger" >▶ Play</Button>

        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          className="movie_modal"
        >
        <Modal.Header closeButton className="bg-dark"> 
          <Modal.Title id="example-modal-sizes-title-lg" className="text-white">
            Movie Intro
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark" >
          <YouTube videoId={videoData && videoData.results[0].key} opts={opts} className="youtube" />
        </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default HomeBanner;