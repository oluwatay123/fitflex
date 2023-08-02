import React from "react";
import "./Chat.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiPaperclip, FiSearch, FiSend, FiSmile } from "react-icons/fi";
// import Sidebar from '../../components/sidebar';
import { Select } from "@mui/material";
import { transform } from "framer-motion";

function chat() {
  return (
    <div>
    

      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div class="containers">
  
        <div class="wrapper wrapper-content animated fadeInRight">
        
          <div class="row">
         <p style={{ transform: "translateX(700px)", fontSize:"30px" }}>STILL UNDER DEVELOPMENT COMING SOON </p>
            <div class="col-lg-12">
            {/* <Sidebar /> */}
              <div class="ibox float-e-margins">
                <div class="ibox-content">
                  <strong>Chat room </strong>
                 
                  <div>
                    <input
                      class=" search"
                      name="message"
                      placeholder="Search"
                    />
                    <button
                      style={{
                        background: "transparent",
                        width: "35px",
                        height: "34px",
                        borderRadius: "11px",
                        transform: "translateX(-35px)",
                      }}
                    >
                      {" "}
                      <FiSearch
                        className="icon2"
                        style={{ fontSize: "1.75em" }}
                      />
                    </button>
                    <img
                      style={{ transform: "translateX(800px)" }}
                      class="chat-avatar"
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="ibox chat-view">
                <div class="ibox-title">
                  <small class="pull-right text-muted">
                    Last message: Mon Jan 26 2015 - 18:39:23
                  </small>
                </div>
                <div class="ibox-content">
                  <div class="row">
                    <div class="col-md-9 ">
                      <div class="chat-discussion">
                        <div class="chat-message left">
                          <img
                            class="message-avatar"
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            alt=""
                          />
                          <div class="message">
                            <a
                              className="name"
                              style={{ textDecoration: "none" }}
                              class="message-author"
                              href="#/"
                            >
                              {" "}
                              Michael Smith{" "}
                            </a>
                            <span class="message-date">
                              {" "}
                              Mon Jan 26 2015 - 18:39:23{" "}
                            </span>
                            <span class="message-content">
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit, sed diam nonummy nibh euismod
                              tincidunt ut laoreet dolore magna aliquam erat
                              volutpat.
                            </span>
                          </div>
                        </div>
                        <div class="chat-message right">
                          <img
                            class="message-avatar"
                            src="https://bootdey.com/img/Content/avatar/avatar6.png"
                            alt=""
                          />
                          <div class="message">
                            <a
                              className="name"
                              style={{ textDecoration: "none" }}
                              class="message-author"
                              href="#/"
                            >
                              {" "}
                              Karl Jordan{" "}
                            </a>
                            <span class="message-date">
                              {" "}
                              Fri Jan 25 2015 - 11:12:36{" "}
                            </span>
                            <span class="message-content">
                              Many desktop publishing packages and web page
                              editors now use Lorem Ipsum as their default model
                              text, and a search for 'lorem ipsum' will uncover.
                            </span>
                          </div>
                        </div>
                        <div class="chat-message right">
                          <img
                            class="message-avatar"
                            src="https://bootdey.com/img/Content/avatar/avatar6.png"
                            alt=""
                          />
                          <div class="message">
                            <a
                              className="name"
                              style={{ textDecoration: "none" }}
                              class="message-author"
                              href="#/"
                            >
                              {" "}
                              Michael Smith{" "}
                            </a>
                            <span class="message-date">
                              {" "}
                              Fri Jan 25 2015 - 11:12:36{" "}
                            </span>
                            <span class="message-content">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration.
                            </span>
                          </div>
                        </div>
                        <div class="chat-message left">
                          <img
                            class="message-avatar"
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            alt=""
                          />
                          <div class="message">
                            <a
                              className="name"
                              style={{ textDecoration: "none" }}
                              class="message-author"
                              href="#/"
                            >
                              {" "}
                              Alice Jordan{" "}
                            </a>
                            <span class="message-date">
                              {" "}
                              Fri Jan 25 2015 - 11:12:36{" "}
                            </span>
                            <span class="message-content">
                              All the Lorem Ipsum generators on the Internet
                              tend to repeat predefined chunks as necessary,
                              making this the first true generator on the
                              Internet. It uses a dictionary of over 200 Latin
                              words.
                            </span>
                          </div>
                        </div>
                        <div class="chat-message right">
                          <img
                            class="message-avatar"
                            src="https://bootdey.com/img/Content/avatar/avatar6.png"
                            alt=""
                          />
                          <div class="message">
                            <a
                              className="name"
                              style={{ textDecoration: "none" }}
                              class="message-author"
                              href="#/"
                            >
                              {" "}
                              Mark Smith{" "}
                            </a>
                            <span class="message-date">
                              {" "}
                              Fri Jan 25 2015 - 11:12:36{" "}
                            </span>
                            <span class="message-content">
                              All the Lorem Ipsum generators on the Internet
                              tend to repeat predefined chunks as necessary,
                              making this the first true generator on the
                              Internet. It uses a dictionary of over 200 Latin
                              words.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="chat-users">
                        <div class="users-list">
                          <div class="chat-user">
                            <img
                              class="chat-avatar"
                              src="https://bootdey.com/img/Content/avatar/avatar1.png"
                              alt=""
                            />
                            <div class="chat-user-name">
                              <a
                                className="name"
                                style={{ textDecoration: "none" }}
                                href="#/"
                              >
                                Karl Jordan
                              </a>
                            </div>
                          </div>
                          <div class="chat-user">
                            <img
                              class="chat-avatar"
                              src="https://bootdey.com/img/Content/avatar/avatar2.png"
                              alt=""
                            />
                            <div class="chat-user-name">
                              <a
                                className="name"
                                style={{ textDecoration: "none" }}
                                href="#/"
                              >
                                Monica Smith
                              </a>
                            </div>
                          </div>
                          <div class="chat-user">
                            <span class="pull-right label label-primary">
                              Online
                            </span>
                            <img
                              class="chat-avatar"
                              src="https://bootdey.com/img/Content/avatar/avatar3.png"
                              alt=""
                            />
                            <div class="chat-user-name">
                              <a
                                className="name"
                                style={{ textDecoration: "none" }}
                                href="#/"
                              >
                                Michael Smith
                              </a>
                            </div>
                          </div>
                          <div class="chat-user">
                            <span class="pull-right label label-primary"></span>
                            <img
                              class="chat-avatar"
                              src="https://bootdey.com/img/Content/avatar/avatar4.png"
                              alt=""
                            />
                            <div class="chat-user-name">
                              <a
                                className="name"
                                style={{ textDecoration: "none" }}
                                href="#/"
                              >
                                Janet Smith
                              </a>
                            </div>
                          </div>
                          <div class="chat-user">
                            <img
                              class="chat-avatar"
                              src="https://bootdey.com/img/Content/avatar/avatar5.png"
                              alt=""
                            />
                            <div class="chat-user-name">
                              <a
                                className="name"
                                style={{ textDecoration: "none" }}
                                href="#/"
                              >
                                Alice Smith
                              </a>
                            </div>
                          </div>
                          <div class="chat-user">
                            <img
                              class="chat-avatar"
                              src="https://bootdey.com/img/Content/avatar/avatar6.png"
                              alt=""
                            />
                            <div class="chat-user-name">
                              <a
                                className="name"
                                style={{ textDecoration: "none" }}
                                href="#/"
                              >
                                Monica Cale
                              </a>
                            </div>
                          </div>
                          <div class="chat-user">
                            <img
                              class="chat-avatar"
                              src="https://bootdey.com/img/Content/avatar/avatar7.png"
                              alt=""
                            />
                            <div class="chat-user-name">
                              <a
                                className="name"
                                style={{ textDecoration: "none" }}
                                href="#/"
                              >
                                Mark Jordan
                              </a>
                            </div>
                          </div>
                          <div class="chat-user">
                            <span class="pull-right label label-primary">
                              Online
                            </span>
                            <img
                              class="chat-avatar"
                              src="https://bootdey.com/img/Content/avatar/avatar8.png"
                              alt=""
                            />
                            <div class="chat-user-name">
                              <a
                                className="name"
                                style={{ textDecoration: "none" }}
                                href="#/"
                              >
                                Janet Smith
                              </a>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="chat-message-form">
                        <div class="form-group">
                          <button>
                            <FiSmile
                              style={{
                                fontSize: "1.75em",
                                transform: "translate(20px)",
                                position: "absolute",
                                zIndex: "1",
                                marginTop: "7px",
                                marginLeft: "20px",
                              }}
                            />
                          </button>
                          <button>
                            <FiPaperclip
                              style={{
                                transform: "translate(1px,23px)",
                                fontSize: "1.75em",
                              }}
                            />
                          </button>
                          <textarea
                            class="form-control message-input"
                            name="message"
                            placeholder="Enter message text"
                          ></textarea>

                          {/* <i class="fa-sharp fa-solid fa-paper-plane icon1" ></i> */}

                          <button>
                            {" "}
                            <FiSend className="icon1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
     
    </div>
  );
}
export default chat;















