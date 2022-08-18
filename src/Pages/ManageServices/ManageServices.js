import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams,NavLink } from 'react-router-dom';
import {  Container,Row,Col,Button  } from "react-bootstrap";
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/useFirebase';

const ManageServices = () => {
 
  const [users, setUsers] = useState([])
  const {user} = useFirebase();
  const {id} = useParams();
    useEffect(() =>{
       fetch(`http://localhost:5000/orders/${id}`)
       .then(res=>res.json())
       .then(data =>  setUsers())
    },[])
    return (
        <>
          <h3>Manage Service </h3>  
          <h1 >{users.name}</h1>
          <img src={user.img} className="img-fluid" alt="" />
           
          
        </>
    );
};

export default ManageServices;