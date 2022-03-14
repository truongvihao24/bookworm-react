import React, { Fragment } from "react";

const Reviews = () => {
  return (
    <Fragment>
      <div className="row mt-5">
        {/* <div className="col-3">
          <Filter />
        </div> */}
        <div className="col-9">
          {/* <ControlBar /> */}

          {/* <ul className="list-unstyled row row-cols-3 row-cols-lg-4 row-cols-wd-4 mb-6">
            {books.map((book) => (
              <li className="col px-1" key={book.id}>
                <Book
                  book_id={book.id}
                  book_title={book.book_title}
                  author={book.author_name}
                  price={book.final_price}
                  book_cover={book.book_cover_photo}
                />
              </li>
            ))}
          </ul> */}
          <div className="row justify-content-center">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="..">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="..">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="..">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="..">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="..">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Reviews;
