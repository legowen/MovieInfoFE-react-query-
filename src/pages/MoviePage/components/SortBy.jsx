import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useMovieGenreQuery } from "../../../hooks/useMovieGenre";

const SortBy = ({ sort, setSort, genre, setGenre }) => {
  const { data: genreData } = useMovieGenreQuery();
  return (
    <div className="d-flex my-4">
      <Dropdown className="me-3">
        <Dropdown.Toggle variant="danger" id="dropdown-basic">
          {sort === ""
            ? "Sort By"
            : sort === "desc"
            ? "Most Popular"
            : "Less Popular"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSort("desc")}>
            Most Popular
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSort("asc")}>
            Less Popular
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="danger" id="dropdown-basic">
          {genre ? genre.name : "Genre"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {genreData?.map((item, index) => (
            <Dropdown.Item onClick={() => setGenre(item)} key={index}>
              {item.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SortBy;