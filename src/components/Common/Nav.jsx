import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <Fragment>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand" href="#">
            <img
              src="http://bookworm-app.test/assets/bookworm_icon.svg"
              className="d-inline-block align-top img-fluid"
              alt=""
            />
          </Link>
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
              <NavLink to="/">
                <li className="nav-item nav-link">Home</li>
              </NavLink>
              <NavLink to="/shop">
                <li className="nav-item nav-link">Shop</li>
              </NavLink>
              <NavLink to="/about">
                <li className="nav-item nav-link">About</li>
              </NavLink>
              <NavLink to="/cart">
                <li className="nav-item nav-link">Cart (0)</li>
              </NavLink>
              <Link to="#/" data-toggle="modal" data-target="#exampleModal">
                <li className="nav-item nav-link">Sign In</li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Please sign in
              </h5>
            </div>
            <div className="modal-body">
              <form className="form-signin">
                <label htmlFor="inputEmail" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control my-3"
                  placeholder="Email address"
                  required=""
                  autoFocus=""
                />
                <label htmlFor="inputPassword" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  required=""
                />
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
