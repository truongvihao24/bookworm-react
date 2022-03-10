import React, { Component, Fragment } from "react";
import Book from "../Book";

export class Featured extends Component {
  render() {
    return (
      <Fragment>
        <div className="p-3">
          <header className="mb-4 container mx-auto">
            <h2 className="font-size-7 text-center">Featured Books</h2>
          </header>
          <div className="container">
            <ul
              className="nav justify-content-md-center nav-gray-700 mb-5 flex-nowrap flex-md-wrap overflow-auto overflow-md-visible"
              id="featuredBooks"
              role="tablist"
            >
              <li className="nav-item mx-5 mb-1 flex-shrink-0 flex-md-shrink-1">
                <a
                  className="nav-link px-0 active"
                  id="featured-tab"
                  data-toggle="tab"
                  href="#featured"
                  role="tab"
                  aria-controls="featured"
                  aria-selected="true"
                >
                  Recommended
                </a>
              </li>
              <li className="nav-item mx-5 mb-1 flex-shrink-0 flex-md-shrink-1">
                <a
                  className="nav-link px-0"
                  id="onsale-tab"
                  data-toggle="tab"
                  href="#onsale"
                  role="tab"
                  aria-controls="onsale"
                  aria-selected="false"
                >
                  Popular
                </a>
              </li>
            </ul>
            <div className="tab-content" id="featuredBooksContent">
              <div
                className="tab-pane fade show active"
                id="featured"
                role="tabpanel"
                aria-labelledby="featured-tab"
              >
                <ul className="products list-unstyled row no-gutters row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-wd-6 border my-0 px-5">
                  <li className="product col px-3">
                    <Book />
                  </li>
                  <li className="product col px-3">
                    <Book />
                  </li>
                  <li className="product col px-3">
                    <Book />
                  </li>
                  <li className="product col px-3">
                    <Book />
                  </li>
                  <li className="product col px-3">
                    <Book />
                  </li>
                  <li className="product col px-3">
                    <Book />
                  </li>
                  <li className="product col px-3">
                    <Book />
                  </li>
                  <li className="product col px-3">
                    <Book />
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="onsale"
                role="tabpanel"
                aria-labelledby="onsale-tab"
              >
                <ul className="products list-unstyled row no-gutters row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-wd-6 border-top border-left my-0">
                  <li className="product col">
                    <Book />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Featured;
