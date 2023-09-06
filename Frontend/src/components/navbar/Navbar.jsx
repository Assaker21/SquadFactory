import React, { useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../../utils/newRequest";

const Navbar = ({ setAuthActive }) => {
  const [open, setOpen] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <span className="title">Squad Factory</span>
          </div>

          <div className="links">
            <Link className="link" to="/">
              <button className="text-button selected">
                Find<i className="bx bx-search-alt-2 bx-rotate-90"></i>
              </button>
            </Link>
            <Link className="link" to="/create">
              <button className="text-button">
                Create<i className="bx bx-plus"></i>
              </button>
            </Link>
            {!currentUser && (
              <button
                className="text-button"
                onClick={() => {
                  setAuthActive(true);
                }}
              >
                Join
              </button>
            )}
            {currentUser && (
              <div
                className="user"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <img className="img-button" src={currentUser.img ? currentUser.img : "https://i.pinimg.com/474x/66/e7/04/66e704c1dff2b9b9331dce8972e855c5.jpg"} alt="" />
                <span>{currentUser.username}</span>
                {open && (
                  <div
                    className="options"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    <Link className="link" to="/profile/1">
                      <span>Profile</span>
                    </Link>
                    <Link className="link">
                      <span>Settings</span>
                    </Link>
                    <Link className="link" onClick={handleLogout}>
                      <span>Logout</span>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {/*<hr />
        <div className="menu">
          <span>Websites</span>
          <span>Games</span>
          <span>Local</span>
          <span>Electrical</span>
          <span>Mechanical</span>
          <span>Ecommerce</span>
          <span>Social Media</span>
          <span>Others</span>
        </div>
                  <hr />*/}
      </div>
    </>
  );
};

export default Navbar;
