import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

import E404Page from "../pages/E404Page";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Loader from "../components/Loader";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Header2 from "../components/Header2";
import Header1 from "../components/Header1";
import header2 from "../assets/header2.png";

const AppRoutes = () => {
  const { loader } = useContext(GlobalContext);

  return (
    <Router>
      {/* Loader Component */}
      {loader && <Loader />}

      {/* App Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header1 />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "100vh",
                }}
              >
                <img
                  src={header2}
                  alt="Header"
                />
              </div>

              <Header2 />
              <HomePage />
            </>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* 404 Page */}
        <Route path="*" element={<E404Page />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
