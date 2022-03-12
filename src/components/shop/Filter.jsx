import React, { Component, Fragment } from "react";
import AccordionCatgory from "./AccordionCatgory";
import AccordionAuthor from "./AccordionAuthor";
import AccordionRating from "./AccordionRating";

export default class Filter extends Component {
  render() {
    return (
      <Fragment>
        <div className="accordion" id="accordionExample">
          <h6 className="mb-3">Filter By</h6>
          <AccordionCatgory />
          <AccordionAuthor />
          <AccordionRating />
        </div>
      </Fragment>
    );
  }
}
