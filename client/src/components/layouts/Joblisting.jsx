import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { PiArrowsDownUpBold } from "react-icons/pi";

const Jobslisting = () => {
  const [drop, setDrop] = useState(false);

  function clickHandle(){
    setDrop(!drop )
  }
  
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
                  <button className="flex items-center text-xl " onClick={clickHandle}>
                    <IoMdMail className="mx-2" />
                    Email Me New Jobs
                  </button>
                </div>
                {(drop && 
                <>
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
  
                <div>
                  <p className="mx-2 ">
                    <input
                      type="radio"
                      name="position"
                      id="daily"
                      value="daily"
                      className="mx-2"
                      />
                    <label htmlFor="daily">Daily</label>
                    <br />
                    <input
                      type="radio"
                      name="position"
                      value="Weekly"
                      id="weekly"
                      className="mx-2"
                    />
                    <label htmlFor="Weekly">Weekly</label>
                    <br />
                    <input
                      type="radio"
                      name="position"
                      value="Fortnightly"
                      id="fortnightly"
                      className="mx-2"
                    />
                    <label htmlFor="Fortnightly">Fortnightly</label>
                    <br />
                    <input
                      type="radio"
                      name="position"
                      id="monthly"
                      value="Monthly"
                      className="mx-2"
                    />
                    <label htmlFor="Monthly">Monthly</label>
                    <br />
                    <input
                      type="radio"
                      name="position"
                      id="biannually"
                      value="Biannually"
                      className="mx-2"
                    />
                    <label htmlFor="Biannually">Biannually</label>
                    <br />
                    <input
                      type="radio"
                      name="position"
                      id="annually"
                      value="Annually"
                      className="mx-2"
                    />
                    <label htmlFor="Annually">Annually</label>
                    <br />
                    <input
                      type="radio"
                      name="position"
                      id="never"
                      value="Never"
                      className="mx-2"
                    />
                    <label htmlFor="Never">Never</label>
                  </p>
                </div>

                <div className="flex items-center justify-center py-4">
                  <button className="border bg-primary text-white mx-4 p-2 w-full ">
                    CREATE ALERT
                  </button>
                </div>
                </>
                )}
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
                <div>
                  <p className="">
                    <input
                      type="radio"
                      name="dateposted"
                      id="Last Hour"
                      value="Last Hour"
                      className="mx-2"
                    />
                    <label>Last Hour</label>
                    <br />
                    <input
                      type="radio"
                      name="dateposted"
                      value="Last 24hour"
                      id="Last 24hour"
                      className="mx-2"
                    />
                    <label>Last 24hour</label>
                    <br />
                    <input
                      type="radio"
                      name="dateposted"
                      value="Last Week"
                      id="Last Week"
                      className="mx-2"
                    />
                    <label>Last Week</label>
                    <br />
                    <input
                      type="radio"
                      name="dateposted"
                      id="Last 2 Week"
                      value="Last 2 Week"
                      className="mx-2"
                    />
                    <label>Last 2 Week</label>
                    <br />
                    <input
                      type="radio"
                      name="dateposted"
                      id="Last Month"
                      value="Last Month"
                      className="mx-2"
                    />
                    <label>Last Month</label>
                    <br />
                    <input
                      type="radio"
                      name="dateposted"
                      id="All"
                      value="All"
                      className="mx-2"
                    />
                    <label>All</label>
                  </p>
                </div>
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
                <div>
                  <p className="">
                    <input
                      type="radio"
                      name="Jobtype"
                      id="Freelance"
                      value="Freelance"
                      className="mx-2"
                    />
                    <label>Freelance</label>
                    <br />
                    <input
                      type="radio"
                      name="Jobtype"
                      value="Full time"
                      id="Full time"
                      className="mx-2"
                    />
                    <label>Full time</label>
                    <br />
                    <input
                      type="radio"
                      name="Jobtype"
                      value="Part time"
                      id="Part time"
                      className="mx-2"
                    />
                    <label>Part time</label>
                    <br />
                    <input
                      type="radio"
                      name="Jobtype"
                      id="Temporary"
                      value="Temporary"
                      className="mx-2"
                    />
                    <label>Temporary</label>
                  </p>
                </div>
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
                <div>
                  <p className="mx-2">
                    <input
                      type="radio"
                      name="Sector"
                      id="All"
                      value="All"
                      className="mx-2"
                    />
                    <label>All</label>
                    <br />
                    <input
                      type="radio"
                      name="Sector"
                      value="Accounting / Finance"
                      id="Accounting / Finance"
                      className="mx-2"
                    />
                    <label>Accounting / Finance</label>
                    <br />
                    <input
                      type="radio"
                      name="Sector"
                      value="Automotive Jobs"
                      id="Automotive Jobs"
                      className="mx-2"
                    />
                    <label>Automotive Jobs</label>
                    <br />
                    <input
                      type="radio"
                      name="Sector"
                      id="Construction / Facilities"
                      value="Construction / Facilities"
                      className="mx-2"
                    />
                    <label>Construction / Facilities</label>
                    <br />
                    <input
                      type="radio"
                      name="Sector"
                      id="Education Training"
                      value="Education Training"
                      className="mx-2"
                    />
                    <label>Education Training</label>
                    <br />
                    <input
                      type="radio"
                      name="Sector"
                      id="Health Care"
                      value="Health Care"
                      className="mx-2"
                    />
                    <label>Health Care</label>
                    <br />
                    <input
                      type="radio"
                      name="Sector"
                      id="Restaurant / Food Services"
                      value="Restaurant / Food Services"
                      className="mx-2"
                    />
                    <label>Restaurant / Food Services</label>
                    <br />
                    <input
                      type="radio"
                      name="Sector"
                      id="Sales & Marketing"
                      value="Sales & Marketing"
                      className="mx-2"
                    />
                    <label>Sales & Marketing</label>
                    <br />
                    <input
                      type="radio"
                      name="Sector"
                      id="Telecommunications"
                      value="Telecommunications"
                      className="mx-2"
                    />
                    <label>Telecommunications</label>
                  </p>
                </div>
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
