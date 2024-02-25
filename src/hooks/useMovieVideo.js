// React-QUERY
import { useQuery } from "@tanstack/react-query";
// Utils
import api from "../utils/api";

// Call Movie List Genre Api 
const fetchMovieVideo = (queryData) => {
  const id = queryData.queryKey[1]

  return api.get(`/movie/${id}/videos`);
};

export const useMovieVideoQuery = (id) => {
  return useQuery({
    queryKey: ["movie-detail", id],
    queryFn: fetchMovieVideo,
    select: (result) => result.data
  });
};