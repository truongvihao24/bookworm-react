import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
  return (
    <Fragment>
      <div className="col overflow-hidden py-3">
        <div className="card h-100">
          <div className="d-block position-relative">
            <img
              src={
                props.book_cover
                  ? `http://bookworm-app.test/assets/bookcover/${props.book_cover}.jpg`
                  : "https://via.placeholder.com/394x499?text=+"
              }
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5>
                <Link
                  to={`/shop/${props.book_id}`}
                  className="card-title d-block text-truncate"
                >
                  {props.book_title}
                </Link>
              </h5>
              <p className="card-text d-block text-truncate">{props.author}</p>
              <p className="card-text">
                {props.sub_price && (
                  <Fragment>
                    <del className="text-secondary">${props.price}</del>
                    <span>&nbsp;</span>
                  </Fragment>
                )}
                ${props.final_price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Book;
