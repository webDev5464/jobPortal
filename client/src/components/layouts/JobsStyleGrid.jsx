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

      
        <div className="py-20 w-[100%] sm:w-[100%] lg:w-[100%]  ">
          <div className="flex items-center justify-center ">
            <div className="bg-white shadow shadow-slate-300 p-[25px] ">
              <ul className="flex items-center sm:grid sm:grid-cols-2 xl:grid-cols-4  ">
                <li>
                  <input
                    type="text"
                    className=" p-4 shadow-slate-300 shadow w-72 "
                    placeholder="Job Title,Keywords ,or Phrase"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    className="p-4 shadow-slate-300 shadow w-72 "
                    placeholder="City,State or ZIP"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    className="p-4 shadow-slate-300 shadow w-72 "
                    placeholder="Select Sector"
                  />
                </li>
                <li>
                  <div className=" w-[60px] h-[58px]  flex items-center justify-center text-white  bg-primary sm:w-full lg:w-[6   0px]">
                    <NavLink className="text-2xl">
                      <BsSearch />
                    </NavLink>
                  </div>
                </li>
              </ul>
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
