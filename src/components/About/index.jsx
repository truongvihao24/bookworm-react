import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className="p-3">
        <div className="container">
          <header className="d-md-flex align-items-center">
            <h3 className="font-weight-bold mr-1">About Us</h3>
          </header>
          <hr />
          <div className="bg-white mt-n10 mt-md-n13 pt-5 pt-lg-7 px-3 px-md-5 pl-xl-10 pr-xl-4 mx-10 px-5">
            <div className="mb-4 mb-lg-7 ml-xl-4">
              <h1 className="font-weight-bold font-size-10 mb-4 mb-lg-7 text-center">
                Welcome to Bookworm
              </h1>
              <p className="font-weight-medium">
                "Bookworm is an independent New York bookstore and language
                school with locations in Manhattan and Brooklyn. We specialize
                in travel books and language classes"
              </p>
            </div>
            <div className="ml-xl-4">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="font-weight-bold font-size-4">Our Story</h2>

                  <p className="font-size-2">
                    The name Bookworm was taken from the original name for New
                    York Internation Airport, which was renamed JFK in December
                    1963.
                  </p>

                  <p className="font-size-2">
                    Our Manhattan store has just moved to the West Village. Our
                    new location is 170 7th Avenue South, at the corner of Perry
                    Street.
                  </p>

                  <p className="font-size-2">
                    From March 2008 through May 2016, the store was located in
                    the Flatiron District.
                  </p>
                </div>
                <div className="col-md-6">
                  <h2 className="font-weight-bold font-size-4">Our Vision</h2>
                  <p className="font-size-2">
                    One of the last travel bookstores in the country, our
                    Manhattan store carries a range of guidebooks (all 10% off)
                    to suit the needs and tastes of every traveler and budget.
                  </p>
                  <p className="font-size-2">
                    We believe that a novel of travelogue can be just as
                    valuable a key to a place as any guidebook, and our
                    well-read, well-traveled staff is happy to make reading
                    recommendations for any traveler, book lover, or gift giver.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
