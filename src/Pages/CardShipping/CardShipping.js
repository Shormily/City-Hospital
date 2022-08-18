import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../Hooks/useFirebase";
import { NavLink, useParams } from "react-router-dom";
const CardShipping = () => {
  const { user } = useFirebase();
  const { id } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order successfully");
          reset();
        }
      });
  };
  return (
    <>
    
      <div className="container">
      <h1 className=" text-center mt-4 footer-weight text-primary ">Book Your Service</h1>
        <div className="row p-5 ">
          
          <div className="col-lg-6 col-md-12 col-12 ">
            <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container  ">
                  <img src={info.img} alt="" />
                </div>
              </div>
              <div className="mb-3">
                <h3 className="text-center pragraph-weight mt-3 text-primary">
                  {info.name}
                </h3>
                <p className="text-center pragraph-weight p-3">
                  {info.description}
                </p>
                <NavLink as={NavLink} to="/service" className="p-4  ">
                  <button className="btnsdesigns px-4 mx-auto pragraph-weight text-light bg-primary rounded-1">
                    Cancel
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 mt-5">
            <div className="add-service   ">
              <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name", { required: true })}
                  value={user?.displayName}
                  placeholder="Name"
                  type="text"
                  className="mb-3 p-3  w-100 shadow pragraph-weight"
                />
                <input
                  {...register("userEmail", { required: true })}
                  value={user?.email}
                  placeholder="Email"
                  type="email"
                  className="mb-3 p-3  w-100 shadow pragraph-weight"
                />

                <input
                  {...register("address")}
                  type="text"
                  placeholder="Address"
                  className="mb-3 p-3  w-100 shadow pragraph-weight"
                />
                <input
                  {...register("city")}
                  type="text"
                  placeholder="City"
                  className="mb-3 p-3  w-100 shadow pragraph-weight"
                />
                <button
                  type="submit"
                  className="mb-3 p-3 btnsdesigns  btnsdesigns2  w-100 shadow  rounded-2 text-light pragraph-weight"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardShipping;
