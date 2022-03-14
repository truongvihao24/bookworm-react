import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { filtersSlice } from "../../../redux/filtersSlice";

const AccordionCatgory = () => {
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);

  const getAllCategories = () => {
    axios.get(`http://bookworm-app.test/api/categories`).then((res) => {
      setCategories(res.data);
    });
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const handleCategoryChange = (e) => {
    console.log(e.currentTarget.textContent);
    if (e.currentTarget.textContent == "All") {
      dispatch(filtersSlice.actions.setCategoryFilter(""));
    } else {
      dispatch(
        filtersSlice.actions.setCategoryFilter(e.currentTarget.textContent)
      );
    }
  };

  return (
    <Fragment>
      <div className="card border mb-3">
        <h2 className="mb-0">
          <button
            className="btn btn-block text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Category
          </button>
        </h2>

        <div
          id="collapseOne"
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body mx-5 p-0 pb-3">
            <a
              href="#/"
              className="row px-3 py-1 text-reset"
              onClick={handleCategoryChange}
            >
              All
            </a>
            {categories.map((category) => (
              <a
                href="#/"
                className="row text-center px-3 py-1 text-reset"
                key={category.id}
                onClick={handleCategoryChange}
              >
                {category.category_name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AccordionCatgory;
