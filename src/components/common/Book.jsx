import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
  return (
    <Fragment>
      <div className="overflow-hidden py-3">
        <div className="card">
          <div className="d-block position-relative">
            <img
              src="https://via.placeholder.com/126x196?text=+"
              className="card-img-top img-fluid d-block mx-auto "
              alt=""
            />
            <div className="card-body">
              <h5>
                <Link
                  to={`/books/${props.book_id}`}
                  className="card-title d-block text-truncate"
                >
                  {props.book_title}
                </Link>
              </h5>
              <a
                href="others/authors-single.html"
                className="card-text d-block text-truncate"
              >
                {props.author}
              </a>
              <p className="card-text">${props.price}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Book;
