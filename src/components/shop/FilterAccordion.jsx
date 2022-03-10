import React, { Component, Fragment } from "react";

export default class FilterAccordion extends Component {
  render() {
    return (
      <Fragment>
        <div className="accordion" id="accordionExample">
          <h6 className="mb-3">Filter By</h6>
          <div className="card border mb-3">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Category
              </button>
            </h2>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body mx-5 p-0 pb-3">
                <a href=".." className="row text-center">
                  Category #1
                </a>
                <a href=".." className="row text-center">
                  Category #2
                </a>
                <a href=".." className="row text-center">
                  Category #3
                </a>
                <a href=".." className="row text-center">
                  Category #4
                </a>
                <a href=".." className="row text-center">
                  Category #5
                </a>
              </div>
            </div>
          </div>
          <div className="card border mb-3">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                Author
              </button>
            </h2>

            <div
              id="collapseTwo"
              className="collapse show"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body mx-5 p-0 pb-3">
                <a href=".." className="row text-center">
                  Author #1
                </a>
                <a href=".." className="row text-center">
                  Author #2
                </a>
                <a href=".." className="row text-center">
                  Author #3
                </a>
                <a href=".." className="row text-center">
                  Author #4
                </a>
                <a href=".." className="row text-center">
                  Author #5
                </a>
              </div>
            </div>
          </div>
          <div className="card border mb-3">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                Rating Review
              </button>
            </h2>

            <div
              id="collapseThree"
              className="collapse show"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body mx-5 p-0 pb-3">
                <a href=".." className="row text-center">
                  1 star
                </a>
                <a href=".." className="row text-center">
                  2 star
                </a>
                <a href=".." className="row text-center">
                  3 star
                </a>
                <a href=".." className="row text-center">
                  4 star
                </a>
                <a href=".." className="row text-center">
                  5 star
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
