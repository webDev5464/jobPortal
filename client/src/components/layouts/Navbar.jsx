import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
// import avtar from './nature4.jpg'
import { IoMdClose } from "react-icons/io";
import clsx from 'clsx';
// import logo2 from './logo2.jpg'
// import { FaCircleUser } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import Register from '../user/Regitser'
import Login from '../Login';


// import { FaOpencart } from "react-icons/fa6";

const Navbar = () => {

    let [regForm, setRegForm] = useState(false)
    let [logForm, setLogForm] = useState(false)

    const [isSidebarOpen, setMenu] = useState(false)
    return (
        <main>
            <nav className='flex justify-between px-8 items-center py-6'>
                <section className='flex items-center gap-4'>
                    {/* <FiMenu onClick={() =>setMenu(true)} className='text-3xl cursor-pointer'/> */}
                    <NavLink className="text-3xl "><img className='w-20 h-25 text-5xl border' src={logo2} alt="" /></NavLink>
                    {/* menu */}
                    {/* logo */}
                </section>
                {/* sidebar mobile menu*/}
                <div className={clsx("fixed h-full w-screen  bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
                    isSidebarOpen && 'translate-x-0')}>
                    <section className='text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex'>
                        <IoMdClose onClick={() => setMenu(false)} className='mt-0 mb-8 text-3xl cursor-pointer ' />
                        <NavLink to={'Home'} className="font-bold">Home</NavLink>
                        <NavLink to={'jobs'} className="font-bold">Jobs</NavLink>
                        <NavLink to={'Employers'} className="font-bold">Employers</NavLink>
                        <NavLink to={'candidate'} className="font-bold">Candidates</NavLink>
                        <NavLink to={'packages'} className="font-bold">Packages</NavLink>
                        <NavLink to={'pages'} className="font-bold">Pages</NavLink>
                    </section>
                </div>
                <section className='flex items-center gap-5'>
                    <IoMdNotifications className='text-3xl' />
                    {/* <img  className= "w-10 h-10 rounded-full" src={avtar} alt="" /> */}
                    <button onClick={() => setRegForm(!regForm)} className='py-1 px-3 bg-black text-white rounded-lg'>Register</button>
                    <button onClick={() => setLogForm(!logForm)} className='px-3 py-1 bg-black text-white rounded-lg'>Login</button>
                    {/* <NavLink><FaCircleUser className='text-3xl' /></NavLink> */}
                    <FiMenu onClick={() => setMenu(true)} className='text-4xl cursor-pointer' />
                    {/*cart icon */}
                    {/*avtar img*/}
                </section>

            </nav>
            <hr />
            {regForm && <Register setRegForm={setRegForm} />}
            {logForm && <Login setLogForm={setLogForm} />}
        </main>
    )
}

export default Navbar
