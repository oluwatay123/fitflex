
import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars, FaCalculator, FaClock, FaHome, FaIcons, FaPassport, FaRobot } from 'react-icons/fa';
import "../App.css"
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../Auth/authSlice";
import avatar from '../assets/images/profileAvatar.png'
function Navbars  () {
  const active = '250px';
  const hide = '0px';

  const [show, setShow] = useState(false)
  const navigate = useNavigate();
const dispatch = useDispatch();
const { user } = useSelector((state) => state.auth);

const onlogout = async () => {
  try {
    await dispatch(logout());
    await dispatch(reset());
    navigate("/LoginPage");
  } catch (error) {
    console.log(error)
  }
};

  const displayNav = () => {
    setShow(!show)
 

    
  };



  return (
    <Navbar bg="" variant="dark" expand="lg">
      <Navbar.Brand href="/" style={{ fontSize:"30px", color:"red"}}>Fitflex</Navbar.Brand>
      
      <button onClick={displayNav} className='hideButton' ><FaBars className='bars'/></button>
      <Navbar.Collapse style={{ display:"flex"}} id="basic-navbar-nav">
        <Nav className="mr-auto largeScreen" style={{ justifyContent:"space-around", alignItems:"center", width:"85%", marginLeft:'5px', marginRight:'5px'}}>
          <Nav.Link style={{color:"red"}} href="/"><FaHome style={{transform:"translateY(-5px)"}}/>Home</Nav.Link>
          <Nav.Link  style={{color:"red"}}href="Chatbot"><FaRobot/>Chatbot</Nav.Link>
          <Nav.Link style={{color:"red"}}href=" Bmicalculator"><FaCalculator/>IBM calculator</Nav.Link>
          
          {/* <Nav.Link style={{color:"red"}} href="#"><FaPassport/>Tracker</Nav.Link> */}
         <Nav.Link href="Userprofile"> <img
    style={{ transform: "translateX(220px)" }}
    class="chat-avatar"
    src={avatar}
    alt="C"
    /></Nav.Link>
          {user ? (
          <Button   onClick={onlogout} variant="outline-light">Logout</Button>
          ):(<></>)}
        </Nav>

        <Nav className="mr-auto smallScreen" style={{ background:"#fff", height:`${show ? active : hide}`, overflow:'hidden',textDecoration:"none", transition:"height 0.5s", justifyContent:"space-around", alignItems:"center", width:"85%", marginLeft:'5px', marginRight:'5px'}}>
        <Nav.Link style={{color:"red"}} href="/"><FaHome style={{transform:"translateY(-5px)"}}/>Home</Nav.Link>
          <Nav.Link  style={{color:"red"}}href="Chatbot"><FaRobot/>Chatbot</Nav.Link>
          <Nav.Link style={{color:"red"}}href=" Bmicalculator"><FaCalculator/>IBM calculator</Nav.Link>
          <Nav.Link href="Userprofile"> <img
    style={{ transform: "translateX(220px)" }}
    class="chat-avatar"
    src={avatar}
    alt="C"
    /></Nav.Link>

{/* <Nav.Link  style={{color:"red"}}href="#"><FaClock/>Tracker</Nav.Link> */}
          {/* <img src={<FaIcons/>} /> */}
          {user ? (
          
          <Button   onClick={onlogout} variant="outline-light">Logout</Button>
          ):(<></>)}
        </Nav>

        
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;













































// import React from "react";
// import { Link } from "react-router-dom";
// import { Stack, Typography } from "@mui/material";
// 
// import Logo from "../assets/images/Logo.png";
// import { transform } from "framer-motion";
// 
// import "../App.css"
// 
// const name = "  "
// const Navbar = () => (
  // <Stack
    // direction="row"
    // justifyContent="space-around"
    // sx={{
      // gap: { sm: "123px", xs: "40px" },
      // mt: { sm: "32px", xs: "20px" },
      // justifyContent: "none",
    // }}
    // px="20px"
  // >
    {/* {/* <Link to="/"> */}
      // <img
      // className="logo"
        // src={Logo}
        // alt="logo"
        // style={{ width: "48px", height: "48px", margin: "0px 20px" }}
      // />
    // </Link> */}
    {/* <Typography style={{fontSize:'30px',marginLeft:"200px"}}> */}
      {/* Hi   */}
      {/* </Typography> */}
{/*      */}
{/*      */}
{/*      */}
  {/* </Stack> */}
// );
// 
// export default Navbar;







































