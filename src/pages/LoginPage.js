import React from "react";
import "./LoginPage.css";
import header2 from "../assets/header2.png";
import captchaImage from "../assets/captcha-image.png";
import IconButton from "@mui/material/IconButton";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";

const LoginPage = () => {
  return (
    <div className="login-container">
      <Header1 />
      <img src={header2} />
      <Header2 />
      <main className="main-content">
        <div className="login">
          <div className="login-form-h">
            <h3>Login</h3>
          </div>
          <form className="login-form">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
            />
            <div className="captcha-container">
              <p style={{ textAlign: "center" }}>captcha</p>
              <div className="captcha-container-1">
                <img src={captchaImage} alt="" className="captcha-img" />
                <IconButton aria-label="reset" color="primary">
                  <RestartAltIcon />
                </IconButton>
              </div>
            </div>

            <input
              type="text"
              id="captcha"
              name="captcha"
              placeholder="Enter Image Value"
            />
            <div className="log-btn">
              <button type="submit" className="login-button">
                Login
              </button>
            </div>

            <div className="forgot-links">
              <a href="/forgot-password">Forgot Password?</a>
              <a href="/forgot-username">Forgot Username?</a>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;
