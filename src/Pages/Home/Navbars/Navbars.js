import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';
import clinic from "../imges/clinic.png";
import { IoLogInSharp } from "react-icons/io5";
import "./Navbars.css";

const Navbars = () => {
  const {user,logout} = useFirebase();
    return (
        <>
        
            <Navbar className="nav-bar p-3 shadow sticky-top  " expand="lg">
          <Container>
            
            <Navbar.Brand className="animate__animated animate__backInLeft p-2"><img className='w-100' src={clinic} alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav " className='nav-toggle' />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto d-flex align-items-center animate__animated animate__backInRight">
                <Nav.Link as={NavLink} to="/" className="nav-link" >
                  Home
                </Nav.Link>
                <Nav.Link className="nav-link" as={NavLink} to="/about" >
                About US
                </Nav.Link>
                <Nav.Link className="nav-link" as={NavLink} to="/service ">
                 Services
                </Nav.Link>
               
                <Nav.Link className="nav-link" as={NavLink} to="/contact">
                  Contact US
                </Nav.Link>
                
                
                {!user?.email && (
                <Nav.Link
                as={NavLink}
                className="nav-link animate__animated animate__fadeInDownBig text-light"
                to="/signup  "
              >
              SignIn <IoLogInSharp  size="25"/>
              </Nav.Link>
              )}
              

              {user?.email && (
                
                 <Nav.Link
                 onClick={logout}
                
                 className="nav-link animate__animated animate__fadeInDownBig text-light"
                 to="/signup  "
                 as={NavLink}
               >
               LogOut <IoLogInSharp  size="25"/><span>
                {user?.photoURL ? (
                  <img className="user-img" src={user.photoURL} alt="" />
                ) : (
                  <small className="text-light ms-3">{user?.displayName}</small>
                )}
              </span>
               </Nav.Link>
              )}


              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    );
};

export default Navbars;