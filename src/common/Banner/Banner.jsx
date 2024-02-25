import React from "react";
import { useState } from "react";
// Components
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
// Hooks
import { useMovieVideoQuery } from "../../hooks/useMovieVideo";
// Style
import "./Banner.style.css";
// Bootstrap
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// Youtube
import YouTube from 'react-youtube';

const Banner = ({ data }) => {
  // Modal-Related state
  const [lgShow, setLgShow] = useState(false);

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  // Movie Video Data
  const { isLoading, data: videoData, isError, error } = useMovieVideoQuery(data && data.id);

  if (isLoading) {
    return <Loading />;
  }

  // Error Handling
  if (isError) {
    return <Error error={error} />;
  }

  console.log(videoData.results[0].key)

  return (
    <div
      className="banner"
      style={{backgroundImage:"url("+`https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data && data.poster_path}`+")"}}>
      <Container className="banner_text">
        <h2>{data && data.title}</h2>
        <p>{data && data.overview}</p>
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
          <YouTube videoId={videoData.results[0].key} opts={opts} className="youtube" />
        </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Banner;