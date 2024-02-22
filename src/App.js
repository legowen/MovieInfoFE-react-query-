import React from "react";
// React-Router
import { Routes, Route } from "react-router-dom";
// Layout
import AppLayout from "./layout/AppLayout";
// Pages
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import NotFound from "./pages/NotFound/NotFound";
// Style
import "./App.css";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />

        <Route path="movies">
          <Route index element={<Movies />} />
          <Route path=":id" element={<MovieDetail />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;