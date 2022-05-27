import React from "react";
import { BiGitRepoForked } from "react-icons/bi";
import { MdOutlineEmergency } from "react-icons/md";
import { FaHandHoldingMedical, FaFulcrum } from "react-icons/fa";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Gynaecological from "../imges/Gynaecological.jpg";
import Laryngological from "../imges/Laryngological.jpg";
import Thyroid from "../imges/Thyroid.jpg";
import neurologist from "../imges/neurologist.jpg";
import Ophtalmology from "../imges/Ophtalmology.jpg";
import Outpatient from "../imges/Outpatient.jpg";
import kidneySpecialist from "../imges/kidneySpecialist.jpg";
import GeneralSurgeon from "../imges/GeneralSurgeon.jpg";
import "./Description.css";

const Description = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-3 col-md-3 col-sm-12" >
            <FaFulcrum color="cornflowerblue" size={60} />
            <h3 className="footer-weight mt-3">Medical Treatment</h3>
            <p className="mt-4 footer-weight">
              Cum sociis natoque penatibus et magnis dis parturient montesmus.
              Pro vel nibh et elit mollis commodo et nec augueique
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12" >
            <FaHandHoldingMedical color="cornflowerblue" size={60} />
            <h3 className="footer-weight mt-3">Medical professionals</h3>
            <p className="mt-4 footer-weight">
              Cum sociis natoque penatibus et magnis dis parturient montesmus.
              Pro vel nibh et elit mollis commodo et nec augueique
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12" >
            <MdOutlineEmergency color="cornflowerblue" size={60} />
            <h3 className="footer-weight mt-3">Emergency Help</h3>
            <p className="mt-4 footer-weight">
              Cum sociis natoque penatibus et magnis dis parturient montesmus.
              Pro vel nibh et elit mollis commodo et nec augueique
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12" >
            <BiGitRepoForked color="cornflowerblue" size={60} />
            <h3 className="footer-weight mt-3">Qualified Doctors</h3>
            <p className="mt-4 footer-weight">
              Cum sociis natoque penatibus et magnis dis parturient montesmus.
              Pro vel nibh et elit mollis commodo et nec augueique
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-5 mb-5" />
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 footer-weight col-md-12 col-sm-12 card-3 p-5 text-light">
              <h3 className="footer-weight">Department</h3>
              <p>Outpatient Surgery</p>
              <p>Cardiac Clinic</p>
              <p>Ophthalmology Clinic</p>
              <p>Outpatient Rehabilitation</p>
              <p>Laryngological Clinic</p>
              <p>Pediatric Clinic</p>
              <p className="mt-5">View all</p>
            </div>

            <div className="col-lg-9 col-md-12 col-sm-12 container p-3" >
              <p className="footer-weight text-info">Innovation</p>
              <h3 className="footer-weight  mb-2">Our Services</h3>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  440:{
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  487:{
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
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
                  <img className="w-100" src={Gynaecological} alt="" />
                  <hr />
                  <h5 className="text-primary footer-weight">
                  Gynaecological Clinic
                  </h5>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={Laryngological} alt="" />
                  <hr />
                  <h5 className="text-primary footer-weight">
                  Laryngologica Clinic
                  </h5>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={neurologist} alt="" />
                  <hr />
                  <h5 className="text-primary footer-weight">
                  Neurologist Clinic
                  </h5>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={Ophtalmology} alt="" />
                  <hr />
                  <h5 className="text-primary footer-weight">
                  Ophtalmology Clinic
                  </h5>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={Laryngological} alt="" />
                  <hr />
                  <h5 className="text-primary footer-weight">
                  Outpatient Clinic
                  </h5>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={Outpatient} alt="" />
                  <hr />
                  <h5 className="text-primary footer-weight">
                  Diabetes Check
                  </h5>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={GeneralSurgeon} alt="" />
                  <hr />
                  <h5 className="text-primary footer-weight">
                  General-Surgeon
                  </h5>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={kidneySpecialist} alt="" />
                  <hr />
                  <h5 className="text-primary footer-weight">
                  kidneySpecialist
                  </h5>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={Thyroid} alt="" />
                  <hr />
                  <h5 className="text-primary footer-weight">
                  Thyroid Treatment
                  </h5>
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
      <div className="story-section mt-4 footer-weight">
        <div className="container ">
          <div className="row margin">
            <h1 className="text-light footer-weight text-center p-5 ">
              City Hospital{" "}
            </h1>
            <p className="footer-weight text-light text-center">
              The doctors and staff of our hospital have been running this
              hospital for many years and we are giving good treatment to
              everyone . Come to our hospital and get good treatment.This is our
              goal.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-color p-5">
        <div className="container  ">
          <div className="row text-light footer-weight">
            <div className="col-lg-2 col-md-6 col-sm-6">
              <h1>
                <CountUp duration={1} end={100} />%
              </h1>
              <p>Quality</p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <h1>
                <CountUp duration={1} end={2480} />
              </h1>
              <p>Patients a year</p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <h1>
                <CountUp duration={1} end={100} />
              </h1>
              <p>People working</p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <h1>
                <CountUp duration={1} end={50} />
              </h1>
              <p>Years of experience</p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <h1>
                <CountUp duration={100} end={7856} />
              </h1>
              <p>Happy Smiles</p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <h1>
                <CountUp duration={100} end={10000} />
              </h1>
              <p>Quality</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
