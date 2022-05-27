import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import Card from '../Card/Card';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import swip1 from "../Home/imges/swip1.jpg";
import swip2 from "../Home/imges/swip2.jpg";
import swip4 from "../Home/imges/swip4.jpg";
import swip5 from "../Home/imges/swip5.jpg";
import swip6 from "../Home/imges/swip6.jpg";
import swip7 from "../Home/imges/swip7.jpg";
import Gynaecological from "../Home/imges/Gynaecological.jpg";
import Laryngological from "../Home/imges/Laryngological.jpg";
import Thyroid from "../Home/imges/Thyroid.jpg";
import neurologist from "../Home/imges/neurologist.jpg";
import Ophtalmology from "../Home/imges/Ophtalmology.jpg";
import Outpatient from "../Home/imges/Outpatient.jpg";
import kidneySpecialist from "../Home/imges/kidneySpecialist.jpg";
import "./Service.css";

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("../service.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return (
      <>
      <div className=''>
      <div className="p-5">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-12 col-md-12 col-sm-12 ">
            <p className="footer-weight text-info">Latest News</p>
              <h3 className="footer-weight  mb-3">Be the first to read</h3>
              <Swiper
                slidesPerView={4}
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
                    slidesPerView: 4,
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
                  <img className="w-100" src={swip7} alt="" />
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
                  <img className="w-100" src={swip4} alt="" />
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
                  <img className="w-100" src={Gynaecological} alt="" />
                  <hr />
                  <h4 className="text-primary footer-weight">
                  Gynaecological Clinic
                  </h4>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={Laryngological} alt="" />
                  <hr />
                  <h4 className="text-primary footer-weight">
                  Laryngological Clinic
                  </h4>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={Thyroid} alt="" />
                  <hr />
                  <h4 className="text-primary footer-weight">
                  Thyroid
                  </h4>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={neurologist} alt="" />
                  <hr />
                  <h4 className="text-primary footer-weight">
                  Neurologist Clinic
                  </h4>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={Ophtalmology} alt="" />
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
                <SwiperSlide>
                  <img className="w-100" src={Outpatient} alt="" />
                  <hr />
                  <h4 className="text-primary footer-weight">
                    Outpatient Clinic
                  </h4>
                  <p className="mb-3 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-100" src={kidneySpecialist} alt="" />
                  <hr />
                  <h4 className="text-primary footer-weight">
                  Kidney-Specialist
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
      </div>
      <div className='service-background'>
      <div className='container '>
           <div className="row ">
           <h1 className='text-center pragraph-weight mt-3 text-primary' >Our Hospital Services</h1>
               {services.map((service) => (
           <Card key={services.id} service={service}></Card>
         ))}
             
          
        </div>
        </div>
      </div>
           
           
      </>
     
        
    );
};

export default Service;