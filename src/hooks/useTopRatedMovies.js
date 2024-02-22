// React-QUERY
import { useQuery } from "@tanstack/react-query";
// Utils
import api from "../utils/api";

// Top Rated Movie Api 호출
const fetchTopRatedMovies = () => {
  return api.get("/movie/top_rated");
};

export const useTopRatedMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-topRated"],
    queryFn: fetchTopRatedMovies,
    select: (result) => result.data,
  });
};