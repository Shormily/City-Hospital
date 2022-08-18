import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = ({ service, setServices }) => {
  const {  _id,name, img, description } = service;

  // Delete an user

  const handleDeleteUsers = (id) => {
    console.log(id);
    console.log(service);
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            setServices((services) =>
              services.filter((service) => service._id !== id)
            );
          }
        });
    }
  };

  return (
    <>
      <div className="col-lg-4 col-md-6 col-12 mb-3 mt-5">
        <div className="card-container rounded-2">
          <div className="swiper">
            <div className="image-container  ">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-center pragraph-weight mt-3 text-primary">
              {name}
            </h3>
            <p className="text-center pragraph-weight p-3">{description}</p>

            <div className="btnservice p-3">
              <button
                className="btnsdesigns px-4 pragraph-weight text-light bg-primary rounded-2"
                onClick={() => handleDeleteUsers(service._id)}
              >
                Delete{" "}
              </button>
              <NavLink as={NavLink} to={`/cardShipping/${_id}`}
                 >

                <button className='btnsdesigns  px-4 pragraph-weight text-light bg-primary rounded-2'  >Book Now </button>
                </NavLink>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
