import React from 'react'
// React-Icon
import { IoReload } from "react-icons/io5";
// Bootstrap
import Alert from "react-bootstrap/Alert";

const Error = ({ error }) => {
  return (
    <Alert className="d-flex justify-content-between align-items-center bg-dark border border-danger text-white">
      {error.message}
      <div onClick={() => window.location.reload()} className="d-flex align-items-center" style={{ cursor: "pointer" }}>
        Refresh
        <IoReload className="ms-1" />
      </div>
    </Alert>
  )
}

export default Error