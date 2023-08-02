import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {register, reset} from "../src/Auth/authSlice"
import Navbar from "./components/Navbar";
import LoginPage from "./pages/loginPage";
import Bmicalculator from "./pages/BmiCalculator";
import UserProfile from './pages/Userprofile/UserProfile';
import ChatRoom from "./pages/chat/ChatRoom";
import  ChatBot from "./pages/ChatBot"
import SideBars from './components/sidebar'
import SignIn from "./pages/signIn";


const App = () => (
 
  <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">

    <Router>
      {/* <Header/> */}
      <Routes>
        
        <Route path="/Home" element={<Home />} />

        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/" element={<SignIn/>} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/chatRoom" element={< ChatRoom/>} />
        <Route path="/Bmicalculator" element={<  Bmicalculator/>} />
        <Route path="/UserProfile" element={< UserProfile />} />
        <Route path="/SideBars" element={< SideBars />} />
        <Route path="/ChatBot" element={< ChatBot />} />
        <Route path="/Navbar" element={< Navbar />} />

      </Routes>
    </Router>
    < ToastContainer/>
    {/* <Footer /> */}
  
  </Box>
);

export default App;
