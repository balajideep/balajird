import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';




import 'bootstrap/dist/css/bootstrap.min.css';
// import { IconName } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "./image/logo.png";
import "./Home.css";

import { Outlet, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">


      <Navbar bg=" bg " expand="lg light" className='road'>

        <Container fluid className='kk' >

          <Navbar.Brand ><img src={logo} alt='##' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll " />
          <Navbar.Collapse id="navbarScroll" className='white'>
            <Nav className='mx-auto kk' >

              <Link to="/" id='navbarScroll' className='rent'>HOME</Link>

              <Link to="/Home2" id='navbarScroll' className='rent'>ABOUT US</Link>


              <div class="dropdown">
                <button class="dropbtn">TOUR<RiArrowDropDownLine size={20} /></button>
                <div class="dropdown-content">
                  <Link to="/Home3">TOUR LIST</Link>
                  <Link to="/Home4">TOUR DETAILS</Link>
                </div>
              </div>


              <div class="dropdown">
                <button class="dropbtn">PAGES <RiArrowDropDownLine size={20} /></button>
                <div class="dropdown-content">
                  <Link to="/Home5">DESTINATION</Link>
                  <Link to="/Home6">FAQ</Link>
                  <Link>404 PAGE</Link>
                </div>
              </div>

              <div class="dropdown" >
                <button class="dropbtn">BLOG <RiArrowDropDownLine size={20} /> </button>
                <div class="dropdown-content">
                  <Link to='/Home7'>BLOG</Link>
                  <Link to='/Home8'>SINGLE BLOG</Link>
                </div>
              </div>




              <Link to="/Home9" id='navbarScroll' className='rent' >CONTACT</Link>
            </Nav>


            <Nav className='button1'>
              <Button variant="warning" className='button '> <FaPhoneAlt />  <span></span><b>CONTACT US</b></Button>{' '}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />

    </div>





  );
}

export default Home;