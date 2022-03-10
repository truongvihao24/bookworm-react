import React, { Component, Fragment } from "react";
import Book from "./Book";

export default class Shop extends Component {
  render() {
    return (
      <Fragment>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-one-example1"
            role="tabpanel"
            aria-labelledby="pills-one-example1-tab"
          >
            <ul class="products list-unstyled row no-gutters row-cols-2 row-cols-lg-3 row-cols-wd-4 border-top border-left mb-6">
              <li class="product col">
                <Book />
              </li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="pills-two-example1"
            role="tabpanel"
            aria-labelledby="pills-two-example1-tab"
          >
            <ul class="products list-unstyled mb-6">
              <li class="product product__list">
                <div class="product__inner overflow-hidden p-3 p-md-4d875">
                  <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative">
                    <div class="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0">
                      <a href="../shop/single-product-v1.html" class="d-block">
                        <img
                          src="https://placehold.it/150x226"
                          class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                          alt="image-description"
                        />
                      </a>
                    </div>
                    <div class="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0">
                      <div class="text-uppercase font-size-1 mb-1 text-truncate">
                        <a href="../shop/single-product-v1.html">Paperback</a>
                      </div>
                      <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark">
                        <a href="../shop/single-product-v1.html" tabindex="0">
                          The Overdue Life of Amy Byler
                        </a>
                      </h2>
                      <div class="font-size-2  mb-2 text-truncate">
                        <a
                          href="../others/authors-single.html"
                          class="text-gray-700"
                        >
                          Jay Shetty
                        </a>
                      </div>
                      <p class="font-size-2 mb-2 crop-text-2">
                        After disappearing for three years, Artemis Fowl has
                        returned to a life different from the one he left. And
                        spends his days teaching his twin siblings the
                      </p>
                      <div class="price d-flex align-items-center font-weight-medium font-size-3">
                        <span class="woocommerce-Price-amount amount">
                          <span class="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          29
                        </span>
                      </div>
                    </div>
                    <div class="col-md-auto d-flex align-items-center">
                      <a
                        href="../shop/single-product-v1.html"
                        class="text-uppercase text-dark h-dark font-weight-medium mr-4"
                        data-toggle="tooltip"
                        data-placement="right"
                        title=""
                        data-original-title="ADD TO CART"
                      >
                        <span class="product__add-to-cart">ADD TO CART</span>
                        <span class="product__add-to-cart-icon font-size-4">
                          <i class="flaticon-icon-126515"></i>
                        </span>
                      </a>
                      <a
                        href="../shop/single-product-v1.html"
                        class="mr-1 h-p-bg btn btn-outline-primary border-0"
                      >
                        <i class="flaticon-switch"></i>
                      </a>
                      <a
                        href="../shop/single-product-v1.html"
                        class="h-p-bg btn btn-outline-primary border-0"
                      >
                        <i class="flaticon-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li class="product product__list">
                <div class="product__inner overflow-hidden p-3 p-md-4d875">
                  <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative">
                    <div class="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0">
                      <a href="../shop/single-product-v1.html" class="d-block">
                        <img
                          src="https://placehold.it/150x226"
                          class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                          alt="image-description"
                        />
                      </a>
                    </div>
                    <div class="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0">
                      <div class="text-uppercase font-size-1 mb-1 text-truncate">
                        <a href="../shop/single-product-v1.html">Paperback</a>
                      </div>
                      <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark">
                        <a href="../shop/single-product-v1.html" tabindex="0">
                          All You Can Ever Know: A Memoir
                        </a>
                      </h2>
                      <div class="font-size-2  mb-2 text-truncate">
                        <a
                          href="../others/authors-single.html"
                          class="text-gray-700"
                        >
                          Jay Shetty
                        </a>
                      </div>
                      <p class="font-size-2 mb-2 crop-text-2">
                        After disappearing for three years, Artemis Fowl has
                        returned to a life different from the one he left. And
                        spends his days teaching his twin siblings the
                      </p>
                      <div class="price d-flex align-items-center font-weight-medium font-size-3">
                        <span class="woocommerce-Price-amount amount">
                          <span class="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          29
                        </span>
                      </div>
                    </div>
                    <div class="col-md-auto d-flex align-items-center">
                      <a
                        href="../shop/single-product-v1.html"
                        class="text-uppercase text-dark h-dark font-weight-medium mr-4"
                        data-toggle="tooltip"
                        data-placement="right"
                        title=""
                        data-original-title="ADD TO CART"
                      >
                        <span class="product__add-to-cart">ADD TO CART</span>
                        <span class="product__add-to-cart-icon font-size-4">
                          <i class="flaticon-icon-126515"></i>
                        </span>
                      </a>
                      <a
                        href="../shop/single-product-v1.html"
                        class="mr-1 h-p-bg btn btn-outline-primary border-0"
                      >
                        <i class="flaticon-switch"></i>
                      </a>
                      <a
                        href="../shop/single-product-v1.html"
                        class="h-p-bg btn btn-outline-primary border-0"
                      >
                        <i class="flaticon-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li class="product product__list">
                <div class="product__inner overflow-hidden p-3 p-md-4d875">
                  <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative">
                    <div class="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0">
                      <a href="../shop/single-product-v1.html" class="d-block">
                        <img
                          src="https://placehold.it/150x226"
                          class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                          alt="image-description"
                        />
                      </a>
                    </div>
                    <div class="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0">
                      <div class="text-uppercase font-size-1 mb-1 text-truncate">
                        <a href="../shop/single-product-v1.html">Paperback</a>
                      </div>
                      <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark">
                        <a href="../shop/single-product-v1.html" tabindex="0">
                          The Cinderella Reversal
                        </a>
                      </h2>
                      <div class="font-size-2  mb-2 text-truncate">
                        <a
                          href="../others/authors-single.html"
                          class="text-gray-700"
                        >
                          Jay Shetty
                        </a>
                      </div>
                      <p class="font-size-2 mb-2 crop-text-2">
                        After disappearing for three years, Artemis Fowl has
                        returned to a life different from the one he left. And
                        spends his days teaching his twin siblings the
                      </p>
                      <div class="price d-flex align-items-center font-weight-medium font-size-3">
                        <span class="woocommerce-Price-amount amount">
                          <span class="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          29
                        </span>
                      </div>
                    </div>
                    <div class="col-md-auto d-flex align-items-center">
                      <a
                        href="../shop/single-product-v1.html"
                        class="text-uppercase text-dark h-dark font-weight-medium mr-4"
                        data-toggle="tooltip"
                        data-placement="right"
                        title=""
                        data-original-title="ADD TO CART"
                      >
                        <span class="product__add-to-cart">ADD TO CART</span>
                        <span class="product__add-to-cart-icon font-size-4">
                          <i class="flaticon-icon-126515"></i>
                        </span>
                      </a>
                      <a
                        href="../shop/single-product-v1.html"
                        class="mr-1 h-p-bg btn btn-outline-primary border-0"
                      >
                        <i class="flaticon-switch"></i>
                      </a>
                      <a
                        href="../shop/single-product-v1.html"
                        class="h-p-bg btn btn-outline-primary border-0"
                      >
                        <i class="flaticon-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li class="product product__list">
                <div class="product__inner overflow-hidden p-3 p-md-4d875">
                  <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative">
                    <div class="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0">
                      <a href="../shop/single-product-v1.html" class="d-block">
                        <img
                          src="https://placehold.it/150x226"
                          class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                          alt="image-description"
                        />
                      </a>
                    </div>
                    <div class="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0">
                      <div class="text-uppercase font-size-1 mb-1 text-truncate">
                        <a href="../shop/single-product-v1.html">Paperback</a>
                      </div>
                      <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark">
                        <a href="../shop/single-product-v1.html" tabindex="0">
                          Scot Under the Covers: The Wild Wicked
                        </a>
                      </h2>
                      <div class="font-size-2  mb-2 text-truncate">
                        <a
                          href="../others/authors-single.html"
                          class="text-gray-700"
                        >
                          Jay Shetty
                        </a>
                      </div>
                      <p class="font-size-2 mb-2 crop-text-2">
                        After disappearing for three years, Artemis Fowl has
                        returned to a life different from the one he left. And
                        spends his days teaching his twin siblings the
                      </p>
                      <div class="price d-flex align-items-center font-weight-medium font-size-3">
                        <span class="woocommerce-Price-amount amount">
                          <span class="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          29
                        </span>
                      </div>
                    </div>
                    <div class="col-md-auto d-flex align-items-center">
                      <a
                        href="../shop/single-product-v1.html"
                        class="text-uppercase text-dark h-dark font-weight-medium mr-4"
                        data-toggle="tooltip"
                        data-placement="right"
                        title=""
                        data-original-title="ADD TO CART"
                      >
                        <span class="product__add-to-cart">ADD TO CART</span>
                        <span class="product__add-to-cart-icon font-size-4">
                          <i class="flaticon-icon-126515"></i>
                        </span>
                      </a>
                      <a
                        href="../shop/single-product-v1.html"
                        class="mr-1 h-p-bg btn btn-outline-primary border-0"
                      >
                        <i class="flaticon-switch"></i>
                      </a>
                      <a
                        href="../shop/single-product-v1.html"
                        class="h-p-bg btn btn-outline-primary border-0"
                      >
                        <i class="flaticon-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li class="product product__list">
                <div class="product__inner overflow-hidden p-3 p-md-4d875">
                  <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative">
                    <div class="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0">
                      <a href="../shop/single-product-v1.html" class="d-block">
                        <img
                          src="https://placehold.it/150x226"
                          class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                          alt="image-description"
                        />
                      </a>
                    </div>
                    <div class="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0">
                      <div class="text-uppercase font-size-1 mb-1 text-truncate">
                        <a href="../shop/single-product-v1.html">Paperback</a>
                      </div>
                      <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark">
                        <a href="../shop/single-product-v1.html" tabindex="0">
                          Winter Garden
                        </a>
                      </h2>
                      <div class="font-size-2  mb-2 text-truncate">
                        <a
                          href="../others/authors-single.html"
                          class="text-gray-700"
                        >
                          Jay Shetty
                        </a>
                      </div>
                      <p class="font-size-2 mb-2 crop-text-2">
                        After disappearing for three years, Artemis Fowl has
                        returned to a life different from the one he left. And
                        spends his days teaching his twin siblings the
                      </p>
                      <div class="price d-flex align-items-center font-weight-medium font-size-3">
                        <span class="woocommerce-Price-amount amount">
                          <span class="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          29
                        </span>
                      </div>
                    </div>
                    <div class="col-md-auto d-flex align-items-center">
                      <a
                        href="../shop/single-product-v1.html"
                        class="text-uppercase text-dark h-dark font-weight-medium mr-4"
                        data-toggle="tooltip"
                        data-placement="right"
                        title=""
                        data-original-title="ADD TO CART"
                      >
                        <span class="product__add-to-cart">ADD TO CART</span>
                        <span class="product__add-to-cart-icon font-size-4">
                          <i class="flaticon-icon-126515"></i>
                        </span>
                      </a>
                      <a
                        href="../shop/single-product-v1.html"
                        class="mr-1 h-p-bg btn btn-outline-primary border-0"
                      >
                        <i class="flaticon-switch"></i>
                      </a>
                      <a
                        href="../shop/single-product-v1.html"
                        class="h-p-bg btn btn-outline-primary border-0"
                      >
                        <i class="flaticon-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li class="product product__list">
                <div class="product__inner overflow-hidden p-3 p-md-4d875">
                  <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative">
                    <div class="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0">
                      <a href="../shop/single-product-v1.html" class="d-block">
                        <img
                          src="https://placehold.it/150x226"
                          class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                          alt="image-description"
                        />
                      </a>
                    </div>
                    <div class="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0">
                      <div class="text-uppercase font-size-1 mb-1 text-truncate">
                        <a href="../shop/single-product-v1.html">Paperback</a>
                      </div>
                      <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark">
                        <a href="../shop/single-product-v1.html" tabindex="0">
                          Call Me By Your Name
                        </a>
                      </h2>
                      <div class="font-size-2  mb-2 text-truncate">
                        <a
                          href="../others/authors-single.html"
                          class="text-gray-700"
                        >
                          Jay Shetty
                        </a>
                      </div>
                      <p class="font-size-2 mb-2 crop-text-2">
                        After disappearing for three years, Artemis Fowl has
                        returned to a life different from the one he left. And
                        spends his days teaching his twin siblings the
                      </p>
                      <div class="price d-flex align-items-center font-weight-medium font-size-3">
                        <span class="woocommerce-Price-amount amount">
                          <span class="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          29
                        </span>
                      </div>
                    </div>
                    <div class="col-md-auto d-flex align-items-center">
                      <a
                        href="../shop/single-product-v1.html"
                        class="text-uppercase text-dark h-dark font-weight-medium mr-4"
                        data-toggle="tooltip"
                        data-placement="right"
                        title=""
                        data-original-title="ADD TO CART"
                      >
                        <span class="product__add-to-cart">ADD TO CART</span>
                        <span class="product__add-to-cart-icon font-size-4">
                          <i class="flaticon-icon-126515"></i>
                        </span>
                      </a>
                      <a
                        href="../shop/single-product-v1.html"
                        class="mr-1 h-p-bg btn btn-outline-primary border-0"
                      >
                        <i class="flaticon-switch"></i>
                      </a>
                      <a
                        href="../shop/single-product-v1.html"
                        class="h-p-bg btn btn-outline-primary border-0"
                      >
                        <i class="flaticon-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}
