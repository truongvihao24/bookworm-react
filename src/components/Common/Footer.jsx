import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer
        className="pt-4 my-md-5 pt-md-5 border-top"
        style={{ minHeight: "20vh" }}
      >
        <div className="row">
          <div>
            <img
              src="http://bookworm-app.test/assets/bookworm_icon.svg"
              className="ml-5 pl-5"
              alt=""
            />
          </div>
          <div className="col-3 col-md ">
            <h5>Bookworm</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#/">
                  Address
                </a>
              </li>
              <li>
                <a className="text-muted" href="#/">
                  Phone
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
