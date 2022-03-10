import React, { Fragment } from "react";

const Book = (props) => {
  return (
    <Fragment>
      <div className="overflow-hidden py-3">
        <div className="card">
          <div className="d-block position-relative">
            <img
              src="https://via.placeholder.com/126x196?text=+"
              className="card-img-top img-fluid d-block mx-auto "
              alt="image-description"
            />
            <div className="card-body">
              <h5>
                <a
                  href="../shop/single-product-v1.html"
                  className="card-title d-block text-truncate"
                >
                  {props.book_title}
                </a>
              </h5>
              <a href="others/authors-single.html" className="card-text">
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
