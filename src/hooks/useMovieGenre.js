// React-QUERY
import { useQuery } from "@tanstack/react-query";
// Utils
import api from "../utils/api";

// Movie List Genre Api 호출
const fetchMovieGenre = () => {
  return api.get("/genre/movie/list");
};

export const useMovieGenreQuery = () => {
  return useQuery({
    queryKey: ["movie-genre"],
    queryFn: fetchMovieGenre,
    select: (result) => result.data.genres,
    staleTime: 300000,
  });
};