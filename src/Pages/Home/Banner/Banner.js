import React from "react";
import { Accordion } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 p-5 mt-5   mb-4 " >
              <div className="bg-color p-5"><h3 className="text-light footer-weight ">Book an Appointment</h3>
            <div className="d-flex ">
              <input
                className="mt-2 mb-3 p-3 mx-2   w-75 shadow container"
                placeholder="Your Name*"
                type="text"
              />

              <input
                className="mt-2 mb-3 p-3  w-75 shadow"
                placeholder="Phone*"
                type="text"
              />
            </div>
            <div className="d-flex">
            

              <input
                className="mt-2 mb-3 p-3 mx-2  w-100 shadow"
                placeholder="E-mail*"
                type="text"
              />
            </div>
            <button className="btn-1 mx-2 text-light banner-text ">
              {" "}
              Make An Appointment
            </button></div>
            
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 p-5 footer-weight" >
            <p className="text-info footer-weight">FAQ</p>
            <h3 className=" footer-weight">Have some Question ?</h3>
          
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                  <p className=" footer-weight">
                    What is your appointment policy?
                  </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                  <p className=" footer-weight">
                    What are your regular office hours?
                  </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
