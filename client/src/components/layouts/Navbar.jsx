import React, { useState } from 'react'
import logo3 from './logo.png'
import { NavLink } from 'react-router-dom'
import { IoIosNotificationsOutline } from "react-icons/io";
import Register from '../user/Regitser'
import Login from '../Login';
import { useSelector } from 'react-redux';



const Navbar = () => {
  let user = useSelector((state) => state.auth)
  let [regForm, setRegForm] = useState(false)
  let [logForm, setLogForm] = useState(false)
  console.log("hii")
  return (
    <div >
      <div className='flex flex-1 items-center justify-between pt-5 pb-5'>
        <div className='flex flex-1 ml-9'>

          <img className='w-44 h-55' src={logo3} alt="" />~
        </div>
        <div className='flex flex-1'>
          <ul className='flex items-center justify-around font-semibold li-none '>
            <li clas><NavLink to={'/'} className='text-primary mx-3 '>Home</NavLink>
              {/* <ul className='justify-center items-center border p-2 mt- bg-gray underlinedecoration-1'>
                <li><NavLink >New</NavLink></li>
                <li><NavLink >Modern</NavLink></li>
                <li><NavLink>Fancy</NavLink></li>
                <li><NavLink>Classic</NavLink></li>
                <li><NavLink>Transparent</NavLink></li>
              </ul> */}
            </li>
            <li className='hover:text-primary duration-300 mx-3'><NavLink to={'jobs'}>Jobs</NavLink></li>
            <li className='hover:text-primary duration-300 mx-3'><NavLink to={'Employer'}>Employers</NavLink></li>
            <li className='hover:text-primary duration-300 mx-3'><NavLink to={'candidate'}>Candidates</NavLink></li>
            <li className='hover:text-primary duration-300 mx-3'><NavLink to={'packages'}>Packages</NavLink></li>
            <li className='hover:text-primary duration-300 mx-3'><NavLink to={'pages'}>Pages</NavLink></li>
          </ul>
        </div>
        <div className='flex  flex-1 items-center justify-center font-semibold'>
          <IoIosNotificationsOutline className=' text-2xl mx-2 ' />

          {user.isAuth ? <div>
            <NavLink to={'/'} className=' text-primary hover:text-black duration-300'>My Account<span className='m-1'></span></NavLink>
          </div> : <div>
            <NavLink onClick={() => setRegForm(!regForm)} className=' text-primary hover:text-black duration-300'>Register<span className='border-r-2 border-slate-200 m-1'></span></NavLink>
            <NavLink onClick={() => setLogForm(!logForm)} className=' text-primary hover:text-black duration-300 '>Sign In</NavLink>
            <button className=' m-2 p-2 bg-primary text-white  rounded-sm hover:bg-black'>Post New Jobs</button>
          </div>}
        </div>

        {/* <div>
            <ul className='flex justify-between items-center gap-4 font-semibold
            mt-6 ml-24  hover: color-primary transition-0.5s'>
              <li ><NavLink to={'/'} className='text-primary '>Home</NavLink></li> 
              <li className='hover:text-primary duration-300'><NavLink to={'jobs'}>Jobs</NavLink></li> 
              <li className='hover:text-primary duration-300'><NavLink to={'Employer'}>Employers</NavLink></li> 
              <li className='hover:text-primary duration-300'><NavLink to={'candidate'}>Candidates</NavLink></li> 
              <li className='hover:text-primary duration-300'><NavLink to={'packages'}>Packages</NavLink></li> 
              <li className='hover:text-primary duration-300'><NavLink to={'pages'}>Pages</NavLink></li> 
            </ul>
        </div> */}

        {/* <div className='flex  items-center justify-center font-semibold   gap-3 text-1xl ml-60 mt-7'>
        <IoIosNotificationsOutline className=' text-2xl ' />
        <NavLink className='text-blue-700'>Register</NavLink>
        <NavLink className='text-blue-700 border-x- px-2'>Sign In</NavLink>
        <div><button className='px-1 bg-primary text-white -mt-1 py-1 rounded-sm '>Post New Jobs</button>
        </div>
        
        </div> */}
      </div>
      {(regForm && !user.isAuth) && <Register setRegForm={setRegForm} />}
      {(logForm && !user.isAuth) && <Login setLogForm={setLogForm} />}
    </div>
  )
}

export default Navbar
