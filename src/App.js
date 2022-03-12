import React, { Component, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/common/Nav";
import Home from "./components/home";
import Shop from "./components/shop";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/shop/:id" element={<Shop />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}
