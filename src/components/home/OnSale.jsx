import React, { Component } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Book from "../Book";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev slick-active"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow slick-next slick-active"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default class OnSale extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    axios
      .get(`http://bookworm-app.test/api/books/top_10_discount`)
      .then((res) => {
        this.setState({ books: res.data });
      });
  }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const { books } = this.state;

    return (
      <div className="p-3">
        <div className="container">
          <header className="mb-5 d-md-flex justify-content-between align-items-center">
            <h3 className="font-size-7 font-weight-bold mb-3 mb-md-0">
              On Sale
            </h3>
            <Link to="/shop">
              <button className="btn btn-secondary">View All</button>
            </Link>
          </header>
          <div className="border px-5">
            <Slider {...settings}>
              {books.map((book) => (
                <li className="col px-3" key={book.id}>
                  <Book
                    book_id={book.id}
                    book_title={book.book_title}
                    author={book.author_name}
                    price={book.sub_price}
                  />
                </li>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
