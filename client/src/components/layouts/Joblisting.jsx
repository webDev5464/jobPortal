import React  from "react";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { PiArrowsDownUpBold } from "react-icons/pi";

const Jobslisting = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center bg-slate-500 p-20">
          <p className=" text-3xl font-bold text-white  ">Jobs Listing</p>
        </div>
        <div className="flex items-center justify-center bg-zinc-800 p-3">
          <NavLink className="text-white text-lg">Home</NavLink>
          <span className="mx-2 text-white text-lg">
            <FaAngleRight />
          </span>
          <p className="text-white text-lg">Jobs Listing</p>
        </div>

        {/* searchbar*/}

        <div className="py-20 w-[100%]">
          <div className="flex items-center justify-center">
            <div className="bg-white shadow shadow-slate-300 p-[25px]">
              <ul className="flex items-center ">
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
                    className="p-4 shadow-slate-300 shadow w-72"
                    placeholder="City,State or ZIP"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    className="p-4 shadow-slate-300 shadow w-72"
                    placeholder="Select Sector"
                  />
                </li>
                <li>
                  <div className=" w-[60px] h-[58px] flex items-center justify-center text-white  bg-primary">
                    <NavLink className="text-2xl">
                      <BsSearch />
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* dropdown*/}

        <div className="grid grid-cols-2   ">
          <div className="m-auto text-start pr-24 ">
            <div className="pb-2">
              <div className="shadow w-60">
                <div className="text-white bg-primary flex items-center justify-center p-2">
                  <button className="flex items-center text-xl " >
                    <IoMdMail className="mx-2" />
                    Email Me New Jobs
                  </button>
                </div>

                  <div className="flex flex-col px-2 ">
                  <input
                    type="text"
                    className="border px-3 my-2 w-56 py-2 "
                    placeholder="Job alert name..."
                    />
                  <input
                    type="email"
                    className="border px-3  my-2 w-56 py-2"
                    placeholder="exmple@gmail.com"
                    />
                </div>
                <ul className="flex flex-col items-start justify-center ">
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Daily</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Weekly</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Fortnightly</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Monthly</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Biannually</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Annually</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Never</label>
                  </li>
                </ul>
                <div className="flex items-center justify-center py-4">
                  <button className="border bg-primary text-white mx-4 p-2 w-full ">
                    CREATE ALERT
                  </button>
                </div>
              </div>
            </div>
                

            <div className="pb-2">
              <div className="shadow  w-60">
                <div className="w-58 cursor-pointer text-slate-500 font-bold bg-white flex items-center justify-between  px-4 p-2">
                  Locations
                  <NavLink>
                    <IoIosArrowDown className="text-black" />
                  </NavLink>
                </div>
                <div className="flex-col ml-4 py-2  ">
                  <label className="font-semibold">State</label>
                  <select className="border p-2 border-gray  w-52">
                    <option>Select State</option>
                  </select>
                </div>
                <div className="flex items-center justify-center py-4">
                  <button className="border bg-primary text-white mx-4 p-2 w-full">
                    CREATE ALERT
                  </button>
                </div>
              </div>
            </div>

            <div className="pb-2">
              <div className="shadow  w-60">
                <div className="w-58 text-slate-500 cursor-pointer font-bold bg-white flex items-center justify-between px-4 p-2">
                  Date Posted
                  <NavLink>
                    <IoIosArrowDown className="text-black" />
                  </NavLink>
                </div>
                <ul className="flex flex-col items-start justify-center py-2 mx-2">
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Last Hour</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Last 24hour</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Last Week</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Last 2 Week</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Last Month</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>All</label>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pb-2">
              <div className="py-2 shadow  w-60">
                <div className="w-58 text-slate-500 cursor-pointer font-bold bg-white flex items-center justify-between  px-4 p-2">
                  Job Type
                  <NavLink>
                    <IoIosArrowDown className="text-black" />
                  </NavLink>
                </div>
                <ul className="flex flex-col items-start justify-center py-2 mx-2">
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Freelance</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Full time</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Part time</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Temporary</label>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pb-2">
              <div className="py-2 shadow  w-60">
                <div className="w-58 text-slate-500 cursor-pointer font-bold  bg-white flex items-center justify-between px-4 p-2">
                  Sector
                  <NavLink>
                    <IoIosArrowDown className="text-black" />
                  </NavLink>
                </div>
                <ul className="flex flex-col items-start justify-center py-2 mx-2">
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>All</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Accounting / Finance</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Automotive Jobs</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Construction / Facilities</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Education Training</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Health Care</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Restaurant / Food Services</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Sales & Marketing</label>
                  </li>
                  <li className="py-1">
                    <input type="checkbox" className="mx-2" />
                    <label>Telecommunications</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="">
            <div className="py-4">
              <p className="text-xl">0 Jobs Found</p>
              <p className="text-xs text-slate-400 font-bold">
                Displayed Here: 0 Jobs
              </p>
            </div>

            <div className="flex items-center py-4">
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
            <p className="text-slate-400 py-4">
              <span className="font-bold text-black">No Record </span>
              Sorry! Does not match record with your keyword Change your filter
              keywords to re-submit OR
            </p>
            <button className="bg-primary text-white p-1 rounded-sm">
              RESET FILTERS
            </button> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobslisting;
