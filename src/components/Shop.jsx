import React, { Fragment } from "react";
import Book from "./Book";
import ControlBar from "./shop/ControlBar";
import FilterAccordion from "./shop/FilterAccordion";

const Shop = () => {
  return (
    <Fragment>
      <div className="container">
        <header className="d-md-flex align-items-center">
          <h3 className="font-weight-bold mr-1">Books</h3>
          <h6 className="text-secondary">(Filter by Category #)</h6>
        </header>
        <hr />
        <div className="row mt-5">
          <div className="col-3">
            <FilterAccordion />
          </div>
          <div className="col-9">
            <ControlBar />

            <ul className="list-unstyled row row-cols-3 row-cols-lg-4 row-cols-wd-4 mb-6">
              <li className="col">
                <Book />
              </li>
              <li className="col">
                <Book />
              </li>
              <li className="col">
                <Book />
              </li>

              <li className="col">
                <Book />
              </li>
              <li className="col">
                <Book />
              </li>
              <li className="col">
                <Book />
              </li>
              <li className="col">
                <Book />
              </li>
              <li className="col">
                <Book />
              </li>
            </ul>
            <div className="row justify-content-center">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Shop;
