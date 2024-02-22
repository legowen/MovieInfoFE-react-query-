import React from "react";
// Bootstrap
import Spinner from "react-bootstrap/Spinner";
import "./Loading.style.css";

const Loading = () => {
  return (
    <div className="spinner-area">
      <Spinner
        className="position-absolute top-50 start-50 translate-middle"
        animation="border"
        role="status"
        variant="danger"
      />
    </div>
  );
};

export default Loading;
