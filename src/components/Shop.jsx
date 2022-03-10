import React, { Fragment } from "react";
import Book from "./Book";
import ControlBar from "./shop/ControlBar";
import FilterAccordion from "./shop/FilterAccordion";

const Shop = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Shop;
