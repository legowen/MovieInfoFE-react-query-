// React-QUERY
import { useQuery } from "@tanstack/react-query";
// Utils
import api from "../utils/api";

// Movie List Genre Api 호출
const fetchMovieReview = (queryData) => {
  const id = queryData.queryKey[1]

  return api.get(`/movie/${id}/reviews`);
};

export const useMovieReviewQuery = (id) => {
  return useQuery({
    queryKey: ["movie-review", id],
    queryFn: fetchMovieReview,
    select: (result) => result.data,
  });
};