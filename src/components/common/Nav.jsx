import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="https://via.placeholder.com/32?text=+"
            width="32"
            height="32"
            className="d-inline-block align-top"
            alt=""
          />
          <span className="font-weight-bold offset-1">BOOKWORM</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <Link to="">
              <li className="nav-item nav-link active">Home</li>
            </Link>
            <Link to="/shop">
              <li className="nav-item nav-link">Shop</li>
            </Link>
            <Link to="">
              <li className="nav-item nav-link">About</li>
            </Link>
            <Link to="">
              <li className="nav-item nav-link">Cart (0)</li>
            </Link>
            <Link to="">
              <li className="nav-item nav-link">Sign In</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
