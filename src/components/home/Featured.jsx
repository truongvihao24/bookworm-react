import React, { Component, Fragment } from "react";
import axios from "axios";
import Book from "../Book";

export class Featured extends Component {
  state = {
    recommended: [],
    mostReviews: [],
  };

  componentDidMount() {
    axios
      .get(`http://bookworm-app.test/api/books/top_8_recommended`)
      .then((res) => {
        this.setState({ recommended: res.data });
      });

    axios
      .get(`http://bookworm-app.test/api/books/top_8_most_reviews`)
      .then((res) => {
        this.setState({ mostReviews: res.data });
      });
  }

  render() {
    const { recommended, mostReviews } = this.state;

    return (
      <Fragment>
        <div className="p-3">
          <header className="mb-4 container mx-auto">
            <h2 className="font-size-7 text-center">Featured Books</h2>
          </header>
          <div className="container">
            <ul
              className="nav justify-content-md-center nav-gray-700 mb-5 flex-nowrap flex-md-wrap overflow-auto overflow-md-visible"
              id="featuredBooks"
              role="tablist"
            >
              <li className="nav-item mx-3 mb-1 flex-shrink-0 flex-md-shrink-1">
                <a
                  className="nav-link px-0 active"
                  id="recommended-tab"
                  data-toggle="tab"
                  href="#recommended"
                  role="tab"
                  aria-controls="recommended"
                  aria-selected="true"
                >
                  Recommended
                </a>
              </li>
              <li className="nav-item mx-3 mb-1 flex-shrink-0 flex-md-shrink-1">
                <a
                  className="nav-link px-0"
                  id="popular-tab"
                  data-toggle="tab"
                  href="#popular"
                  role="tab"
                  aria-controls="popular"
                  aria-selected="false"
                >
                  Popular
                </a>
              </li>
            </ul>
            <div className="tab-content" id="featuredBooksContent">
              <div
                className="tab-pane fade show active"
                id="recommended"
                role="tabpanel"
                aria-labelledby="recommended-tab"
              >
                <ul className="list-unstyled row no-gutters row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-wd-6 border my-0 px-5">
                  {recommended.map((book) => (
                    <li className="col px-3" key={book.id}>
                      <Book
                        book_title={book.book_title}
                        author={book.author_name}
                        price={book.final_price}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="popular"
                role="tabpanel"
                aria-labelledby="popular-tab"
              >
                <ul className="list-unstyled row no-gutters row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-wd-6 border my-0 px-5">
                  {mostReviews.map((book) => (
                    <li className="col px-3" key={book.id}>
                      <Book
                        book_title={book.book_title}
                        author={book.author_name}
                        price={book.final_price}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Featured;
