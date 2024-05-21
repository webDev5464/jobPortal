import React from 'react'
import Navbar from './layouts/Navbar'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";

const Mainpage = () => {
    return (
        <>
            <Navbar />
            <section>
                <div id='top-contain' className='flex flex-col justify-center items-center bg-sky-200 h-[500px] gap-10' >
                    <h1 className='font-bold text-[45px]'>Aim Higher. Reach Farther. Dream Bigger.</h1>
                    <p>A better career is out there. We'll help you find it. We're your first step to becoming everything you want to be.</p>
                    <div id='search-bar' className='flex justify-center items-center'>

                        <div >
                            <input className="placeholder:italic placeholder:text-slate-400  bg-white w-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-[50px] w-[300px]" placeholder="Job Title, Keywords or Phrase" type="text" name="search" />
                        </div>

                        <div><input className="placeholder:italic placeholder:text-slate-400  bg-white w-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-[50px] w-[300px]" placeholder="City, State or ZIP" type="text" name="search" /></div>

                        <div><input className="placeholder:italic placeholder:text-slate-400  bg-white w-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-[50px] w-[300px]" placeholder="Select Sector" type="text" name="search" /></div>

                        <div className="w-[50px] h-[50px] border border-yellow-400 border-4 justify-center flex items-center text-[25px]">{<FaMagnifyingGlass />}</div>
                    </div>
                    <div id='upload-hiring' className='flex justify-center items-center gap-3'>
                        <div className='flex  items-center border-2 p-2 rounded-sm text-white border-black bg-black/65'><span className='text-[29px]'>{<FaRegArrowAltCircleUp />}</span><p className='text-xl'>Upload Your Resume</p></div>
                        <div className='flex  items-center border-2 p-2 rounded-sm text-white border-black bg-black/65 '><span className='text-[30px]'>{<PiBagFill />}</span ><p className='text-xl'>Hiring? Post a job for free</p></div>
                    </div>
                </div>
                <div id='counting-analyst' className='flex justify-evenly items-center '>
                    <div className='h-[70px] w-[300px] text-2xl  border-r-2' >123,012 <p className='w-fit'>Jobs Added</p></div>
                    <div className='h-[70px] w-[300px] text-2xl border-r-2'>187,432 <p className='w-fit'>Active Resumes</p></div>
                    <div className='h-[70px] w-[300px] text-2xl '>140,312 <p className='w-fit'>Positions Matched</p></div>
                </div>

                <div id='icon-list' className='flex flex-col justify-center items-center text-center p-14 bg-yellow-200'>
                    <h2 className='font-bold text-[25px]'>POPULAR JOB CATEGORIES</h2>
                    <p>A better career is out there. We'll help you find it. We're your first step to becoming everything you want to be.</p>
                    <div id='symbolic-grid' className='grid  grid-cols-4 gap-10 items-center m-10'>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] bg-blue-600'></div>
                            <div>
                                SALES & MARKETING
                            </div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] bg-blue-600'></div>
                            <div>
                                AUTOMOBILE JOBS
                            </div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] bg-blue-600'></div>
                            <div>
                                CINSTRUCTION / FACILITIES
                            </div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] bg-blue-600'></div>
                            <div>ACCOUNTING / FINANCE</div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] bg-blue-600'></div>
                            <div>TELECOMMUNICATION</div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] bg-blue-600'></div>
                            <div>EDUCATION TRAINING</div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] bg-blue-600'></div>
                            <div>RESTAURANT / FOOD SERVICE</div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] bg-blue-600'></div>
                            <div>HEALTH CARE</div>
                            <div>(0 Vacancies)</div>
                        </div>
                    </div>
                    <div className='bg-sky-600 p-2 rounded-sm font-bold text-white'>BROWSE ALL SECTORS</div>
                </div>

                <div id='search-job-contain' className='flex justify-evenly items-center bg-sky-300 h-[600px] p-[50px] '>
                    <div className='w-fit '>
                        <div className='font-bold text-[25px]'>MILLIONS OF JOBS.</div>
                        <div className='font-bold text-[25px]'> FIND THE ONE THAT’S RIGHT FOR YOU.</div>
                        <p className='w-[500px] mt-3'>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.</p>
                        <div className='bg-orange-300 p-2 rounded-md w-fit mt-5 text-white font-bold'>SEARCH JOBS</div>
                    </div>
                    <div className='bg-pink-400 h-[400px] w-[500px]'></div>
                </div>

                <div id='reset-contain' className='flex flex-col justify-center items-center bg-amber-300 h-[400px]'>
                    <div className='font-bold text-[25px]'>FEATURED JOBS LISTINGS</div>
                    <p>A better career is out there. We'll help you find it. We're your first step to becoming everything you want to be.

                    </p>
                    <div>
                        <div className='flex'><span className='font-bold'>No Record,</span>
                            <p className='ml-2'>Sorry!  Does not match record with your keyword
                                Change your filter keywords to re-submit
                                OR</p></div>
                        <div className='bg-red-800 text-white p-2 rounded-md w-fit mt-5 font-bold'>RESET FILTERS</div>

                    </div>

                </div>

                <div id='swipe-contain' className='h-[400px] bg-emerald-300 flex'>
                    <div className='bg-amber-700 h-[400px] w-[700px]'></div>

                    <div className='flex flex-col justify-center items-center  ml-[100px] p-10  bg-slate-300'>
                        <p className='w-[500px] text-3xl'>I just got a job that I applied for via career-fy! I used the site all the time during my job hunt.</p>
                        <div className='border-[1px] w-[400px] mt-4'></div>
                        <div className='flex flex-col justify-items-end text-right  w-[400px] mt-4'>
                        <div className='font-bold'>Richard Anderson</div>
                        <div className='text-zinc-500'>Nevada, USA</div>
                        </div>

                    </div>
                </div>


            <div id='blog-contain' className='bg-indigo-400 h-[600px] flex flex-col justify-center items-center'>
                <div className='font-bold text-3xl'>FROM OUR BLOG</div>
                <p>A better career is out there. We'll help you find it. We're your first step to becoming everything you want to be.</p>

                <div className='flex justify-evenly items-center w-full p-10' >

                    <div className='w-[300px] h-[400px] bg-orange-300'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className='flex justify-center items-center bg-sky-300 text-white p-[10px] font-bold rounded-md w-[220px] border-2 flex '>READ ARTICLES</div>
                    </div>
                    <div className='w-[300px] h-[400px] bg-orange-300'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className='flex justify-center items-center bg-sky-300 text-white p-[10px] font-bold rounded-md w-[220px] border-2 '>READ ARTICLES</div>
                    </div>
                    <div className='w-[300px] h-[400px] bg-orange-300'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className='flex justify-center items-center bg-sky-300 text-white p-[10px] font-bold rounded-md w-[220px] border-2 flex '>READ ARTICLES</div>
                    </div>

                </div>

            </div>

            </section>


            
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

export default Mainpage
