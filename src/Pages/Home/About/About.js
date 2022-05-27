import React from "react";
import medical from "../imges/medical.jpg";
import { Accordion } from "react-bootstrap";
import CountUp from "react-countup";
import { BsHandThumbsUp } from "react-icons/bs";
import { SiWorldhealthorganization } from "react-icons/si";
import { IoPeopleOutline } from "react-icons/io5";
import {
  FaRegCalendarAlt,
  FaRegSmileBeam,
  FaPeopleArrows,
} from "react-icons/fa";
import dc4 from "../imges/dc4.jpg";
import dc1 from "../imges/dc1.jpg";
import dc2 from "../imges/dc2.jpg";
import dc7 from "../imges/dc7.jpg";
import dc8 from "../imges/dc8.jpg";
import dc5 from "../imges/dc5.jpg";
import dc9 from "../imges/dc9.jpg";
import dc3 from "../imges/dc3.jpg";
import Cardiologist from "../imges/Cardiologist.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="">
        <div className="container">
          <div className="row p-5 footer-weight">
            <p className=" footer-weight text-primary">Professional</p>
            <h3 className=" footer-weight">Welcome to Our Medical Clinic</h3>
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <img className="w-100 p-2 shadow " src={medical} alt="" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mt-5" >
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {" "}
                    <p className=" footer-weight">Who we are?</p>
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
                    {" "}
                    <p className=" footer-weight">Qualified Doctors ?</p>
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
      </div>
      <div className="bg-color p-5 mb-5">
        <div className="container  ">
          <div className="row text-light footer-weight ">
            <div className="col-lg-2 col-md-6 col-sm-6">
              <BsHandThumbsUp className="mb-4" size="40" />
              <h1>
                <CountUp duration={1} end={100} />%
              </h1>
              <p>Quality</p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <SiWorldhealthorganization className="mb-4" size="40" />
              <h1>
                <CountUp duration={1} end={2480} />
              </h1>
              <p>Health Care</p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <IoPeopleOutline className="mb-4" size="40" />
              <h1>
                <CountUp duration={1} end={100} />
              </h1>
              <p>People working</p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <FaRegCalendarAlt className="mb-4" size="40" />
              <h1>
                <CountUp duration={1} end={50} />
              </h1>
              <p>Years of experience</p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <FaRegSmileBeam className="mb-4" size="40" />
              <h1>
                <CountUp duration={100} end={7856} />
              </h1>
              <p>Happy Smiles</p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <FaPeopleArrows className="mb-4" size="40" />
              <h1>
                <CountUp duration={100} end={10000} />
              </h1>
              <p>Patients a year</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row">
          <h1 className="text-center pragraph-weight p-5">
            Our Hospital Best Doctors
          </h1>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
            <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={dc4} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-center pragraph-weight">Dr.Ovika</h3>
                <p className="text-center pragraph-weight">Neourologist</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={dc1} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-center pragraph-weight">Dr.Ritash</h3>
                <p className="text-center pragraph-weight">
                  Heard Cardiologist
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
            <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={dc2} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-center pragraph-weight">Dr.Vibak</h3>
                <p className="text-center pragraph-weight">Kidney Specilist</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={dc3} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-center pragraph-weight">Dr.Asnourcor</h3>
                <p className="text-center pragraph-weight">Skil Specilist</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
            <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={dc4} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-center pragraph-weight">
                  Dr. Shormily Rifat
                </h3>
                <p className="text-center pragraph-weight">Childcare</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
            <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={dc5} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-center pragraph-weight">Dr.Ontorjami</h3>
                <p className="text-center pragraph-weight">
                  Diabetes Specilist
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={dc8} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-center pragraph-weight">
                  Dr.Shormily Raisa
                </h3>
                <p className="text-center pragraph-weight">Gynocologist</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={dc7} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-center pragraph-weight">Dr.Saikat</h3>
                <p className="text-center pragraph-weight">Sexiologist</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={dc9} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-center pragraph-weight">Dr.Ritik</h3>
                <p className="text-center pragraph-weight">Generl-sergon</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={Cardiologist} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-center pragraph-weight">Dr.Ritik</h3>
                <p className="text-center pragraph-weight">Generl-sergon</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={dc3} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-center pragraph-weight">Dr.Ritik</h3>
                <p className="text-center pragraph-weight">Generl-sergon</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={dc2} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-center pragraph-weight">Dr.Ritik</h3>
                <p className="text-center pragraph-weight">Generl-sergon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default About;
