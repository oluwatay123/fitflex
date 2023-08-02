// import React, { useState } from "react";
// import { useEffect } from "react";
// import Sidebar from "react-sidebar";
// import "../App.css";
// import { Link, useNavigate } from "react-router-dom";

// import { useSelector, useDispatch } from "react-redux";
// import { logout, reset } from "../Auth/authSlice";
// import {
//   FiHome,
//   FiActivity,
//   FiUser,
//   FiMessageCircle,
//   FiLogOut,
//   FiMoon,
//   FiPackage,
//   fi,
//   FiArrowRight,
// } from "react-icons/fi";
// import LoginPage from '../pages/loginPage'
// import { FaRobot } from "react-icons/fa";



// function App ()  {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);
//   const [isOpen, setIsOpen] = useState(false);
//   const onlogout = async () => {
//     try {
//       await dispatch(logout());
//       await dispatch(reset());
//       navigate("/LoginPage");
//     } catch (error) {
//       console.log(error)
//     }
//   };

//   const onSetSidebarOpen = (open) => {
//     setIsOpen(open);
//   };
//   const closeSidebar = () => {
//     setIsOpen(false);
//   };

//   return (
//     <Sidebar
//       sidebar={
//         <ul className="menu">
//           <button
//             className="but"
//             style={{ background: "none", width: "50px" }}
//             onClick={closeSidebar}
//           >
//             <i
//               className="fas fa-times cancel"
//               style={{ background: "none", color: "white" }}
//             >
//               {" "}
//             </i>
//           </button>

//           <li>
//             <i
//               className="fa fa-fw fa-home "
//               id="H"
//               style={{ fontSize: "1.75em" }}
//             />
//             <a style={{ textDecoration: "none" }} href="/">
//               Home
//             </a>
//           </li>
//           <hr></hr>
         
          
//           <li>
//             <FiPackage id="i" style={{ fontSize: "1.75em" }} />
//             <Link style={{ textDecoration: "none" }} to="Recommend">
//               For You
//             </Link>
//           </li>
//           <hr></hr>
//           <li>
//             <img
//               id="p"
//               style={{ fontSize: "2.75em", transform: "translate(45px,-8px)" }}
//               class="chat-avatar"
//               src="https://bootdey.com/img/Content/avatar/avatar6.png"
//               alt=""
//             />
//             <Link style={{ textDecoration: "none" }} to="UserProfile">
//               Profile
//             </Link>
//           </li>
//           <hr></hr>
        
        
        
        
        
        
        
        
        
        
         
//           <li>
//             <FiMessageCircle id="i" style={{ fontSize: "1.75em" }} />
//             <Link style={{ textDecoration: "none" }} to="ChatRoom">
//               Chat Room
//             </Link>
//           </li>
//           <hr></hr>
//           <li> 
//     <FaRobot id="i" style={{ fontSize: "1.75em" }} /> 
//     <Link style={{ textDecoration: "none" }} to="ChatBot"> 
//      chat With cybertron 
//    </Link> 
//   </li> 
//           <hr></hr>
//           {user ? (
//             <li>
//               <button className="btn" onClick={onlogout}>
//                 <FiLogOut /> Logout
//               </button>
//             </li>
//           ) : (
//             <>    
//             </>
//           )}
//         </ul>
//       }
//       open={isOpen}
//       onSetOpen={onSetSidebarOpen}
//       styles={{
//         sidebar: {
//           background: "#202020",
//           width: 250,
//           color: "#fff",
//           position: "fixed",
//         },
//       }}
//     >
//       <button className="toggle-button" onClick={() => onSetSidebarOpen(true)}>
//         <i className="fa fa-bars"></i>
//       </button>
//       {/* Add your main content here */}
//     </Sidebar>
//   );
// };

// export default App;
