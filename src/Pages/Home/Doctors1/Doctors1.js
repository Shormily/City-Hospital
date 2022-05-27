import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import saikat from "../imges/saikat.jpg";
import Shormily from "../imges/Shormily.jpg";
import Ebhrim from "../imges/Ebhrim.jpg";
import { CgMail } from "react-icons/cg";
import { VscDeviceMobile } from "react-icons/vsc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import swip1 from "../imges/swip1.jpg";
import swip2 from "../imges/swip2.jpg";
import swip3 from "../imges/swip3.jpg";
import swip4 from "../imges/swip4.jpg";
import swip5 from "../imges/swip5.jpg";
import swip6 from "../imges/swip6.jpg";
import swip7 from "../imges/swip7.jpg";
import "./Doctors1.css";

const Doctors1 = () => {
  return (
    <>
      <div className="container">
        <div className="row p-5">
          <p className="footer-weight text-info ">Professionals</p>
          <h3 className="footer-weight text-info mb-5">Our Doctors</h3>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={saikat} />
              <Card.Body>
                <h4 className="footer-weight text-primary">Dr.Saikat Ahsan</h4>
                <Card.Text className="footer-weight">
                  Throat Specialist
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem className="footer-weight">
                  This is the happiest and most friendly doctour in our hospital
                  give the best treatment Throat Specialist
                </ListGroupItem>
                <ListGroupItem className="footer-weight">
                  <p>
                    <VscDeviceMobile color="blue" size="20" />
                    +1-212-333-7078
                  </p>
                  <p>
                    <CgMail color="blue" size="20" />
                    saikatahsan@gmail.com
                  </p>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12  mb-3 ">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={Shormily} />
              <Card.Body>
                <h4 className="footer-weight text-primary">
                  Dr.Shormily Raisa
                </h4>
                <Card.Text className="footer-weight">Cardiologist</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem className="footer-weight">
                  This is the happiest and most friendly doctour in our hospital
                  give the best treatment Cardiologist
                </ListGroupItem>
                <ListGroupItem className="footer-weight">
                  <p>
                    <VscDeviceMobile color="blue" size="20" />
                    +1-212-333-7078
                  </p>
                  <p>
                    <CgMail color="blue" size="20" />
                    shormilyrais@gmail.com
                  </p>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12  mb-3">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={Ebhrim} />
              <Card.Body>
                <h4 className="footer-weight text-primary">Dr.Omor Raj</h4>
                <Card.Text className="footer-weight">Neourologist</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem className="footer-weight">
                  This is the happiest and most friendly doctour in our hospital
                  give the best treatment Neouologist
                </ListGroupItem>
                <ListGroupItem className="footer-weight">
                  <p>
                    <VscDeviceMobile color="blue" size="20" />
                    +1-212-333-7078
                  </p>
                  <p>
                    <CgMail color="blue" size="20" />
                    Omor@gmail.com
                  </p>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-5">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-12 col-md-12 col-sm-12 ">
            <p className="footer-weight text-info">Latest News</p>
              <h3 className="footer-weight  mb-3">Be the first to read</h3>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  500: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  847: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  914: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  2066: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img className="w-100" src={swip1} alt="" />
                  <hr />
                  <h4 className="text-primary footer-weight">
                    7 Ways to Get More Sleep Naturely{" "}
                  </h4>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={swip2} alt="" />
                  <hr />
                  <h4 className="text-primary footer-weight">
                    Healping Children Deal With Trauma
                  </h4>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={swip3} alt="" />
                  <hr />
                  <h4 className="text-primary footer-weight">
                   Our Definitive Guide to Cold and Ful
                  </h4>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={swip4} alt="" />
                  <hr />
                  <h4 className="text-primary footer-weight">
                    How to Handle Your Kid's Mystery Ailments
                  </h4>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={swip5} alt="" />
                  <hr />
                  <h4 className="text-primary footer-weight">
                   Do You Known the ABCs of Health Care
                  </h4>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={swip6} alt="" />
                  <hr />
                  <h4 className="text-primary footer-weight">
                    Kid's Health Care
                  </h4>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={swip7} alt="" />
                  <hr />
                  <h4 className="text-primary footer-weight">
                    7 Ways to Get More Sleep Naturely{" "}
                  </h4>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={swip1} alt="" />
                  <hr />
                  <h4 className="text-primary footer-weight">
                  Our Definitive Guide to Cold and Ful
                  </h4>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={swip1} alt="" />
                  <hr />
                  <h4 className="text-primary footer-weight">
                    Health Care
                  </h4>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>
            
          </div>
        </div>
      </div>

      <hr/>
    </>
  );
};

export default Doctors1;
