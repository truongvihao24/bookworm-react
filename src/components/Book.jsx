import React, { Component } from "react";

export default class Book extends Component {
  render() {
    return (
      <div className="overflow-hidden py-3">
        <div className="card">
          <div className="d-block position-relative">
            <img
              src="https://via.placeholder.com/126x196?text=+"
              className="card-img-top img-fluid d-block mx-auto "
              alt="image-description"
            />
            <div class="card-body">
              <h5>
                <a href="../shop/single-product-v1.html" className="card-title">
                  The Overdue Life of Amy Byler
                </a>
              </h5>
              <a href="others/authors-single.html" className="card-text">
                Jay Shetty
              </a>
              <p className="card-text">$29</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
