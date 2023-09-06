import React, { useState } from "react";
import newRequest from "/utils/newRequest.js";
import { useNavigate } from "react-router-dom";
import "./Auth.scss";

const Auth = ({ authActive, setAuthActive }) => {
  const [isLogin, setIsLogin] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      setAuthActive(false);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/register", { username, password, email });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      setAuthActive(false);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <>
      <div className={authActive ? "window-container active" : "window-container"}>
        {isLogin && (
          <form className="window" onSubmit={handleLoginSubmit}>
            <button
              type="button"
              className="x"
              onClick={() => {
                setAuthActive(false);
              }}
            >
              <i className="bx bx-x"></i>
            </button>
            <span className="greetings title">Welcome back!</span>
            <div className="space" style={{ height: 20 + "px" }}></div>
            <span className="instructions subtext">Please enter your details</span>
            <div className="space" style={{ height: 32 + "px" }}></div>
            <div className="input-label">
              <label className="label" htmlFor="login-username-input">
                Username or Email
              </label>
              <input
                id="login-username-input"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="space" style={{ height: 32 + "px" }}></div>
            <div className="input-label">
              <label className="label" htmlFor="password-username-input">
                Password
              </label>
              <input
                type="password"
                id="password-username-input"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="space" style={{ height: 32 + "px" }}>
              {error && error}
            </div>
            <button className="login text-button" type="submit">
              Log in
            </button>
            <div className="space" style={{ height: 24 + "px" }}></div>
            <button
              className="register text-button"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsLogin(false);
              }}
            >
              Register
            </button>
          </form>
        )}
        {!isLogin && (
          <form className="window">
            <button
              type="button"
              className="x"
              onClick={() => {
                setAuthActive(false);
              }}
            >
              <i className="bx bx-x"></i>
            </button>
            <span className="greetings title">
              Welcome to
              <br /> Squad Factory!
            </span>
            <div className="space" style={{ height: 20 + "px" }}></div>
            <span className="instructions subtext">Please enter your details</span>
            <div className="space" style={{ height: 32 + "px" }}></div>
            <div className="input-label">
              <label className="label" htmlFor="login-username-input">
                Username
              </label>
              <input
                id="login-username-input"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="space" style={{ height: 32 + "px" }}></div>
            <div className="input-label">
              <label className="label" htmlFor="login-username-input">
                Email
              </label>
              <input
                id="login-username-input"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="space" style={{ height: 32 + "px" }}></div>
            <div className="input-label">
              <label
                className="label"
                htmlFor="password-username-input"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              >
                Password
              </label>
              <input type="password" id="password-username-input" placeholder="Password" />
            </div>
            <div className="space" style={{ height: 32 + "px" }}>
              {error && error}
            </div>
            <button className="login text-button" type="submit" onClick={handleRegisterSubmit}>
              Register
            </button>
            <div className="space" style={{ height: 24 + "px" }}></div>
            <button
              className="register text-button"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsLogin(true);
              }}
            >
              Log in
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Auth;
