import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = (props) => {
  let location = useLocation();
  const logOut = () => {
    localStorage.removeItem("token");
    props.showAlert("Logout successfully!");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
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
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : null
                }`}
                aria-current="page"
                to="/"
              >
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : null
                }`}
                to="/about"
              >
                {props.about}
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {!localStorage.getItem("token") && (
              <Link className="btn btn-primary mx-2" to="/login" role="button">
                Login
              </Link>
            )}
            {!localStorage.getItem("token") && (
              <Link className="btn btn-primary mx-2" to="/signup" role="button">
                Sign Up
              </Link>
            )}
            {localStorage.getItem("token") && (
              <Link
                onClick={logOut}
                className="btn btn-primary mx-2"
                to="/login"
                role="button"
              >
                Log Out
              </Link>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
