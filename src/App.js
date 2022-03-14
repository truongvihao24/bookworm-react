import React, { Component, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Common/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import DetailedBook from "./components/DetailedBook";
import Footer from "./components/Common/Footer";
import About from "./components/About";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/shop/:id" element={<DetailedBook />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Fragment>
    );
  }
}
