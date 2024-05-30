import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../Home";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";

const EmployerListing = () => {
  return (
    <>
      <div>
        <div className="bg-gray w-full h-52 text-4xl text-white text-center font-semibold pt-20">
          Employer Listing
        </div>
        <div className="bg-black text-white text-center">
          <NavLink to={"/"}>Home</NavLink>{" "}
          <RiArrowDropRightLine className=" inline-flex text-2xl" />
          Employer Listing
        </div>
      </div>
      <div className="w-full  h-[500px] border-2 mt-12">
        <div className="h-full border-2 border-slate-400 w-80 ml-10">
          <div className="h-64 w-64 border-2 ml-6 bg-white text-gray text-xl font-semibold">
            <NavLink className="flex justify-between pt-2">
              location <FaAngleDown />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerListing;
