import React from "react";
//react bootstrap
import {
  Navbar,
  Nav,
  Form,
  Button
} from "react-bootstrap";
//router
import { Link } from 'react-router-dom';
//assets
import logo from "../assets/logo.png";

const NavTop = () => {


  return (
    <>
      <Navbar className="navbarMain" expand="lg" sticky="top">
        <Navbar.Brand >
        <Link to={"/"}>
          <img src={logo} alt="home" height="35px" width="auto"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbarMain__links">
            <Nav.Link><Link to={"/"}>What we do </Link></Nav.Link>
            <Nav.Link><Link to={"/projects"}>Our projects</Link></Nav.Link>
            <Nav.Link><Link to={"/testimonials"}>Testimonials</Link></Nav.Link>
            <Nav.Link><Link to={"/blog"}>Blog</Link></Nav.Link>
            <Nav.Link><Link to={"/support"}>Support</Link></Nav.Link>
          </Nav>
          <Nav className="navbarMain__nav-buttons">
          <Button className="outlinedBtn" variant="outline-primary">Log In</Button>
          <Button className="containedBtn" >Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};


export default NavTop;
