import React from "react";
import { useState } from "react";
// React-Router
import { useNavigate, Outlet } from "react-router-dom";
// Style
import "./AppLayout.style.css";
// Bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// Image
import logo from "../img/layout/logo.png";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");

  // 이동
  const navigate = useNavigate();

  // Home 페이지 이동
  const goToHome = () => {
    navigate("/");
  };

  // Movies 페이지 이동
  const goToMovies = () => {
    navigate("/Movies");
  };

  // keyword 저장 및 찾기
  const searchByKeyword = (event) => {
    event.preventDefault();

    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };

  return (
    <div className="netflix">
      <div className="header">
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand onClick={goToHome} className="header_logo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </Navbar.Brand>

            <Navbar.Toggle type="button" className="toggle_btn" />
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Link onClick={goToHome} className="text-white">
                  Home
                </Nav.Link>
                <Nav.Link onClick={goToMovies} className="text-white">
                  Movies
                </Nav.Link>
              </Nav>
              <Form
                className="d-flex"
                onSubmit={(event) => searchByKeyword(event)}
              >
                <Form.Control
                  type="search"
                  onChange={(event) => setKeyword(event.target.value)}
                  value={keyword}
                  placeholder="Search"
                />
                <Button type="submit" variant="danger">
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>

      <Outlet />

      <div className="footer">
        <Container>
          <div className="footer_info">
            <Navbar.Brand>
              <img src={logo} alt="logo" />
            </Navbar.Brand>
            <ul>
              <li>Movie DataBase Info</li>
              <li>Representative : Owen Kim</li>
              <li>Github : https://github.com/legowen</li>
            </ul>
            <div>
              <p>
                The website utilizing the TMDB API is not intended for
                commercial purposes.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AppLayout;
