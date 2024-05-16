import React from "react";
import logo from "../assets/image/founditLogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import "../component/Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container">
        <div className="logo">
          <img src={logo} alt="founditLogo.png" width={120} />
        </div>
        <div className="list">
          <ul>
            <li>
              <NavLink to={"/"}>Jobs</NavLink>
            </li>
            <li>
              <NavLink to={"Learn"}>Learn</NavLink>
            </li>
            <li>
              <NavLink to={"Network"}>Network</NavLink>
            </li>
          </ul>
        </div>
        <div className="btn">
          <button onClick={() =>navigate("/Login")}>Login</button>
          <button>Register</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
