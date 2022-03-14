import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { itemsCountSelector } from "../../redux/selectors";

const Nav = () => {
  const itemsCountFromStore = useSelector(itemsCountSelector);

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
                <li className="nav-item nav-link">
                  Cart ({itemsCountFromStore})
                </li>
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
              <form class="form-signin">
                <label for="inputEmail" class="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Email address"
                  required=""
                  autofocus=""
                />
                <label for="inputPassword" class="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  required=""
                />
              </form>
            </div>
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
