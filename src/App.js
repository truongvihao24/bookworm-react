import React, { Component, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filter from "./components/shop/FilterAccordion";
import Header from "./components/common/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import FilterAccordion from "./components/shop/FilterAccordion";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Shop />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}
