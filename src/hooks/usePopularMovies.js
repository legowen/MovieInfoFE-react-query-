// React-QUERY
import { useQuery } from "@tanstack/react-query";
// Utils
import api from "../utils/api";

// Popular Movie Api 호출
const fetchPopularMovies = () => {
  return api.get("/movie/popular");
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchPopularMovies,
    select: (result) => result.data,
  });
};