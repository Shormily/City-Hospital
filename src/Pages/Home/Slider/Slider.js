import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./Slider.css";
import { FcTabletAndroid } from "react-icons/fc";
import { CgMail } from "react-icons/cg";
import { GoLocation } from "react-icons/go";

const Slider = () => {
  return (
    <>
      <Container fluid className="banner-section p-0">
        <Carousel variant="ligth" fade>
          <Carousel.Item className="carousel-three">
            <Container className="px-md-5">
              <Row>
                <Col sm={12} lg={6}>
                  <div className="animate__animated animate__fadeInLeft ">
                    <h6 className="banner-title  mb-2 text-shadow ">
                      Entrust your health our doctors
                    </h6>
                    <h1 className=" bannertext  text-shadow">
                      Medical excellence every day.
                    </h1>
                    <div className="d-flex mt-5">
                      <button className="btn-1 text-light banner-text mx-2">
                        Make An Appointment
                      </button>
                      <button className="btn-1 text-light banner-text">
                        View Department
                      </button>
                    </div>
                  </div>
                </Col>
                <Col sm={12} lg={6}></Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item className="carousel-four">
            <Container className="px-md-5">
              <Row>
                <Col sm={12} lg={6}>
                  <div className="animate__animated animate__fadeInLeft ">
                    <h6 className="banner-title  mb-2 text-shadow ">
                      Entrust your health our doctors
                    </h6>
                    <h1 className=" bannertext  text-shadow">
                      The Hospital of the Future, Today
                    </h1>
                    <div className="d-flex mt-5">
                      <button className="btn-1 text-light banner-text mx-2">
                        Make An Appointment
                      </button>
                      <button className="btn-1 text-light banner-text">
                        View Department
                      </button>
                    </div>
                  </div>
                </Col>
                <Col sm={12} lg={6}></Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item className="carousel-five">
            <Container className="px-md-5">
              <Row>
                <Col sm={12} lg={6}>
                  <div className="animate__animated animate__fadeInLeft ">
                    <h6 className="banner-title  mb-2 text-shadow ">
                      Entrust your health our doctors
                    </h6>
                    <h1 className=" bannertext  text-shadow">
                      Exceptional people. Exceptional care.
                    </h1>
                    <div className="d-flex mt-5">
                      <button className="btn-1 text-light banner-text mx-2">
                        Make An Appointment
                      </button>
                      <button className="btn-1 text-light banner-text">
                        View Department
                      </button>
                    </div>
                  </div>
                </Col>
                <Col sm={12} lg={6}></Col>
              </Row>
            </Container>
          </Carousel.Item>
          
        </Carousel>
      </Container>
      <div className="">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-sm-12 d-flex">
              <FcTabletAndroid size={40} />
              <p className="mx-3 mt-2 footer-weight ">1-888-123-4567</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 d-flex">
              <CgMail color="cornflowerblue" size={50} />
              <p className="mx-3 mt-2 footer-weight">medical-clinic@mail.com</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 d-flex">
              <GoLocation color="cornflowerblue" size={40} />
              <p className="mx-3 mt-2 footer-weight">3213 Suitland Street</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container  mb-4">
          <div className="row p-5 footer-weight text-light ">
            <div className="col-lg-4 col-md-12 col-sm-12  card-1 p-5  ">
              <h3 className="footer-weight">Top Doctors</h3>
              <p className="mt-4 mb-4">Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed volutpat.</p>
              <button className="butn-1 footer-weight p-2 text-light ">Read More</button>
              
            </div>
            
            <div className="col-lg-4 col-md-12 col-sm-12  card-2 p-5 ">
            <h3 className="footer-weight">24 Hours Service</h3>
              <p className="mt-4 mb-4">Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed volutpat.</p>
              <button className="butn-2 footer-weight p-2 text-light ">Read More</button>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 p-5 card-3 ">
            <h3 className="footer-weight mb-4">Opening Hours</h3>
              <div className="d-flex">
                <p>Monday-Friday</p>
                <p className="mx-5">8.00-12:00</p>       
              </div>
              <hr className="text-dark"/>
              <div className="d-flex">
                <p>Monday-Friday</p>
                <p className="mx-5">8.00-12:00</p>
                <hr className="text-dark"/>
              </div>
              <hr className="text-dark"/>
              <div className="d-flex">
                <p>Monday-Friday</p>
                <p className="mx-5">8.00-12:00</p>
              </div>
              <hr className="text-dark"/>          
            </div>
            <h1 className="footer-weight text-primary mt-5" >Awesome Theme for Medical and Health Websites</h1>
            <p className="text-secondary">Medical Clinic WordPress theme was created to offer a perfect solution for medical websites.</p>
          </div>    
        </div>
      </div>

      
    </>
  );
};

export default Slider;
