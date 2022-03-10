import React, { Component } from "react";
import Slider from "react-slick";
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
  constructor() {
    super();

    this.state = {
      books: [],
    };
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
            <h2 className="font-size-7 mb-3 mb-md-0">On Sale</h2>
            <button href="../shop/v1.html" className="btn btn-secondary">
              View All
            </button>
          </header>
          <div className="border">
            <Slider {...settings}>
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
              {/* {books.map((book) => (
                
              ))} */}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
