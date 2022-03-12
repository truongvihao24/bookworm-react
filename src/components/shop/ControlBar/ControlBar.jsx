import React, { Component, Fragment } from "react";

export class ControlBar extends Component {
  render() {
    return (
      <Fragment>
        <div className="d-lg-flex justify-content-between align-items-center text-center text-md-left pb-3">
          <div className="mb-4 m-lg-0">
            <p className="m-0">Showing 1–12 of 126 results</p>
          </div>
          <div className="d-md-flex align-items-center">
            <div className="dropdown mr-3">
              <a
                className="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Sort by on sale
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                  Sort by on sale
                </a>
                <a className="dropdown-item" href="#">
                  Sort by popular
                </a>
                <a className="dropdown-item" href="#">
                  Sort by price: low to high
                </a>

                <a className="dropdown-item" href="#">
                  Sort by popular
                </a>
                <a className="dropdown-item" href="#">
                  Sort by price: high to low
                </a>
              </div>
            </div>
            <div className="dropdown">
              <a
                className="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Show: 5
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                  5
                </a>
                <a className="dropdown-item" href="#">
                  15
                </a>
                <a className="dropdown-item" href="#">
                  20
                </a>
                <a className="dropdown-item" href="#">
                  25
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ControlBar;
