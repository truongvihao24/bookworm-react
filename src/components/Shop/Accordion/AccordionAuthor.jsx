import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { filtersSlice } from "../../../redux/filtersSlice";

const AccordionAuthor = () => {
  const dispatch = useDispatch();
  const [authors, setAuthors] = useState([]);

  const getAllAuthors = () => {
    axios.get(`http://bookworm-app.test/api/authors`).then((res) => {
      setAuthors(res.data);
    });
  };

  useEffect(() => {
    getAllAuthors();
  }, []);

  const handleAuthorChange = (e) => {
    console.log(e.currentTarget.textContent);
    if (e.currentTarget.textContent == "All") {
      dispatch(filtersSlice.actions.setAuthorFilter(""));
    } else {
      dispatch(
        filtersSlice.actions.setAuthorFilter(e.currentTarget.textContent)
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
            data-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Author
          </button>
        </h2>

        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div className="card-body mx-5 p-0 pb-3">
            <a
              href="#/"
              className="row px-3 py-1 text-reset"
              onClick={handleAuthorChange}
            >
              All
            </a>
            {authors.map((author) => (
              <a
                href="#/"
                className="row px-3 py-1 text-reset"
                key={author.id}
                onClick={handleAuthorChange}
              >
                {author.author_name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AccordionAuthor;
