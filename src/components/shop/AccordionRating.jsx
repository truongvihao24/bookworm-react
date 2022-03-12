import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const AccordionRating = () => {
  return (
    <Fragment>
      <div className="card border mb-3">
        <h2 className="mb-0">
          <button
            className="btn btn-block text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Rating Review
          </button>
        </h2>

        <div
          id="collapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div className="card-body mx-5 p-0 pb-3">
            <Link to="/shop" className="row text-center px-3 py-1 text-reset">
              1 star
            </Link>
            <Link to="/shop" className="row text-center px-3 py-1 text-reset">
              2 star
            </Link>
            <Link to="/shop" className="row text-center px-3 py-1 text-reset">
              3 star
            </Link>
            <Link to="/shop" className="row text-center px-3 py-1 text-reset">
              4 star
            </Link>
            <Link to="/shop" className="row text-center px-3 py-1 text-reset">
              5 star
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AccordionRating;
