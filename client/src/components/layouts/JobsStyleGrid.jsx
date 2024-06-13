import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { PiArrowsDownUpBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import Footer from "../user/Footer";
import { IoLogoGoogle } from "react-icons/io";

const JobsStyleGrid = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center bg-slate-500 p-20">
          <p className=" text-3xl font-bold text-white  ">Jobs Style Grid</p>
        </div>
        <div className="flex items-center justify-center bg-zinc-800 p-3">
          <NavLink className="text-white text-lg">Home</NavLink>
          <span className="mx-2 text-white text-lg">
            <FaAngleRight />
          </span>
          <p className="text-white text-lg">Jobs Style Grid</p>
        </div>

        {/* searchbar*/}

        <div className="px-20 qs:px-5 pt-20">
          <div className="container mx-auto shadow shadow-slate-300 ">
            <div className="flex items-center justify-center w-full py-4 qs:flex-wrap sm:flex-wrap md:flex-wrap">
              <div>
                <input
                  type="text"
                  className=" p-4 shadow-slate-300 shadow w-72  "
                  placeholder="Job Title,Keywords ,or Phrase"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="p-4 shadow-slate-300 shadow w-72  "
                  placeholder="City,State or ZIP"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="p-4 shadow-slate-300 shadow w-72  "
                  placeholder="Select Sector"
                />
              </div>
              <div className=" w-[50px] h-[56px]  flex items-center justify-center text-white  bg-primary   md:w-72 ">
                <NavLink className="text-2xl">
                  <BsSearch />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 pb-20 ">
          <div className="m-auto">
            <div className="py-4">
              <p className="text-xl">0 Jobs Found</p>
              <p className="text-xs text-slate-400 font-bold">
                Displayed Here: 0 Jobs
              </p>
            </div>
            <p className="text-slate-400 w-80">
              <p className="font-bold text-black">No Record </p>
              Sorry! Does not match record with your keyword
            </p>
            <p className="text-slate-400">
              Change your filter keywords to re-submit OR
            </p>
            <div className="py-2">
              <button className="bg-primary text-white p-1 rounded-sm ">
                RESET FILTERS
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-cente py-4">
              <div className="w-58 text-white bg-white flex items-center ">
                <NavLink className="px-2">
                  <PiArrowsDownUpBold className="text-slate-400 " />
                </NavLink>
                <p className=" text-xs text-blue-600 ">Most Recent</p>
                <span className="px-4">
                  <NavLink>
                    <IoIosArrowDown className="text-black" />
                  </NavLink>
                </span>
              </div>
              <div className="w-58 text-white bg-white flex items-center ">
                <NavLink className="px-2">
                  <PiArrowsDownUpBold className="text-slate-400 " />
                </NavLink>
                <p className=" text-xs text-blue-600 ">Records Per Page</p>
                <span className="px-4">
                  <NavLink>
                    <IoIosArrowDown className="text-black" />
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

   
      <Footer />
    </>
  );
};

export default JobsStyleGrid;
