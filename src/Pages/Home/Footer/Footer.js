import React from "react";
import { CgMail } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { VscDeviceMobile } from "react-icons/vsc";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="bg-color text-light p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h3 className="footer-weight ">Medical Clinic</h3>
              <hr className="w-50" />
            
              <p className="pragraph-weight mt-4">We bring the years, global experience, and stamina to guide our clients through new and often disruptive realities.</p>
              <i class="fa-brands fa-facebook-f  shadow icn "></i>{" "}
              <i class="fa-brands fa-twitter icn shadow "></i>{" "}
              <i class="fa-brands fa-linkedin-in icn shadow "></i>{" "}
              <i class="fa-solid fa-envelope icn shadow "></i>
              
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <h3 className="footer-weight">Doctors</h3>
              <hr className="w-25" />
              <p className="pragraph-weight mt-4 ">Dr.Omor Raj </p>
              <p className="pragraph-weight">Dr.Shormily Raisa</p>
              <p className="pragraph-weight">Dr.Saikat Ahsan</p>
            </div>
            
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h3 className="footer-weight ">Contact Information</h3>
              <hr className="w-50" />
              <p className="pragraph-weight mt-4"><GoLocation/> 12 Main tPt. London</p>
              <p className="pragraph-weight"><VscDeviceMobile/> +44 3656 4567</p>
              <p className="pragraph-weight"><CgMail/> Medicalclinic@gmail.com</p>
              
            </div>
            <hr className="mt-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
