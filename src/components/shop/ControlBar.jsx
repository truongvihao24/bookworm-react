import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { filtersSlice } from "../../redux/filtersSlice";

const ControlBar = () => {
  const dispatch = useDispatch();

  const [sort, setSort] = useState("Sort by on sale");
  const [limit, setLimit] = useState("5");

  const handleSortChange = (e) => {
    setSort(e.target.textContent);
    dispatch(filtersSlice.actions.setSort(e.target.getAttribute("value")));
  };

  const handleLimitChange = (e) => {
    setLimit(e.currentTarget.textContent);
    dispatch(filtersSlice.actions.setLimit(e.currentTarget.textContent));
  };

  return (
    <Fragment>
      <div className="d-lg-flex justify-content-between align-items-center text-center text-md-left pb-3">
        <div className="mb-4 m-lg-0">
          <p className="m-0">Showing 1–12 of 126 results</p>
        </div>
        <div className="d-md-flex align-items-center">
          <div className="dropdown mr-3">
            <a
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              {sort}
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a
                href="#"
                className="dropdown-item"
                value="sale"
                onClick={handleSortChange}
              >
                Sort by on sale
              </a>
              <a
                href="#"
                className="dropdown-item"
                value="popular"
                onClick={handleSortChange}
              >
                Sort by popular
              </a>
              <a
                href="#"
                className="dropdown-item"
                value="priceASC"
                onClick={handleSortChange}
              >
                Sort by price: low to high
              </a>
              <a
                href="#"
                className="dropdown-item"
                value="priceDESC"
                onClick={handleSortChange}
              >
                Sort by price: high to low
              </a>
            </div>
          </div>
          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Show: {limit}
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a href="#" className="dropdown-item" onClick={handleLimitChange}>
                5
              </a>
              <a href="#" className="dropdown-item" onClick={handleLimitChange}>
                15
              </a>
              <a href="#" className="dropdown-item" onClick={handleLimitChange}>
                20
              </a>
              <a href="#" className="dropdown-item" onClick={handleLimitChange}>
                25
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ControlBar;
