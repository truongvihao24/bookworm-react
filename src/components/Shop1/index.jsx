import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Book from "../Common/Book";
import Filter from "./Filter";
import ControlBar from "./ControlBar";
import {
  categorySelector,
  authorSelector,
  ratingSelector,
  sortSelector,
  limitSelector,
  filtersSelector,
} from "../../redux/selectors";
import Pagination from "react-js-pagination";

const Shop = () => {
  const filtersFromStore = useSelector(filtersSelector);
  const categoryFromStore = useSelector(categorySelector);
  const authorFromStore = useSelector(authorSelector);
  const ratingFromStore = useSelector(ratingSelector);
  const sortFromStore = useSelector(sortSelector);
  const limitFromStore = useSelector(limitSelector);
  const [books, setBooks] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [total, setTotal] = useState(0);

  const [selected, setSelected] = useState([
    categoryFromStore,
    authorFromStore,
    ratingFromStore,
  ]);

  const getAllBooks = (
    category = "",
    author = "",
    rating = "",
    sort = "sale",
    limit = "5",
    pageNumber = 1
  ) => {
    axios
      .get(`http://bookworm-app.test/api/books/shop`, {
        params: {
          category: category,
          author: author,
          rating: rating,
          sortBy: sort,
          limit: limit,
          page: pageNumber,
        },
      })
      .then((res) => {
        setBooks(res.data.data);
        setTotal(res.data.total);
      });

    setActivePage(pageNumber);
  };

  useEffect(() => {
    getAllBooks(
      categoryFromStore,
      authorFromStore,
      ratingFromStore,
      sortFromStore,
      limitFromStore
    );

    setSelected([categoryFromStore, authorFromStore, ratingFromStore]);
  }, [filtersFromStore]);

  return (
    <Fragment>
      <div className="p-3">
        <div className="container">
          <header className="d-md-flex align-items-center">
            <h3 className="font-weight-bold mr-1">Books</h3>
            <h6 className="text-secondary">(Filter by {selected.join(" ")})</h6>
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
                  <li className="col px-1" key={book.id}>
                    <Book
                      book_id={book.id}
                      book_title={book.book_title}
                      author={book.author_name}
                      final_price={book.final_price}
                      book_cover={book.book_cover_photo}
                    />
                  </li>
                ))}
              </ul>
              <div className="row justify-content-center">
                <Pagination
                  activePage={activePage}
                  itemsCountPerPage={Number(limitFromStore)}
                  totalItemsCount={total}
                  pageRangeDisplayed={5}
                  itemClass="page-item"
                  linkClass="page-link"
                  onChange={(pageNumber) =>
                    getAllBooks(
                      categoryFromStore,
                      authorFromStore,
                      ratingFromStore,
                      sortFromStore,
                      limitFromStore,
                      pageNumber
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Shop;
