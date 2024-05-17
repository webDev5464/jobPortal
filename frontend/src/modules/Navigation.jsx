import React from "react";
import navigationlogo from "../assets/image/JobPortalLogo.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <section className="fixed top-0 w-full bg-white">
      <div className="flex  justify-center items-center">
        <div className="flex flex-1">
          <img
            src={navigationlogo}
            className="w-[150px] "
            alt="founditLogo.png"
          />
        </div>
        <div className="flex flex-1  ">
          <ul className="flex ">
            <li className="mx-2">
              <NavLink>Jobs</NavLink>
            </li>
            <li className="mx-2">
              <NavLink>Prep</NavLink>
            </li>
            <li className="mx-2">
              <NavLink>Learn</NavLink>
            </li>
            <li className="mx-2">
              <NavLink>Network</NavLink>
            </li>
            <li className="mx-2">
              <NavLink>Career Fair</NavLink>
            </li>
          </ul>
        </div>
        <div className="m-[10px] ">
          <button className=" mx-1 p-1 w-20 border-none bg-blue-500 font-bold text-white rounded-2xl">
            Login
          </button>
          <button className="mx-1 p-1 w-20 border-none bg-orange-500 font-bold text-white rounded-2xl">
            Register
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
