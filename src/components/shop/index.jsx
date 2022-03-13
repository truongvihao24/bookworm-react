import React, { Fragment, useEffect, useState } from "react";
import Book from "../Common/Book";
import Filter from "./Filter";
import ControlBar from "./ControlBar";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  categorySelector,
  authorSelector,
  ratingSelector,
  sortSelector,
  limitSelector,
  filtersSelector,
} from "../../redux/selectors";

const Shop = () => {
  const filtersFromStore = useSelector(filtersSelector);
  const categoryFromStore = useSelector(categorySelector);
  const authorFromStore = useSelector(authorSelector);
  const ratingFromStore = useSelector(ratingSelector);
  const sortFromStore = useSelector(sortSelector);
  const limitFromStore = useSelector(limitSelector);
  const [books, setBooks] = useState([]);

  const getAllBooks = (
    category = "",
    author = "",
    rating = "",
    sort = "sale",
    limit = "5"
  ) => {
    axios
      .get(`http://bookworm-app.test/api/books`, {
        params: {
          sortBy: sort,
          limit: limit,
        },
      })
      .then((res) => {
        setBooks(res.data.data);
      });
  };

  useEffect(() => {
    getAllBooks(
      categoryFromStore,
      authorFromStore,
      ratingFromStore,
      sortFromStore,
      limitFromStore
    );
    console.log("Updated");
  }, [filtersFromStore]);

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
            <Filter />
          </div>
          <div className="col-9">
            <ControlBar />

            <ul className="list-unstyled row row-cols-3 row-cols-lg-4 row-cols-wd-4 mb-6">
              {books.map((book) => (
                <li className="col px-3" key={book.id}>
                  <Book
                    book_id={book.id}
                    book_title={book.book_title}
                    author={book.author_name}
                    price={book.final_price}
                  />
                </li>
              ))}
            </ul>
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
      </div>
    </Fragment>
  );
};

export default Shop;
