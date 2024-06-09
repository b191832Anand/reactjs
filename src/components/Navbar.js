import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [darkModeLabel, setDarkModeLabel] = useState('Enable Dark Mode');

  const handleDarkModeToggle = () => {
    if (darkModeLabel === 'Enable Dark Mode') {
      setDarkModeLabel('Enable Light Mode');  
    } else {
      setDarkModeLabel('Enable Dark Mode');
    }
    props.toggleMode(null);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={handleDarkModeToggle}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              style={{ position: "sticky" }}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{ marginRight: 10, position: "sticky" }}
            >
              {darkModeLabel}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
