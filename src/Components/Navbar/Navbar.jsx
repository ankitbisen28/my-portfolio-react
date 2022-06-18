import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand text-white fs-5 mx-3 fw-bold" href="/">
          AnkitBisen
        </a>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-white">
                AboutMe
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-white">
                ContactMe
              </a>
            </li>
            <div className="btn btn-info mx-3">Get MyResume</div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
