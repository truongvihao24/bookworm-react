import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { filtersSlice } from "../../../redux/filtersSlice";

const AccordionRating = () => {
  const dispatch = useDispatch();

  const handleRatingChange = (e) => {
    console.log(e.currentTarget.textContent);
    switch (e.currentTarget.textContent) {
      case "1 star":
        dispatch(filtersSlice.actions.setRatingFilter("1"));
        break;
      case "2 star":
        dispatch(filtersSlice.actions.setRatingFilter("2"));
        break;
      case "3 star":
        dispatch(filtersSlice.actions.setRatingFilter("3"));
        break;
      case "4 star":
        dispatch(filtersSlice.actions.setRatingFilter("4"));
        break;
      case "5 star":
        dispatch(filtersSlice.actions.setRatingFilter("5"));
        break;
      default:
        dispatch(filtersSlice.actions.setRatingFilter(""));
        break;
    }
  };

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
            <a
              href="#/"
              className="row px-3 py-1 text-reset"
              onClick={handleRatingChange}
            >
              All
            </a>
            <a
              href="#/"
              className="row text-center px-3 py-1 text-reset"
              onClick={handleRatingChange}
            >
              1 star
            </a>
            <a
              href="#/"
              className="row text-center px-3 py-1 text-reset"
              onClick={handleRatingChange}
            >
              2 star
            </a>
            <a
              href="#/"
              className="row text-center px-3 py-1 text-reset"
              onClick={handleRatingChange}
            >
              3 star
            </a>
            <a
              href="#/"
              className="row text-center px-3 py-1 text-reset"
              onClick={handleRatingChange}
            >
              4 star
            </a>
            <a
              href="#/"
              className="row text-center px-3 py-1 text-reset"
              onClick={handleRatingChange}
            >
              5 star
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AccordionRating;
