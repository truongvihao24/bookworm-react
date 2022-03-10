import React, { Component, Fragment } from "react";
import axios from "axios";
import OnSale from "./home/OnSale";
import Featured from "./home/Featured";

export default class Home extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1/api/books`).then((res) => {
      const books = res.data;
      this.setState({ books });
    });
  }

  render() {
    return (
      <Fragment>
        <OnSale />
        <Featured />
      </Fragment>
    );
  }
}
