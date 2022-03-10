import React, { Component, Fragment } from "react";
import OnSale from "./home/OnSale";
import Featured from "./home/Featured";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <OnSale />
        <Featured />
      </Fragment>
    );
  }
}
