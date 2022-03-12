import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AccordionCatgory = () => {
  const [categories, setCategories] = useState([]);

  const getAllCategories = () => {
    axios.get(`http://bookworm-app.test/api/categories`).then((res) => {
      setCategories(res.data);
    });
  };

  useEffect(() => {
    getAllCategories();
  }, []);

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
            {categories.map((category) => (
              <Link
                to="/shop"
                className="row text-center px-3 py-1 text-reset"
                key={category.id}
              >
                {category.category_name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AccordionCatgory;
