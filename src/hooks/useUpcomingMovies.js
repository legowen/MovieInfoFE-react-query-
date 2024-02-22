// React-QUERY
import { useQuery } from "@tanstack/react-query";
// Utils
import api from "../utils/api";

// Upcoming Movie Api 호출
const fetchUpcomingMovies = () => {
  return api.get("/movie/upcoming");
};

export const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-upcoming"],
    queryFn: fetchUpcomingMovies,
    select: (result) => result.data,
  });
};