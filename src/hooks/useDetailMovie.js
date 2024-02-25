// React-QUERY
import { useQuery } from "@tanstack/react-query";
// Utils
import api from "../utils/api";

// Call Movie List Genre Api 
const fetchDetailMovie = (queryData) => {
  const id = queryData.queryKey[1]

  return api.get(`/movie/${id}`);
};

export const useDetailMovieQuery = (id) => {
  return useQuery({
    queryKey: ["movie-detail", id],
    queryFn: fetchDetailMovie,
    select: (result) => result.data
  });
};