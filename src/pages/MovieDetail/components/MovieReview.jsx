import React from "react";
import { useState } from "react";
// Hooks
import { useMovieReviewQuery } from "../../../hooks/useMovieReview";
import { useRecommendationsQuery } from "../../../hooks/useRecommendationsMovie";
// Components
import Loading from "../../../common/Loading/Loading";
import Error from "../../../common/Error/Error";
import MovieCard from "../../../common/MovieCard/MovieCard"
import Review from "./Review";
// Style
import "./MovieReview.style.css";
// Bootstrap
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Col from "react-bootstrap/Col";

const MovieReview = ({ id }) => {
  // Movie Review 데이터
  const { isLoading, data: reviewData, isError, error } = useMovieReviewQuery(id);

  // Movie 관련 영화 데이터
  const { data: recommendationsData } = useRecommendationsQuery(id);

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
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="review_relatedMovie_tab"
      >
        <Tab eventKey="home" title="Review" className="review_tab">
          <ul>
            {reviewData && reviewData.results.map((review, index) => (
              <Review key={index} review={review && review} />
            ))}
          </ul>
        </Tab>
        <Tab eventKey="profile" title="Related" className="related_tab">
          <div>
            {recommendationsData && recommendationsData.results.map((movie, index) => (
              <Col key={index} lg={6} xs={12}>
                <MovieCard movie={movie}/>
              </Col>
            ))}
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default MovieReview;