import React, { Fragment } from "react";
import OnSale from "./OnSale";
import Featured from "./Featured";

const Home = () => {
  return (
    <Fragment>
      <OnSale />
      <Featured />
    </Fragment>
  );
};

export default Home;
