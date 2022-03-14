import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Reviews from "./Reviews";
import { itemsListSelector } from "../../redux/selectors";
import { cartSlice } from "../../redux/cartSlice";

const DetailedBook = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  const getBook = () => {
    axios.get(`http://bookworm-app.test/api/books/shop/${id}`).then((res) => {
      setBook(res.data);
    });
  };

  useEffect(() => {
    getBook();
  }, []);

  const [quantity, setQuantity] = useState(0);
  const incQuantity = () => {
    if (quantity < 8) {
      setQuantity(Number(quantity) + 1);
    }
  };
  const decQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handleQuantityChange = (e) => {
    if (e.target.value > 8) {
      e.target.value = 8;
    }

    if (e.target.value < 0) {
      e.target.value = 0;
    }

    setQuantity(e.target.value);
  };

  const dispatch = useDispatch();

  const itemsListFromStore = useSelector(itemsListSelector);
  // console.log(itemsListFromStore);

  const handleAddToCart = (id, title, price, quantity) => {
    // console.log(e.target);
    dispatch(cartSlice.actions.addToCart({ id, title, price, quantity }));
  };

  // const handleAddToCart = (id, title, price, quantity) => {
  //   dispatch(cartSlice.actions.addToCart({ id, title, price, quantity }));
  // };

  return (
    <Fragment>
      <div className="container mt-5 mb-6">
        <header className="d-md-flex align-items-center">
          <h3 className="font-weight-bold mr-1">{book.category_name}</h3>
        </header>
        <hr />
        <div className="row mt-3">
          <div className="border col-md-12 col-lg-8">
            <div className="row">
              <div className="col-md-4 col-lg-3 m-3">
                <div className="row">
                  <img
                    src={
                      book.book_cover_photo
                        ? `http://bookworm-app.test/assets/bookcover/${book.book_cover_photo}.jpg`
                        : "https://via.placeholder.com/394x499?text=+"
                    }
                    className="card-img-top h-100 border"
                    alt=""
                  />
                </div>
                <div className="row justify-content-center py-1">
                  <p>By {book.author_name}</p>
                </div>
              </div>
              <div className="col-md-8 col-lg-8">
                <header className="d-md-flex align-items-center py-3">
                  <h3 className="font-weight-bold mr-1">{book.book_title}</h3>
                </header>
                <p className="p-0 m-0">Book Description</p>
                <p className="pb-3">{book.book_summary}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title px-5 pb-2">
                  {book.sub_price && (
                    <Fragment>
                      <del className="h5 text-secondary">${book.sub_price}</del>
                      <span>&nbsp;</span>
                    </Fragment>
                  )}
                  <strong className="h3">${book.final_price}</strong>
                </div>
                <h5 className="card-title px-5">Quantity</h5>
                <div className="input-group px-5 pb-3">
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      onClick={decQuantity}
                    >
                      -
                    </button>
                  </div>
                  <input
                    type="number"
                    className="form-control text-center border-primary"
                    value={quantity}
                    onChange={handleQuantityChange}
                    maxLength="1"
                    minLength="0"
                  />
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      onClick={incQuantity}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-block btn-primary"
                    onClick={handleAddToCart(
                      book.id,
                      book.book_title,
                      book.final_price,
                      quantity
                    )}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailedBook;
