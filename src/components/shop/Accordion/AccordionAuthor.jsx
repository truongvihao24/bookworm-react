import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AccordionAuthor = () => {
  const [authors, setAuthors] = useState([]);

  const getAllAuthors = () => {
    axios.get(`http://bookworm-app.test/api/authors`).then((res) => {
      setAuthors(res.data);
    });
  };

  useEffect(() => {
    getAllAuthors();
  }, []);

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
            {authors.map((author) => (
              <Link
                to="/shop"
                className="row text-center px-3 py-1 text-reset"
                key={author.id}
              >
                {author.author_name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AccordionAuthor;
